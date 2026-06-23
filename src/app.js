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
  ["registration_report_date_t14", "registration report date T14", ["Advanced (2026-xx-xx ~ 2026-xx-xx)", "Last 14 days", "This week"]],
  ["business_type", "business_type", ["Select", "personal", "corporation"]],
  ["accu_or_not", "ACCU or not", ["Exclude ACCU", "Include ACCU", "Only ACCU"]],
  ["seller_segment_label", "seller_segment_label", ["Exclude GKA", "All", "GKA only"]],
  ["is_good_seller", "Good Seller or not / is_good_seller", ["Good Seller", "All", "Non Good Seller"]],
  ["priority", "priority", ["Select", "P0", "P1", "P2"]],
  ["non_shopify_dtc_1m_filter", "non shopify DTC 1M+ filter", ["1", "0", "Select"]],
  ["shopify_1m_filter", "shopify 1M+ filter", ["1", "0", "Select"]],
  ["is_verified", "is_verified", ["1", "0", "Select"]],
  ["is_dtc_lead", "is_dtc_lead", ["Select", "1", "0"]],
  ["dtc_seller_gmv_filter", "DTC seller GMV filter", ["Select", "1M+", "10M+"]],
  ["non_shopify_dtc_10m_filter", "non shopify DTC 10M+ filter", ["Select", "1", "0"]],
  ["shopify_10m_filter", "shopify 10M+ filter", ["Select", "1", "0"]],
  ["dtc_platform", "dtc_platform", ["Select", "Shopify", "Non Shopify"]],
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
      share: "100%",
      tag: "Entry",
      summary: "From registration success / seller created",
    },
    {
      key: "submit",
      title: "Submit",
      titleCn: "提资",
      metric: "# Submit sellers T14",
      metricKey: "submit_sellers_t14",
      value: "xx",
      share: "xx%",
      tag: "Form Submission",
      summary: "Business form pages and review application submit",
    },
    {
      key: "moderate",
      title: "Moderate",
      titleCn: "审核",
      metric: "# one time pass seller T14",
      metricKey: "one_time_pass_seller_t14",
      value: "xx",
      share: "xx%",
      tag: "Risk & Compliance",
      summary: "One time pass plus KYC/KYB, Human Mod and PIPO checks",
    },
    {
      key: "onboard",
      title: "Onboard",
      titleCn: "入驻",
      metric: "# Onboarded Seller(w/ UBO passed) T14",
      metricKey: "onboarded_seller_w_ubo_passed_t14",
      value: "xx",
      share: "xx%",
      tag: "Success",
      summary: "Final onboarded seller volume with UBO passed",
    },
  ],
  arrows: [
    { route: "Register → Submit", metricKey: "submission_rate_t14", value: "xx%" },
    { route: "Submit → Moderate", metricKey: "one_time_pass_rate_t14", value: "xx%" },
    { route: "Moderate → Onboard", metricKey: null, value: "Not shown" },
  ],
  conversions: [
    {
      route: "Register → Submit",
      metricKey: "submission_rate_t14",
      value: "xx%",
      numerator: "submit_sellers_t14",
      denominator: "registered_seller_t14",
      stages: ["register", "submit"],
    },
    {
      route: "Submit → Moderate",
      metricKey: "one_time_pass_rate_t14",
      value: "xx%",
      numerator: "one_time_pass_seller_t14",
      denominator: "submit_sellers_t14",
      stages: ["submit", "moderate"],
    },
    {
      route: "Register → Onboard",
      metricKey: "registration_to_onboarding_rate_t14",
      value: "xx%",
      numerator: "onboarded_seller_w_ubo_passed_t14",
      denominator: "registered_seller_t14",
      stages: ["register", "onboard"],
    },
    {
      route: "Submit → Onboard",
      metricKey: "submit_to_onboarding_rate_t14",
      value: "xx%",
      numerator: "onboarded_seller_w_ubo_passed_t14",
      denominator: "submit_sellers_t14",
      stages: ["submit", "onboard"],
    },
  ],
  submitSubSteps: [
    {
      key: "business_details",
      name: "Business Details",
      nameCn: "企业信息",
      metricKey: "business_details_completed",
      event: "next button click",
      value: "xx",
      conversion: "xx%",
      note: "Corporation only",
    },
    {
      key: "primary_representative",
      name: "Primary Representative",
      nameCn: "主要代表人",
      metricKey: "primary_representative_completed",
      event: "next button click",
      value: "xx",
      conversion: "xx%",
    },
    {
      key: "shop_information",
      name: "Shop Information",
      nameCn: "店铺信息",
      metricKey: "shop_information_completed",
      event: "next button click",
      value: "xx",
      conversion: "xx%",
    },
    {
      key: "review_application",
      name: "Review Application",
      nameCn: "提交审核",
      metricKey: "review_application_submitted",
      event: "submit button click",
      value: "xx",
      conversion: "xx%",
    },
  ],
  moderateSubSteps: [
    ["One Time Pass Seller T14", "一次性通过卖家数", "one_time_pass_seller_t14", "xx"],
    ["KYC/KYB Passed T14", "KYC/KYB 通过卖家数", "kyc_kyb_passed_seller_t14", "xx"],
    ["Human Mod Passed T14", "人工审核通过卖家数", "human_mod_passed_seller_t14", "xx"],
    ["PIPO Passed T14", "PIPO 通过卖家数", "pipo_passed_seller_t14", "xx"],
  ],
};

