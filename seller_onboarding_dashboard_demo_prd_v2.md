# PRD：Seller Onboarding Dashboard Demo

## 1. 背景

需要搭建一个 **Seller Onboarding Dashboard Demo**，用于向老板和研发展示 Seller Onboarding 从注册、提资、审核到入驻的核心数据、漏斗转化和下钻分析。当前版本以 demo 展示为主，暂不接入真实数据，所有数据均使用 `xx`、`xx%` 或 mock data 占位。

本版本看板整体改为三部分：

1. **明细数据**：保留旧看板表格字段和形式，字段按截图 1 展示，数据用 `xx` 占位。
2. **主漏斗与转化率**：保留注册、提资、审核、入驻漏斗主体和转化率，并新增 WoW 数据展示。
3. **下钻分析**：分为提资分析和审核分析两个子版块，字段按截图 2 展示；点击漏斗中的提资或审核环节，可分别跳转到对应下钻版块。

---

## 2. 页面目标

### 2.1 业务目标

1. 让老板快速看到 Seller Onboarding 的整体明细数据、主漏斗表现和关键转化率。
2. 让研发快速理解页面结构、字段清单、交互逻辑和后续埋点需求。
3. 支持从主漏斗中的提资、审核环节快速跳转到对应下钻分析。
4. 保留旧看板的筛选器字段和明细表形式，降低迁移成本。

### 2.2 用户角色

- 业务 Owner / PM：关注整体趋势、漏斗转化和关键掉点。
- 研发：关注字段、页面结构、交互、埋点和接口预留。
- 数据分析：关注指标口径、筛选器、明细数据表和下钻字段。

---

## 3. 页面信息架构

页面从上到下分为 5 个区域：

1. 页面标题区
2. 筛选器区域
3. Part 1：明细数据
4. Part 2：主漏斗与转化率
5. Part 3：下钻分析

> 本版本删除页面最前端的切换看板栏，不再展示 `Onboarding / Custom Onboarding Report / WIP/Fund / Daily Push` tabs。

---

## 4. 页面标题区

### 4.1 标题

页面标题改为：

`Seller Onboarding Dashboard Demo`

### 4.2 视觉要求

- 标题居中展示。
- 字号 24–28px。
- 字重 600–700。
- 外层使用浅蓝色描边圆角框。
- 标题区域整体参考截图 3 中的标题样式。
- 页面顶部不展示切换看板栏。

---

## 5. 筛选器区域

### 5.1 筛选器整体要求

筛选器保留上一版 PRD 中的字段，但交互规则调整为：

- 仅 `business_type` 可交互。
- 除 `business_type` 外，其余筛选器均为不可交互状态。
- 不可交互筛选器仍展示当前值，但控件置灰，鼠标 hover 显示 disabled 状态。
- 不可交互筛选器点击后不弹出 dropdown。
- `business_type` 用于控制提资子流程中的 Business Details 是否展示。

### 5.2 筛选器字段

| 展示字段名 | 统一字段名 / key | 控件状态 | 默认展示 |
|---|---|---|---|
| registration report date T14 | `registration_report_date_t14` | 不可交互 | `Advanced (2026-xx-xx ~ 2026-xx-xx)` |
| business_type | `business_type` | **可交互** | `Select` |
| ACCU or not | `accu_or_not` | 不可交互 | `Exclude ACCU` |
| seller_segment_label | `seller_segment_label` | 不可交互 | `Exclude GKA` |
| Good Seller or not / is_good_seller | `is_good_seller` | 不可交互 | `Good Seller` |
| priority | `priority` | 不可交互 | `Select` |
| non shopify DTC 1M+ filter | `non_shopify_dtc_1m_filter` | 不可交互 | `1` |
| shopify 1M+ filter | `shopify_1m_filter` | 不可交互 | `1` |
| is_verified | `is_verified` | 不可交互 | `1` |
| is_dtc_lead | `is_dtc_lead` | 不可交互 | `Select` |
| DTC seller GMV filter | `dtc_seller_gmv_filter` | 不可交互 | `Select` |
| non shopify DTC 10M+ filter | `non_shopify_dtc_10m_filter` | 不可交互 | `Select` |
| shopify 10M+ filter | `shopify_10m_filter` | 不可交互 | `Select` |
| dtc_platform | `dtc_platform` | 不可交互 | `Select` |

