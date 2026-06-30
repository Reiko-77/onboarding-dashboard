const defaultFilters = {
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
  dtc_platform: "Select",
};

const filterFields = [
  ["registration_report_date_t14", "registration report date T14", ["Advanced (2026-xx-xx ~ 2026-xx-xx)"]],
  ["business_type", "business_type", ["Select", "Personal", "Corporation"]],
  ["accu_or_not", "ACCU or not", ["Exclude ACCU"]],
  ["seller_segment_label", "seller_segment_label", ["Exclude GKA"]],
  ["is_good_seller", "Good Seller or not / is_good_seller", ["Good Seller"]],
  ["priority", "priority", ["Select"]],
  ["non_shopify_dtc_1m_filter", "non shopify DTC 1M+ filter", ["1"]],
  ["shopify_1m_filter", "shopify 1M+ filter", ["1"]],
  ["is_verified", "is_verified", ["1"]],
  ["is_dtc_lead", "is_dtc_lead", ["Select"]],
  ["dtc_seller_gmv_filter", "DTC seller GMV filter", ["Select"]],
  ["non_shopify_dtc_10m_filter", "non shopify DTC 10M+ filter", ["Select"]],
  ["shopify_10m_filter", "shopify 10M+ filter", ["Select"]],
  ["dtc_platform", "dtc_platform", ["Select"]],
];

const detailWeeks = [
  "2026-W25(06/22~06/28)",
  "2026-W24(06/15~06/21)",
  "2026-W23(06/08~06/14)",
  "2026-W22(06/01~06/07)",
  "2026-W21(05/25~05/31)",
  "2026-W20(05/18~05/24)",
  "2026-W19(05/11~05/17)",
  "2026-W18(05/04~05/10)",
  "2026-W17(04/27~05/03)",
  "2026-W16(04/20~04/26)",
];

const detailRows = [
  ["# Registered Seller", "registered_seller_t14", "xx"],
  ["# Submit sellers T14", "submit_sellers_t14", "xx"],
  ["submission rate T14", "submission_rate_t14", "xx%"],
  ["one time pass rate T14 (denom = all submitted sellers)", "one_time_pass_rate_t14", "xx%"],
  ["Onboarding Rate -T14 (denom = all registered sellers)", "onboarding_rate_t14_denom_registered", "xx%"],
  ["% submit->onboarding - T14", "submit_to_onboarding_rate_t14", "xx%"],
  ["Overall resubmit rate (T14) Fixed", "overall_resubmit_rate_t14_fixed", "xx%"],
  ["-- # resubmit overall", "resubmit_overall", "xx"],
  ["# sellers w/ low or med risk in pre-kyc T14", "low_or_med_risk_pre_kyc_t14", "xx"],
  ["-- % sellers w/ low or med risk in pre-kyc T14", "low_or_med_risk_pre_kyc_rate_t14", "xx%"],
  ["# sellers w/ kyc/kyb passed T14", "kyc_kyb_passed_seller_t14", "xx"],
  ["-- % sellers w/ kyc/kyb passed T14", "kyc_kyb_passed_rate_t14", "xx%"],
  ["# sellers w/ human mod passed T14", "human_mod_passed_seller_t14", "xx"],
  ["-- % sellers w/ human mod passed T14", "human_mod_passed_rate_t14", "xx%"],
  ["# seller w/ pipo passed T14", "pipo_passed_seller_t14", "xx"],
  ["-- % seller w/ pipo passed T14", "pipo_passed_rate_t14", "xx%"],
  ["# Onboarded Seller(w/ UBO passed) T14", "onboarded_seller_w_ubo_passed_t14", "xx"],
  ["--% Onboarded Seller(w/ UBO passed) T14", "onboarded_seller_w_ubo_passed_rate_t14", "xx%"],
  ["# one time pass seller T14", "one_time_pass_seller_t14", "xx"],
];