const state = {
  filters: { ...defaultFilters },
  filtersCollapsed: false,
  selectedStage: "register",
  highlightMetric: null,
  loading: false,
};

const app = document.querySelector("#app");

function shouldShowBusinessDetails() {
  return state.filters.business_type !== "personal";
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#039;" };
    return map[char];
  });
}

function metricTooltip(metricKey, label) {
  return `${label}\nfield: ${metricKey}\nmock data: yes\nnumerator / denominator: see PRD`;
}

function render() {
  app.className = state.loading ? "loading" : "";
  app.innerHTML = `
    <main class="dashboard-shell">
      ${renderTabs()}
      ${renderTitle()}
      ${renderFilters()}
      ${renderMainFunnel()}
      ${renderConversionBridge()}
      ${renderSubBreakdown()}
    </main>
  `;
  bindEvents();
}

function renderTabs() {
  const tabs = ["Onboarding", "Custom Onboarding Report", "WIP/Fund", "Daily Push"];
  return `<nav class="top-tabs" aria-label="Dashboard tabs">
    ${tabs.map((tab) => `<button class="tab ${tab === "Onboarding" ? "active" : ""}" type="button">${tab}</button>`).join("")}
  </nav>`;
}

function renderTitle() {
  return `<section class="title-frame"><h1>Seller Onboarding Funnel</h1></section>`;
}

