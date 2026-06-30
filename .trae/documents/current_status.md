# 当前状态

## v1 变更记录
- 删除顶部 KPI 卡片区域。
- 主漏斗 Onboard 阶段指标改为 `# Onboarded Seller(w/ UBO passed) T14`，字段改为 `onboarded_seller_w_ubo_passed_t14`。
- 删除主漏斗下方详情面板。
- `Sub Step Breakdown` 仅保留 `Submit / 提资` 和 `Moderate / 审核` 两个有子数据的模块。
- 删除 `Weekly Trend` 和 `Seller Onboarding Metrics Table`。
- 保留 `v0` 标签不变，v1 将作为新提交和新标签推送。

## v2 变更记录
- 删除 `Sub Step Breakdown` 中 `Submit / 提资` 顶部的提资卖家数和注册到提资转化率汇总行。
- 删除 `Sub Step Breakdown` 中 `Moderate / 审核` 顶部的提资到审核转化率汇总行。
- 将 `Moderate / 审核` 的 4 个审核项调整为两列布局，并让卡片按内容高度展示，减少底部空白。
- 删除主漏斗阶段卡片中的状态 tag，保留空间给 `Share` 文案。
- 保留 `v0`、`v1` 标签不变，v2 将作为新提交和新标签推送。

## Seller Onboarding Dashboard Demo 变更记录
- 基于最新 PRD `seller_onboarding_dashboard_demo_prd_v2.md` 从 `v2` 基线改造页面。
- 删除页面顶部 `Onboarding / Custom Onboarding Report / WIP/Fund / Daily Push` tabs。
- 标题改为 `Seller Onboarding Dashboard Demo`。
- 筛选器保留全部字段，但只有 `business_type` 可交互，其余筛选器禁用置灰。
- 新增 `Detailed Metrics` 明细表，按周维度展示旧看板兼容字段。
- 主漏斗标题改为 `Seller Onboarding Funnel`，主指标、转化率卡片均增加 `WoW xx%` 展示。
- 新增 `Submit Drill-down Analysis / 提资下钻分析` 和 `Moderation Drill-down Analysis / 审核下钻分析`。
- 点击主漏斗 Submit / Moderate 阶段可跳转到对应下钻分析模块，并短暂高亮目标模块。
