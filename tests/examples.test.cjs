#!/usr/bin/env node
'use strict';
const assert=require('node:assert/strict');
const sum=a=>a.reduce((x,y)=>x+y,0),mean=a=>sum(a)/a.length,median=a=>{let x=[...a].sort((x,y)=>x-y);return x.length%2?x[(x.length-1)/2]:(x[x.length/2-1]+x[x.length/2])/2},variance=a=>sum(a.map(x=>(x-mean(a))**2))/(a.length-1);
const x=[2,3,3,4,8],y=[2,3,3,4,18];
assert.equal(mean(x),4);assert.equal(median(x),3);assert.equal(variance(x),5.5);assert.equal(sum(x.map(v=>(v-4)**2)),22);assert.equal(22/5,4.4);assert.equal(mean(y),6);assert.equal(median(y),3);assert.equal(variance(y),45.5);assert.equal(9/12,0.75);assert.equal(12/20,0.6);assert.equal(10/10,1);assert.equal(mean([12,35,20,25]),23);
console.log('worked numeric examples checked');

// Additional audited teaching examples, chapters 04–08.
const q=[1,2,3,3,4,5,6,7,18];assert.equal(mean(q),49/9);assert.equal((6+7)/2-(2+3)/2,4);assert.equal(6.5+1.5*4,12.5);
const hist=[1,1,2,2,2,3,3,4,4,5,8,9];
const histCount=(w)=>Array.from({length:Math.ceil(10/w)},(_,k)=>hist.filter(v=>v>=k*w&&v<(k+1)*w).length);
assert.deepEqual(histCount(2),[2,5,3,0,2]);assert.deepEqual(histCount(5),[9,3]);
assert.equal((90/(90+495)).toFixed(6),'0.153846');assert.equal((900/(900+450)).toFixed(6),'0.666667');
const comb=(n,k)=>{let c=1;for(let i=1;i<=k;i++)c=c*(n-i+1)/i;return c};
const binomial=(p)=>Array.from({length:3},(_,i)=>i+3).reduce((a,k)=>a+comb(5,k)*p**k*(1-p)**(5-k),0);
assert.ok(Math.abs(binomial(.4)-.31744)<1e-12);assert.ok(Math.abs(Math.exp(-2)*2**2/2-.2706705665)<1e-9);
const pop=[0,2,4,6],means=pop.flatMap(a=>pop.map(b=>(a+b)/2));
assert.deepEqual(Array.from({length:7},(_,k)=>means.filter(v=>v===k).length),[1,2,3,4,3,2,1]);
assert.equal(mean(means),3);assert.equal(means.reduce((a,x)=>a+(x-3)**2,0)/means.length,2.5);
const wout=pop.flatMap((a,i)=>pop.filter((b,j)=>j!==i).map(b=>(a+b)/2));
assert.ok(Math.abs(wout.reduce((a,x)=>a+(x-3)**2,0)/wout.length-5/3)<1e-12);
console.log('extended worked examples: chapters 04–08 passed');
