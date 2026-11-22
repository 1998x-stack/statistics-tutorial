# 结构迁移和审校记录 · 2026-11-22

## 目标与范围

从仓库根目录平铺 28 篇迁移到 `chapters/`；站点仍从根 `index.html` 提供 GitHub Pages 首页，以尽可能兼容此前的根目录 Pages 发布源。旧 `NN.html` 变为最小脚本重定向。所有未精修的 04–28 原文件字节复制，不在迁移时做隐性内容改写。

## 三篇首批文章

- 01：合成总体20个单位的便利样本偏差，另以12次满意调查解释参数和统计量；两张SVG；可交互比例与可执行代码。
- 02：四种测量尺度、横截面/时间序列/面板与四类概率抽样；两张SVG；可复现四记录示例。
- 03：五个观测下的均值、中位数、众数、极差、分位数约定、样本/总体方差；两张SVG；可交互极端值试验。

## 研究来源

- OpenIntro Statistics: https://www.openintro.org/book/os/
- OpenStax Introductory Statistics 2e: https://openstax.org/books/introductory-statistics-2e/pages/1-introduction
- NIST Engineering Statistics Handbook: https://www.itl.nist.gov/div898/handbook/eda/section3/eda356.htm
- AAPOR Best Practices: https://aapor.org/standards-and-ethics/best-practices/

逐篇可审查论断见 `evidence/01.json`、`evidence/02.json`、`evidence/03.json`。

## 工程边界与尚未完成项

测试只覆盖源文件、静态链接、SVG XML、证据台账与数值例子；真实浏览器对 1440/768/390/360 宽度、MathML 排版、SVG 图中文字、打印、键盘交互的验收需要另行执行，**不可视为已通过**。Pages 需要确认实际发布设置；工作流只做质量检测，不更改 Pages 发布源。
