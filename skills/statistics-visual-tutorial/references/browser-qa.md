# 浏览器验收协议

对课程首页和每篇修改过的文章运行 Chromium / Playwright：
- 1440×900、768×1024、390×844、360×800。
- 检查 document 横向溢出、图像加载、SVG 尺寸、目录锚点、前后章链接。
- 检查 MathML 命名空间、公式滚动和打印样式。
- 触发每个交互控件，确认输出随输入变化；记录 pageerror、console error 和 request failure。
- 至少检查首页和代表性文章的离线打开行为。
- 截图和报告作为 CI artifact；未运行项目标记为 not verified。