const dashboardData = {
  funnel: [
    {
      key: "register",
      title: "Register",
      titleCn: "注册",
      metric: "# Registered Seller",
      metricKey: "registered_seller_t14",
      value: "xx",
      wow: "WoW xx%",
      share: "100%",
      tag: "Entry",
    },
    {
      key: "submit",
      title: "Submit",
      titleCn: "提资",
      metric: "# Submit sellers T14",
      metricKey: "submit_sellers_t14",
      value: "xx",
      wow: "WoW xx%",
      share: "xx%",
      tag: "Form Submission",
      drilldownTarget: "submit-drilldown",
    },
    {
      key: "moderate",
      title: "Moderate",
      titleCn: "审核",
      metric: "# one time pass seller T14",
      metricKey: "one_time_pass_seller_t14",
      value: "xx",
      wow: "WoW xx%",
      share: "xx%",
      tag: "Risk & Compliance",
      drilldownTarget: "moderation-drilldown",
    },
    {
      key: "onboard",
      title: "Onboard",
      titleCn: "入驻",
      metric: "# Onboarded Seller(w/ UBO passed) T14",
      metricKey: "onboarded_seller_w_ubo_passed_t14",
      value: "xx",
      wow: "WoW xx%",
      share: "xx%",
      tag: "Success",
    },
  ],
  arrows: [
    { route: "Register → Submit", value: "xx%", wow: "WoW xx%" },
    { route: "Submit → Moderate", value: "xx%", wow: "WoW xx%" },
    { route: "Moderate → Onboard", value: "", wow: "" },
  ],
  conversions: [
    {
      route: "Register → Submit",
      metricKey: "submission_rate_t14",
      metricName: "submission rate T14",
      value: "xx%",
      wow: "WoW xx%",
      numerator: "# Submit sellers T14",
      denominator: "# Registered Seller",
      stages: ["register", "submit"],
    },
    {
      route: "Submit → Moderate",
      metricKey: "one_time_pass_rate_t14",
      metricName: "one time pass rate T14",
      value: "xx%",
      wow: "WoW xx%",
      numerator: "# one time pass seller T14",
      denominator: "# Submit sellers T14",
      stages: ["submit", "moderate"],
    },
    {
      route: "Register → Onboard",
      metricKey: "onboarding_rate_t14_denom_registered",
      metricName: "Onboarding Rate -T14",
      value: "xx%",
      wow: "WoW xx%",
      numerator: "# Onboarded Seller(w/ UBO passed) T14",
      denominator: "# Registered Seller",
      stages: ["register", "onboard"],
    },
    {
      route: "Submit → Onboard",
      metricKey: "submit_to_onboarding_rate_t14",
      metricName: "% submit->onboarding - T14",
      value: "xx%",
      wow: "WoW xx%",
      numerator: "# Onboarded Seller(w/ UBO passed) T14",
      denominator: "# Submit sellers T14",
      stages: ["submit", "onboard"],
    },
  ],
  submitSummary: [
    ["-- # resubmit overall", "xx", "复提整体数量"],
    ["Overall resubmit rate (T14) Fixed", "xx%", "data missing in current dashboard"],
    ["# sellers w/ low or med risk in pre-kyc T14", "xx", "pre-KYC low / medium risk sellers"],
    ["-- % sellers w/ low or med risk in pre-kyc", "xx%", "data missing in current dashboard"],
  ],
  submitNewFields: [
    ["RCS pre-KYC risk levels", "xx", "Distribution placeholder"],
    ["the KYC/KYB precheck results", "xx", "Result distribution placeholder"],
    ["seller usage of the AI assistant", "xx", "Top questions, responses, usage volume, related submit step"],
  ],
  submitSubSteps: [
    ["business_details", "Business Details", "business_details_completed", "next button click", "xx", "Corporation only"],
    ["primary_representative", "Primary Representative", "primary_representative_completed", "next button click", "xx", ""],
    ["shop_information", "Shop Information", "shop_information_completed", "next button click", "xx", ""],
    ["review_application", "Review Application", "review_application_submitted", "submit button click", "xx", ""],
  ],
  moderationSummary: [
    ["# sellers w/ kyc/kyb passed T14", "T14 KYC/KYB 通过卖家数", "xx"],
    ["-- % sellers w/ kyc/kyb passed T14", "T14 KYC/KYB 通过卖家占比", "xx%"],
    ["# sellers w/ human mod passed T14", "T14 人工审核通过卖家数", "xx"],
    ["-- % sellers w/ human mod passed T14", "T14 人工审核通过卖家占比", "xx%"],
    ["# seller w/ pipo passed T14", "T14 PIPO 通过卖家数", "xx"],
    ["-- % seller w/ pipo passed T14", "T14 PIPO 通过卖家占比", "xx%"],
  ],
  moderationNewFields: [
    ["Shop Name LLM results", "xx"],
    ["doc classification results", "xx"],
    ["LLM studio moderation results", "xx"],
    ["human moderation results", "xx"],
  ],
};

