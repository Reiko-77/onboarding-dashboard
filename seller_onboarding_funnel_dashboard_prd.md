# PRD：Seller Onboarding Funnel Dashboard

## 1. 背景

需要搭建一个 **Seller Onboarding 数据漏斗看板网页**，用于向老板和研发展示 Seller 从注册到最终入驻的全链路转化情况。页面需要在无真实数据的情况下先完成高保真前端原型，所有数据用 `xx` 或 mock data 占位。

看板需要覆盖：

- 主漏斗：注册、提资、审核、入驻
- 每个环节的子数据
- 各环节转化率
- 旧看板筛选器
- 周维度趋势和明细表

视觉风格参考旧 Aeolus 数据看板：白色背景、浅灰筛选器、蓝色模块边框、深蓝表头、紧凑信息密度、企业级 dashboard 质感。

---

## 2. 页面目标

### 2.1 业务目标

1. 让老板快速看到 Seller Onboarding 整体转化表现。
2. 让研发快速定位每个环节的数据口径和后续埋点/接口需求。
3. 支持从主漏斗下钻到提资页面、审核子环节等细分数据。
4. 保留旧看板筛选器，降低迁移成本。

### 2.2 用户角色

- 业务 Owner / PM：关注整体转化率和主要掉点。
- 研发：关注字段、埋点、接口、页面交互。
- 数据分析：关注口径、筛选器、指标表格。

---

## 3. 页面信息架构

页面从上到下分为 7 个区域：

1. 顶部 Tabs
2. 页面标题区
3. 筛选器区域
4. 核心 KPI 区域
5. 主漏斗模块
6. 子环节拆解模块
7. 趋势图与指标明细表

---

## 4. 顶部 Tabs

### 4.1 Tab 内容

页面顶部保留类似旧看板的 tabs：

- `Onboarding`：当前高亮
- `Custom Onboarding Report`
- `WIP/Fund`
- `Daily Push`

### 4.2 交互要求

1. 当前页面高亮 `Onboarding`。
2. 其他 tab 可置灰或点击无跳转。
3. Hover 时有浅蓝背景反馈。

---

## 5. 页面标题区

标题：

`Seller Onboarding Funnel`

视觉要求：

- 居中展示。
- 字号 24–28px。
- 字重 600。
- 外层有浅蓝色描边圆角框。
- 宽度约为页面 60%–70%。
- 高度约 48px。

---

## 6. 筛选器区域

### 6.1 筛选器设计

筛选器区域放在标题下方，参考旧看板的紧凑型多行 filter bar。

视觉要求：

- 白底卡片。
- 蓝色细边框。
- 圆角 4–6px。
- 内部使用 3–4 列栅格布局。
- Label 使用灰黑色小字号。
- Select 控件高度 32px。
- 已选项使用 chip 样式，如 `Exclude ACCU ×`。

### 6.2 筛选器字段

以下字段需要在页面中保留：

| 字段名 | 统一字段名 / key | 控件类型 | 默认展示 |
|---|---|---|---|
| registration report date T14 | `registration_report_date_t14` | Advanced date range | `Advanced (yyyy-mm-dd ~ yyyy-mm-dd)` |
| business_type | `business_type` | Select | `Select` |
| ACCU or not | `accu_or_not` | Multi-select / Exclude chip | `Exclude ACCU` |
| seller_segment_label | `seller_segment_label` | Multi-select / Exclude chip | `Exclude GKA` |
| Good Seller or not / is_good_seller | `is_good_seller` | Multi-select | `Good Seller` |
| priority | `priority` | Select / Multi-select | `Select` |
| non shopify DTC 1M+ filter | `non_shopify_dtc_1m_filter` | Select | `1` |
| shopify 1M+ filter | `shopify_1m_filter` | Select | `1` |
| is_verified | `is_verified` | Select | `1` |
| is_dtc_lead | `is_dtc_lead` | Select | `Select` |
| DTC seller GMV filter | `dtc_seller_gmv_filter` | Select | `Select` |
| non shopify DTC 10M+ filter | `non_shopify_dtc_10m_filter` | Select | `Select` |
| shopify 10M+ filter | `shopify_10m_filter` | Select | `Select` |
| dtc_platform | `dtc_platform` | Select | `Select` |

### 6.3 筛选器交互

