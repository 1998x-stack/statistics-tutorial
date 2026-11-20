# 统计学知识地图 · Statistics Tutorial

**28 章、7 个知识模块：从数据描述、概率与推断，到回归、因果推断和真实分析项目。**

本仓库面向希望系统掌握统计思维的中文学习者。每章采用问题驱动解释、原创 SVG 图解、结构化公式和本地交互实验。课程以离线优先的静态 HTML 为核心，不依赖 CDN 或在线数学脚本。

## 从哪里开始
- [打开课程首页](index.html)：按知识模块浏览、搜索章节并查看先修关系。
- [统计学知识地图](docs/knowledge-map.md)：理解七大模块与 28 章学习路径。
- [AGENTS.md](AGENTS.md)：仓库编辑和工程规则。
- [Statistics Visual Tutorial Skill](skills/statistics-visual-tutorial/SKILL.md)：文章写作、数学、图解、交互与 QA 流程。
- [内容审查清单](docs/editorial-audit.md)：逐章待核验的公式、假设和来源。

## 七个知识模块
| 模块 | 章节 | 核心内容 |
|---|---|---|
| 数据与描述 | 01–05 | 统计思维、测量尺度、描述统计、分布与可视化 |
| 概率与抽样 | 06–08 | 概率、常见分布、抽样分布和标准误 |
| 估计与检验 | 09–12 | 区间估计、假设检验、常用检验、统计功效 |
| 关系与模型 | 13–14、19–21 | 相关、简单/多元回归、逻辑回归、ANOVA |
| 科学推理与因果 | 15–18、27 | 显著性危机、多重比较、因果基础、伦理、现代因果方法 |
| 贝叶斯与计算 | 22–23 | 贝叶斯统计、Python/R 统计工具 |
| 数据实践与应用 | 24–26、28 | 真实数据分析、A/B 测试、机器学习、综合项目 |

## 仓库结构
```text
statistics-tutorial/
├── index.html
├── courses.json
├── chapters/<slug>/
│   ├── index.html
│   ├── assets/overview.svg
│   └── evidence.json
├── assets/css/article.css
├── assets/js/article.js
├── skills/statistics-visual-tutorial/
├── docs/
├── tests/
├── scripts/
└── 01.html–28.html                 # 旧路径兼容跳转
```

## 本地阅读
无需构建工具。直接打开 index.html；首页在 file:// 环境使用内嵌课程快照，在线托管时读取 courses.json。每篇文章及 SVG、CSS、JS 均为相对路径，可离线阅读。

也可启动本地静态服务器：
```bash
python -m http.server 8000
# 打开 http://127.0.0.1:8000
```

## 内容与工程标准
- 每篇文章先解释题目要解决的问题，再逐步引入术语、图解和公式。
- 图示必须具有章节专属统计语义；拒绝域、抽样分布、残差、DAG 和实验分流不能互相替代。
- 实质性数学表达使用 MathML；公式要说明符号、自由度和适用条件。
- 每章配有交互实验，所有模拟均标注为教学示例，不冒充真实数据。
- evidence.json 中未核对的条目保持 unverified，不以链接存在代替事实核验。
- 课程离线优先，不使用 CDN、远程字体、遥测或在线公式服务。
- 统计显著性不等于实际重要；相关/回归不自动意味着因果；因果方法必须说明识别假设。

## 质量检查
```bash
node tests/offline-catalog.test.cjs
node tests/statistics-site.test.cjs
```
完整浏览器验收按 Skill 执行。没有运行的检查不得标记为通过。当前迁移分为结构增强和逐章内容核验两阶段，详见内容审查清单。

## 参考来源
- [OpenStax · Introductory Statistics 2e](https://openstax.org/details/books/introductory-statistics-2e)
- [NIST/SEMATECH e-Handbook](https://www.itl.nist.gov/div898/handbook/)
- [ASA Statement on Statistical Significance and P-Values](https://www.amstat.org/asa/files/pdfs/P-ValueStatement.pdf)
- [Causal Inference: What If](https://www.hsph.harvard.edu/miguel-hernan/causal-inference-book/)
- [ASA Ethical Guidelines](https://www.amstat.org/your-career/ethical-guidelines-for-statistical-practice)

本项目没有在此处声明第三方教材、图表或软件文档的再授权；引用和素材复用应遵守各自的版权与许可。