const state = {
  filters: { ...defaultFilters },
  filtersCollapsed: false,
  selectedStage: null,
  highlightMetric: null,
  flashTarget: null,
  loading: false,
};

const app = document.querySelector("#app");

function shouldShowBusinessDetails() {
  return state.filters.business_type !== "Personal";
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#039;" };
    return map[char];
  });
}

function render() {
  app.className = state.loading ? "loading" : "";
  app.innerHTML = `
    <main class="dashboard-shell">
      ${renderTitle()}
      ${renderFilters()}
      ${renderDetailedMetrics()}
      ${renderMainFunnel()}
      ${renderConversionBridge()}
      ${renderDrilldowns()}
    </main>
  `;
  bindEvents();
}

function renderTitle() {
  return `<section class="title-frame"><h1>Seller Onboarding Dashboard Demo</h1></section>`;
}

function renderFilters() {
  const fieldsHtml = filterFields
    .map(([key, label, options]) => {
      const value = state.filters[key];
      const disabled = key !== "business_type";
      const optionHtml = options.map((option) => `<option value="${escapeHtml(option)}" ${option === value ? "selected" : ""}>${escapeHtml(option)}</option>`).join("");
      return `<div class="filter-field ${disabled ? "disabled" : ""}" title="${disabled ? "Disabled in demo" : "Controls Business Details visibility"}">
        <label for="${key}">${label}</label>
        <div class="select-wrap">
          <select id="${key}" data-filter-key="${key}" ${disabled ? "disabled" : ""}>${optionHtml}</select>
        </div>
      </div>`;
    })
    .join("");

  const summary = Object.entries(state.filters)
    .slice(0, 7)
    .map(([key, value]) => `<span class="chip">${key}: ${escapeHtml(value)}</span>`)
    .join("");

  return `<section class="filter-panel card ${state.filtersCollapsed ? "collapsed" : ""}">
    <div class="filter-toolbar">
      <h2 class="section-title">Filter Bar <span class="meta-pill">Only business_type editable</span></h2>
      <div class="filter-actions">
        <button class="btn primary" type="button" data-action="apply">Apply</button>
        <button class="btn" type="button" data-action="reset">Reset</button>
        <button class="btn" type="button" data-action="collapse">${state.filtersCollapsed ? "Expand Filters" : "Collapse Filters"}</button>
      </div>
    </div>
    <div class="filters-grid">${fieldsHtml}</div>
    <div class="filter-summary">${summary}</div>
  </section>`;
}

