(function(){
"use strict";
var catalog=window.STATISTICS_COURSE_CATALOG;
if(!catalog)return;
var root=document.body.dataset.root||".";
function byId(id){return document.getElementById(id);}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}
function renderNavigation(){
 var nav=byId("courseNav");if(!nav)return;
 var active=document.querySelector("[data-chapter]")?document.querySelector("[data-chapter]").dataset.chapter:"";
 nav.innerHTML=catalog.categories.map(function(cat){
  var items=catalog.chapters.filter(function(ch){return ch.categoryId===cat.id;});
  return '<section class="nav-group"><h2 class="nav-group-title">'+esc(cat.shortTitle)+'</h2><ul>'+items.map(function(ch){
   return '<li><a href="'+root+'/'+ch.file+'" '+(ch.num===active?'aria-current="page"':'')+'><span>'+ch.num+'</span> '+esc(ch.title)+'</a></li>';
  }).join("")+'</ul></section>';
 }).join("");
}
function renderCatalog(){
 var host=byId("courseCatalog");if(!host)return;
 var search=byId("courseSearch"),filter=byId("categoryFilter"),status=byId("catalogStatus");
 filter.innerHTML='<option value="">全部知识域</option>'+catalog.categories.map(function(c){return '<option value="'+c.id+'">'+esc(c.title)+'</option>';}).join("");
 function draw(){
  var q=(search.value||"").trim().toLowerCase(),cat=filter.value,shown=0;
  host.innerHTML=catalog.categories.filter(function(c){return !cat||c.id===cat;}).map(function(c){
   var items=catalog.chapters.filter(function(ch){return ch.categoryId===c.id;}).filter(function(ch){
    return !q||[ch.num,ch.title,ch.summary].concat(ch.topics,ch.tags).join(" ").toLowerCase().indexOf(q)>=0;
   });
   shown+=items.length;if(!items.length)return "";
   return '<section class="catalog-category"><div class="category-heading"><h2>'+esc(c.title)+'</h2><p>'+esc(c.description)+'</p></div><div class="course-grid">'+items.map(function(ch){
    return '<article class="course-card"><div class="course-card-top"><span class="course-card-num">CHAPTER '+ch.num+'</span><span class="course-card-level">'+esc(ch.level)+'</span></div><h3>'+esc(ch.title)+'</h3><p>'+esc(ch.summary)+'</p><div class="course-tags">'+ch.tags.slice(0,4).map(function(t){return '<span>'+esc(t)+'</span>';}).join("")+'</div><a class="course-card-link" href="'+ch.file+'">开始学习 <span aria-hidden="true">→</span></a></article>';
   }).join("")+'</div></section>';
  }).join("");
  status.textContent='显示 '+shown+' / '+catalog.chapterCount+' 个章节';
  if(!shown)host.innerHTML='<p class="empty-state">没有找到匹配的章节。试试更短的关键词。</p>';
 }
 search.addEventListener("input",draw);filter.addEventListener("change",draw);draw();
}
function normalCDF(x){
 var t=1/(1+.2316419*Math.abs(x)),d=.3989423*Math.exp(-x*x/2);
 var p=1-d*t*(.3193815+t*(-.3565638+t*(1.781478+t*(-1.821256+t*1.330274))));
 return x>=0?p:1-p;
}
var LABS={
"01":{controls:[{key:"n",label:"样本量 n",min:5,max:100,step:5,value:25}],calc:function(v){var se=6/Math.sqrt(v.n);return{summary:"样本均值标准误约为 "+se.toFixed(2),detail:"在总体标准差固定为 6 的简化示例中，n 增加会让抽样波动按 1/√n 缩小。",metric:100-se*10};}},
"02":{controls:[{key:"scale",label:"选择测量尺度",type:"select",value:"有序",options:["名义","有序","等距","等比"]}],calc:function(v){var m={"名义":"计数、比例、众数；没有天然顺序。","有序":"可排序，通常可报告中位数和分位数；相邻等级间距未必相等。","等距":"差值有意义，可计算均值和标准差；零点不代表完全没有。","等比":"有绝对零点，比例关系有意义，可进行乘除运算。"};return{summary:v.scale+"尺度：",detail:m[v.scale],metric:["名义","有序","等距","等比"].indexOf(v.scale)*25+25};}},
"03":{controls:[{key:"x",label:"CEO 月薪（千元）",min:20,max:300,step:10,value:200}],calc:function(v){var a=[15,18,20,22,v.x].sort(function(x,y){return x-y;}),mean=a.reduce(function(s,x){return s+x;},0)/5,med=a[2];return{summary:"均值 "+mean.toFixed(1)+" 千元；中位数 "+med.toFixed(1)+" 千元",detail:"改变一个极端值会明显移动均值，但这组数据的中位数仍是 "+med+"。",metric:Math.min(100,mean/3)};}},
"04":{controls:[{key:"x",label:"观测值 x",min:40,max:100,step:1,value:85}],calc:function(v){var z=(v.x-70)/10;return{summary:"z = "+z.toFixed(2),detail:z>0?"该观测值高于均值 "+z.toFixed(2)+" 个标准差。":z<0?"该观测值低于均值 "+Math.abs(z).toFixed(2)+" 个标准差。":"该观测值恰好位于均值。",metric:Math.min(100,Math.abs(z)*25)};}},
"05":{controls:[{key:"kind",label:"变量与问题",type:"select",value:"连续变量分布",options:["连续变量分布","两个连续变量关系","类别频数比较","时间变化趋势"]}],calc:function(v){var m={"连续变量分布":"优先考虑直方图或密度图；同时查看样本量、分箱和偏态。","两个连续变量关系":"先画散点图，检查线性、非线性、分群与离群点。","类别频数比较":"使用条形图；比较比例时要标明分母。","时间变化趋势":"使用时间序列折线图，注意时间间隔与季节性。"};return{summary:"推荐图表思路",detail:m[v.kind],metric:65};}},
"06":{controls:[{key:"prev",label:"基准患病率（%）",min:.1,max:20,step:.1,value:1}],calc:function(v){var p=v.prev/100,ppv=.95*p/(.95*p+.05*(1-p));return{summary:"阳性预测值约 "+(ppv*100).toFixed(1)+"%",detail:"假设灵敏度和特异度均为 95%。基准率较低时，阳性结果中假阳性的占比仍可能很高。",metric:ppv*100};}},
"07":{controls:[{key:"n",label:"试验次数 n",min:1,max:30,step:1,value:10},{key:"p",label:"单次成功概率 p",min:.1,max:.9,step:.05,value:.5}],calc:function(v){var mean=v.n*v.p,variance=v.n*v.p*(1-v.p),p0=Math.pow(1-v.p,v.n);return{summary:"期望成功次数 "+mean.toFixed(2)+"；方差 "+variance.toFixed(2),detail:"恰好 0 次成功的概率约 "+(p0*100).toFixed(2)+"%。",metric:Math.min(100,mean*5)};}},
"08":{controls:[{key:"n",label:"样本量 n",min:5,max:200,step:5,value:30}],calc:function(v){var se=6/Math.sqrt(v.n);return{summary:"标准误约 "+se.toFixed(2),detail:"标准误衡量样本均值在重复抽样中的波动；它不是原始数据的标准差。",metric:100-se*12};}},
"09":{controls:[{key:"n",label:"样本量 n",min:10,max:500,step:10,value:100}],calc:function(v){var h=1.96*10/Math.sqrt(v.n);return{summary:"95% 正态近似区间半宽约 "+h.toFixed(2),detail:"示例假设总体标准差已知且抽样条件合适。样本量扩大 4 倍，区间半宽约缩小一半。",metric:100-h*4};}},
"10":{controls:[{key:"z",label:"观测 z 统计量绝对值",min:0,max:4,step:.1,value:2}],calc:function(v){var p=2*(1-normalCDF(v.z));return{summary:"双侧 p 值约 "+p.toFixed(4),detail:"这是标准正态分布下的教学近似。p 值以零假设及模型假设为条件，不是零假设为真的概率。",metric:Math.max(0,100-p*1000)};}},
"11":{controls:[{key:"case",label:"选择研究问题",type:"select",value:"两组独立均值",options:["单样本均值","两组独立均值","同一对象前后测量","分类变量独立性","三组及以上均值"]}],calc:function(v){var m={"单样本均值":"单样本 t 检验；总体标准差已知且条件合适时可考虑 z 检验。","两组独立均值":"独立样本 t 检验；方差不齐时优先考虑 Welch t 检验。","同一对象前后测量":"配对 t 检验，分析每个对象的差值。","分类变量独立性":"列联表卡方检验；稀疏数据可考虑精确检验。","三组及以上均值":"单因素 ANOVA；方差不齐时考虑 Welch ANOVA。"};return{summary:"方法建议",detail:m[v.case],metric:70};}},
"12":{controls:[{key:"n",label:"每组样本量 n",min:20,max:500,step:10,value:100}],calc:function(v){var ncp=.5*Math.sqrt(v.n/2),power=normalCDF(ncp-1.96)+normalCDF(-ncp-1.96);return{summary:"近似功效 "+(power*100).toFixed(1)+"%",detail:"正态近似示例：标准化效应量 d=0.5、双侧 α=0.05、两组等样本量。正式设计请用匹配的功效分析方法。",metric:power*100};}},
"13":{controls:[{key:"r",label:"相关系数 r",min:-1,max:1,step:.05,value:.65}],calc:function(v){var a=Math.abs(v.r),dir=v.r>0?"正向":v.r<0?"负向":"无线性方向";return{summary:dir+"线性关联，|r| = "+a.toFixed(2),detail:"相关系数只概括线性关联。相同 r 可能对应不同散点结构；相关不自动意味着因果。",metric:a*100};}},
"14":{controls:[{key:"slope",label:"回归斜率 β₁",min:-3,max:3,step:.1,value:1.2}],calc:function(v){var y=3+v.slope*10;return{summary:"当 x=10 时，预测 y = "+y.toFixed(1),detail:"示例模型截距固定为 3。斜率表示 x 增加一个单位时，模型预测的条件均值变化量。",metric:Math.min(100,Math.abs(v.slope)*25)};}},
"15":{controls:[{key:"m",label:"独立分析次数 m",min:1,max:30,step:1,value:10}],calc:function(v){var f=1-Math.pow(.95,v.m);return{summary:"至少一次假阳性的概率约 "+(f*100).toFixed(1)+"%",detail:"假设每次检验 α=0.05 且检验相互独立。相关检验时该公式不再精确。",metric:f*100};}},
"16":{controls:[{key:"m",label:"比较次数 m",min:1,max:100,step:1,value:20}],calc:function(v){var a=.05/v.m;return{summary:"Bonferroni 单次阈值 α* = "+a.toFixed(5),detail:"该方法控制家族错误率，但可能较保守。若研究目标是控制错误发现率，可评估 BH 等方法。",metric:Math.max(2,100-v.m)};}},
"17":{controls:[{key:"design",label:"研究设计",type:"select",value:"观察性研究",options:["观察性研究","随机对照试验"]}],calc:function(v){return{summary:v.design==="随机对照试验"?"处理分配由随机机制决定":"处理分配可能受共同原因影响",detail:v.design==="随机对照试验"?"随机化有助于打破处理分配与基线混杂因素的系统联系，但仍需关注依从、失访、测量和外部效度。":"需要基于因果图识别混杂因素，并论证调整集；观测到的相关不能自动解释为因果。",metric:v.design==="随机对照试验"?80:45};}},
"18":{controls:[{key:"done",label:"已落实的透明研究实践",min:0,max:5,step:1,value:2}],calc:function(v){return{summary:"已落实 "+v.done+" / 5 项实践",detail:"核对预注册、数据来源说明、完整结果报告、分析代码与环境记录、隐私和伦理审查。",metric:v.done*20};}},
"19":{controls:[{key:"r2",label:"用其他自变量解释 Xⱼ 的 R²",min:0,max:.95,step:.01,value:.8}],calc:function(v){var vif=1/(1-v.r2);return{summary:"VIF = "+vif.toFixed(2),detail:"VIF 来自 1/(1−R²ⱼ)。经验阈值不是定律；共线性主要影响系数精度与解释稳定性。",metric:Math.min(100,vif*5)};}},
"20":{controls:[{key:"eta",label:"线性预测值 η",min:-6,max:6,step:.1,value:1}],calc:function(v){var p=1/(1+Math.exp(-v.eta));return{summary:"预测概率 p = "+(p*100).toFixed(1)+"%",detail:"sigmoid 将任意实数映射到 (0,1)。分类阈值还要结合误判代价与应用目标决定。",metric:p*100};}},
"21":{controls:[{key:"between",label:"组间均方 MSB",min:.1,max:8,step:.1,value:2}],calc:function(v){return{summary:"F = MSB / MSW = "+v.between.toFixed(1),detail:"这里固定组内均方 MSW=1。真实 ANOVA 还需考虑自由度、F 分布与设计假设。",metric:Math.min(100,v.between*12)};}},
"22":{controls:[{key:"s",label:"20 次观测中的成功次数",min:0,max:20,step:1,value:13}],calc:function(v){var m=(v.s+1)/22;return{summary:"Beta(1,1) 先验下的后验均值 = "+m.toFixed(3),detail:"二项数据 n=20，成功 "+v.s+" 次；后验为 Beta(1+s, 1+n−s)。",metric:m*100};}},
"23":{controls:[{key:"task",label:"选择分析任务",type:"select",value:"统计检验",options:["数据整理","统计检验","回归建模","贝叶斯建模","可视化报告"]}],calc:function(v){var m={"数据整理":"pandas / R tidyverse：先记录数据字典、缺失值和转换步骤。","统计检验":"SciPy / statsmodels：确认检验假设、效应量和区间估计。","回归建模":"statsmodels / scikit-learn：区分解释型推断与预测型评估。","贝叶斯建模":"PyMC / Stan：记录先验、采样诊断和后验检查。","可视化报告":"matplotlib / seaborn / ggplot2：保留生成图表的代码和数据来源。"};return{summary:"工具建议",detail:m[v.task],metric:75};}},
"24":{controls:[{key:"missing",label:"缺失比例（%）",min:0,max:50,step:1,value:12}],calc:function(v){return{summary:"1000 条记录中约 "+(v.missing*10)+" 条缺失",detail:"缺失比例本身不能说明缺失机制。先判断 MCAR、MAR 或 MNAR 的合理性，再选择删除、插补或敏感性分析。",metric:Math.max(0,100-v.missing*2)};}},
"25":{controls:[{key:"lift",label:"目标绝对提升（百分点）",min:.2,max:5,step:.1,value:1}],calc:function(v){var p1=.1,p2=p1+v.lift/100,pm=(p1+p2)/2,zA=1.96,zB=.84,n=2*Math.pow(zA*Math.sqrt(2*pm*(1-pm))+zB*Math.sqrt(p1*(1-p1)+p2*(1-p2)),2)/Math.pow(p2-p1,2);return{summary:"约需 "+Math.ceil(n)+" 人 / 组",detail:"正态近似教学估算：基准率 10%、双侧 α=0.05、功效 80%。正式方案还需考虑随机化单位、护栏指标和停止规则。",metric:Math.max(5,100-Math.min(100,n/100))};}},
"26":{controls:[{key:"c",label:"模型复杂度（示意）",min:1,max:10,step:1,value:5}],calc:function(v){var b=Math.pow(10-v.c,2)*.04,va=v.c*v.c*.04,total=b+va+.6;return{summary:"偏差² "+b.toFixed(2)+"；方差 "+va.toFixed(2),detail:"示意总误差约 "+total.toFixed(2)+"（含固定噪声 0.60）。曲线只帮助理解趋势，不代表特定模型的实测结果。",metric:Math.max(5,100-total*12)};}},
"27":{controls:[{key:"t",label:"处理组前后变化",min:-10,max:20,step:1,value:12},{key:"c",label:"对照组前后变化",min:-10,max:20,step:1,value:5}],calc:function(v){return{summary:"DID = "+(v.t-v.c).toFixed(1),detail:"估计量等于处理组变化减去对照组变化。因果解释需要平行趋势等识别假设，而不是只做差分。",metric:Math.min(100,Math.abs(v.t-v.c)*5)};}},
"28":{controls:[{key:"goal",label:"研究目标",type:"select",value:"描述",options:["描述","预测","因果"]}],calc:function(v){var m={"描述":"定义目标总体与变量，先做数据质量检查、描述统计和可视化。","预测":"明确预测时点与目标，做好训练/验证切分，关注泛化和校准。","因果":"定义处理、结果和目标估计量，提出识别设计并检查关键假设。"};return{summary:v.goal+"问题的设计重点",detail:m[v.goal],metric:v.goal==="因果"?60:80};}}
};
function renderLab(el){
 var cfg=LABS[el.dataset.lab],mount=el.querySelector(".lab-mount");if(!cfg||!mount)return;
 var controls=document.createElement("div");controls.className="lab-controls";var inputs={};
 cfg.controls.forEach(function(c){
  var wrap=document.createElement("div");wrap.className="lab-control";
  var input=document.createElement(c.type==="select"?"select":"input"),id="lab-"+el.dataset.lab+"-"+c.key;input.id=id;
  var label=document.createElement("label");label.htmlFor=id;label.textContent=c.label;wrap.appendChild(label);
  if(c.type==="select"){c.options.forEach(function(opt){var o=document.createElement("option");o.value=opt;o.textContent=opt;input.appendChild(o);});input.value=c.value;}
  else{input.type="range";input.min=c.min;input.max=c.max;input.step=c.step;input.value=c.value;}
  var value=document.createElement("output");value.className="lab-value";value.textContent=String(c.value);value.htmlFor=id;
  wrap.appendChild(input);wrap.appendChild(value);controls.appendChild(wrap);inputs[c.key]=input;
  input.addEventListener("input",update);input.addEventListener("change",update);
 });
 var readout=document.createElement("div");readout.className="lab-readout";
 var result=document.createElement("p");result.className="lab-result";result.setAttribute("aria-live","polite");
 var detail=document.createElement("p");detail.className="lab-detail";
 var meter=document.createElement("div");meter.className="lab-meter";meter.setAttribute("aria-hidden","true");
 var bar=document.createElement("span");meter.appendChild(bar);readout.append(result,detail,meter);mount.replaceChildren(controls,readout);
 function update(){var v={};cfg.controls.forEach(function(c){var input=inputs[c.key];v[c.key]=c.type==="select"?input.value:Number(input.value);input.parentElement.querySelector(".lab-value").textContent=c.type==="select"?input.value:Number(v[c.key]).toFixed(c.step<1?2:0);});var r=cfg.calc(v);result.textContent=r.summary;detail.textContent=r.detail;bar.style.width=Math.max(0,Math.min(100,r.metric||50))+"%";}
 update();
}
function renderMath(){
 var chapter=document.querySelector("[data-chapter]");if(!chapter)return;
 var id=chapter.dataset.chapter;
 var formulas={
 "01":'<div class="formula-card"><p class="formula-label">样本均值</p><div class="math-scroll" tabindex="0" role="region" aria-label="样本均值公式"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover><mi>x</mi><mo>¯</mo></mover><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>x</mi><mi>i</mi></msub></mrow></math></div></div>',
 "02":'<div class="formula-card"><p class="formula-label">样本比例</p><div class="math-scroll" tabindex="0" role="region" aria-label="样本比例公式"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover><mi>p</mi><mo>^</mo></mover><mo>=</mo><mfrac><msub><mi>n</mi><mi>A</mi></msub><mi>n</mi></mfrac></mrow></math></div></div>',
 "03":'<div class="formula-card"><p class="formula-label">样本方差</p><div class="math-scroll" tabindex="0" role="region" aria-label="样本方差公式"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msup><mrow><mo>(</mo><msub><mi>x</mi><mi>i</mi></msub><mo>−</mo><mover><mi>x</mi><mo>¯</mo></mover><mo>)</mo></mrow><mn>2</mn></msup></mrow></math></div></div>',
 "04":'<div class="formula-card"><p class="formula-label">标准分数</p><div class="math-scroll" tabindex="0" role="region" aria-label="z 分数公式"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>z</mi><mo>=</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>μ</mi></mrow><mi>σ</mi></mfrac></mrow></math></div></div>',
 "06":'<div class="formula-card"><p class="formula-label">贝叶斯公式</p><div class="math-scroll" tabindex="0" role="region" aria-label="贝叶斯公式"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>(</mo><mi>A</mi><mo>|</mo><mi>B</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mi>P</mi><mo>(</mo><mi>B</mi><mo>|</mo><mi>A</mi><mo>)</mo><mi>P</mi><mo>(</mo><mi>A</mi><mo>)</mo></mrow><mrow><mi>P</mi><mo>(</mo><mi>B</mi><mo>)</mo></mrow></mfrac></mrow></math></div></div>',
 "07":'<div class="formula-card"><p class="formula-label">二项分布</p><div class="math-scroll" tabindex="0" role="region" aria-label="二项分布概率质量函数"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>(</mo><mi>X</mi><mo>=</mo><mi>k</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mi>n</mi><mo>!</mo></mrow><mrow><mi>k</mi><mo>!</mo><mo>(</mo><mi>n</mi><mo>−</mo><mi>k</mi><mo>)</mo><mo>!</mo></mrow></mfrac><msup><mi>p</mi><mi>k</mi></msup><msup><mrow><mo>(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo>)</mo></mrow><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msup></mrow></math></div></div>',
 "08":'<div class="formula-card"><p class="formula-label">样本均值的标准误</p><div class="math-scroll" tabindex="0" role="region" aria-label="标准误公式"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>SE</mi><mo>=</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac></mrow></math></div></div>',
 "09":'<div class="formula-card"><p class="formula-label">正态近似置信区间</p><div class="math-scroll" tabindex="0" role="region" aria-label="均值置信区间公式"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover><mi>x</mi><mo>¯</mo></mover><mo>±</mo><msub><mi>z</mi><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>/</mo><mn>2</mn></mrow></msub><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac></mrow></math></div></div>',
 "10":'<div class="formula-card"><p class="formula-label">双侧检验的 p 值（示意）</p><div class="math-scroll" tabindex="0" role="region" aria-label="p 值定义"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>p</mi><mo>=</mo><mi>P</mi><mo>(</mo><mo>|</mo><mi>T</mi><mo>|</mo><mo>≥</mo><mo>|</mo><msub><mi>t</mi><mtext>obs</mtext></msub><mo>|</mo><mo>)</mo></mrow></math></div></div>',
 "11":'<div class="formula-card"><p class="formula-label">Pearson 卡方统计量</p><div class="math-scroll" tabindex="0" role="region" aria-label="卡方统计量公式"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>χ</mi><mn>2</mn></msup><mo>=</mo><mo>∑</mo><mfrac><msup><mrow><mo>(</mo><mi>O</mi><mo>−</mo><mi>E</mi><mo>)</mo></mrow><mn>2</mn></msup><mi>E</mi></mfrac></mrow></math></div></div>","12":'<div class="formula-card"><p class="formula-label">统计功效</p><div class="math-scroll" tabindex="0" role="region" aria-label="统计功效公式"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>Power</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>β</mi></mrow></math></div></div>',
 "13":'<div class="formula-card"><p class="formula-label">Pearson 相关系数</p><div class="math-scroll" tabindex="0" role="region" aria-label="Pearson 相关系数公式"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><mi>Cov</mi><mo>(</mo><mi>X</mi><mo>,</mo><mi>Y</mi><mo>)</mo></mrow><mrow><msub><mi>s</mi><mi>X</mi></msub><msub><mi>s</mi><mi>Y</mi></msub></mrow></mfrac></mrow></math></div></div>',
 "14":'<div class="formula-card"><p class="formula-label">简单线性回归斜率</p><div class="math-scroll" tabindex="0" role="region" aria-label="最小二乘斜率公式"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>β</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mo>∑</mo><mo>(</mo><msub><mi>x</mi><mi>i</mi></msub><mo>−</mo><mover><mi>x</mi><mo>¯</mo></mover><mo>)</mo><mo>(</mo><msub><mi>y</mi><mi>i</mi></msub><mo>−</mo><mover><mi>y</mi><mo>¯</mo></mover><mo>)</mo></mrow><mrow><mo>∑</mo><msup><mrow><mo>(</mo><msub><mi>x</mi><mi>i</mi></msub><mo>−</mo><mover><mi>x</mi><mo>¯</mo></mover><mo>)</mo></mrow><mn>2</mn></msup></mrow></mfrac></mrow></math></div></div>","15":'<div class="formula-card"><p class="formula-label">独立检验时至少一次假阳性的概率</p><div class="math-scroll" tabindex="0" role="region" aria-label="家族错误率公式"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>FWER</mi><mo>=</mo><mn>1</mn><mo>−</mo><msup><mrow><mo>(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo>)</mo></mrow><mi>m</mi></msup></mrow></math></div></div>',
 "16":'<div class="formula-card"><p class="formula-label">Bonferroni 单次检验阈值</p><div class="math-scroll" tabindex="0" role="region" aria-label="Bonferroni 阈值公式"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>α</mi><mo>*</mo></msup><mo>=</mo><mfrac><mi>α</mi><mi>m</mi></mfrac></mrow></math></div></div>',
 "17":'<div class="formula-card"><p class="formula-label">平均处理效应（ATE）</p><div class="math-scroll" tabindex="0" role="region" aria-label="平均处理效应公式"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ATE</mi><mo>=</mo><mi>E</mi><mo>[</mo><msub><mi>Y</mi><mn>1</mn></msub><mo>−</mo><msub><mi>Y</mi><mn>0</mn></msub><mo>]</mo></mrow></math></div></div>',
 "19":'<div class="formula-card"><p class="formula-label">多元线性回归模型</p><div class="math-scroll" tabindex="0" role="region" aria-label="多元线性回归公式"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>y</mi><mo>=</mo><msub><mi>β</mi><mn>0</mn></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>p</mi></munderover><msub><mi>β</mi><mi>j</mi></msub><msub><mi>x</mi><mi>j</mi></msub><mo>+</mo><mi>ε</mi></mrow></math></div></div>',
 "20":'<div class="formula-card"><p class="formula-label">逻辑回归的 Logit 链接函数</p><div class="math-scroll" tabindex="0" role="region" aria-label="Logit 公式"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>logit</mi><mo>(</mo><mi>p</mi><mo>)</mo><mo>=</mo><mi>ln</mi><mo>(</mo><mfrac><mi>p</mi><mrow><mn>1</mn><mo>−</mo><mi>p</mi></mrow></mfrac><mo>)</mo><mo>=</mo><msub><mi>β</mi><mn>0</mn></msub><mo>+</mo><msub><mi>β</mi><mn>1</mn></msub><mi>x</mi></mrow></math></div></div>',
 "21":'<div class="formula-card"><p class="formula-label">单因素 ANOVA 的 F 统计量</p><div class="math-scroll" tabindex="0" role="region" aria-label="ANOVA F 统计量公式"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mfrac><msub><mi>MS</mi><mi>between</mi></msub><msub><mi>MS</mi><mi>within</mi></msub></mfrac></mrow></math></div></div>',
 "22":'<div class="formula-card"><p class="formula-label">贝叶斯更新</p><div class="math-scroll" tabindex="0" role="region" aria-label="贝叶斯后验公式"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>p</mi><mo>(</mo><mi>θ</mi><mo>|</mo><mi>D</mi><mo>)</mo><mo>∝</mo><mi>p</mi><mo>(</mo><mi>D</mi><mo>|</mo><mi>θ</mi><mo>)</mo><mi>p</mi><mo>(</mo><mi>θ</mi><mo>)</mo></mrow></math></div></div>',
 "24":'<div class="formula-card"><p class="formula-label">缺失率</p><div class="math-scroll" tabindex="0" role="region" aria-label="缺失率公式"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>MissingRate</mi><mo>=</mo><mfrac><msub><mi>n</mi><mi>missing</mi></msub><mi>n</mi></mfrac></mrow></math></div></div>',
 "25":'<div class="formula-card"><p class="formula-label">两组转化率差</p><div class="math-scroll" tabindex="0" role="region" aria-label="转化率差公式"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>Δ</mi><mo>=</mo><msub><mi>p</mi><mi>B</mi></msub><mo>−</mo><msub><mi>p</mi><mi>A</mi></msub></mrow></math></div></div>',
 "26":'<div class="formula-card"><p class="formula-label">平方损失下的经典误差分解</p><div class="math-scroll" tabindex="0" role="region" aria-label="偏差方差分解公式"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>MSE</mi><mo>=</mo><msup><mi>Bias</mi><mn>2</mn></msup><mo>+</mo><mi>Variance</mi><mo>+</mo><msup><mi>σ</mi><mn>2</mn></msup></mrow></math></div></div>',
 "27":'<div class="formula-card"><p class="formula-label">双重差分估计量</p><div class="math-scroll" tabindex="0" role="region" aria-label="双重差分公式"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>DID</mi><mo>=</mo><mo>(</mo><msub><mi>Y</mi><mrow><mi>T</mi><mo>,</mo><mi>after</mi></mrow></msub><mo>−</mo><msub><mi>Y</mi><mrow><mi>T</mi><mo>,</mo><mi>before</mi></mrow></msub><mo>)</mo><mo>−</mo><mo>(</mo><msub><mi>Y</mi><mrow><mi>C</mi><mo>,</mo><mi>after</mi></mrow></msub><mo>−</mo><msub><mi>Y</mi><mrow><mi>C</mi><mo>,</mo><mi>before</mi></mrow></msub><mo>)</mo></mrow></math></div></div>'
 };
 if(formulas[id]){var fig=chapter.querySelector(".concept-figure");if(fig)fig.insertAdjacentHTML("afterend",formulas[id]);}
}
document.addEventListener("DOMContentLoaded",function(){renderNavigation();renderCatalog();renderMath();document.querySelectorAll("[data-lab]").forEach(renderLab);});
})();