function renderFilters() {
  const fieldsHtml = filterFields
    .map(([key, label, options]) => {
      const value = state.filters[key];
      const optionHtml = options.map((option) => `<option value="${escapeHtml(option)}" ${option === value ? "selected" : ""}>${escapeHtml(option)}</option>`).join("");
      return `<div class="filter-field">
        <label for="${key}">${label}</label>
        <div class="select-wrap">
          <select id="${key}" data-filter-key="${key}">${optionHtml}</select>
        </div>
      </div>`;
    })
    .join("");

  const summary = Object.entries(state.filters)
    .slice(0, 7)
    .map(([key, value]) => `<span class="chip">${key}: ${escapeHtml(value)} ×</span>`)
    .join("");

  return `<section class="filter-panel card ${state.filtersCollapsed ? "collapsed" : ""}">
    <div class="filter-toolbar">
      <h2 class="section-title">Filter Bar <span class="meta-pill">Old dashboard compatible</span></h2>
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

function renderMainFunnel() {
  const items = [];
  dashboardData.funnel.forEach((stage, index) => {
    const subSteps = stage.key === "submit" ? `${shouldShowBusinessDetails() ? 4 : 3} sub steps` : stage.key === "moderate" ? "4 review checks" : "";
    const isBridgeHighlighted = highlightedStages().includes(stage.key);
    items.push(`<button class="funnel-stage ${state.selectedStage === stage.key ? "active" : ""} ${isBridgeHighlighted ? "highlighted" : ""}" data-stage="${stage.key}" type="button" title="${metricTooltip(stage.metricKey, stage.metric)}">
      <div class="stage-index">${index + 1}</div>
      <div class="stage-title">${stage.title} <small>${stage.titleCn}</small></div>
      <div class="stage-metric">${stage.metric}</div>
      <div class="stage-value">${stage.value}</div>
      <div class="stage-sub"><span>Share:<br>${stage.share}</span></div>
      ${subSteps ? `<div class="stage-sub"><span>${subSteps}</span><span>Mock Data</span></div>` : ""}
    </button>`);

    if (index < dashboardData.arrows.length) {
      const arrow = dashboardData.arrows[index];
      items.push(`<div class="funnel-arrow" aria-label="${arrow.route}">
        <div>
          <div class="arrow-line"></div>
          <div class="arrow-rate">${arrow.value}</div>
        </div>
      </div>`);
    }
  });

  return `<section class="module card">
    <div class="module-head">
      <h2 class="section-title">Seller Onboarding Main Funnel</h2>
      <div class="module-meta">
        <span class="meta-pill">T14</span>
        <span class="meta-pill">Mock Data</span>
        <span class="meta-pill">Last refresh: xx</span>
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
      <div class="module-meta"><span class="meta-pill">No Moderate → Onboard</span></div>
    </div>
    <div class="bridge-grid">
      ${dashboardData.conversions
        .map((item) => `<button class="bridge-card ${state.highlightMetric === item.metricKey ? "active" : ""}" type="button" data-metric="${item.metricKey}" title="numerator: ${item.numerator}\ndenominator: ${item.denominator}\nformula: ${item.metricKey}">
          <div class="bridge-route">${item.route}</div>
          <div class="bridge-value">${item.value}</div>
          <div class="bridge-formula">${item.metricKey}</div>
        </button>`)
        .join("")}
    </div>
  </section>`;
}

function renderSubBreakdown() {
  const submitSteps = dashboardData.submitSubSteps.filter((step) => step.key !== "business_details" || shouldShowBusinessDetails());
  return `<section class="module card">
    <div class="module-head">
      <h2 class="section-title">Sub Step Breakdown</h2>
      <div class="module-meta"><span class="meta-pill">Business Details: ${shouldShowBusinessDetails() ? "shown" : "hidden for personal"}</span></div>
    </div>
    <div class="sub-grid compact">
      <article class="sub-card ${state.selectedStage === "submit" ? "active" : ""}" data-sub-stage="submit">
        <h3 class="sub-title">Submit / 提资 <span class="tag">${submitSteps.length} sub steps</span></h3>
        <div class="stepper">
          ${submitSteps
            .map((step, index) => `<div class="step" data-step="${index + 1}">
              <div class="step-name">${step.name} / ${step.nameCn}</div>
              <div class="step-meta">count: ${step.value} · conversion: ${step.conversion}<br>field: ${step.metricKey}<br>event: ${step.event}${step.note ? ` · ${step.note}` : ""}</div>
            </div>`)
            .join("")}
        </div>
      </article>
      <article class="sub-card ${state.selectedStage === "moderate" ? "active" : ""}" data-sub-stage="moderate">
        <h3 class="sub-title">Moderate / 审核 <span class="tag">4 review checks</span></h3>
        <div class="review-grid">
          ${dashboardData.moderateSubSteps
            .map(([name, nameCn, key, value]) => `<div class="review-item" title="${metricTooltip(key, name)}">
              <span class="status-dot">✓</span>
              <div><div class="step-name">${name}</div><div class="step-meta">${nameCn} · ${key} · ${value}</div></div>
            </div>`)
            .join("")}
        </div>
      </article>
    </div>
  </section>`;
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
    state.selectedStage = "register";
    render();
  });

  document.querySelector("[data-action='collapse']").addEventListener("click", () => {
    state.filtersCollapsed = !state.filtersCollapsed;
    render();
  });

  document.querySelectorAll("[data-stage]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedStage = button.dataset.stage;
      state.highlightMetric = null;
      render();
      window.setTimeout(() => document.querySelector(`[data-sub-stage="${state.selectedStage}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" }), 0);
    });
  });

  document.querySelectorAll("[data-metric]").forEach((button) => {
    button.addEventListener("click", () => {
      const metric = button.dataset.metric;
      state.highlightMetric = state.highlightMetric === metric ? null : metric;
      render();
    });
  });
}

render();