1. 点击筛选器时展示 dropdown。
2. 当前阶段只做前端 mock，不需要真实过滤。
3. 点击 `Apply` 后刷新 mock 数据为 `xx`。
4. 点击 `Reset` 恢复默认值。
5. 筛选器区域右上角提供：
   - `Apply`
   - `Reset`
   - `Collapse Filters`

---

## 7. 核心 KPI 区域

### 7.1 KPI 卡片

筛选器下方展示 6 个 KPI 卡片。

| KPI | 字段 | 展示值 |
|---|---|---|
| Registered Seller | `registered_seller_t14` | `xx` |
| Submit Sellers T14 | `submit_sellers_t14` | `xx` |
| One Time Pass Seller T14 | `one_time_pass_seller_t14` | `xx` |
| Onboarded Seller Volume | `onboarded_seller_volume` | `xx` |
| Registration → Onboarding | `registration_to_onboarding_rate_t14` | `xx%` |
| Submit → Onboarding | `submit_to_onboarding_rate_t14` | `xx%` |

### 7.2 KPI 卡片视觉

- 白底。
- 蓝色顶部细线。
- 左上角为指标名。
- 中间为大数字。
- 右下角可展示 `T14`。
- Hover 时边框加深。
- 可预留 WoW 变化位，但当前用 `--` 占位。

---

## 8. 主漏斗模块

### 8.1 模块标题

`Seller Onboarding Main Funnel`

标题右侧展示：

- `T14`
- `Mock Data`
- `Last refresh: xx`

### 8.2 主漏斗结构

采用横向 4 阶段漏斗：

`Register → Submit → Moderate → Onboard`

每个阶段是一个 funnel card。

| 阶段 | 展示名称 | 主指标 |
|---|---|---|
| Register | 注册 Register | `# Registered Seller` |
| Submit | 提资 Submit | `# Submit sellers T14` |
| Moderate | 审核 Moderate | `# one time pass seller T14` |
| Onboard | 入驻 Onboard | `Onboarded Seller Volume` |

### 8.3 阶段卡片内容

每张卡片包含：

1. 阶段名称，中英双语。
2. 主指标数值。
3. 占总注册卖家的比例。
4. 当前阶段状态 tag：
   - Register：`Entry`
   - Submit：`Form Submission`
   - Moderate：`Risk & Compliance`
   - Onboard：`Success`
5. 子数据数量摘要：
   - Submit 阶段：`4 sub steps`，当 `business_type = personal` 时展示 `3 sub steps`
   - Moderate 阶段：`4 review checks`

### 8.4 漏斗连接线

阶段之间用箭头连接，并在箭头上展示转化率。

| 连接 | 指标 |
|---|---|
| Register → Submit | `submission_rate_t14` |
| Submit → Moderate | `one_time_pass_rate_t14` |

### 8.5 跨阶段总转化率

除相邻阶段转化外，需要在主漏斗下方或右侧展示跨阶段总转化率：

| 转化链路 | 指标 |
|---|---|
| Register → Onboard | `registration_to_onboarding_rate_t14` |
| Submit → Onboard | `submit_to_onboarding_rate_t14` |

> 注意：本版本不展示 `Moderate → Onboard` 转化率。

---

## 9. 子环节拆解模块

主漏斗下方展示每个阶段的子数据。建议采用 4 列布局，每列对应一个主阶段。

---

### 9.1 Register 子模块

标题：`Register / 注册`

展示字段：

| 指标 | 字段 | 展示 |
|---|---|---|
| 注册卖家数 | `registered_seller_t14` | `xx` |

说明：

- 这是整个漏斗入口。
- 子模块中展示 `From registration success / seller created` 的说明文案。

---

### 9.2 Submit 子模块

标题：`Submit / 提资`

展示字段：

| 指标 | 字段 | 展示 |
|---|---|---|
| T14 提资卖家数 | `submit_sellers_t14` | `xx` |
| Business Details 页面完成数 | `business_details_completed` | `xx` |
| Primary Representative 页面完成数 | `primary_representative_completed` | `xx` |
| Shop Information 页面完成数 | `shop_information_completed` | `xx` |
| Review Application 页面提交数 | `review_application_submitted` | `xx` |
| 注册 → 提资转化率 | `submission_rate_t14` | `xx%` |

Submit 子模块建议做成“页面进度条”：

`Business Details → Primary Representative → Shop Information → Review Application`

每个 step 显示：

- Step 名称。
- 完成数。
- 相对上一步转化率，占位 `xx%`。
- 埋点来源。

页面完成数口径：