### 5.3 `business_type` 交互规则

`business_type` 支持以下选项：

- `Select`
- `Personal`
- `Corporation`

交互影响：

| business_type | 页面影响 |
|---|---|
| `Select` | 默认展示所有提资子环节，包括 Business Details，并标注 `Corporation only` |
| `Personal` | 隐藏提资下钻中的 Business Details 子环节 |
| `Corporation` | 展示提资下钻中的 Business Details 子环节 |

### 5.4 筛选器按钮

筛选器区域右上角保留以下按钮：

- `Apply`
- `Reset`
- `Collapse Filters`

交互说明：

1. `Apply`：仅应用当前 `business_type` 选择，并触发 500ms mock loading。
2. `Reset`：将 `business_type` 恢复为 `Select`，其他不可交互筛选器保持默认值。
3. `Collapse Filters`：折叠筛选器区域，仅展示筛选器摘要。

---

# Part 1：明细数据

## 6. 明细数据模块

### 6.1 模块定位

明细数据是页面的第一部分，位置在筛选器下方。该模块用于保留旧看板中的核心表格视图，方便和旧看板进行对齐。

### 6.2 模块标题

`Detailed Metrics`

可在标题右侧展示标签：

- `Old dashboard compatible`
- `T14`
- `Mock Data`

### 6.3 表格形式

表格形式按截图 1 保留：

- 第一列为 `Measure name`。
- 后续列为周维度，如 `2026-W25(06/22~06/28)`。
- 表头为深蓝底白字。
- 第一列指标名单元格为蓝底白字。
- 数据单元格为白底。
- 数字右对齐。
- 百分比保留 `%`。
- 所有数据用 `xx` 或 `xx%` 占位。
- 支持横向滚动。
- 第一列 sticky。

### 6.4 周维度列

Demo 中建议展示以下周维度列：

- `2026-W25(06/22~06/28)`
- `2026-W24(06/15~06/21)`
- `2026-W23(06/08~06/14)`
- `2026-W22(06/01~06/07)`
- `2026-W21(05/25~05/31)`
- `2026-W20(05/18~05/24)`
- `2026-W19(05/11~05/17)`
- `2026-W18(05/04~05/10)`
- `2026-W17(04/27~05/03)`
- `2026-W16(04/20~04/26)`

### 6.5 明细表字段

明细表直接保留截图 1 中的字段和形式。

| Measure name | Demo 展示值 |
|---|---|
| `# Registered Seller` | `xx` |
| `# Submit sellers T14` | `xx` |
| `submission rate T14` | `xx%` |
| `one time pass rate T14 (denom = all submitted sellers)` | `xx%` |
| `Onboarding Rate -T14 (denom = all registered sellers)` | `xx%` |
| `% submit->onboarding - T14` | `xx%` |
| `Overall resubmit rate (T14) Fixed` | `xx%` |
| `-- # resubmit overall` | `xx` |
| `# sellers w/ low or med risk in pre-kyc T14` | `xx` |
| `-- % sellers w/ low or med risk in pre-kyc T14` | `xx%` |
| `# sellers w/ kyc/kyb passed T14` | `xx` |
| `-- % sellers w/ kyc/kyb passed T14` | `xx%` |
| `# sellers w/ human mod passed T14` | `xx` |
| `-- % sellers w/ human mod passed T14` | `xx%` |
| `# seller w/ pipo passed T14` | `xx` |
| `-- % seller w/ pipo passed T14` | `xx%` |
| `# Onboarded Seller(w/ UBO passed) T14` | `xx` |
| `--% Onboarded Seller(w/ UBO passed) T14` | `xx%` |
| `# one time pass seller T14` | `xx` |

