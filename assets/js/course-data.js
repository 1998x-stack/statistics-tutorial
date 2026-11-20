/* Generated from courses.json by skills/statistics-tutorial/scripts/build_catalog.py. */
window.STATISTICS_COURSE_CATALOG = {
  "title": "统计学 · 从入门到精通",
  "emoji": "📊",
  "subtitle": "从数据描述到统计推断，再到因果与实践",
  "description": "一套以直觉、图解、数学和交互实验为主线的中文统计学课程。",
  "chapterCount": 28,
  "categories": [
    {
      "id": "01-foundations",
      "title": "统计基础与数据认知",
      "shortTitle": "统计基础",
      "description": "建立统计思维，认识数据、变量、描述指标与图表。",
      "chapters": [
        "01",
        "02",
        "03",
        "04",
        "05"
      ]
    },
    {
      "id": "02-probability",
      "title": "概率与随机模型",
      "shortTitle": "概率模型",
      "description": "用概率语言描述不确定性，理解条件概率与常见随机分布。",
      "chapters": [
        "06",
        "07"
      ]
    },
    {
      "id": "03-inference",
      "title": "抽样与统计推断",
      "shortTitle": "统计推断",
      "description": "从样本走向总体，掌握估计、检验、功效与样本量。",
      "chapters": [
        "08",
        "09",
        "10",
        "11",
        "12"
      ]
    },
    {
      "id": "04-association",
      "title": "关联分析与多重检验",
      "shortTitle": "关联与检验",
      "description": "理解变量关系、回归诊断、显著性争议与多重比较。",
      "chapters": [
        "13",
        "14",
        "15",
        "16"
      ]
    },
    {
      "id": "05-causal-integrity",
      "title": "因果推断与研究可信度",
      "shortTitle": "因果与可信度",
      "description": "区分关联与因果，理解研究设计、透明报告和科学伦理。",
      "chapters": [
        "17",
        "18"
      ]
    },
    {
      "id": "06-models",
      "title": "回归与统计模型",
      "shortTitle": "统计模型",
      "description": "从线性模型扩展到分类、方差分析和贝叶斯推断。",
      "chapters": [
        "19",
        "20",
        "21",
        "22"
      ]
    },
    {
      "id": "07-practice",
      "title": "数据分析与实验实践",
      "shortTitle": "分析实践",
      "description": "将统计方法落实到工具链、真实数据分析与在线实验。",
      "chapters": [
        "23",
        "24",
        "25"
      ]
    },
    {
      "id": "08-modern",
      "title": "现代数据科学与综合应用",
      "shortTitle": "现代应用",
      "description": "连接机器学习、现代因果方法与完整研究项目。",
      "chapters": [
        "26",
        "27",
        "28"
      ]
    }
  ],
  "chapters": [
    {
      "num": "01",
      "title": "什么是统计学",
      "topics": [
        "统计学的定义",
        "描述vs推断",
        "总体与样本",
        "变量类型"
      ],
      "file": "chapters/01-foundations/01-what-is-statistics.html",
      "categoryId": "01-foundations",
      "category": "统计基础与数据认知",
      "level": "基础",
      "duration": 15,
      "prerequisites": [],
      "tags": [
        "统计思维",
        "描述统计",
        "总体",
        "样本",
        "统计推断"
      ],
      "summary": "用样本信息描述总体，并量化从数据到结论的不确定性。",
      "learningGoals": [
        "统计学的定义",
        "描述vs推断",
        "总体与样本"
      ],
      "labTitle": "样本量如何影响估计稳定性",
      "labDescription": "假设总体标准差约为 6。增加样本量会降低样本均值的标准误，但不会消除抽样偏差。",
      "caveat": "统计学并非与数学相互排斥；概率论、线性代数和微积分都是重要工具。不要把统计学简单概括成“不是数学”。",
      "takeaway": "先问清总体、样本和研究问题，再选择描述或推断方法。",
      "references": [
        [
          "OpenIntro Statistics",
          "https://www.openintro.org/book/os/"
        ],
        [
          "NIST/SEMATECH e-Handbook",
          "https://www.itl.nist.gov/div898/handbook/"
        ]
      ],
      "figure": "assets/figures/01-what-is-statistics.svg"
    },
    {
      "num": "02",
      "title": "数据的类型与来源",
      "topics": [
        "定性vs定量",
        "离散vs连续",
        "横截面vs时间序列",
        "抽样方法"
      ],
      "file": "chapters/01-foundations/02-data-types-and-sources.html",
      "categoryId": "01-foundations",
      "category": "统计基础与数据认知",
      "level": "基础",
      "duration": 15,
      "prerequisites": [
        "01"
      ],
      "tags": [
        "数据类型",
        "测量尺度",
        "分类变量",
        "连续变量",
        "抽样偏差"
      ],
      "summary": "变量的测量尺度与数据来源决定了可用的统计运算和分析方法。",
      "learningGoals": [
        "定性vs定量",
        "离散vs连续",
        "横截面vs时间序列"
      ],
      "labTitle": "测量尺度决定可用运算",
      "labDescription": "切换变量测量尺度，查看常见统计运算是否有合理解释。",
      "caveat": "Likert 单题通常是有序数据；多题量表在测量模型和研究设计支持下有时可近似按连续变量分析，不能一概而论。",
      "takeaway": "先判断数据如何测量、如何抽取，再决定可用的运算和模型。",
      "references": [
        [
          "Stevens (1946), On the Theory of Scales of Measurement",
          "https://doi.org/10.1037/h0056979"
        ],
        [
          "OpenIntro Statistics",
          "https://www.openintro.org/book/os/"
        ]
      ],
      "figure": "assets/figures/02-data-types-and-sources.svg"
    },
    {
      "num": "03",
      "title": "描述统计（一）",
      "topics": [
        "均值",
        "中位数",
        "众数",
        "方差与标准差"
      ],
      "file": "chapters/01-foundations/03-descriptive-statistics-central-tendency.html",
      "categoryId": "01-foundations",
      "category": "统计基础与数据认知",
      "level": "基础",
      "duration": 15,
      "prerequisites": [
        "01",
        "02"
      ],
      "tags": [
        "均值",
        "中位数",
        "众数",
        "方差",
        "标准差"
      ],
      "summary": "均值、中位数和离散程度需要结合分布形态一起解释。",
      "learningGoals": [
        "均值",
        "中位数",
        "众数"
      ],
      "labTitle": "一个极端值怎样拉动均值",
      "labDescription": "在同一组工资数据中改变 CEO 的工资，观察均值与中位数如何变化。",
      "caveat": "样本方差常用 n−1 分母估计总体方差；描述完整总体时可使用 n 分母。应先说明估计目标。",
      "takeaway": "不存在对所有分布都最好的单一中心趋势指标。",
      "references": [
        [
          "NIST: Measures of Location",
          "https://www.itl.nist.gov/div898/handbook/eda/section3/eda351.htm"
        ],
        [
          "OpenIntro Statistics",
          "https://www.openintro.org/book/os/"
        ]
      ],
      "figure": "assets/figures/03-descriptive-statistics-central-tendency.svg"
    },
    {
      "num": "04",
      "title": "描述统计（二）",
      "topics": [
        "百分位数",
        "箱线图",
        "偏度与峰度",
        "数据标准化"
      ],
      "file": "chapters/01-foundations/04-descriptive-statistics-distribution-shape.html",
      "categoryId": "01-foundations",
      "category": "统计基础与数据认知",
      "level": "基础",
      "duration": 15,
      "prerequisites": [
        "03"
      ],
      "tags": [
        "分位数",
        "箱线图",
        "偏度",
        "峰度",
        "标准化"
      ],
      "summary": "分位数、箱线图和标准分数帮助我们读懂数据分布，而非只看均值。",
      "learningGoals": [
        "百分位数",
        "箱线图",
        "偏度与峰度"
      ],
      "labTitle": "原始分数如何转成 z-score",
      "labDescription": "以均值 70、标准差 10 的示例分布，观察某个原始值对应的标准分数。",
      "caveat": "z-score 只改变位置和尺度，不会把偏态数据变成正态分布；偏度和峰度的定义也要注明约定。",
      "takeaway": "分布形状决定摘要指标是否有代表性，标准化不是正态化。",
      "references": [
        [
          "NIST: Exploratory Data Analysis",
          "https://www.itl.nist.gov/div898/handbook/eda/"
        ],
        [
          "OpenIntro Statistics",
          "https://www.openintro.org/book/os/"
        ]
      ],
      "figure": "assets/figures/04-descriptive-statistics-distribution-shape.svg"
    },
    {
      "num": "05",
      "title": "数据可视化基础",
      "topics": [
        "直方图",
        "散点图",
        "条形图",
        "可视化误区"
      ],
      "file": "chapters/01-foundations/05-data-visualization.html",
      "categoryId": "01-foundations",
      "category": "统计基础与数据认知",
      "level": "基础",
      "duration": 15,
      "prerequisites": [
        "02",
        "03",
        "04"
      ],
      "tags": [
        "数据可视化",
        "直方图",
        "散点图",
        "Anscombe四重奏",
        "图表选择"
      ],
      "summary": "图形能暴露摘要统计量隐藏的结构，是建模前不可跳过的一步。",
      "learningGoals": [
        "直方图",
        "散点图",
        "条形图"
      ],
      "labTitle": "根据变量类型选择图表",
      "labDescription": "不同变量类型和研究问题对应不同图表；图表选择不能只看视觉偏好。",
      "caveat": "图形不能替代数据质量检查；Anscombe 四重奏说明摘要统计量相同不代表数据结构相同。",
      "takeaway": "先看数据图形，再决定是否需要模型以及模型应如何设定。",
      "references": [
        [
          "Anscombe (1973), Graphs in Statistical Analysis",
          "https://doi.org/10.1080/00031305.1973.10478966"
        ],
        [
          "Datasaurus Dozen",
          "https://www.autodesk.com/research/publications/same-stats-different-graphs"
        ]
      ],
      "figure": "assets/figures/05-data-visualization.svg"
    },
    {
      "num": "06",
      "title": "概率基础",
      "topics": [
        "古典概率",
        "条件概率",
        "贝叶斯公式",
        "随机变量"
      ],
      "file": "chapters/02-probability/06-probability-basics.html",
      "categoryId": "02-probability",
      "category": "概率与随机模型",
      "level": "基础",
      "duration": 15,
      "prerequisites": [
        "01",
        "02"
      ],
      "tags": [
        "概率",
        "条件概率",
        "贝叶斯公式",
        "随机变量",
        "基准率"
      ],
      "summary": "概率是描述不确定性的语言；条件概率与贝叶斯更新都依赖明确的信息条件。",
      "learningGoals": [
        "古典概率",
        "条件概率",
        "贝叶斯公式"
      ],
      "labTitle": "基准率如何改变阳性预测值",
      "labDescription": "固定灵敏度和特异度，改变患病率，观察阳性结果中真正患病者的比例。",
      "caveat": "贝叶斯公式是概率恒等式；先验与似然需要明确，检测阳性后的概率必须考虑基准率。",
      "takeaway": "条件概率中的条件不能丢；基准率是贝叶斯判断的关键。",
      "references": [
        [
          "OpenIntro Statistics",
          "https://www.openintro.org/book/os/"
        ],
        [
          "NIST: Probability Distributions",
          "https://www.itl.nist.gov/div898/handbook/eda/section3/eda366.htm"
        ]
      ],
      "figure": "assets/figures/06-probability-basics.svg"
    },
    {
      "num": "07",
      "title": "常见概率分布",
      "topics": [
        "二项分布",
        "泊松分布",
        "正态分布",
        "中心极限定理"
      ],
      "file": "chapters/02-probability/07-common-probability-distributions.html",
      "categoryId": "02-probability",
      "category": "概率与随机模型",
      "level": "基础",
      "duration": 15,
      "prerequisites": [
        "06"
      ],
      "tags": [
        "概率分布",
        "二项分布",
        "泊松分布",
        "正态分布",
        "中心极限定理"
      ],
      "summary": "概率分布刻画随机变量的生成机制，模型选择必须检查适用条件。",
      "learningGoals": [
        "二项分布",
        "泊松分布",
        "正态分布"
      ],
      "labTitle": "改变 n 和 p，观察二项分布",
      "labDescription": "二项分布描述固定次数、独立且成功概率恒定的伯努利试验。",
      "caveat": "中心极限定理没有适用于所有数据的固定样本量门槛；偏态、重尾、依赖性都会影响正态近似。",
      "takeaway": "概率分布必须由随机机制和假设支撑，不能只凭图形形状贴标签。",
      "references": [
        [
          "Penn State STAT 414",
          "https://online.stat.psu.edu/stat414/"
        ],
        [
          "NIST: Probability Distributions",
          "https://www.itl.nist.gov/div898/handbook/eda/section3/eda366.htm"
        ]
      ],
      "figure": "assets/figures/07-common-probability-distributions.svg"
    },
    {
      "num": "08",
      "title": "抽样与抽样分布",
      "topics": [
        "简单随机抽样",
        "分层抽样",
        "抽样分布",
        "标准误"
      ],
      "file": "chapters/03-inference/08-sampling-and-sampling-distributions.html",
      "categoryId": "03-inference",
      "category": "抽样与统计推断",
      "level": "核心",
      "duration": 20,
      "prerequisites": [
        "06",
        "07"
      ],
      "tags": [
        "抽样",
        "抽样分布",
        "标准误",
        "大数定律",
        "中心极限定理"
      ],
      "summary": "抽样分布描述统计量在重复抽样中的波动，标准误量化这种波动。",
      "learningGoals": [
        "简单随机抽样",
        "分层抽样",
        "抽样分布"
      ],
      "labTitle": "样本量与标准误的关系",
      "labDescription": "以总体标准差 6 为例，比较不同样本量下样本均值的标准误。",
      "caveat": "不存在普适的 n≥30 规则；样本量要求取决于总体分布、尾部、依赖结构和目标精度。",
      "takeaway": "标准误描述统计量的抽样波动，不是原始数据的离散程度。",
      "references": [
        [
          "Penn State STAT 414",
          "https://online.stat.psu.edu/stat414/"
        ],
        [
          "OpenIntro Statistics",
          "https://www.openintro.org/book/os/"
        ]
      ],
      "figure": "assets/figures/08-sampling-and-sampling-distributions.svg"
    },
    {
      "num": "09",
      "title": "点估计与区间估计",
      "topics": [
        "矩估计",
        "最大似然",
        "置信区间",
        "误差边界"
      ],
      "file": "chapters/03-inference/09-point-and-interval-estimation.html",
      "categoryId": "03-inference",
      "category": "抽样与统计推断",
      "level": "核心",
      "duration": 20,
      "prerequisites": [
        "03",
        "07",
        "08"
      ],
      "tags": [
        "点估计",
        "区间估计",
        "矩估计",
        "最大似然估计",
        "置信区间"
      ],
      "summary": "估计量给出参数的近似值，区间表达不确定性，解释必须匹配统计框架。",
      "learningGoals": [
        "矩估计",
        "最大似然",
        "置信区间"
      ],
      "labTitle": "样本量如何缩窄置信区间",
      "labDescription": "在正态近似下，用已知标准差演示均值区间的宽度如何随 n 变化。",
      "caveat": "矩估计使用样本矩时通常采用 n 分母；n−1 校正对应另一种方差估计目标。MLE 也不保证小样本无偏。",
      "takeaway": "置信区间的解释取决于频率学派或贝叶斯框架。",
      "references": [
        [
          "OpenIntro Statistics",
          "https://www.openintro.org/book/os/"
        ],
        [
          "NIST/SEMATECH e-Handbook",
          "https://www.itl.nist.gov/div898/handbook/"
        ]
      ],
      "figure": "assets/figures/09-point-and-interval-estimation.svg"
    },
    {
      "num": "10",
      "title": "假设检验入门",
      "topics": [
        "零假设",
        "备择假设",
        "p值",
        "显著性水平"
      ],
      "file": "chapters/03-inference/10-hypothesis-testing.html",
      "categoryId": "03-inference",
      "category": "抽样与统计推断",
      "level": "核心",
      "duration": 20,
      "prerequisites": [
        "06",
        "08",
        "09"
      ],
      "tags": [
        "假设检验",
        "零假设",
        "备择假设",
        "p值",
        "显著性水平"
      ],
      "summary": "假设检验评估数据与零假设的相容程度，p 值不是假设为真的概率。",
      "learningGoals": [
        "零假设",
        "备择假设",
        "p值"
      ],
      "labTitle": "统计量越极端，p 值如何变化",
      "labDescription": "用双侧标准正态检验示意统计量与 p 值的关系；真实检验还需匹配统计量分布。",
      "caveat": "p 值是在零假设及模型假设成立时，得到当前或更极端统计量的概率；p>0.05 不能直接证明没有效应。",
      "takeaway": "报告检验结果时，同时给出效应量、区间和研究设计背景。",
      "references": [
        [
          "ASA Statement on p-Values",
          "https://www.amstat.org/asa/files/pdfs/P-ValueStatement.pdf"
        ],
        [
          "NIST/SEMATECH e-Handbook",
          "https://www.itl.nist.gov/div898/handbook/"
        ]
      ],
      "figure": "assets/figures/10-hypothesis-testing.svg"
    },
    {
      "num": "11",
      "title": "常见假设检验",
      "topics": [
        "z检验",
        "t检验",
        "卡方检验",
        "F检验"
      ],
      "file": "chapters/03-inference/11-common-statistical-tests.html",
      "categoryId": "03-inference",
      "category": "抽样与统计推断",
      "level": "核心",
      "duration": 20,
      "prerequisites": [
        "10"
      ],
      "tags": [
        "z检验",
        "t检验",
        "卡方检验",
        "F检验",
        "检验选择"
      ],
      "summary": "检验方法取决于变量类型、研究设计、独立性和分布假设。",
      "learningGoals": [
        "z检验",
        "t检验",
        "卡方检验"
      ],
      "labTitle": "根据研究问题选择检验",
      "labDescription": "检验选择首先取决于变量类型、组数、配对关系和研究设计。",
      "caveat": "两总体方差比的经典 F 检验不同于 ANOVA 的 F 检验；ANOVA 主要比较组均值，需匹配研究设计与前提。",
      "takeaway": "选择检验先看数据类型和实验设计，再看软件函数名称。",
      "references": [
        [
          "NIST/SEMATECH e-Handbook",
          "https://www.itl.nist.gov/div898/handbook/"
        ],
        [
          "SciPy Statistical Tests",
          "https://docs.scipy.org/doc/scipy/reference/stats.html"
        ]
      ],
      "figure": "assets/figures/11-common-statistical-tests.svg"
    },
    {
      "num": "12",
      "title": "统计功效与样本量",
      "topics": [
        "Type I/II错误",
        "功效分析",
        "效应量",
        "样本量计算"
      ],
      "file": "chapters/03-inference/12-statistical-power-and-sample-size.html",
      "categoryId": "03-inference",
      "category": "抽样与统计推断",
      "level": "核心",
      "duration": 20,
      "prerequisites": [
        "08",
        "10",
        "11"
      ],
      "tags": [
        "统计功效",
        "第一类错误",
        "第二类错误",
        "效应量",
        "样本量"
      ],
      "summary": "功效分析把最小有意义效应转化为样本量计划，而不是事后追逐显著性。",
      "learningGoals": [
        "Type I/II错误",
        "功效分析",
        "效应量"
      ],
      "labTitle": "样本量如何影响统计功效",
      "labDescription": "用双样本均值差的正态近似演示样本量与功效的关系，结果仅作教学说明。",
      "caveat": "统计功效是特定备择效应下拒绝零假设的概率；样本量计算依赖效应量、方差、设计、α 和功效目标。",
      "takeaway": "样本量应由最小有意义效应和研究代价驱动，而不是追求越大越好。",
      "references": [
        [
          "Cohen, Statistical Power Analysis",
          "https://doi.org/10.4324/9780203771587"
        ],
        [
          "Statsmodels: Power and Sample Size",
          "https://www.statsmodels.org/stable/stats.html#power-and-sample-size-calculations"
        ]
      ],
      "figure": "assets/figures/12-statistical-power-and-sample-size.svg"
    },
    {
      "num": "13",
      "title": "相关分析",
      "topics": [
        "Pearson相关",
        "Spearman相关",
        "相关矩阵",
        "相关≠因果"
      ],
      "file": "chapters/04-association/13-correlation-analysis.html",
      "categoryId": "04-association",
      "category": "关联分析与多重检验",
      "level": "核心",
      "duration": 20,
      "prerequisites": [
        "03",
        "05",
        "06"
      ],
      "tags": [
        "Pearson相关",
        "Spearman相关",
        "Kendall相关",
        "相关矩阵",
        "相关不等于因果"
      ],
      "summary": "相关描述变量之间的关联方向与强度，不能单独建立因果关系。",
      "learningGoals": [
        "Pearson相关",
        "Spearman相关",
        "相关矩阵"
      ],
      "labTitle": "相关强度不等于因果强度",
      "labDescription": "改变相关系数，观察线性关联方向与强度；散点图仍然不可省略。",
      "caveat": "Pearson 相关系数本身可计算而不要求正态；经典显著性推断另有假设。Spearman 也不等同于“对异常值不敏感”。",
      "takeaway": "相关系数是关联摘要，不是因果证据。",
      "references": [
        [
          "NIST: Correlation",
          "https://www.itl.nist.gov/div898/handbook/eda/section3/eda35b.htm"
        ],
        [
          "OpenIntro Statistics",
          "https://www.openintro.org/book/os/"
        ]
      ],
      "figure": "assets/figures/13-correlation-analysis.svg"
    },
    {
      "num": "14",
      "title": "简单线性回归",
      "topics": [
        "最小二乘法",
        "R²",
        "残差分析",
        "回归诊断"
      ],
      "file": "chapters/04-association/14-simple-linear-regression.html",
      "categoryId": "04-association",
      "category": "关联分析与多重检验",
      "level": "核心",
      "duration": 20,
      "prerequisites": [
        "03",
        "05",
        "13"
      ],
      "tags": [
        "线性回归",
        "最小二乘法",
        "决定系数",
        "残差分析",
        "回归诊断"
      ],
      "summary": "最小二乘法寻找平方残差最小的线性关系，模型诊断比单看 R² 更重要。",
      "learningGoals": [
        "最小二乘法",
        "R²",
        "残差分析"
      ],
      "labTitle": "调整斜率，观察预测值变化",
      "labDescription": "调整线性模型斜率，观察给定 x 值下的预测值。",
      "caveat": "线性回归系数描述条件均值关系；除非研究设计支持，不能直接解释为因果效应。残差正态性主要影响小样本推断。",
      "takeaway": "R² 衡量拟合程度，残差诊断与设计假设决定模型是否可信。",
      "references": [
        [
          "NIST: Linear Regression",
          "https://www.itl.nist.gov/div898/handbook/pmd/section1/pmd141.htm"
        ],
        [
          "Statsmodels: Regression Diagnostics",
          "https://www.statsmodels.org/stable/diagnostic.html"
        ]
      ],
      "figure": "assets/figures/14-simple-linear-regression.svg"
    },
    {
      "num": "15",
      "title": "p值与显著性危机",
      "topics": [
        "p-hacking",
        "HARKing",
        "文件抽屉问题",
        "可重复性危机"
      ],
      "file": "chapters/04-association/15-p-value-and-reproducibility-crisis.html",
      "categoryId": "04-association",
      "category": "关联分析与多重检验",
      "level": "核心",
      "duration": 20,
      "prerequisites": [
        "10"
      ],
      "tags": [
        "p值",
        "p-hacking",
        "HARKing",
        "发表偏倚",
        "可重复性"
      ],
      "summary": "分析自由度与选择性报告会放大假阳性风险，透明报告是可重复性的基础。",
      "learningGoals": [
        "p-hacking",
        "HARKing",
        "文件抽屉问题"
      ],
      "labTitle": "分析自由度如何累积假阳性",
      "labDescription": "假设每次分析都有 5% 的假阳性率，观察多次独立尝试时至少一次假阳性的概率。",
      "caveat": "p-hacking 可能来自有意选择，也可能来自未预先约束的分析自由度；可重复性问题不能简化成“多数研究都是错的”。",
      "takeaway": "预先规划分析并完整报告，能减少选择性结论。",
      "references": [
        [
          "ASA Statement on p-Values",
          "https://www.amstat.org/asa/files/pdfs/P-ValueStatement.pdf"
        ],
        [
          "Simmons et al. (2011), False-Positive Psychology",
          "https://doi.org/10.1177/0956797611417632"
        ]
      ],
      "figure": "assets/figures/15-p-value-and-reproducibility-crisis.svg"
    },
    {
      "num": "16",
      "title": "多重比较与谬误",
      "topics": [
        "Bonferroni校正",
        "FDR",
        "辛普森悖论",
        "幸存者偏差"
      ],
      "file": "chapters/04-association/16-multiple-comparisons-and-fallacies.html",
      "categoryId": "04-association",
      "category": "关联分析与多重检验",
      "level": "核心",
      "duration": 20,
      "prerequisites": [
        "10",
        "15"
      ],
      "tags": [
        "多重比较",
        "Bonferroni",
        "错误发现率",
        "辛普森悖论",
        "幸存者偏差"
      ],
      "summary": "比较次数增加会改变错误发现的风险，需要选择匹配研究目标的校正方法。",
      "learningGoals": [
        "Bonferroni校正",
        "FDR",
        "辛普森悖论"
      ],
      "labTitle": "比较次数与 Bonferroni 阈值",
      "labDescription": "Bonferroni 把整体显著性水平分配给多个检验，阈值随比较数增加而降低。",
      "caveat": "FWER=1−(1−α)^m 仅在检验相互独立且各自错误率为 α 时成立；Bonferroni 提供更一般的上界。",
      "takeaway": "控制 FWER 还是 FDR，应由研究目标和错误代价决定。",
      "references": [
        [
          "Benjamini & Hochberg (1995)",
          "https://doi.org/10.1111/j.2517-6161.1995.tb02031.x"
        ],
        [
          "ASA Statement on p-Values",
          "https://www.amstat.org/asa/files/pdfs/P-ValueStatement.pdf"
        ]
      ],
      "figure": "assets/figures/16-multiple-comparisons-and-fallacies.svg"
    },
    {
      "num": "17",
      "title": "因果推断基础",
      "topics": [
        "混杂变量",
        "工具变量",
        "DAG",
        "RCT"
      ],
      "file": "chapters/05-causal-integrity/17-foundations-of-causal-inference.html",
      "categoryId": "05-causal-integrity",
      "category": "因果推断与研究可信度",
      "level": "进阶",
      "duration": 20,
      "prerequisites": [
        "13",
        "14",
        "16"
      ],
      "tags": [
        "因果推断",
        "混杂变量",
        "DAG",
        "随机对照试验",
        "潜在结果"
      ],
      "summary": "因果问题需要反事实框架与识别设计，DAG 帮助明确假设和调整路径。",
      "learningGoals": [
        "混杂变量",
        "工具变量",
        "DAG"
      ],
      "labTitle": "随机化能切断哪条混杂路径",
      "labDescription": "观察性研究可能存在共同原因；随机化改变的是处理分配机制，不是自动修复所有问题。",
      "caveat": "随机对照试验仍可能受不依从、失访、测量误差和外部效度限制；HRT 证据还需区分年龄、方案和结局。",
      "takeaway": "因果结论来自识别设计与假设，而不是单纯更复杂的回归。",
      "references": [
        [
          "Hernán & Robins, Causal Inference: What If",
          "https://www.hsph.harvard.edu/miguel-hernan/causal-inference-book/"
        ],
        [
          "The Book of Why",
          "https://www.penguinrandomhouse.com/books/317935/the-book-of-why-by-judea-pearl-and-dana-mackenzie/"
        ]
      ],
      "figure": "assets/figures/17-foundations-of-causal-inference.svg"
    },
    {
      "num": "18",
      "title": "统计伦理与最佳实践",
      "topics": [
        "数据造假",
        "选择性报告",
        "预注册",
        "开放科学"
      ],
      "file": "chapters/05-causal-integrity/18-statistical-ethics-and-best-practices.html",
      "categoryId": "05-causal-integrity",
      "category": "因果推断与研究可信度",
      "level": "进阶",
      "duration": 20,
      "prerequisites": [
        "15",
        "16",
        "17"
      ],
      "tags": [
        "统计伦理",
        "预注册",
        "开放科学",
        "选择性报告",
        "研究可信度"
      ],
      "summary": "可信研究依赖透明、可复现、伦理合规和完整报告，而不只是计算正确。",
      "learningGoals": [
        "数据造假",
        "选择性报告",
        "预注册"
      ],
      "labTitle": "研究透明度检查清单",
      "labDescription": "勾选研究透明度实践，检查是否覆盖预注册、数据来源、分析代码和完整报告。",
      "caveat": "学术不端案例的细节与后果应以调查报告和撤稿记录为准；不要把单一案例夸大成统计方法本身的问题。",
      "takeaway": "科学可信度来自透明的研究过程和可核验的证据链。",
      "references": [
        [
          "National Academies: Reproducibility and Replicability",
          "https://doi.org/10.17226/25303"
        ],
        [
          "Center for Open Science: Preregistration",
          "https://www.cos.io/initiatives/prereg"
        ]
      ],
      "figure": "assets/figures/18-statistical-ethics-and-best-practices.svg"
    },
    {
      "num": "19",
      "title": "多元线性回归",
      "topics": [
        "多元回归",
        "共线性",
        "交互项",
        "AIC/BIC"
      ],
      "file": "chapters/06-models/19-multiple-linear-regression.html",
      "categoryId": "06-models",
      "category": "回归与统计模型",
      "level": "进阶",
      "duration": 25,
      "prerequisites": [
        "14"
      ],
      "tags": [
        "多元回归",
        "多重共线性",
        "VIF",
        "交互项",
        "AIC",
        "BIC"
      ],
      "summary": "多元回归描述给定其他变量时的条件关系，共线性影响参数稳定性。",
      "learningGoals": [
        "多元回归",
        "共线性",
        "交互项"
      ],
      "labTitle": "自变量相关性如何放大 VIF",
      "labDescription": "VIF = 1/(1−R²_j)。这里的 R²_j 是用其他自变量解释第 j 个自变量时的决定系数。",
      "caveat": "VIF>5 或 >10 都只是经验阈值；共线性主要影响系数不确定性，不一定损害预测准确性。",
      "takeaway": "解释多元回归系数时，必须说明“其他变量保持不变”的条件。",
      "references": [
        [
          "NIST: Multiple Linear Regression",
          "https://www.itl.nist.gov/div898/handbook/pmd/section1/pmd142.htm"
        ],
        [
          "Statsmodels: Linear Regression",
          "https://www.statsmodels.org/stable/regression.html"
        ]
      ],
      "figure": "assets/figures/19-multiple-linear-regression.svg"
    },
    {
      "num": "20",
      "title": "逻辑回归",
      "topics": [
        "odds与logit",
        "二分类",
        "ROC曲线",
        "混淆矩阵"
      ],
      "file": "chapters/06-models/20-logistic-regression.html",
      "categoryId": "06-models",
      "category": "回归与统计模型",
      "level": "进阶",
      "duration": 25,
      "prerequisites": [
        "19"
      ],
      "tags": [
        "逻辑回归",
        "Odds",
        "Logit",
        "ROC曲线",
        "AUC",
        "分类阈值"
      ],
      "summary": "逻辑回归建模对数几率；概率预测、排序能力和分类决策是不同问题。",
      "learningGoals": [
        "odds与logit",
        "二分类",
        "ROC曲线"
      ],
      "labTitle": "Logit 如何映射到概率",
      "labDescription": "改变线性预测值 η，观察 sigmoid 如何把任意实数映射到 0 与 1 之间。",
      "caveat": "AUC 没有跨场景通用的“好模型”阈值；阈值选择要结合类别比例、误判成本、校准和业务目标。",
      "takeaway": "区分概率估计、模型排序能力和最终分类决策。",
      "references": [
        [
          "Statsmodels: Discrete Choice Models",
          "https://www.statsmodels.org/stable/discretemod.html"
        ],
        [
          "scikit-learn: ROC AUC",
          "https://scikit-learn.org/stable/modules/model_evaluation.html#roc-metrics"
        ]
      ],
      "figure": "assets/figures/20-logistic-regression.svg"
    },
    {
      "num": "21",
      "title": "方差分析（ANOVA）",
      "topics": [
        "单因素ANOVA",
        "双因素ANOVA",
        "交互效应",
        "事后检验"
      ],
      "file": "chapters/06-models/21-analysis-of-variance.html",
      "categoryId": "06-models",
      "category": "回归与统计模型",
      "level": "进阶",
      "duration": 25,
      "prerequisites": [
        "10",
        "14"
      ],
      "tags": [
        "方差分析",
        "F统计量",
        "主效应",
        "交互效应",
        "事后检验"
      ],
      "summary": "ANOVA 用组间与组内变异比较均值，整体显著后还要定位差异来源。",
      "learningGoals": [
        "单因素ANOVA",
        "双因素ANOVA",
        "交互效应"
      ],
      "labTitle": "组间变异与组内变异",
      "labDescription": "固定组内均方为 1，改变组间均方，观察 F 比值如何变化。",
      "caveat": "整体 ANOVA 显著只说明并非所有组均值相同；事后比较要控制多重性，方差不齐时可考虑 Welch ANOVA。",
      "takeaway": "整体检验后需要定位差异，并报告效应大小和不确定性。",
      "references": [
        [
          "NIST: Analysis of Variance",
          "https://www.itl.nist.gov/div898/handbook/prc/section4/prc4.htm"
        ],
        [
          "Statsmodels: ANOVA",
          "https://www.statsmodels.org/stable/anova.html"
        ]
      ],
      "figure": "assets/figures/21-analysis-of-variance.svg"
    },
    {
      "num": "22",
      "title": "贝叶斯统计入门",
      "topics": [
        "先验与后验",
        "MCMC",
        "贝叶斯vs频率学派",
        "AI时代的贝叶斯"
      ],
      "file": "chapters/06-models/22-introduction-to-bayesian-statistics.html",
      "categoryId": "06-models",
      "category": "回归与统计模型",
      "level": "进阶",
      "duration": 25,
      "prerequisites": [
        "06",
        "09",
        "10"
      ],
      "tags": [
        "贝叶斯统计",
        "先验",
        "似然",
        "后验",
        "MCMC"
      ],
      "summary": "贝叶斯推断用先验与似然形成后验分布，模型与先验共同影响结论。",
      "learningGoals": [
        "先验与后验",
        "MCMC",
        "贝叶斯vs频率学派"
      ],
      "labTitle": "观察数据后验如何更新",
      "labDescription": "使用均匀 Beta(1,1) 先验和 20 次二项观测，查看后验均值如何随成功次数变化。",
      "caveat": "贝叶斯区间概率依赖指定模型和先验；任何数值区间都应由明确的先验与数据计算，而不能凭空给出。",
      "takeaway": "后验分布是先验、似然与模型共同作用的结果。",
      "references": [
        [
          "Gelman et al., Bayesian Data Analysis",
          "https://www.stat.columbia.edu/~gelman/book/"
        ],
        [
          "Stan: Bayesian Workflow",
          "https://mc-stan.org/docs/stan-users-guide/"
        ]
      ],
      "figure": "assets/figures/22-introduction-to-bayesian-statistics.svg"
    },
    {
      "num": "23",
      "title": "统计学工具链",
      "topics": [
        "Python scipy.stats",
        "statsmodels",
        "R基础",
        "Jupyter"
      ],
      "file": "chapters/07-practice/23-statistics-toolchain.html",
      "categoryId": "07-practice",
      "category": "数据分析与实验实践",
      "level": "实践",
      "duration": 25,
      "prerequisites": [
        "01",
        "06",
        "09",
        "14"
      ],
      "tags": [
        "Python",
        "R",
        "SciPy",
        "statsmodels",
        "可复现工作流"
      ],
      "summary": "工具链服务于透明、可复现的分析，数据、代码和环境应一起记录。",
      "learningGoals": [
        "Python scipy.stats",
        "statsmodels",
        "R基础"
      ],
      "labTitle": "根据任务选择统计工具",
      "labDescription": "根据分析任务选择常见工具，重点是让工具与数据结构、分析目标匹配。",
      "caveat": "点击率是比例/二项结果时，不应未经检查就把单次点击数据当作正态连续变量；工具选择应匹配数据生成过程。",
      "takeaway": "可复现分析不仅是代码能运行，还要记录数据、版本和环境。",
      "references": [
        [
          "SciPy: Statistical Functions",
          "https://docs.scipy.org/doc/scipy/reference/stats.html"
        ],
        [
          "Statsmodels Documentation",
          "https://www.statsmodels.org/stable/index.html"
        ]
      ],
      "figure": "assets/figures/23-statistics-toolchain.svg"
    },
    {
      "num": "24",
      "title": "真实数据分析实战",
      "topics": [
        "数据清洗",
        "EDA",
        "建模",
        "报告全流程"
      ],
      "file": "chapters/07-practice/24-real-world-data-analysis.html",
      "categoryId": "07-practice",
      "category": "数据分析与实验实践",
      "level": "实践",
      "duration": 25,
      "prerequisites": [
        "02",
        "03",
        "05",
        "14",
        "23"
      ],
      "tags": [
        "数据清洗",
        "缺失数据",
        "EDA",
        "统计建模",
        "结果报告"
      ],
      "summary": "EDA 先检查数据质量与生成机制，再建模并将结果放回实际问题。",
      "learningGoals": [
        "数据清洗",
        "EDA",
        "建模"
      ],
      "labTitle": "缺失比例对数据规模的影响",
      "labDescription": "假设有 1000 条记录，改变缺失比例，估算需要进一步调查的缺失数量。",
      "caveat": "缺失值处理前要考虑 MCAR、MAR、MNAR 等机制；简单删除或均值填补可能引入偏差。",
      "takeaway": "数据质量和缺失机制会影响后续所有分析结论。",
      "references": [
        [
          "Pandas: Working with Missing Data",
          "https://pandas.pydata.org/docs/user_guide/missing_data.html"
        ],
        [
          "NIST: Exploratory Data Analysis",
          "https://www.itl.nist.gov/div898/handbook/eda/"
        ]
      ],
      "figure": "assets/figures/24-real-world-data-analysis.svg"
    },
    {
      "num": "25",
      "title": "A/B测试实战",
      "topics": [
        "实验设计",
        "样本量计算",
        "显著性检验",
        "决策规则"
      ],
      "file": "chapters/07-practice/25-ab-testing-in-practice.html",
      "categoryId": "07-practice",
      "category": "数据分析与实验实践",
      "level": "实践",
      "duration": 25,
      "prerequisites": [
        "10",
        "12",
        "23"
      ],
      "tags": [
        "A/B测试",
        "随机实验",
        "转化率",
        "功效分析",
        "实验决策"
      ],
      "summary": "A/B 测试是随机实验，指标、随机化、样本量与停止规则共同决定可信度。",
      "learningGoals": [
        "实验设计",
        "样本量计算",
        "显著性检验"
      ],
      "labTitle": "最小可检测提升与样本量",
      "labDescription": "使用正态近似演示基准转化率 10% 时，绝对提升目标对每组样本量的影响。",
      "caveat": "A/B 测试要关注随机化单位、样本比例失衡、重复查看、网络效应、护栏指标和预先定义的停止规则。",
      "takeaway": "实验的统计设计与产品指标同样重要，显著不等于值得上线。",
      "references": [
        [
          "Microsoft Experimentation Platform",
          "https://www.microsoft.com/en-us/research/group/experimentation-platform-exp/"
        ],
        [
          "Statsmodels: Statistical Tests",
          "https://www.statsmodels.org/stable/stats.html"
        ]
      ],
      "figure": "assets/figures/25-ab-testing-in-practice.svg"
    },
    {
      "num": "26",
      "title": "机器学习中的统计学",
      "topics": [
        "偏差-方差权衡",
        "正则化",
        "交叉验证",
        "贝叶斯优化"
      ],
      "file": "chapters/08-modern/26-statistics-for-machine-learning.html",
      "categoryId": "08-modern",
      "category": "现代数据科学与综合应用",
      "level": "综合",
      "duration": 25,
      "prerequisites": [
        "14",
        "19",
        "20",
        "23"
      ],
      "tags": [
        "机器学习",
        "偏差-方差",
        "正则化",
        "交叉验证",
        "泛化误差"
      ],
      "summary": "统计学习理论解释泛化误差的来源，验证集与交叉验证帮助约束模型复杂度。",
      "learningGoals": [
        "偏差-方差权衡",
        "正则化",
        "交叉验证"
      ],
      "labTitle": "模型复杂度的偏差—方差权衡",
      "labDescription": "用一个示意误差分解观察模型复杂度提高时偏差和方差如何变化。",
      "caveat": "经典 Bias–Variance 分解对应平方损失及相应期望条件；分类任务和其他损失函数不能机械套用同一公式。",
      "takeaway": "用验证数据评估泛化，避免把训练集表现当成未来表现。",
      "references": [
        [
          "An Introduction to Statistical Learning",
          "https://www.statlearning.com/"
        ],
        [
          "scikit-learn: Cross-validation",
          "https://scikit-learn.org/stable/modules/cross_validation.html"
        ]
      ],
      "figure": "assets/figures/26-statistics-for-machine-learning.svg"
    },
    {
      "num": "27",
      "title": "现代因果推断",
      "topics": [
        "倾向得分匹配",
        "DID",
        "断点回归",
        "工具变量"
      ],
      "file": "chapters/08-modern/27-modern-causal-inference.html",
      "categoryId": "08-modern",
      "category": "现代数据科学与综合应用",
      "level": "综合",
      "duration": 25,
      "prerequisites": [
        "17",
        "19",
        "20"
      ],
      "tags": [
        "倾向得分",
        "双重差分",
        "断点回归",
        "工具变量",
        "识别假设"
      ],
      "summary": "现代因果方法利用观察数据回答干预问题，但每种方法都依赖识别假设。",
      "learningGoals": [
        "倾向得分匹配",
        "DID",
        "断点回归"
      ],
      "labTitle": "双重差分估计如何形成",
      "labDescription": "调整处理组与对照组的前后变化，计算双重差分估计量。",
      "caveat": "PSM、DID、RDD 和 IV 都依赖各自的识别假设；匹配倾向得分不会自动消除未观测混杂。",
      "takeaway": "识别假设必须可辩护，并通过平衡、趋势和敏感性诊断检查。",
      "references": [
        [
          "Causal Inference: The Mixtape",
          "https://mixtape.scunning.com/"
        ],
        [
          "Hernán & Robins, Causal Inference: What If",
          "https://www.hsph.harvard.edu/miguel-hernan/causal-inference-book/"
        ]
      ],
      "figure": "assets/figures/27-modern-causal-inference.svg"
    },
    {
      "num": "28",
      "title": "综合项目：从问题到结论",
      "topics": [
        "选题",
        "研究设计",
        "数据分析",
        "报告撰写"
      ],
      "file": "chapters/08-modern/28-capstone-from-question-to-conclusion.html",
      "categoryId": "08-modern",
      "category": "现代数据科学与综合应用",
      "level": "综合",
      "duration": 25,
      "prerequisites": [
        "01",
        "08",
        "10",
        "14",
        "17",
        "23",
        "24",
        "25"
      ],
      "tags": [
        "研究设计",
        "数据分析",
        "统计报告",
        "敏感性分析",
        "综合项目"
      ],
      "summary": "从问题定义到研究报告形成闭环，结论强度不能超过设计和数据的支持范围。",
      "learningGoals": [
        "选题",
        "研究设计",
        "数据分析"
      ],
      "labTitle": "先明确问题类型，再选择研究设计",
      "labDescription": "描述、预测和因果问题需要不同的设计与评价标准。",
      "caveat": "若使用观察性数据，必须区分描述、预测与因果问题；没有识别设计时，不要把相关性写成因果结论。",
      "takeaway": "把问题、设计、数据、分析和结论连成闭环，诚实表达局限。",
      "references": [
        [
          "SAMPL Guidelines",
          "https://www.equator-network.org/reporting-guidelines/sampl/"
        ],
        [
          "ASA Ethical Guidelines",
          "https://www.amstat.org/your-career/ethical-guidelines-for-statistical-practice"
        ]
      ],
      "figure": "assets/figures/28-capstone-from-question-to-conclusion.svg"
    }
  ]
};
