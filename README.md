# 统计学 · 从入门到精通

一套以中文讲解为主、面向大学阶段及数据分析初学者的统计学教程。课程从数据认知与描述统计出发，逐步进入概率、统计推断、回归、因果推断、实验设计和现代数据科学实践。

教学主线：问题 → 直觉 → 图解 → 数学表达 → 数值实验 → 方法边界 → 延伸阅读。

## 课程地图

| 知识域 | 章节 | 学习重点 |
|---|---:|---|
| 01. 统计基础与数据认知 | 01–05 | 统计思维、测量尺度、描述统计、分布和图表 |
| 02. 概率与随机模型 | 06–07 | 条件概率、贝叶斯公式、常见概率分布 |
| 03. 抽样与统计推断 | 08–12 | 抽样分布、估计、假设检验、功效与样本量 |
| 04. 关联分析与多重检验 | 13–16 | 相关、回归、p 值、研究者自由度和多重比较 |
| 05. 因果推断与研究可信度 | 17–18 | 混杂、DAG、RCT、预注册和开放科学 |
| 06. 回归与统计模型 | 19–22 | 多元回归、逻辑回归、ANOVA、贝叶斯统计 |
| 07. 数据分析与实验实践 | 23–25 | Python/R 工具链、EDA、A/B 测试 |
| 08. 现代数据科学与综合应用 | 26–28 | 统计学习、现代因果推断、综合项目 |

## 学习路径

- 零基础路径：01 → 02 → 03 → 04 → 05 → 06 → 07
- 推断统计路径：08 → 09 → 10 → 11 → 12
- 关系与建模路径：13 → 14 → 19 → 20 → 21 → 22
- 研究设计路径：15 → 16 → 17 → 18 → 25 → 27
- 数据科学实践路径：23 → 24 → 25 → 26 → 28

每章的先修关系、知识标签、学习目标和预计时长记录在 courses.json 中。首页按知识域展示课程，支持搜索与筛选。

## 本地阅读

无需安装依赖。克隆仓库后，直接打开 index.html；首页、章节页、样式、脚本和 SVG 都使用仓库内的相对路径，支持离线阅读。

    git clone https://github.com/1998x-stack/statistics-tutorial.git
    cd statistics-tutorial
    # 直接打开 index.html

章节页面位于 chapters/<knowledge-domain>/。原来的 01.html—28.html 保留为兼容跳转页，旧书签仍可使用。

## 仓库结构

    statistics-tutorial/
    ├── index.html
    ├── courses.json
    ├── assets/
    │   ├── css/course.css
    │   ├── js/course-data.js
    │   ├── js/course.js
    │   └── figures/
    ├── chapters/
    │   ├── 01-foundations/
    │   ├── 02-probability/
    │   ├── 03-inference/
    │   ├── 04-association/
    │   ├── 05-causal-integrity/
    │   ├── 06-models/
    │   ├── 07-practice/
    │   └── 08-modern/
    ├── skills/statistics-tutorial/
    ├── tests/
    ├── docs/content-audit.md
    └── AGENTS.md

## 内容与可视化标准

- 统计结论必须匹配研究问题、数据类型、研究设计和适用假设。
- 区分描述、预测与因果；不把相关关系写成因果效应。
- 报告 p 值时同时关注效应量、区间估计、研究设计和实际意义。
- 不使用“样本量达到 30 就一定正态”等无条件规则。
- 每章至少有一幅独立 SVG 概念图和一个与本章主题对应的交互实验。
- 数学公式优先使用有语义的 MathML；复杂公式必须能在窄屏滚动查看。
- 交互实验是渐进增强；关闭 JavaScript 后，章节正文仍应可阅读。
- 不加载 CDN、外部字体、遥测服务或不必要的远程脚本。

## 开发与质量检查

    python -m pip install -r requirements-dev.txt
    python skills/statistics-tutorial/scripts/build_catalog.py --check
    python -m pytest -q
    python skills/statistics-tutorial/scripts/validate.py --all
    python skills/statistics-tutorial/scripts/browser_check.py --all --output reports/browser

浏览器检查覆盖桌面和移动端、控制台异常、横向溢出、SVG/图片渲染、MathML 结构、离线资源与交互控件。未执行的检查必须标记为“未验证”，不得写成通过。

## 贡献约定

新增或修改章节前，先阅读 AGENTS.md 与 skills/statistics-tutorial/SKILL.md。先校准统计事实与假设，再设计叙事和图示。修改课程元数据后运行目录生成器；修改章节后运行静态与浏览器检查。逐章审查记录见 docs/content-audit.md。