> 说明：该模块作为旧看板兼容明细表，字段命名按截图保留。即使后续主漏斗或下钻分析中不单独突出某些指标，明细表仍按截图字段展示。

### 6.6 明细表交互

1. Hover 行时整行高亮。
2. 点击某个指标行时，可在 Part 2 主漏斗或 Part 3 下钻分析中高亮相关指标；若无对应模块，仅高亮当前行。
3. 表格支持横向滚动。
4. 第一列 `Measure name` 固定。
5. 数据均为 demo 占位，不需要真实排序、过滤或导出。

---

# Part 2：主漏斗与转化率

## 7. 主漏斗模块

### 7.1 模块定位

主漏斗是页面第二部分，位于明细数据下方。该模块用于展示 Seller Onboarding 的核心流程、每个阶段的主指标、相邻阶段转化率和 WoW 变化。

### 7.2 模块标题

`Seller Onboarding Funnel`

标题右侧展示：

- `T14`
- `Mock Data`
- `WoW Included`

### 7.3 主漏斗结构

采用横向 4 阶段漏斗：

`Register → Submit → Moderate → Onboard`

每个阶段是一个 funnel card。

| 阶段 | 展示名称 | 主指标 | Demo 值 | WoW |
|---|---|---|---|---|
| Register | 注册 Register | `# Registered Seller` | `xx` | `WoW xx%` |
| Submit | 提资 Submit | `# Submit sellers T14` | `xx` | `WoW xx%` |
| Moderate | 审核 Moderate | `# one time pass seller T14` | `xx` | `WoW xx%` |
| Onboard | 入驻 Onboard | `# Onboarded Seller(w/ UBO passed) T14` | `xx` | `WoW xx%` |

### 7.4 阶段卡片内容

每张卡片包含：

1. 阶段名称，中英双语。
2. 主指标名称。
3. 主指标数值：`xx`。
4. WoW 数据：`WoW xx%`。
5. 占总注册卖家的比例：`xx%`。
6. 当前阶段状态 tag：
   - Register：`Entry`
   - Submit：`Form Submission`
   - Moderate：`Risk & Compliance`
   - Onboard：`Success`

### 7.5 WoW 展示规则

WoW 数据用于展示当前周相对上一周的变化。

每个主指标和转化率均需要预留 WoW 展示位：

| 类型 | 展示形式 |
|---|---|
| 正向变化 | `WoW +xx%`，绿色 |
| 负向变化 | `WoW -xx%`，红色或橙色 |
| 持平 | `WoW 0.00%`，灰色 |
| 暂无数据 | `WoW --`，灰色 |

Demo 阶段统一展示为 `WoW xx%`。

### 7.6 漏斗连接线与转化率

阶段之间用箭头连接，并在箭头上展示转化率和 WoW。

| 连接 | 转化率指标 | Demo 值 | WoW |
|---|---|---|---|
| Register → Submit | `submission_rate_t14` | `xx%` | `WoW xx%` |
| Submit → Moderate | `one_time_pass_rate_t14` | `xx%` | `WoW xx%` |
| Register → Onboard | `onboarding_rate_t14_denom_registered` | `xx%` | `WoW xx%` |
| Submit → Onboard | `submit_to_onboarding_rate_t14` | `xx%` | `WoW xx%` |

### 7.7 点击跳转交互

主漏斗支持点击阶段卡片：

| 点击阶段 | 交互结果 |
|---|---|
| Register | 仅高亮 Register 阶段，不跳转 |
| Submit | 页面滚动至 Part 3 的 `Submit Drill-down Analysis` 子版块 |
| Moderate | 页面滚动至 Part 3 的 `Moderation Drill-down Analysis` 子版块 |
| Onboard | 仅高亮 Onboard 阶段，不跳转 |

交互细节：

