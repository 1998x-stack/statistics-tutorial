# Statistics Tutorial · 从数据到可信结论

[**打开在线课程**](https://1998x-stack.github.io/statistics-tutorial/) · [仓库](https://github.com/1998x-stack/statistics-tutorial) · [内容维护规范](AGENTS.md)

这是一套 28 篇独立可读的中文统计学课程。重点不只是统计计算，而是数据怎样产生、结论依据什么假设、估计存在怎样的不确定性。第 01–15 篇已经按独立图解长文规范逐篇重构；第 16–28 篇保留原正文，后续继续审校。

## 学习路线

1. **基础与数据（01–05）**：总体、样本、数据类型与描述性统计。
2. **概率与推断（06–12）**：随机变量、分布、抽样分布、区间估计与统计检验。
3. **关联、因果与规范（13–18）**：相关、回归、显著性误用、因果与伦理。
4. **统计模型（19–22）**：多元回归、逻辑回归、ANOVA 和贝叶斯。
5. **实战与拓展（23–28）**：Python/R、研究流程、A/B 测试与机器学习。

## 章节

| 章节 | 主题 | 状态 |
|:--:|---|---|
| 01 | [什么是统计学](chapters/01.html) | 新版深度图解 |
| 02 | [数据的类型与来源](chapters/02.html) | 新版深度图解 |
| 03 | [描述统计（一）](chapters/03.html) | 新版深度图解 |
| 04 | [描述统计（二）](chapters/04.html) | 新版深度图解 |
| 05 | [数据可视化基础](chapters/05.html) | 新版深度图解 |
| 06 | [概率基础](chapters/06.html) | 新版深度图解 |
| 07 | [常见概率分布](chapters/07.html) | 新版深度图解 |
| 08 | [抽样与抽样分布](chapters/08.html) | 新版深度图解 |
| 09 | [点估计与区间估计](chapters/09.html) | 新版深度图解 |
| 10 | [假设检验入门](chapters/10.html) | 新版深度图解 |
| 11 | [常见假设检验](chapters/11.html) | 新版深度图解 |
| 12 | [统计功效与样本量](chapters/12.html) | 新版深度图解 |
| 13 | [相关分析](chapters/13.html) | 新版深度图解 |
| 14 | [简单线性回归](chapters/14.html) | 新版深度图解 |
| 15 | [p值与显著性危机](chapters/15.html) | 新版深度图解 |
| 16 | [多重比较与谬误](chapters/16.html) | 原正文待精修 |
| 17 | [因果推断基础](chapters/17.html) | 原正文待精修 |
| 18 | [统计伦理与最佳实践](chapters/18.html) | 原正文待精修 |
| 19 | [多元线性回归](chapters/19.html) | 原正文待精修 |
| 20 | [逻辑回归](chapters/20.html) | 原正文待精修 |
| 21 | [方差分析（ANOVA）](chapters/21.html) | 原正文待精修 |
| 22 | [贝叶斯统计入门](chapters/22.html) | 原正文待精修 |
| 23 | [统计学工具链](chapters/23.html) | 原正文待精修 |
| 24 | [真实数据分析实战](chapters/24.html) | 原正文待精修 |
| 25 | [A/B测试实战](chapters/25.html) | 原正文待精修 |
| 26 | [机器学习中的统计学](chapters/26.html) | 原正文待精修 |
| 27 | [现代因果推断](chapters/27.html) | 原正文待精修 |
| 28 | [综合项目：从问题到结论](chapters/28.html) | 原正文待精修 |

## 目录结构

```text
index.html                 # 根路径 GitHub Pages 首页，可离线打开
chapters/01.html … 28.html # 28 篇独立 HTML；theme.css 用于未重构章节
assets/css/               # 新版首页 / 文章样式
assets/svg/               # 自主绘制、可独立查看的 SVG
assets/js/catalog.js      # 可选搜索与筛选交互
data/courses.json          # 课程元数据唯一维护入口
evidence/NN.json           # 核心统计论断来源、示例假设
AGENTS.md                  # 长期工程、内容、审校和发布约束
tests/                     # 静态质量检测
01.html … 28.html          # 旧章节路径的兼容重定向
```

## 本地阅读与检查

```bash
# 推荐用本地服务器，兼顾站内链接与图解
python3 -m http.server 8000
# 浏览器访问 http://localhost:8000/

node tests/site.test.cjs
node tests/offline-catalog.test.cjs
```

首页直接打开 `index.html` 也能展示全部目录；所有章节不依赖外部脚本。兼容旧的 `/01.html` 等访问地址需要浏览器执行迁移脚本，因此最好使用上方规范路径直接引用章节。

## 研究与版权

首批统计概念参考 [OpenIntro Statistics](https://www.openintro.org/book/os/)、[OpenStax Introductory Statistics](https://openstax.org/books/introductory-statistics/pages/1-introduction) 与 [NIST Engineering Statistics Handbook](https://www.itl.nist.gov/div898/handbook/)。教学示例为明确标注的合成数据，不应被当成真实人口或实验结果。图解与文字独立制作，教学组织方式受 [Olah-style-posts](https://github.com/1998x-stack/Olah-style-posts) 启发，不复制其素材。
