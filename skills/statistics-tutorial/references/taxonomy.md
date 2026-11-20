# Course Taxonomy and Tagging

## Eight top-level knowledge domains

1. 统计基础与数据认知 — 01–05
2. 概率与随机模型 — 06–07
3. 抽样与统计推断 — 08–12
4. 关联分析与多重检验 — 13–16
5. 因果推断与研究可信度 — 17–18
6. 回归与统计模型 — 19–22
7. 数据分析与实验实践 — 23–25
8. 现代数据科学与综合应用 — 26–28

## Taxonomy principles

- One chapter has exactly one primary category. Cross-domain concepts belong in tags and prerequisites, not duplicate category assignment.
- Category names describe stable knowledge domains, not temporary trends or a specific software package.
- Chapter numbers preserve the learning sequence. Category folders organize files but must not silently renumber chapters.
- Prerequisites are chapter IDs, not titles, so title edits do not break the graph.
- Tags are short learner-facing concepts. Prefer established terms and use Chinese first with standard English acronyms where useful.
- Avoid near-duplicate tags such as “线性回归” and “线性回归分析” unless they represent different search intent.
- Keep tags between 4 and 8 per chapter. Add a tag only if it improves discovery or expresses a meaningful concept.
- Level labels describe expected learning stage, not a claim about intrinsic difficulty.

## courses.json fields

Each chapter record contains:
- num, title, topics, file;
- categoryId and category;
- level and estimated duration;
- prerequisites;
- tags;
- summary and learningGoals;
- labTitle and labDescription;
- caveat and takeaway;
- references and figure path.

The generated JavaScript snapshot must be rebuilt from courses.json, never edited by hand.
