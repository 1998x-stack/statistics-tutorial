#!/usr/bin/env node
'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {pathToFileURL}=require('node:url');
const {chromium}=require('playwright');
const root=path.resolve(__dirname,'..');
const out=path.join(root,'qa/browser');fs.mkdirSync(out,{recursive:true});
(async()=>{
 const browser=await chromium.launch({headless:true});
 const report=[];
 try{
  for(const file of ['index.html','chapters/01.html','chapters/02.html','chapters/03.html']){
   for(const width of [1440,768,390,360]){
    const context=await browser.newContext({viewport:{width,height:900},deviceScaleFactor:1,reducedMotion:'reduce'});
    await context.route(/^https?:/,route=>route.abort());
    const page=await context.newPage(),errors=[];
    page.on('pageerror',err=>errors.push(err.message));
    page.on('console',msg=>{if(msg.type()==='error')errors.push(msg.text())});
    await page.goto(pathToFileURL(path.join(root,file)).href,{waitUntil:'load'});
    const state=await page.evaluate(()=>({
     viewport:window.innerWidth,documentWidth:document.documentElement.scrollWidth,
     h1:document.querySelectorAll('h1').length,
     images:[...document.querySelectorAll('img')].map(x=>({src:x.getAttribute('src'),width:x.naturalWidth,height:x.naturalHeight})),
     equations:[...document.querySelectorAll('math')].map(x=>({namespace:x.namespaceURI,width:x.getBoundingClientRect().width,height:x.getBoundingClientRect().height})),
     fractions:[...document.querySelectorAll('mfrac')].map(x=>({numerator:x.firstElementChild?.getBoundingClientRect().top,denominator:x.lastElementChild?.getBoundingClientRect().top}))
    }));
    assert.equal(state.h1,1,`${file} ${width}: expected one h1`);
    assert.ok(state.documentWidth<=state.viewport+1,`${file} ${width}: page overflow ${state.documentWidth} > ${state.viewport}`);
    for(const img of state.images)assert.ok(img.width>0&&img.height>0,`${file} ${width}: missing image ${img.src}`);
    for(const eq of state.equations){assert.equal(eq.namespace,'http://www.w3.org/1998/Math/MathML');assert.ok(eq.width>0&&eq.height>0,`${file} ${width}: invisible math`)}
    for(const frac of state.fractions)assert.ok(frac.numerator<frac.denominator,`${file} ${width}: fraction layout`);
    if(file==='index.html'){
     assert.equal(await page.locator('.lesson').count(),28);
     await page.locator('#lesson-search').fill('贝叶斯');
     let visible=await page.locator('.lesson:visible').count();assert.ok(visible>0&&visible<28);
     await page.locator('#lesson-search').fill('');
    }
    if(file==='chapters/01.html'){
     await page.locator('#yes').evaluate(x=>{x.value='12';x.dispatchEvent(new Event('input',{bubbles:true}))});
     assert.match(await page.locator('#rate').innerText(),/100.0%/);
    }
    if(file==='chapters/02.html'){
     await page.locator('#variable').selectOption('time');
     assert.match(await page.locator('#method').innerText(),/分钟/);
    }
    if(file==='chapters/03.html'){
     await page.locator('#last').evaluate(x=>{x.value='18';x.dispatchEvent(new Event('input',{bubbles:true}))});
     assert.match(await page.locator('#summary').innerText(),/均值：6.00/);
    }
    await page.screenshot({path:path.join(out,`${file.replaceAll('/','-').replace('.html','')}-${width}.png`),fullPage:true});
    if(width===1440){await page.emulateMedia({media:'print'});let fig=await page.locator('figure').count();if(fig)assert.ok(await page.locator('figure').first().isVisible());await page.emulateMedia({media:'screen'})}
    assert.deepEqual(errors,[],`${file} ${width}: browser errors`);
    report.push({file,width,images:state.images.length,math:state.equations.length,documentWidth:state.documentWidth,errors});
    await context.close();
   }
  }
 }finally{await browser.close()}
 fs.writeFileSync(path.join(out,'report.json'),JSON.stringify(report,null,2));
 console.log(`browser QA passed: ${report.length} viewport/page combinations; screenshots and report saved`);
})().catch(err=>{console.error(err);process.exitCode=1});