| 页面 | 字段 | 埋点口径 |
|---|---|---|
| Business Details | `business_details_completed` | `next` 按钮点击数 |
| Primary Representative | `primary_representative_completed` | `next` 按钮点击数 |
| Shop Information | `shop_information_completed` | `next` 按钮点击数 |
| Review Application | `review_application_submitted` | `submit` 按钮点击数 |

特殊逻辑：

- Business Details 是企业类型独有页面。
- 当 `business_type = personal` 时，隐藏 Business Details step。
- 当 `business_type = corporation` 或未筛选具体 business type 时，展示 Business Details step。
- 当隐藏 Business Details 时，Submit 子流程展示为：

`Primary Representative → Shop Information → Review Application`

---

### 9.3 Moderate 子模块

标题：`Moderate / 审核`

展示字段：

| 指标 | 字段 | 展示 |
|---|---|---|
| T14 一次性通过卖家数 | `one_time_pass_seller_t14` | `xx` |
| T14 KYC/KYB 通过卖家数 | `kyc_kyb_passed_seller_t14` | `xx` |
| T14 人工审核通过卖家数 | `human_mod_passed_seller_t14` | `xx` |
| T14 PIPO 通过卖家数 | `pipo_passed_seller_t14` | `xx` |
| 提资 → 审核转化率 | `one_time_pass_rate_t14` | `xx%` |

视觉建议：

- 使用 4 个并列审核项小卡片。
- 每个卡片左侧有状态 icon。
- 右侧展示 count 和 pass rate 占位。
- 颜色保持克制：蓝色 / 绿色为通过，灰色为未激活。

不展示内容：

- 不展示 UBO 相关指标。
- 不展示 `Moderate → Onboard` 转化率。

---

### 9.4 Onboard 子模块

标题：`Onboard / 入驻`

展示字段：

| 指标 | 字段 | 展示 |
|---|---|---|
| 入驻卖家量 | `onboarded_seller_volume` | `xx` |
| 注册 → 入驻转化率 | `registration_to_onboarding_rate_t14` | `xx%` |
| 提资 → 入驻转化率 | `submit_to_onboarding_rate_t14` | `xx%` |

不展示内容：

- 不展示 `审核 → 入驻转化率`。

---

## 10. 转化率桥模块

### 10.1 模块标题

`Conversion Bridge`

### 10.2 展示内容

用一组横向 conversion cards 展示关键转化。

| 转化链路 | 指标 | 展示 |
|---|---|---|
| Register → Submit | `submission_rate_t14` | `xx%` |
| Submit → Moderate | `one_time_pass_rate_t14` | `xx%` |
| Register → Onboard | `registration_to_onboarding_rate_t14` | `xx%` |
| Submit → Onboard | `submit_to_onboarding_rate_t14` | `xx%` |

不展示：

- `Moderate → Onboard`
- `审核 → 入驻转化率`

### 10.3 交互

1. Hover 某个 conversion card：
   - 展示 numerator。
   - 展示 denominator。
   - 展示公式。
2. Click 某个 conversion card：
   - 高亮主漏斗对应阶段。
   - 下方明细表只高亮相关指标行。

---

## 11. 趋势图模块

### 11.1 模块标题

`Weekly Trend`

### 11.2 图表内容

展示以下指标的周维度趋势：

- `submission_rate_t14`
- `one_time_pass_rate_t14`
- `registration_to_onboarding_rate_t14`
- `submit_to_onboarding_rate_t14`

### 11.3 图表形式

- 折线图。
- X 轴：week，例如 `2026-W24`。
- Y 轴：百分比。
- 默认展示 4 条线。
- 可通过 legend 开关某条线。
- 当前数据用 mock：`xx%` 或模拟占位数。

### 11.4 视觉要求

- 图表背景白色。
- 网格线浅灰。
- 颜色使用蓝、黄、绿、橙。
- Tooltip 风格简洁紧凑。

---

## 12. 指标明细表

### 12.1 模块标题

`Seller Onboarding Metrics Table`

### 12.2 表格结构

沿用旧看板风格：

- 左侧第一列为 `Measure name`。
- 右侧为周维度列。
- 表头深蓝色。
- 指标名列蓝色底。
- 数据单元格白底。
- 数字右对齐。
- 百分比展示两位小数。

### 12.3 表格行

需要包含以下指标：