1. 点击 `Submit` 卡片后，Submit 卡片高亮，并平滑滚动到提资分析板块。
2. 点击 `Moderate` 卡片后，Moderate 卡片高亮，并平滑滚动到审核分析板块。
3. 跳转后的目标板块顶部增加 1–2 秒浅蓝色闪烁高亮，提示用户已跳转。

---

## 8. 转化率桥模块

### 8.1 模块标题

`Conversion Bridge`

### 8.2 展示内容

在主漏斗下方展示 conversion cards，每张卡片展示转化率、分子、分母和 WoW。

| 转化链路 | 指标 | 分子 | 分母 | Demo 值 | WoW |
|---|---|---|---|---|---|
| Register → Submit | `submission_rate_t14` | `# Submit sellers T14` | `# Registered Seller` | `xx%` | `WoW xx%` |
| Submit → Moderate | `one_time_pass_rate_t14` | `# one time pass seller T14` | `# Submit sellers T14` | `xx%` | `WoW xx%` |
| Register → Onboard | `onboarding_rate_t14_denom_registered` | `# Onboarded Seller(w/ UBO passed) T14` | `# Registered Seller` | `xx%` | `WoW xx%` |
| Submit → Onboard | `submit_to_onboarding_rate_t14` | `# Onboarded Seller(w/ UBO passed) T14` | `# Submit sellers T14` | `xx%` | `WoW xx%` |

### 8.3 交互

1. Hover conversion card：展示指标字段、分子、分母、当前值和 WoW。
2. Click conversion card：高亮主漏斗中相关阶段，并高亮明细表中的相关字段行。
3. Demo 阶段不需要真实计算，统一展示 `xx%` 和 `WoW xx%`。

---

# Part 3：下钻分析

## 9. 下钻分析模块

### 9.1 模块定位

下钻分析是页面第三部分，位于主漏斗与转化率模块下方，分为两个子版块：

1. `Submit Drill-down Analysis`：提资下钻分析。
2. `Moderation Drill-down Analysis`：审核下钻分析。

点击主漏斗中的 Submit 或 Moderate 阶段，可以分别跳转到对应子版块。

---

## 10. Submit Drill-down Analysis

### 10.1 模块标题

`Submit Drill-down Analysis / 提资下钻分析`

标题右侧展示：

- `Jump from Submit Funnel Step`
- `Mock Data`

### 10.2 现有字段

提资下钻分析需要展示截图 2 中提资侧字段。

| 字段 / 指标 | 展示值 | 备注 |
|---|---|---|
| `-- # resubmit overall` | `xx` | 复提整体数量 |
| `Overall resubmit rate (T14) Fixed` | `xx%` | 截图标注数据缺失，demo 仍预留字段 |
| `# sellers w/ low or med risk in pre-kyc T14` | `xx` | pre-KYC 低 / 中风险卖家数 |
| `-- % sellers w/ low or med risk in pre-kyc` | `xx%` | 截图标注数据缺失，demo 仍预留字段 |

### 10.3 需要新增的字段

以下字段在提资下钻分析中作为新增字段展示，demo 阶段用 `xx` 或占位卡片展示：

| 新增字段 | 展示方式 | Demo 值 |
|---|---|---|
| `RCS pre-KYC risk levels` | 分布卡片 / 小表格 | `xx` |
| `the KYC/KYB precheck results` | 结果分布卡片 / 小表格 | `xx` |
| `seller usage of the AI assistant` | Top questions & responses 列表 | `xx` |

`seller usage of the AI assistant` 需要展示：

- Top questions from sellers：`xx`
- Top responses from AI agent：`xx`
- Usage volume：`xx`
- Related submit step：`xx`

### 10.4 待增加埋点的子环节数据

以下为提资流程中的子环节完成数，需要在页面中预留展示位。