function renderDetailedMetrics() {
  return `<section class="module card">
    <div class="module-head">
      <h2 class="section-title">Detailed Metrics</h2>
      <div class="module-meta">
        <span class="meta-pill">Old dashboard compatible</span>
        <span class="meta-pill">T14</span>
        <span class="meta-pill">Mock Data</span>
      </div>
    </div>
    <div class="table-scroll">
      <table>
        <thead>
          <tr>
            <th>Measure name</th>
            ${detailWeeks.map((week) => `<th>${week}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${detailRows
            .map(([name, key, value]) => `<tr class="${state.highlightMetric === key ? "active" : ""}" data-table-metric="${key}">
              <td>${name}</td>
              ${detailWeeks.map(() => `<td>${value}</td>`).join("")}
            </tr>`)
            .join("")}
        </tbody>
      </table>
    </div>
  </section>`;
}

function renderMainFunnel() {
  const items = [];
  dashboardData.funnel.forEach((stage, index) => {
    const subSteps = stage.key === "submit" ? `${shouldShowBusinessDetails() ? 4 : 3} sub steps` : stage.key === "moderate" ? "4 review checks" : "";
    const isBridgeHighlighted = highlightedStages().includes(stage.key);
    items.push(`<button class="funnel-stage ${state.selectedStage === stage.key ? "active" : ""} ${isBridgeHighlighted ? "highlighted" : ""}" data-stage="${stage.key}" type="button">
      <div class="stage-index">${index + 1}</div>
      <div class="stage-title">${stage.title} <small>${stage.titleCn}</small></div>
      <div class="stage-metric">${stage.metric}</div>
      <div class="stage-value">${stage.value}</div>
      <div class="stage-wow">${stage.wow}</div>
      <div class="stage-sub"><span>Share:<br>${stage.share}</span><span class="tag">${stage.tag}</span></div>
      ${subSteps ? `<div class="stage-sub"><span>${subSteps}</span><span>Mock Data</span></div>` : ""}
    </button>`);

    if (index < dashboardData.arrows.length) {
      const arrow = dashboardData.arrows[index];
      items.push(`<div class="funnel-arrow" aria-label="${arrow.route}">
        <div>
          <div class="arrow-line"></div>
          ${arrow.value ? `<div class="arrow-rate">${arrow.value}<small>${arrow.wow}</small></div>` : ""}
        </div>
      </div>`);
    }
  });

  return `<section class="module card">
    <div class="module-head">
      <h2 class="section-title">Seller Onboarding Funnel</h2>
      <div class="module-meta">
        <span class="meta-pill">T14</span>
        <span class="meta-pill">Mock Data</span>
        <span class="meta-pill">WoW Included</span>
      </div>
    </div>
    <div class="funnel-scroll"><div class="funnel">${items.join("")}</div></div>
  </section>`;
}

function highlightedStages() {
  const conversion = dashboardData.conversions.find((item) => item.metricKey === state.highlightMetric);
  return conversion ? conversion.stages : [];
}

function renderConversionBridge() {
  return `<section class="module card">
    <div class="module-head">
      <h2 class="section-title">Conversion Bridge</h2>
      <div class="module-meta"><span class="meta-pill">Formula + WoW</span></div>
    </div>
    <div class="bridge-grid">
      ${dashboardData.conversions
        .map((item) => `<button class="bridge-card ${state.highlightMetric === item.metricKey ? "active" : ""}" type="button" data-metric="${item.metricKey}" title="metric: ${item.metricName}\nnumerator: ${item.numerator}\ndenominator: ${item.denominator}\nWoW: ${item.wow}">
          <div class="bridge-route">${item.route}</div>
          <div class="bridge-value">${item.value}</div>
          <div class="bridge-wow">${item.wow}</div>
          <div class="bridge-formula">N: ${item.numerator}</div>
          <div class="bridge-formula">D: ${item.denominator}</div>
        </button>`)
        .join("")}
    </div>
  </section>`;
}

function renderDrilldowns() {
  return `<section class="module card">
    <div class="module-head">
      <h2 class="section-title">Drill-down Analysis</h2>
      <div class="module-meta"><span class="meta-pill">Submit + Moderation</span></div>
    </div>
    <div class="drilldown-stack">
      ${renderSubmitDrilldown()}
      ${renderModerationDrilldown()}
    </div>
  </section>`;
}

function renderSubmitDrilldown() {
  const submitSteps = dashboardData.submitSubSteps.filter(([key]) => key !== "business_details" || shouldShowBusinessDetails());
  return `<article id="submit-drilldown" class="drilldown-panel ${state.flashTarget === "submit-drilldown" ? "flash" : ""}">
    <div class="module-head">
      <h3 class="section-title">Submit Drill-down Analysis / 提资下钻分析</h3>
      <div class="module-meta">
        <span class="meta-pill">Jump from Submit Funnel Step</span>
        <span class="meta-pill">Mock Data</span>
      </div>
    </div>
    <h4>Resubmit & Pre-KYC Summary</h4>
    <div class="metric-card-grid">
      ${dashboardData.submitSummary.map(([name, value, note]) => renderMetricCard(name, value, note)).join("")}
    </div>
    <h4>New Data Fields</h4>
    <div class="metric-card-grid">
      ${dashboardData.submitNewFields.map(([name, value, note]) => renderMetricCard(name, value, note)).join("")}
    </div>
    <h4>Submit Sub-step Tracking</h4>
    <div class="stepper drilldown-steps">
      ${submitSteps
        .map(([key, name, field, event, value, note], index) => `<div class="step" data-step="${index + 1}">
          <div class="step-name">${name}</div>
          <div class="step-meta">count: ${value}<br>field: ${field}<br>event: ${event}${note ? ` · ${note}` : ""}</div>
        </div>`)
        .join("")}
    </div>
  </article>`;
}

function renderModerationDrilldown() {
  return `<article id="moderation-drilldown" class="drilldown-panel ${state.flashTarget === "moderation-drilldown" ? "flash" : ""}">
    <div class="module-head">
      <h3 class="section-title">Moderation Drill-down Analysis / 审核下钻分析</h3>
      <div class="module-meta">
        <span class="meta-pill">Jump from Moderate Funnel Step</span>
        <span class="meta-pill">Mock Data</span>
      </div>
    </div>
    <h4>Review Pass Summary</h4>
    <div class="metric-card-grid three">
      ${dashboardData.moderationSummary.map(([name, note, value]) => renderMetricCard(name, value, note)).join("")}
    </div>
    <h4>Moderation Result Details</h4>
    <div class="metric-card-grid">
      ${dashboardData.moderationNewFields.map(([name, value]) => renderMetricCard(name, value, "Result placeholder")).join("")}
    </div>
  </article>`;
}

function renderMetricCard(name, value, note) {
  return `<div class="metric-card" data-metric-card="${escapeHtml(name)}">
    <div class="metric-card-name">${name}</div>
    <div class="metric-card-value">${value}</div>
    <div class="metric-card-note">${note || "Mock data"}</div>
  </div>`;
}

function jumpToDrilldown(targetId) {
  state.flashTarget = targetId;
  render();
  window.setTimeout(() => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 0);
  window.setTimeout(() => {
    if (state.flashTarget === targetId) {
      state.flashTarget = null;
      render();
    }
  }, 1600);
}

function bindEvents() {
  document.querySelectorAll("[data-filter-key]").forEach((select) => {
    select.addEventListener("change", (event) => {
      state.filters[event.target.dataset.filterKey] = event.target.value;
      render();
    });
  });

  document.querySelector("[data-action='apply']").addEventListener("click", () => {
    state.loading = true;
    render();
    window.setTimeout(() => {
      state.loading = false;
      render();
    }, 500);
  });

  document.querySelector("[data-action='reset']").addEventListener("click", () => {
    state.filters = { ...defaultFilters };
    state.highlightMetric = null;
    state.selectedStage = null;
    render();
  });

  document.querySelector("[data-action='collapse']").addEventListener("click", () => {
    state.filtersCollapsed = !state.filtersCollapsed;
    render();
  });

  document.querySelectorAll("[data-stage]").forEach((button) => {
    button.addEventListener("click", () => {
      const stageKey = button.dataset.stage;
      const stage = dashboardData.funnel.find((item) => item.key === stageKey);
      state.selectedStage = stageKey;
      state.highlightMetric = null;
      if (stage?.drilldownTarget) {
        jumpToDrilldown(stage.drilldownTarget);
        return;
      }
      render();
    });
  });

  document.querySelectorAll("[data-metric]").forEach((button) => {
    button.addEventListener("click", () => {
      const metric = button.dataset.metric;
      state.highlightMetric = state.highlightMetric === metric ? null : metric;
      render();
    });
  });

  document.querySelectorAll("[data-table-metric]").forEach((row) => {
    row.addEventListener("click", () => {
      state.highlightMetric = row.dataset.tableMetric;
      render();
    });
  });
}

render();