| Measure name | 字段 |
|---|---|
| # Registered Seller | `registered_seller_t14` |
| # Submit sellers T14 | `submit_sellers_t14` |
| submission rate T14 | `submission_rate_t14` |
| one time pass rate T14 | `one_time_pass_rate_t14` |
| # one time pass seller T14 | `one_time_pass_seller_t14` |
| # sellers w/ kyc/kyb passed T14 | `kyc_kyb_passed_seller_t14` |
| # sellers w/ human mod passed T14 | `human_mod_passed_seller_t14` |
| # seller w/ pipo passed T14 | `pipo_passed_seller_t14` |
| Onboarded Seller Volume | `onboarded_seller_volume` |
| % Registration->Onboarding -T14 | `registration_to_onboarding_rate_t14` |
| % submit->onboarding - T14 | `submit_to_onboarding_rate_t14` |

不展示：

- UBO 相关指标。
- 审核 → 入驻转化率。

### 12.4 周维度列

示例：

- `2026-W24`
- `2026-W23`
- `2026-W22`
- `2026-W21`
- `2026-W20`
- `2026-W19`

数据均用 `xx` 或 mock 占位。

---

## 13. 页面交互

### 13.1 主漏斗点击

点击任一阶段：

- 该阶段卡片高亮。
- 下方子模块滚动到对应阶段。
- 右侧打开 detail drawer 或 inline detail panel。

Detail panel 内容：

- 阶段名称。
- 主指标。
- 子指标列表。
- 相关转化率。
- 字段名。
- 口径说明。

### 13.2 Tooltip

所有关键指标 hover 时展示：

- 字段名。
- 中文释义。
- numerator。
- denominator。
- 当前是否 mock data。

### 13.3 筛选器交互

- Apply：触发 mock loading 状态，500ms 后恢复。
- Reset：恢复默认筛选。
- Collapse：折叠筛选器，只保留一行摘要。

### 13.4 表格交互

- Hover 行高亮。
- 点击行时趋势图切换为该指标。
- 支持横向滚动。
- 首列 sticky。

### 13.5 Business Details 展示逻辑

- 当 `business_type = personal` 时：
  - Submit 子模块隐藏 Business Details。
  - Submit 阶段摘要展示 `3 sub steps`。
- 当 `business_type = corporation` 时：
  - Submit 子模块展示 Business Details。
  - Submit 阶段摘要展示 `4 sub steps`。
- 当 `business_type = Select` 或包含多种类型时：
  - 默认展示 Business Details。
  - 可在 Business Details step 上增加说明：`Corporation only`。

---