| 页面 / 子环节 | 字段名 | 埋点口径 | Demo 值 |
|---|---|---|---|
| Business Details | `business_details_completed` | `next` 按钮点击数 | `xx` |
| Primary Representative | `primary_representative_completed` | `next` 按钮点击数 | `xx` |
| Shop Information | `shop_information_completed` | `next` 按钮点击数 | `xx` |
| Review Application | `review_application_submitted` | `submit` 按钮点击数 | `xx` |

### 10.5 Business Details 显隐逻辑

Business Details 是企业类型独有页面。

| business_type | 展示规则 |
|---|---|
| `Personal` | 隐藏 Business Details |
| `Corporation` | 展示 Business Details |
| `Select` | 展示 Business Details，并标注 `Corporation only` |

### 10.6 页面结构建议

Submit 下钻分析建议分为 3 行：

1. **Resubmit & Pre-KYC Summary**
   - `-- # resubmit overall`
   - `Overall resubmit rate (T14) Fixed`
   - `# sellers w/ low or med risk in pre-kyc T14`
   - `-- % sellers w/ low or med risk in pre-kyc`

2. **New Data Fields**
   - `RCS pre-KYC risk levels`
   - `the KYC/KYB precheck results`
   - `seller usage of the AI assistant`

3. **Submit Sub-step Tracking**
   - `Business Details`
   - `Primary Representative`
   - `Shop Information`
   - `Review Application`

---

## 11. Moderation Drill-down Analysis

### 11.1 模块标题

`Moderation Drill-down Analysis / 审核下钻分析`

标题右侧展示：

- `Jump from Moderate Funnel Step`
- `Mock Data`

### 11.2 现有字段

审核下钻分析需要展示截图 2 中审核侧字段。

| 字段 / 指标 | 中文释义 | Demo 值 |
|---|---|---|
| `# sellers w/ kyc/kyb passed T14` | T14 KYC/KYB 通过卖家数 | `xx` |
| `-- % sellers w/ kyc/kyb passed T14` | T14 KYC/KYB 通过卖家占比 | `xx%` |
| `# sellers w/ human mod passed T14` | T14 人工审核通过卖家数 | `xx` |
| `-- % sellers w/ human mod passed T14` | T14 人工审核通过卖家占比 | `xx%` |
| `# seller w/ pipo passed T14` | T14 PIPO 通过卖家数 | `xx` |
| `-- % seller w/ pipo passed T14` | T14 PIPO 通过卖家占比 | `xx%` |

### 11.3 需要新增的字段

以下字段在审核下钻分析中作为新增字段展示，demo 阶段用 `xx` 或占位卡片展示：

| 新增字段 | 展示方式 | Demo 值 |
|---|---|---|
| `Shop Name LLM results` | 结果卡片 / 小表格 | `xx` |
| `doc classification results` | 分类结果卡片 / 小表格 | `xx` |
| `LLM studio moderation results` | 审核结果卡片 / 小表格 | `xx` |
| `human moderation results` | 人工审核结果卡片 / 小表格 | `xx` |

### 11.4 页面结构建议

Moderation 下钻分析建议分为 2 行：

1. **Review Pass Summary**
   - KYC/KYB 通过卖家数和占比。
   - 人工审核通过卖家数和占比。
   - PIPO 通过卖家数和占比。

2. **Moderation Result Details**
   - `Shop Name LLM results`
   - `doc classification results`
   - `LLM studio moderation results`
   - `human moderation results`

---

## 12. 数据结构

请在前端代码中使用 mock data。字段名如下。

```js
const mockDashboardData = {
  filters: {
    registration_report_date_t14: "Advanced (2026-xx-xx ~ 2026-xx-xx)",
    business_type: "Select",
    accu_or_not: "Exclude ACCU",
    seller_segment_label: "Exclude GKA",
    is_good_seller: "Good Seller",
    priority: "Select",
    non_shopify_dtc_1m_filter: "1",
    shopify_1m_filter: "1",
    is_verified: "1",
    is_dtc_lead: "Select",
    dtc_seller_gmv_filter: "Select",
    non_shopify_dtc_10m_filter: "Select",
    shopify_10m_filter: "Select",
    dtc_platform: "Select"
  },

  filter_interaction: {
    editable: ["business_type"],
    disabled: [
      "registration_report_date_t14",
      "accu_or_not",
      "seller_segment_label",
      "is_good_seller",
      "priority",
      "non_shopify_dtc_1m_filter",
      "shopify_1m_filter",
      "is_verified",
      "is_dtc_lead",
      "dtc_seller_gmv_filter",
      "non_shopify_dtc_10m_filter",
      "shopify_10m_filter",
      "dtc_platform"
    ]
  },

  detail_metrics: {
    weeks: [
      "2026-W25(06/22~06/28)",
      "2026-W24(06/15~06/21)",
      "2026-W23(06/08~06/14)",
      "2026-W22(06/01~06/07)",
      "2026-W21(05/25~05/31)",
      "2026-W20(05/18~05/24)",
      "2026-W19(05/11~05/17)",
      "2026-W18(05/04~05/10)",
      "2026-W17(04/27~05/03)",
      "2026-W16(04/20~04/26)"
    ],
    rows: [
      "# Registered Seller",
      "# Submit sellers T14",
      "submission rate T14",
      "one time pass rate T14 (denom = all submitted sellers)",
      "Onboarding Rate -T14 (denom = all registered sellers)",
      "% submit->onboarding - T14",
      "Overall resubmit rate (T14) Fixed",
      "-- # resubmit overall",
      "# sellers w/ low or med risk in pre-kyc T14",
      "-- % sellers w/ low or med risk in pre-kyc T14",
      "# sellers w/ kyc/kyb passed T14",
      "-- % sellers w/ kyc/kyb passed T14",
      "# sellers w/ human mod passed T14",
      "-- % sellers w/ human mod passed T14",
      "# seller w/ pipo passed T14",
      "-- % seller w/ pipo passed T14",
      "# Onboarded Seller(w/ UBO passed) T14",
      "--% Onboarded Seller(w/ UBO passed) T14",
      "# one time pass seller T14"
    ]
  },

  funnel: [
    {
      key: "register",
      title: "Register",
      title_cn: "注册",
      main_metric_name: "# Registered Seller",
      value: "xx",
      wow: "xx%",
      share_of_registered: "100%",
      tag: "Entry"
    },
    {
      key: "submit",
      title: "Submit",
      title_cn: "提资",
      main_metric_name: "# Submit sellers T14",
      value: "xx",
      wow: "xx%",
      share_of_registered: "xx%",
      tag: "Form Submission",
      drilldown_target: "submit-drilldown"
    },
    {
      key: "moderate",
      title: "Moderate",
      title_cn: "审核",
      main_metric_name: "# one time pass seller T14",
      value: "xx",
      wow: "xx%",
      share_of_registered: "xx%",
      tag: "Risk & Compliance",
      drilldown_target: "moderation-drilldown"
    },
    {
      key: "onboard",
      title: "Onboard",
      title_cn: "入驻",
      main_metric_name: "# Onboarded Seller(w/ UBO passed) T14",
      value: "xx",
      wow: "xx%",
      share_of_registered: "xx%",
      tag: "Success"
    }
  ],

  conversions: [
    {
      key: "register_to_submit",
      label: "Register → Submit",
      metric_name: "submission rate T14",
      value: "xx%",
      wow: "xx%",
      numerator: "# Submit sellers T14",
      denominator: "# Registered Seller"
    },
    {
      key: "submit_to_moderate",
      label: "Submit → Moderate",
      metric_name: "one time pass rate T14",
      value: "xx%",
      wow: "xx%",
      numerator: "# one time pass seller T14",
      denominator: "# Submit sellers T14"
    },
    {
      key: "register_to_onboard",
      label: "Register → Onboard",
      metric_name: "Onboarding Rate -T14",
      value: "xx%",
      wow: "xx%",
      numerator: "# Onboarded Seller(w/ UBO passed) T14",
      denominator: "# Registered Seller"
    },
    {
      key: "submit_to_onboard",
      label: "Submit → Onboard",
      metric_name: "% submit->onboarding - T14",
      value: "xx%",
      wow: "xx%",
      numerator: "# Onboarded Seller(w/ UBO passed) T14",
      denominator: "# Submit sellers T14"
    }
  ],

  submit_drilldown: {
    existing_fields: [
      { name: "-- # resubmit overall", value: "xx" },
      { name: "Overall resubmit rate (T14) Fixed", value: "xx%", note: "data missing in current dashboard" },
      { name: "# sellers w/ low or med risk in pre-kyc T14", value: "xx" },
      { name: "-- % sellers w/ low or med risk in pre-kyc", value: "xx%", note: "data missing in current dashboard" }
    ],
    new_fields: [
      { name: "RCS pre-KYC risk levels", value: "xx" },
      { name: "the KYC/KYB precheck results", value: "xx" },
      { name: "seller usage of the AI assistant", value: "xx" }
    ],
    sub_step_tracking: [
      { key: "business_details", name: "Business Details", event: "next button click", value: "xx", visible_when: "business_type !== 'Personal'" },
      { key: "primary_representative", name: "Primary Representative", event: "next button click", value: "xx" },
      { key: "shop_information", name: "Shop Information", event: "next button click", value: "xx" },
      { key: "review_application", name: "Review Application", event: "submit button click", value: "xx" }
    ]
  },

  moderation_drilldown: {
    existing_fields: [
      { name: "# sellers w/ kyc/kyb passed T14", description: "T14 KYC/KYB 通过卖家数", value: "xx" },
      { name: "-- % sellers w/ kyc/kyb passed T14", description: "T14 KYC/KYB 通过卖家占比", value: "xx%" },
      { name: "# sellers w/ human mod passed T14", description: "T14 人工审核通过卖家数", value: "xx" },
      { name: "-- % sellers w/ human mod passed T14", description: "T14 人工审核通过卖家占比", value: "xx%" },
      { name: "# seller w/ pipo passed T14", description: "T14 PIPO 通过卖家数", value: "xx" },
      { name: "-- % seller w/ pipo passed T14", description: "T14 PIPO 通过卖家占比", value: "xx%" }
    ],
    new_fields: [
      { name: "Shop Name LLM results", value: "xx" },
      { name: "doc classification results", value: "xx" },
      { name: "LLM studio moderation results", value: "xx" },
      { name: "human moderation results", value: "xx" }
    ]
  }
};
```