## 14. 数据结构

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

  kpis: {
    registered_seller_t14: "xx",
    submit_sellers_t14: "xx",
    one_time_pass_seller_t14: "xx",
    onboarded_seller_volume: "xx",
    registration_to_onboarding_rate_t14: "xx%",
    submit_to_onboarding_rate_t14: "xx%"
  },

  funnel: [
    {
      key: "register",
      title: "Register",
      title_cn: "注册",
      main_metric_name: "# Registered Seller",
      main_metric_key: "registered_seller_t14",
      value: "xx",
      share_of_registered: "100%",
      tag: "Entry"
    },
    {
      key: "submit",
      title: "Submit",
      title_cn: "提资",
      main_metric_name: "# Submit sellers T14",
      main_metric_key: "submit_sellers_t14",
      value: "xx",
      share_of_registered: "xx%",
      tag: "Form Submission",
      sub_steps_when_corporation: 4,
      sub_steps_when_personal: 3
    },
    {
      key: "moderate",
      title: "Moderate",
      title_cn: "审核",
      main_metric_name: "# one time pass seller T14",
      main_metric_key: "one_time_pass_seller_t14",
      value: "xx",
      share_of_registered: "xx%",
      tag: "Risk & Compliance"
    },
    {
      key: "onboard",
      title: "Onboard",
      title_cn: "入驻",
      main_metric_name: "Onboarded Seller Volume",
      main_metric_key: "onboarded_seller_volume",
      value: "xx",
      share_of_registered: "xx%",
      tag: "Success"
    }
  ],

  conversions: {
    submission_rate_t14: "xx%",
    one_time_pass_rate_t14: "xx%",
    registration_to_onboarding_rate_t14: "xx%",
    submit_to_onboarding_rate_t14: "xx%"
  },

  submit_sub_steps: [
    {
      key: "business_details",
      name: "Business Details",
      name_cn: "企业信息",
      metric_key: "business_details_completed",
      event: "next button click",
      value: "xx",
      conversion_from_previous: "xx%",
      visible_when: "business_type !== 'personal'",
      note: "Corporation only"
    },
    {
      key: "primary_representative",
      name: "Primary Representative",
      name_cn: "主要代表人",
      metric_key: "primary_representative_completed",
      event: "next button click",
      value: "xx",
      conversion_from_previous: "xx%"
    },
    {
      key: "shop_information",
      name: "Shop Information",
      name_cn: "店铺信息",
      metric_key: "shop_information_completed",
      event: "next button click",
      value: "xx",
      conversion_from_previous: "xx%"
    },
    {
      key: "review_application",
      name: "Review Application",
      name_cn: "提交审核",
      metric_key: "review_application_submitted",
      event: "submit button click",
      value: "xx",
      conversion_from_previous: "xx%"
    }
  ],

  moderate_sub_steps: [
    {
      name: "One Time Pass Seller T14",
      name_cn: "一次性通过卖家数",
      metric_key: "one_time_pass_seller_t14",
      value: "xx"
    },
    {
      name: "KYC/KYB Passed T14",
      name_cn: "KYC/KYB 通过卖家数",
      metric_key: "kyc_kyb_passed_seller_t14",
      value: "xx"
    },
    {
      name: "Human Mod Passed T14",
      name_cn: "人工审核通过卖家数",
      metric_key: "human_mod_passed_seller_t14",
      value: "xx"
    },
    {
      name: "PIPO Passed T14",
      name_cn: "PIPO 通过卖家数",
      metric_key: "pipo_passed_seller_t14",
      value: "xx"
    }
  ],

  weekly_metrics: [
    {
      measure_name: "# Registered Seller",
      metric_key: "registered_seller_t14",
      values: {
        "2026-W24": "xx",
        "2026-W23": "xx",
        "2026-W22": "xx",
        "2026-W21": "xx"
      }
    },
    {
      measure_name: "# Submit sellers T14",
      metric_key: "submit_sellers_t14",
      values: {
        "2026-W24": "xx",
        "2026-W23": "xx",
        "2026-W22": "xx",
        "2026-W21": "xx"
      }
    },
    {
      measure_name: "submission rate T14",
      metric_key: "submission_rate_t14",
      values: {
        "2026-W24": "xx%",
        "2026-W23": "xx%",
        "2026-W22": "xx%",
        "2026-W21": "xx%"
      }
    },
    {
      measure_name: "one time pass rate T14",
      metric_key: "one_time_pass_rate_t14",
      values: {
        "2026-W24": "xx%",
        "2026-W23": "xx%",
        "2026-W22": "xx%",
        "2026-W21": "xx%"
      }
    },
    {
      measure_name: "Onboarded Seller Volume",
      metric_key: "onboarded_seller_volume",
      values: {
        "2026-W24": "xx",
        "2026-W23": "xx",
        "2026-W22": "xx",
        "2026-W21": "xx"
      }
    }
  ]
};
```

---

## 15. 字段清单

### 15.1 原始指标字段

| 字段 | 含义 |
|---|---|
| `registered_seller_t14` | T14 注册卖家数 |
| `submit_sellers_t14` | T14 提资卖家数 |
| `one_time_pass_seller_t14` | T14 一次性通过卖家数 |
| `kyc_kyb_passed_seller_t14` | T14 KYC/KYB 通过卖家数 |
| `human_mod_passed_seller_t14` | T14 人工审核通过卖家数 |
| `pipo_passed_seller_t14` | T14 PIPO 通过卖家数 |
| `onboarded_seller_volume` | 入驻卖家量 |
| `business_details_completed` | Business Details 页面完成数 |
| `primary_representative_completed` | Primary Representative 页面完成数 |
| `shop_information_completed` | Shop Information 页面完成数 |
| `review_application_submitted` | Review Application 页面提交数 |

### 15.2 转化率字段

| 字段 | 含义 |
|---|---|
| `submission_rate_t14` | 注册 → 提资转化率 |
| `one_time_pass_rate_t14` | 提资 → 审核转化率 |
| `registration_to_onboarding_rate_t14` | 注册 → 入驻转化率 |
| `submit_to_onboarding_rate_t14` | 提资 → 入驻转化率 |

### 15.3 不展示字段 / 指标

本版本明确不展示：

- UBO 相关指标。
- 审核 → 入驻转化率。
- `moderate_to_onboarding_rate_t14`。

---

## 16. 视觉规范

### 16.1 色彩

- 页面背景：`#f7f8fa`
- 卡片背景：`#ffffff`
- 主蓝色：`#5f7fae`
- 深蓝表头：`#6f86ad`
- 浅蓝边框：`#9bb3d6`
- 文本主色：`#1f2329`
- 文本次色：`#646a73`
- 分割线：`#e5e6eb`
- 成功绿色：`#2da44e`
- 警示黄色：`#d4a72c`