---

## 13. 推荐组件拆分

建议将页面拆分为以下组件：

- `DashboardPage`
- `DashboardTitle`
- `FilterPanel`
- `DetailedMetricsTable`
- `FunnelSection`
- `FunnelCard`
- `ConversionBridge`
- `SubmitDrilldownAnalysis`
- `ModerationDrilldownAnalysis`
- `MetricCard`
- `ReadonlyFilter`
- `InteractiveBusinessTypeFilter`

---

## 14. 交互状态建议

页面至少需要维护以下前端状态：

```js
const [businessType, setBusinessType] = useState("Select");
const [filtersCollapsed, setFiltersCollapsed] = useState(false);
const [selectedFunnelStage, setSelectedFunnelStage] = useState(null);
const [highlightMetric, setHighlightMetric] = useState(null);
const [loading, setLoading] = useState(false);
```

### 14.1 漏斗点击跳转伪代码

```js
function handleFunnelStageClick(stageKey) {
  setSelectedFunnelStage(stageKey);

  if (stageKey === "submit") {
    document.getElementById("submit-drilldown")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  if (stageKey === "moderate") {
    document.getElementById("moderation-drilldown")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}
```

### 14.2 Business Details 显隐伪代码

```js
const shouldShowBusinessDetails = businessType !== "Personal";

const visibleSubmitSubSteps = mockDashboardData.submit_drilldown.sub_step_tracking.filter(step => {
  if (step.key === "business_details") {
    return shouldShowBusinessDetails;
  }
  return true;
});
```