### 16.2 字体

- 使用系统字体：`Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- 页面标题：24–28px / 600
- 模块标题：16px / 600
- KPI 数字：28–32px / 700
- 表格文字：12px
- 筛选器文字：12px

### 16.3 间距

- 页面 padding：16px
- 模块间距：12–16px
- 卡片内边距：12–16px
- 筛选器控件高度：32px
- 表格行高：32px

---

## 17. 响应式要求

桌面优先，适配 1440px 以上宽屏。

最小适配：

- 宽度 ≥ 1280px：完整展示。
- 宽度 < 1280px：主漏斗可横向滚动。
- 表格必须支持横向滚动。
- 筛选器可折叠。

---

## 18. 验收标准

1. 页面整体视觉接近旧 Aeolus 看板风格。
2. 首屏能看到：
   - 筛选器
   - KPI 卡片
   - 主漏斗
3. 主漏斗必须包含：
   - 注册
   - 提资
   - 审核
   - 入驻
4. 每个主阶段必须展示子数据。
5. 必须展示以下转化率：
   - 注册 → 提资
   - 提资 → 审核
   - 注册 → 入驻
   - 提资 → 入驻
6. 不展示审核 → 入驻转化率。
7. 不展示 UBO 相关指标。
8. Business Details 在个人卖家场景下隐藏。
9. `Good Seller or not` 和 `is_good_seller` 统一使用字段名 `is_good_seller`。
10. 必须有趋势图区域。
11. 必须有旧看板风格的 metrics table。
12. 所有真实数据位置先用 `xx` 或 mock data 占位。
13. 不要硬编码成图片；需要用 HTML/CSS/前端组件实现。
14. 代码结构清晰，方便后续接真实接口。

---

## 19. 非目标

本期不做：

1. 真实接口接入。
2. 真实数据过滤。
3. 权限控制。
4. 数据导出。
5. 多语言切换。
6. 移动端深度适配。
7. UBO 指标展示。
8. 审核 → 入驻转化率展示。

---

## 20. 给 Coding Agent 的实现建议

### 20.1 推荐组件拆分

建议将页面拆分为以下组件：

- `DashboardPage`
- `TopTabs`
- `DashboardTitle`
- `FilterPanel`
- `KpiCards`
- `MainFunnel`
- `ConversionBridge`
- `SubStepBreakdown`
- `WeeklyTrendChart`
- `MetricsTable`
- `DetailDrawer`

### 20.2 推荐交互状态

页面至少需要维护以下前端状态：

```js
const [selectedStage, setSelectedStage] = useState("register");
const [filtersCollapsed, setFiltersCollapsed] = useState(false);
const [filters, setFilters] = useState(mockDashboardData.filters);
const [highlightMetric, setHighlightMetric] = useState(null);
const [loading, setLoading] = useState(false);
```

### 20.3 Business Details 显隐伪代码

```js
const shouldShowBusinessDetails = filters.business_type !== "personal";

const visibleSubmitSteps = mockDashboardData.submit_sub_steps.filter(step => {
  if (step.key === "business_details") {
    return shouldShowBusinessDetails;
  }
  return true;
});
```

### 20.4 数据占位原则

- 所有 count 使用 `xx`。
- 所有 rate 使用 `xx%`。
- 所有趋势数据可使用 mock number，但 UI 展示仍可保留 `xx%`。
- 如果需要展示 loading skeleton，可以用浅灰 block 占位。

---

## 21. 当前已确认事项

1. 不展示审核 → 入驻转化率。
2. Submit 子页面完成数都来自按钮点击：
   - Business Details：`next` 按钮点击数。
   - Primary Representative：`next` 按钮点击数。
   - Shop Information：`next` 按钮点击数。
   - Review Application：`submit` 按钮点击数。
3. Business Details 是企业类型独有页面，个人卖家隐藏该 step。
4. 不展示 UBO 相关指标。
5. `Good Seller or not` 和 `is_good_seller` 统一字段命名为 `is_good_seller`。