---

## 15. 视觉规范

### 15.1 整体风格

整体 UI 风格参考旧数据看板：

- 白色主背景。
- 浅灰页面底色。
- 蓝色边框模块。
- 深蓝色表头。
- 紧凑型筛选器。
- 高信息密度。
- 企业级 dashboard 视觉。

### 15.2 色彩

- 页面背景：`#f7f8fa`
- 卡片背景：`#ffffff`
- 主蓝色：`#5f7fae`
- 深蓝表头：`#6f86ad`
- 浅蓝边框：`#9bb3d6`
- 文本主色：`#1f2329`
- 文本次色：`#646a73`
- 分割线：`#e5e6eb`
- 正向 WoW：`#2da44e`
- 负向 WoW：`#d1242f`
- Disabled 控件背景：`#f2f3f5`
- Disabled 控件文字：`#a8abb2`

### 15.3 字体

- 使用系统字体：`Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- 页面标题：24–28px / 600–700
- 模块标题：16px / 600
- KPI 数字：28–32px / 700
- 表格文字：12px
- 筛选器文字：12px

### 15.4 间距

- 页面 padding：16px
- 模块间距：12–16px
- 卡片内边距：12–16px
- 筛选器控件高度：32px
- 表格行高：32px

---

## 16. 响应式要求

桌面优先，适配 1440px 以上宽屏。

最小适配：

- 宽度 ≥ 1280px：完整展示。
- 宽度 < 1280px：主漏斗可横向滚动。
- 明细表必须支持横向滚动。
- 筛选器可折叠。
- 下钻分析卡片可从多列布局降级为单列布局。

---

## 17. 验收标准

1. 页面标题为 `Seller Onboarding Dashboard Demo`。
2. 页面顶部不展示切换看板栏。
3. 筛选器保留上一版字段。
4. 只有 `business_type` 可交互，其余筛选器均不可交互。
5. 页面整体分为三部分：
   - 明细数据
   - 主漏斗与转化率
   - 下钻分析
6. 明细数据表保留截图 1 中的字段和表格形式，数据用 `xx` 或 `xx%` 占位。
7. 主漏斗保留注册、提资、审核、入驻 4 个阶段。
8. 主漏斗和转化率卡片必须展示 WoW 数据。
9. 点击 Submit 漏斗环节，可以跳转到提资下钻分析。
10. 点击 Moderate 漏斗环节，可以跳转到审核下钻分析。
11. 提资下钻分析字段按截图 2 提资侧内容展示。
12. 审核下钻分析字段按截图 2 审核侧内容展示。
13. Business Details 在 `business_type = Personal` 时隐藏。
14. 所有真实数据位置先用 `xx`、`xx%` 或 mock data 占位。
15. 不要硬编码成图片；需要用 HTML/CSS/前端组件实现。
16. 代码结构清晰，方便后续接真实接口。

---

## 18. 非目标

本期不做：

1. 真实接口接入。
2. 真实数据过滤。
3. 数据导出。
4. 权限控制。
5. 多语言切换。
6. 移动端深度适配。
7. 明细表真实排序或真实计算。
8. WoW 真实计算。

---

## 19. 当前版本确认项

1. 整体看板改为三部分：明细数据、主漏斗与转化率、下钻分析。
2. 明细数据保留截图 1 的字段和形式，数据用 `xx` 占位。
3. 第二部分保留上次漏斗主体和转化率，并新增 WoW 数据。
4. 第三部分下钻分析分为提资和审核两个子版块。
5. 点击漏斗中的提资环节跳转到提资下钻分析。
6. 点击漏斗中的审核环节跳转到审核下钻分析。
7. 筛选器保留之前字段，但除 `business_type` 外，其他都不可交互。
8. 删除页面最前端的切换看板栏。
9. 看板标题改为 `Seller Onboarding Dashboard Demo`。
