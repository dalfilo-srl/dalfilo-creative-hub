const fallbackSeedAssets = [
  ["Festa della Mamma - Free Embroidery Phase 1", "22/04", "17/04", "High", "Sale / Push", "Free embroidery - UGC unboxing video", "Video", "UGC", "Percale", "Personal / emotional reveal of embroidery gift. Show stitching in first 2s.", "pr_ + rm_", "plp", "pr_it_bed_video_ugc_mamma26_unboxing_v1_plp", "Federica", "Done", "Unboxing DCA CPR EUR2.42-2.82 in Q1 - highest-efficiency gifting format."],
  ["Festa della Mamma - Free Embroidery Phase 1", "22/04", "17/04", "High", "Sale / Push", "Free embroidery - carousel gift ideas", "Carousel", "Brand", "", "Slide 1: Regala qualita, ricama amore. Each slide: product + price + embroidery detail.", "rm_", "hp", "rm_it_bed_carousel_brand_mamma26_giftideas_v1_hp", "Federica", "Done", "Carousel HP CPR EUR7.71 in Q1. Gift ideas carousel performed well last year."],
  ["Festa della Mamma - Free Embroidery Phase 1", "22/04", "17/04", "High", "Sale / Push", "Free embroidery - static v1 embroidery close-up", "Static", "Brand", "", "Extreme close-up on stitching thread. Warm, tactile feel. No logo overlay.", "rm_", "hp", "rm_it_bed_static_brand_mamma26_product_v1_hp", "Federica", "Done", "Static is the volume driver. Always run 2 variants."],
  ["Festa della Mamma - Free Embroidery Phase 1", "22/04", "17/04", "High", "Sale / Push", "FOMO GIF - countdown / urgency loop", "GIF", "Brand", "", "Animated: ultimi giorni per garantire consegna. 2-3 sec, no sound.", "rt_", "pdp", "rt_it_bed_gif_brand_mamma26_urgency_v1_pdp", "Federica", "Done", "GIF CPM EUR6.30-7.06 - cheapest format. Mandatory FOMO asset for retargeting."],
  ["Dalfilo Days - Phase 1", "21/05", "15/05", "High", "Sale / Push", "Dalfilo Days - UGC hero video beds", "Video", "UGC", "Percale", "Product reveal + Dalfilo Days + Free Embroidery", "pr_ + rm_", "pdp", "pr_it_bed_video_ugc_dfdays26_product_v1_pdp", "Federica", "Work in progress", "Same logic as WS: UGC + offer = highest conversion efficiency. Scale this first."],
  ["Dalfilo Days - Phase 1", "21/05", "15/05", "High", "Sale / Push", "Dalfilo Days - static offer v1 abbraccio cuscini", "Static", "Brand", "Percale", "Product + % offer prominent on HP. Strong sale framing.", "pr_ + rm_", "hp", "rm_it_bed_static_brand_dfdays26_offer_v1_hp", "Federica", "Work in progress", "WS static rm_ CPR EUR3.26-5.09 - conversion workhorse."],
  ["Dalfilo Days - Phase 1", "21/05", "15/05", "High", "Sale / Push", "Dalfilo Days - static offer v2 embroidery focus", "Static", "Brand", "Percale", "Personalizza il tuo ordine - ricamo gratuito. Embroidery as differentiator.", "pr_ + rm_", "hp", "rm_it_bed_static_brand_dfdays26_offer_v2_hp", "Federica", "Work in progress", "Free embroidery is the key offer lever. Always needs a dedicated static."],
  ["Dalfilo Days - Phase 1", "21/05", "15/05", "High", "Sale / Push", "Dalfilo Days - timer GIF urgency free embroidery", "GIF", "Brand", "Mix Letto + Bagno", "Animated: product + price + free embroidery last hours.", "rt_", "pdp", "rt_it_bed_gif_brand_dfdays26_urgency_v1_pdp", "Federica", "Work in progress", "GIF = cheapest CPM in account. Mandatory for every sale period retargeting layer."],
  ["Dalfilo Days - Phase 1", "21/05", "15/05", "High", "Sale / Push", "Dalfilo Days - carousel always on", "Carousel", "Brand", "Percale", "Celebra gli artigiani con i Dalfilo Days", "pr_", "hp", "pr_it_bed_carousel_brand_dfdays26_bestseller_v1_hp", "Federica", "Work in progress", "Carousel rm_ HP CPR EUR6.02 in Q1 WS. Good discovery layer alongside statics."],
  ["Dalfilo Days - Phase 2", "21/05", "15/05", "High", "Sale / Push", "Dalfilo Days - timer GIF urgency last hours", "GIF", "Brand", "Percale", "Animated: product + price reveal loop. Solo per oggi or countdown.", "rm_", "pdp", "rt_it_bed_gif_brand_dfdays26_urgency_v1_pdp", "Federica", "Work in progress", "GIF = cheapest CPM in account. Mandatory for every sale period retargeting layer."],
  ["Kids Collection Launch - Bed + Bath", "14/05", "12/05", "Medium", "Product Launch", "Kids bed - UGC video child using product", "Video", "UGC", "Mix Letto", "TBD", "rm_", "hp", "pr_it_bed_video_ugc_kids26_lifestyle_v1_hp", "Federica", "Work in progress", "Kids products need emotion/lifestyle UGC. Authenticity is the hook."],
  ["Kids Collection Launch - Bed + Bath", "14/05", "12/05", "Medium", "Product Launch", "Kids bath - UGC+AI voiceover warmth angle", "Video", "UGC+AI", "Mix Bagno", "TBD", "rm_", "hp", "pr_it_bath_video_ai_kids26_lifestyle_v1_hp", "Federica", "Draft", "A/B test vs UGC without voice. Apr AI standard variant VR 16.5% beats brand 14.4%."],
  ["Kids Collection Launch - Bed + Bath", "14/05", "12/05", "Medium", "Product Launch", "Kids bath - GIF colour reveal loop", "GIF", "Brand", "Mix Bagno", "Animated loop: 3 colours rotating. No text needed.", "rm_", "pdp", "rt_it_bath_gif_brand_kids26_product_v1_pdp", "Federica", "Draft", "GIF on new collection: Eden preorder VR 18.8% at CPM EUR6.29."],
  ["Beach Collection - Portofino Beach Towels", "25/05", "22/05", "Low", "Product Launch", "Beach towels - UGC video outdoor movement", "Video", "UGC", "Beach Towels", "First 2s: beach/outdoor movement. Texture + colour vibrancy in natural light.", "pr_", "hp", "pr_it_bath_video_ugc_ss26beach_lifestyle_v1_hp", "Federica", "Draft", "Outdoor products need lifestyle UGC - same logic as Sport Collection."],
  ["Beach Collection - Portofino Beach Towels", "25/05", "22/05", "Low", "Product Launch", "Beach towels - GIF texture loop", "GIF", "Brand", "Beach Towels", "Fabric in sea breeze / slow motion wave effect. Loop 2-3s.", "rt_", "pdp", "rt_it_bath_gif_brand_ss26beach_texture_v1_pdp", "Federica", "Draft", "GIF mandatory on every launch. One per collection."],
  ["Sport Collection - Super Push", "19/05", "15/05", "High", "Product Launch", "Sport - UGC video movement hook", "Video", "UGC", "Sport", "First 2s: physical movement. First-person POV. Real use.", "pr_", "hp", "pr_it_bath_video_ugc_ss26sport_lifestyle_v1_hp", "Federica", "Draft", "Sport static rt_ CPR EUR2.70 - audience warm. UGC is the missing layer."],
  ["Sport Collection - Super Push", "19/05", "15/05", "Medium", "Product Launch", "Sport - UGC+AI voiceover performance angle", "Video", "UGC+AI", "Sport", "Same clip as v1. AI voice: qualita per chi si allena.", "pr_", "hp", "pr_it_bath_video_ai_ss26sport_lifestyle_v1_hp", "Federica", "Draft", "Continue testing on Sport after Botanica learnings."],
  ["Sport Collection - Super Push", "19/05", "15/05", "High", "Product Launch", "Sport - GIF retargeting", "GIF", "Brand", "Sport", "Product in motion. Short loop. No text.", "rt_", "pdp", "rt_it_bath_gif_brand_ss26sport_product_v1_pdp", "Federica", "Draft", "Sport has no GIF yet. rt_ Sport static CPR EUR2.70 proves warm audience."],
  ["Summer Sale - PEAK VOLUME", "01/06", "25/05", "High", "Peak Volume", "Summer Sale - UGC hero v1 beds", "Video", "UGC", "Percale", "Summer morning, linen in natural light. Offer in overlay text.", "pr_", "hp", "pr_it_bed_video_ugc_ss26sale_lifestyle_v1_hp", "Federica", "Draft", "WS essenziali UGC video VR 39.8%, CPR EUR5.10 - replicate."],
  ["Summer Sale - PEAK VOLUME", "01/06", "25/05", "High", "Peak Volume", "Summer Sale - UGC hero v2 bath", "Video", "UGC", "Bath", "Bath products in summer: pool, garden, morning routine.", "pr_", "hp", "pr_it_bath_video_ugc_ss26sale_lifestyle_v1_hp", "Federica", "Draft", "Two UGC videos gives algorithm two distinct audiences."],
  ["Summer Sale - PEAK VOLUME", "01/06", "25/05", "High", "Peak Volume", "Summer Sale - static rm_ v1 beds bestsellers", "Static", "Brand", "Percale", "Product hero + % discount prominent. HP landing.", "rm_", "hp", "rm_it_bed_static_brand_ss26sale_offer_v1_hp", "Federica", "Draft", "WS static rm_ drove 2,230 results at CPR EUR5.09."],
  ["Summer Sale - PEAK VOLUME", "01/06", "25/05", "High", "Peak Volume", "Summer Sale - carousel rt_ warm audience", "Carousel", "Brand", "Mixed", "Products browsed + related items. Strong FOMO copy per card.", "rt_", "hp", "rt_it_bed_carousel_brand_ss26sale_product_v1_hp", "Federica", "Draft", "Carousel rt_ WS HP CPR EUR1.43 - best carousel of Q1."],
  ["Percale Capsule + Neurae Collab", "11/06", "05/06", "High", "Collab", "Percale limited pattern - UGC texture video", "Video", "UGC", "Percale", "First 2s: hand on pattern, texture feel. Edizione limitata overlay.", "pr_", "pdp", "pr_it_bed_video_ugc_ss26percalecapsule_texture_v1_pdp", "Federica", "Draft", "Limited edition needs scarcity hook + UGC authenticity."],
  ["Summer Sale 2026 - Pre-lancio Batch", "26/06", "25/06/2026", "High", "Pre-launch", "Percalle Botanica - UGC texture Malva+Salvia", "Video", "UGC", "Percalle", "Hand on fabric texture, natural light first 2s. Salvia + Malva.", "pr_ + rm_", "hp", "pr_it_bed_video_ugc_ss26botanica_texture_v1_hp", "Federica", "Draft", "UGC Botanica best asset in account: CPR EUR2.85 on 177 results."],
  ["Summer Sale 2026 - Pre-lancio Batch", "26/06", "25/06/2026", "High", "Pre-launch", "Percalle - Hero Freschezza Static", "Static", "Brand", "Percalle", "Caldo in arrivo. Percalle fresco, gia a casa tua.", "pr_", "hp", "pr_it_bed_static_brand_ss26percalle_freschezza_v1_hp", "Federica", "Draft", "Unique angle: summer heat -> percalle cool."],
  ["Summer Sale 2026 - Pre-lancio Batch", "26/06", "25/06/2026", "High", "Pre-launch", "Memory Foam - UGC video lancio 18 Giu", "Video", "UGC", "Memory Foam", "Dormire meglio d'estate. Morning routine, first-person.", "pr_ + rm_ + rt_", "pdp", "pr_it_bed_video_ugc_ss26memory_comfort_v1_pdp", "Federica", "Draft", "BIS template at launch: pr_+rm_+rt_ simultaneous."],
  ["Summer Sale 2026 - W29 Free Embroidery PEAK", "03/07", "05/07/2026", "High", "Peak Push", "Free Embroidery - UGC video ricamo + Percalle", "Video", "UGC", "Percalle", "Close-up embroidery stitching first 2s. Emotional reveal.", "pr_ + rm_", "pdp", "pr_it_bed_video_ugc_ss26freembroidery_ricamo_v1_pdp", "Federica", "Draft", "Free Embroidery was +39% vs SS25 average in W29."],
  ["Summer Sale 2026 - W31 Last Chance", "29/07", "22/07/2026", "High", "Last Chance", "Last Chance - GIF countdown ultimi giorni", "GIF", "Brand", "Mixed", "Summer Sale ultimi giorni countdown. Reshuffle visual from Fase 1.", "rt_ + rm_", "pdp", "rt_it_mixed_gif_brand_ss26lc_countdown_v1_pdp", "Federica", "Draft", "GIF countdown: cheapest urgency format. Rotate every 5 days."],
  ["Summer Sale 2026 - W35 Final Urgency PEAK", "24/08", "17/08/2026", "High", "Peak Push", "Final Urgency - Static Ultima Chiamata Percalle", "Static", "Brand", "Percalle", "Ultimi stagionali. Summer Sale termina domenica.", "rm_ + rt_", "hp", "rm_it_bed_static_brand_ss26finalurgency_percalle_v1_hp", "Federica", "Draft", "Percalle is 48% of budget. Must appear in final urgency."]
].map((row, index) => ({
  id: `asset-${index + 1}`,
  campaign: row[0],
  goLive: row[1],
  deadline: row[2],
  priority: row[3],
  campaignType: row[4],
  assetName: row[5],
  format: row[6],
  creativeType: row[7],
  productCategory: row[8],
  hook: row[9],
  funnel: row[10],
  landing: row[11],
  naming: row[12],
  assignee: row[13],
  status: row[14],
  rationale: row[15],
  notes: "",
  country: "",
  productCluster: "",
  cta: "",
  prospectingMessage: "",
  remarketingMessage: "",
  performance: null,
  visual: "",
  visualName: ""
}));

const seedAssets = Array.isArray(window.DALFILO_SEED_ASSETS)
  ? window.DALFILO_SEED_ASSETS.map(normalizeAssetDefaults)
  : fallbackSeedAssets.map(normalizeAssetDefaults);

const storageKey = "dalfilo-creative-hub-v3";
const legacyStorageKeys = ["dalfilo-creative-hub-v2", "dalfilo-creative-hub-v1"];
const notesStorageKey = "dalfilo-creative-hub-notes";
let assets = loadAssets();
let selectedId = assets[0]?.id || null;
let modalAssetId = null;
let currentView = "production";
let editingAssetId = null;
const appState = loadAppState();
let lastPipelineImportAt = appState.lastPipelineImportAt;
let lastImportCampaigns = appState.lastImportCampaigns;
let ignoredDuplicatePairs = appState.ignoredDuplicatePairs;
let ignoredMetaAdNames = appState.ignoredMetaAdNames;
let unmatchedMetaRows = appState.unmatchedMetaRows;
let lastPipelineImportStats = appState.lastPipelineImportStats;
let lastMetaImportStats = appState.lastMetaImportStats;
// Tracks the "savedAt" this page last saw written to localStorage — used by saveAssets()
// to detect when another tab/session has saved more recently than this one (see there).
let lastKnownSavedAt = appState.savedAt;

const els = {
  rows: document.getElementById("assetRows"),
  detail: document.getElementById("assetDetail"),
  resultCount: document.getElementById("resultCount"),
  toast: document.getElementById("toast"),
  search: document.getElementById("searchInput"),
  formatFilter: document.getElementById("formatFilter"),
  missingVisualOnly: document.getElementById("missingVisualOnly"),
  pipelineCsvInput: document.getElementById("pipelineCsvInput"),
  metaCsvInput: document.getElementById("metaCsvInput"),
  assetDrawer: document.getElementById("assetDrawer"),
  assetForm: document.getElementById("assetForm"),
  modalBackdrop: document.getElementById("assetModalBackdrop"),
  modalPrev: document.getElementById("modalPrev"),
  modalNext: document.getElementById("modalNext"),
  modalPill: document.getElementById("modalPill"),
  modalTitle: document.getElementById("modalTitle"),
  modalClose: document.getElementById("modalClose"),
  teamNotes: document.getElementById("teamNotes"),
  healthModalBackdrop: document.getElementById("healthModalBackdrop"),
  healthModalClose: document.getElementById("healthModalClose"),
  healthModalBody: document.getElementById("healthModalBody"),
  healthBadge: document.getElementById("healthBadge"),
  openHealthCheckBtn: document.getElementById("openHealthCheckBtn"),
  metaModalBackdrop: document.getElementById("metaModalBackdrop"),
  metaModalClose: document.getElementById("metaModalClose"),
  metaModalBody: document.getElementById("metaModalBody"),
  metaBadge: document.getElementById("metaBadge"),
  openMetaCheckBtn: document.getElementById("openMetaCheckBtn"),
  librarySearch: document.getElementById("librarySearch"),
  libraryFormatFilter: document.getElementById("libraryFormatFilter"),
  librarySort: document.getElementById("librarySort")
};

let namingTouched = false;

function loadAssets() {
  const savedAssets = parseSavedAssets(storageKey);
  if (savedAssets) return savedAssets.map(normalizeAssetDefaults);

  const freshAssets = structuredClone(seedAssets);
  const legacyAssets = legacyStorageKeys.map(parseSavedAssets).find(Boolean);
  if (legacyAssets) mergePreservedAssetState(freshAssets, legacyAssets);
  return freshAssets;
}

function parseSavedAssets(key) {
  const saved = localStorage.getItem(key);
  if (!saved) return null;
  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed.assets) ? parsed.assets : null;
  } catch {
    return null;
  }
}

function normalizeAssetDefaults(asset) {
  return {
    id: asset.id || makeAssetId(),
    campaign: asset.campaign || "",
    goLive: asset.goLive || "",
    deadline: asset.deadline || "",
    country: asset.country || "",
    priority: asset.priority || "High",
    campaignType: asset.campaignType || "",
    assetName: asset.assetName || "",
    format: asset.format || "Video",
    creativeType: asset.creativeType || "UGC",
    productCategory: asset.productCategory || "",
    productCluster: asset.productCluster || "",
    hook: asset.hook || "",
    cta: asset.cta || "",
    prospectingMessage: asset.prospectingMessage || "",
    remarketingMessage: asset.remarketingMessage || "",
    funnel: asset.funnel || "pr_",
    landing: asset.landing || "hp",
    naming: asset.naming || "",
    assignee: asset.assignee || "Federica",
    status: asset.status || "Draft",
    rationale: asset.rationale || "",
    storytelling: asset.storytelling || "",
    notes: asset.notes || "",
    performance: asset.performance || null,
    visual: asset.visual || "",
    visualName: asset.visualName || "",
    isNew: asset.isNew || false,
    archived: asset.archived || false,
    // true only once an asset has originated from, or been matched by, a CSV pipeline
    // import — manually created assets stay exempt from the "missing from CSV" orphan check.
    pipelineTracked: asset.pipelineTracked || false,
    lastSeenImportAt: asset.lastSeenImportAt || null,
    healthIgnored: asset.healthIgnored || {}
  };
}

function mergePreservedAssetState(targetAssets, previousAssets) {
  previousAssets.forEach((previous) => {
    const match = targetAssets.find((asset) => {
      const sameNaming = previous.naming && normalizeKey(asset.naming) === normalizeKey(previous.naming);
      const sameComposite = normalizeKey(`${asset.campaign} ${asset.assetName}`) === normalizeKey(`${previous.campaign} ${previous.assetName}`);
      return sameNaming || sameComposite;
    });
    if (!match) return;
    match.visual = previous.visual || match.visual;
    match.visualName = previous.visualName || match.visualName;
    match.performance = previous.performance || match.performance;
    match.notes = previous.notes || match.notes;
  });
}

function saveAssets() {
  // Guard against silently clobbering newer data: if another tab/window (or a later
  // session left open in the background) has saved more recently than what THIS page
  // last saw, blindly overwriting localStorage here would erase that newer work —
  // exactly the kind of "visuals disappeared" report this guard exists to prevent.
  const currentRaw = localStorage.getItem(storageKey);
  if (currentRaw) {
    try {
      const currentParsed = JSON.parse(currentRaw);
      if (currentParsed.savedAt && lastKnownSavedAt && currentParsed.savedAt !== lastKnownSavedAt) {
        window.alert(
          "Questa pagina non ha gli ultimi dati salvati: probabilmente hai un'altra scheda o finestra di Creative Hub aperta altrove, oppure hai salvato di recente da un'altra sessione.\n\n" +
          "Per non rischiare di cancellare quei dati più recenti, questo salvataggio è stato bloccato. Ricarica la pagina (F5) e riprova qui — se avevi appena fatto una modifica in questa scheda, rifalla dopo il ricaricamento."
        );
        return false;
      }
    } catch {
      // Unparsable existing value — fall through and attempt the save anyway.
    }
  }

  const savedAt = new Date().toISOString();
  const payload = {
    assets,
    savedAt,
    lastPipelineImportAt,
    lastImportCampaigns,
    ignoredDuplicatePairs,
    ignoredMetaAdNames,
    unmatchedMetaRows,
    lastPipelineImportStats,
    lastMetaImportStats
  };

  try {
    localStorage.setItem(storageKey, JSON.stringify(payload));
    lastKnownSavedAt = savedAt;
    return true;
  } catch (error) {
    // Most likely a full localStorage quota (lots of uploaded visuals add up fast as
    // base64 text). This save did NOT go through — say so loudly instead of losing
    // the change silently.
    window.alert(
      "Impossibile salvare: lo spazio di archiviazione di questa pagina nel browser è pieno (probabilmente troppi visual caricati).\n\n" +
      "Questa modifica NON è stata salvata. Esporta subito un backup con il pulsante \"JSON\" e poi valuta di liberare spazio (ad es. sostituendo qualche visual con una versione più leggera)."
    );
    return false;
  }
}

function loadAppState() {
  const defaults = {
    savedAt: null,
    lastPipelineImportAt: null,
    lastImportCampaigns: [],
    ignoredDuplicatePairs: [],
    ignoredMetaAdNames: [],
    unmatchedMetaRows: [],
    lastPipelineImportStats: null,
    lastMetaImportStats: null
  };
  const saved = localStorage.getItem(storageKey);
  if (!saved) return defaults;
  try {
    const parsed = JSON.parse(saved);
    return {
      savedAt: parsed.savedAt || defaults.savedAt,
      lastPipelineImportAt: parsed.lastPipelineImportAt || defaults.lastPipelineImportAt,
      lastImportCampaigns: Array.isArray(parsed.lastImportCampaigns) ? parsed.lastImportCampaigns : defaults.lastImportCampaigns,
      ignoredDuplicatePairs: Array.isArray(parsed.ignoredDuplicatePairs) ? parsed.ignoredDuplicatePairs : defaults.ignoredDuplicatePairs,
      ignoredMetaAdNames: Array.isArray(parsed.ignoredMetaAdNames) ? parsed.ignoredMetaAdNames : defaults.ignoredMetaAdNames,
      unmatchedMetaRows: Array.isArray(parsed.unmatchedMetaRows) ? parsed.unmatchedMetaRows : defaults.unmatchedMetaRows,
      lastPipelineImportStats: parsed.lastPipelineImportStats || defaults.lastPipelineImportStats,
      lastMetaImportStats: parsed.lastMetaImportStats || defaults.lastMetaImportStats
    };
  } catch {
    return defaults;
  }
}

function loadTeamNotes() {
  return localStorage.getItem(notesStorageKey) || "";
}

function saveTeamNotes(value) {
  localStorage.setItem(notesStorageKey, value);
}

function init() {
  bindNavigation();
  bindActions();
  bindModal();
  bindHealthModal();
  bindMetaModal();
  populateFilters();
  els.teamNotes.value = loadTeamNotes();
  els.teamNotes.addEventListener("input", (event) => saveTeamNotes(event.target.value));
  [els.librarySearch, els.libraryFormatFilter, els.librarySort].forEach((control) => {
    control.addEventListener("input", renderVisualLibrary);
  });
  render();
}

function bindNavigation() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      currentView = button.dataset.view;
      document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("is-active", item === button));
      document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-active"));
      document.getElementById(`${currentView}View`).classList.add("is-active");
      closeAssetModal();
      render();
    });
  });
}

function bindActions() {
  [els.search, els.formatFilter, els.missingVisualOnly].forEach((control) => {
    control.addEventListener("input", render);
  });

  document.getElementById("resetData").addEventListener("click", () => {
    const confirmed = window.confirm("Ripristinare i dati iniziali? Visual, note e modifiche locali andranno persi. L'operazione non si puo annullare.");
    if (!confirmed) return;
    assets = structuredClone(seedAssets);
    selectedId = assets[0].id;
    lastPipelineImportAt = null;
    lastImportCampaigns = [];
    ignoredDuplicatePairs = [];
    ignoredMetaAdNames = [];
    unmatchedMetaRows = [];
    lastPipelineImportStats = null;
    lastMetaImportStats = null;
    const saved = saveAssets();
    populateFilters();
    closeAssetModal();
    render();
    if (saved) {
      showToast("Pipeline ripristinata.");
    }
  });

  document.getElementById("importPipelineCsv").addEventListener("click", () => els.pipelineCsvInput.click());
  els.pipelineCsvInput.addEventListener("change", handlePipelineCsvImport);
  document.getElementById("importMetaCsv").addEventListener("click", () => els.metaCsvInput.click());
  els.metaCsvInput.addEventListener("change", handleMetaCsvImport);
  els.openHealthCheckBtn.addEventListener("click", openHealthModal);
  els.openMetaCheckBtn.addEventListener("click", openMetaModal);
  document.getElementById("newAssetButton").addEventListener("click", openNewAssetDrawer);
  els.assetForm.addEventListener("submit", handleAssetSubmit);
  els.assetForm.naming.addEventListener("input", () => {
    namingTouched = true;
  });
  ["campaign", "assetName", "format", "creativeType", "productCategory", "funnel", "landing"].forEach((name) => {
    els.assetForm[name].addEventListener("input", updateGeneratedNaming);
  });
  document.querySelectorAll("[data-close-drawer]").forEach((button) => {
    button.addEventListener("click", closeAssetDrawer);
  });
  document.getElementById("exportJson").addEventListener("click", exportJson);
  document.getElementById("exportCsv").addEventListener("click", exportCsv);
}

function populateFilters() {
  fillSelect(els.formatFilter, ["Tutti i format", ...unique("format")]);
  fillSelect(els.libraryFormatFilter, ["Tutti i format", ...unique("format")]);
}

function fillSelect(select, values) {
  select.innerHTML = values.map((value, index) => `<option value="${index === 0 ? "" : escapeHtml(value)}">${escapeHtml(value)}</option>`).join("");
}

function unique(key) {
  return [...new Set(activeAssets().map((asset) => asset[key]).filter(Boolean))].sort();
}

function getFilteredAssets() {
  const query = els.search.value.trim().toLowerCase();
  return activeAssets().filter((asset) => {
    const text = [
      asset.campaign,
      asset.assetName,
      asset.naming,
      asset.hook,
      asset.rationale,
      asset.country,
      asset.campaignType,
      asset.productCategory,
      asset.productCluster,
      asset.cta,
      asset.prospectingMessage,
      asset.remarketingMessage,
      asset.notes
    ].join(" ").toLowerCase();
    const matchesQuery = !query || text.includes(query);
    const matchesFormat = !els.formatFilter.value || asset.format === els.formatFilter.value;
    const matchesVisual = !els.missingVisualOnly.checked || !asset.visual;
    return matchesQuery && matchesFormat && matchesVisual;
  }).sort((a, b) => sortableDate(a.goLive) - sortableDate(b.goLive));
}

function sortableDate(value) {
  const match = String(value || "").trim().match(/^(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?$/);
  if (!match) return Infinity;
  const day = Number(match[1]);
  const month = Number(match[2]);
  let year = match[3] ? Number(match[3]) : new Date().getFullYear();
  if (year < 100) year += 2000;
  return year * 10000 + month * 100 + day;
}

function render() {
  renderKpis();
  if (currentView === "production") {
    renderRows();
  }
  if (currentView === "analytics") renderAnalytics();
  if (currentView === "visuals") renderVisualLibrary();
  if (modalAssetId) renderModalContent();
  updateHealthBadges();
}

function renderKpis() {
  const open = activeAssets();
  setText("kpiTotal", open.length);
  setText("kpiMissingVisual", open.filter((asset) => !asset.visual && asset.status !== "Done").length);
  setText("kpiPerf", open.filter((asset) => asset.performance).length);
  renderLastImportLine();
}

function renderLastImportLine() {
  const el = document.getElementById("lastImportLine");
  if (!el) return;
  const dateLabel = lastPipelineImportAt
    ? new Date(lastPipelineImportAt).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })
    : "mai importato";
  el.innerHTML = `Ultimo import ADV Pipeline: <strong>${escapeHtml(dateLabel)}</strong> · "Import Meta CSV" si trova ora nella scheda Analisi.`;
}

function renderRows() {
  const filtered = getFilteredAssets();
  els.resultCount.textContent = `${filtered.length} righe`;

  els.rows.innerHTML = filtered.map((asset) => `
    <tr data-id="${asset.id}">
      <td>
        <div class="asset-name campaign-cell">
          <strong>${escapeHtml(asset.campaign || "-")}</strong>
          <small>${escapeHtml(asset.assignee || "-")}</small>
        </div>
      </td>
      <td>
        <div class="asset-name">
          <strong>${escapeHtml(asset.assetName)}</strong>
          ${asset.isNew ? `<small><span class="pill high">Nuovo</span></small>` : ""}
        </div>
      </td>
      <td>${escapeHtml(asset.goLive || "-")}</td>
      <td>${escapeHtml(asset.deadline || "-")}</td>
      <td>${escapeHtml(asset.country || "-")}</td>
      <td>${escapeHtml(asset.campaignType || "-")}</td>
      <td>${escapeHtml(asset.productCategory || "-")}</td>
      <td>${escapeHtml(asset.productCluster || "-")}</td>
      <td><span class="pill ${asset.format.toLowerCase()}">${escapeHtml(asset.format)}</span></td>
      <td><span class="pill ${asset.status.toLowerCase().replaceAll(" ", "-")}">${escapeHtml(asset.status)}</span></td>
      <td><span class="visual-dot">${asset.visual ? `<img src="${asset.visual}" alt="">` : "..."}</span></td>
    </tr>
  `).join("");

  els.rows.querySelectorAll("tr").forEach((row) => {
    row.addEventListener("click", () => openAssetModal(row.dataset.id));
  });
}

function bindModal() {
  els.modalClose.addEventListener("click", closeAssetModal);
  els.modalBackdrop.addEventListener("click", (event) => {
    if (event.target === els.modalBackdrop) closeAssetModal();
  });
  els.modalPrev.addEventListener("click", () => navigateModal(-1));
  els.modalNext.addEventListener("click", () => navigateModal(1));
}

function openAssetModal(id) {
  const asset = assets.find((item) => item.id === id);
  if (!asset) return;
  modalAssetId = id;
  if (asset.isNew) {
    asset.isNew = false;
    saveAssets();
    renderRows();
  }
  els.modalBackdrop.hidden = false;
  renderModalContent();
}

function closeAssetModal() {
  modalAssetId = null;
  els.modalBackdrop.hidden = true;
  els.detail.innerHTML = "";
}

function navigateModal(direction) {
  if (!modalAssetId) return;
  const list = getFilteredAssets();
  const index = list.findIndex((asset) => asset.id === modalAssetId);
  if (index === -1) return;
  const nextIndex = index + direction;
  if (nextIndex < 0 || nextIndex >= list.length) return;
  openAssetModal(list[nextIndex].id);
}

function renderModalContent() {
  const asset = assets.find((item) => item.id === modalAssetId);
  if (!asset) {
    closeAssetModal();
    return;
  }

  const list = getFilteredAssets();
  const index = list.findIndex((item) => item.id === asset.id);
  els.modalPrev.disabled = index <= 0;
  els.modalNext.disabled = index === -1 || index >= list.length - 1;

  els.modalPill.textContent = asset.format;
  els.modalPill.className = `pill ${asset.format.toLowerCase()}`;
  els.modalTitle.textContent = asset.assetName;

  renderDetail(asset);
}

function renderDetail(asset) {
  els.detail.innerHTML = `
    <div class="detail-hero">
      ${asset.visual ? `<img src="${asset.visual}" alt="${escapeHtml(asset.assetName)}">` : uploadTemplate(asset.id)}
    </div>
    <div class="meta-grid">
      ${metaItem("Campagna", asset.campaign, true)}
      ${metaItem("Deadline", asset.deadline)}
      ${metaItem("Go live", asset.goLive)}
      ${metaItem("Campaign type", asset.campaignType)}
      ${metaItem("Country", asset.country)}
      ${metaItem("Product cluster", asset.productCluster)}
      ${metaItem("Product category", asset.productCategory)}
      ${metaItem("Funnel", asset.funnel)}
      ${metaItem("Landing", asset.landing)}
      ${metaItem("Naming", asset.naming, true)}
    </div>
    ${copyTemplate(asset)}
    ${performanceTemplate(asset)}
    <div class="detail-controls">
      <label class="field">
        <span>Status</span>
        <select id="detailStatus">
          ${["Draft", "Work in progress", "Review", "Ready", "Done"].map((status) => `<option ${asset.status === status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
      </label>
      <label class="field">
        <span>Owner</span>
        <input id="detailOwner" type="text" value="${escapeAttr(asset.assignee || "")}">
      </label>
      <label class="field full">
        <span>Note visual / learning</span>
        <textarea id="detailNotes" placeholder="Es. visual dominante, crop, insight post-performance...">${escapeHtml(asset.notes || "")}</textarea>
      </label>
    </div>
    <div class="actions">
      <button class="primary-button" type="button" id="editAsset">Modifica asset</button>
      <button class="ghost-button" type="button" id="duplicateAsset">Duplica asset</button>
      ${asset.visual ? `<button class="ghost-button" type="button" id="replaceVisual">Sostituisci visual</button><button class="ghost-button" type="button" id="removeVisual">Rimuovi visual</button>` : ""}
      <button class="ghost-button danger" type="button" id="deleteAsset">Elimina asset</button>
      <input id="hiddenVisualInput" type="file" accept="image/*" hidden>
    </div>
  `;

  bindDetailControls(asset);
}

function uploadTemplate(id) {
  return `
    <label class="upload-zone" for="visual-${id}">
      <span>
        <strong>Carica visual per questa riga</strong><br>
        <small>JPG, PNG o WebP. Salvato nello stato locale ed esportabile in JSON.</small>
      </span>
      <input id="visual-${id}" type="file" accept="image/*">
    </label>
  `;
}

function metaItem(label, value, full = false) {
  return `<div class="meta-item${full ? " full" : ""}"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value || "-")}</strong></div>`;
}

function performanceTemplate(asset) {
  if (!asset.performance) {
    return `<p class="notes"><strong>Performance:</strong> Nessun dato Meta importato per questa riga.</p>`;
  }

  const perf = asset.performance;
  return `
    <div class="perf-strip">
      ${performanceMetric("Spend", formatMetric(perf.spend, "currency"))}
      ${performanceMetric("CPM", formatMetric(perf.cpm, "currency"))}
      ${performanceMetric("CTR", formatMetric(perf.ctr, "percent"))}
      ${performanceMetric("CPR", formatMetric(perf.cpr, "currency"))}
    </div>
  `;
}

function performanceMetric(label, value) {
  return `<div class="perf-metric"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value || "-")}</strong></div>`;
}

function copyTemplate(asset) {
  if (!asset.hook && !asset.cta && !asset.prospectingMessage && !asset.remarketingMessage) return "";
  return `
    <div class="copy-block">
      ${asset.hook ? `<p><strong>Hook:</strong> ${escapeHtml(asset.hook)}</p>` : ""}
      ${asset.cta ? `<p><strong>CTA:</strong> ${escapeHtml(asset.cta)}</p>` : ""}
      ${asset.prospectingMessage ? `<p><strong>Prospecting:</strong> ${escapeHtml(asset.prospectingMessage)}</p>` : ""}
      ${asset.remarketingMessage ? `<p><strong>Remarketing:</strong> ${escapeHtml(asset.remarketingMessage)}</p>` : ""}
    </div>
  `;
}

function bindDetailControls(asset) {
  const update = (patch) => {
    Object.assign(asset, patch);
    saveAssets();
    renderKpis();
    renderRows();
  };

  document.getElementById("detailStatus").addEventListener("change", (event) => update({ status: event.target.value }));
  document.getElementById("detailOwner").addEventListener("input", (event) => update({ assignee: event.target.value }));
  document.getElementById("detailNotes").addEventListener("input", (event) => update({ notes: event.target.value }));

  const input = document.querySelector(`#visual-${asset.id}`) || document.getElementById("hiddenVisualInput");
  input.addEventListener("change", (event) => handleVisualUpload(event, asset));

  document.getElementById("replaceVisual")?.addEventListener("click", () => document.getElementById("hiddenVisualInput").click());
  document.getElementById("editAsset")?.addEventListener("click", () => {
    closeAssetModal();
    openEditAssetDrawer(asset);
  });
  document.getElementById("duplicateAsset")?.addEventListener("click", () => {
    closeAssetModal();
    duplicateAsset(asset);
  });
  document.getElementById("removeVisual")?.addEventListener("click", () => {
    update({ visual: "", visualName: "" });
    renderDetail(asset);
    showToast("Visual rimosso.");
  });
  document.getElementById("deleteAsset")?.addEventListener("click", () => deleteAsset(asset));
}

function deleteAsset(asset) {
  const label = asset.assetName || asset.campaign || "questo asset";
  const confirmed = window.confirm(`Eliminare definitivamente "${label}"? L'operazione non si puo annullare (a meno di reimportare il CSV).`);
  if (!confirmed) return;

  const index = assets.findIndex((item) => item.id === asset.id);
  if (index === -1) return;
  assets.splice(index, 1);

  if (selectedId === asset.id) {
    selectedId = assets[0]?.id || null;
  }
  if (modalAssetId === asset.id) {
    closeAssetModal();
  }

  const saved = saveAssets();
  populateFilters();
  render();
  if (saved) {
    showToast(`"${label}" eliminato.`);
  }
}

function openNewAssetDrawer(prefill = {}) {
  editingAssetId = null;
  document.getElementById("drawerTitle").textContent = "Nuovo asset";
  els.assetForm.querySelector('button[type="submit"]').textContent = "Salva asset";
  namingTouched = Boolean(prefill.naming);
  els.assetForm.reset();
  Object.entries({
    priority: "High",
    status: "Draft",
    format: "Video",
    creativeType: "UGC",
    funnel: "pr_",
    landing: "hp",
    assignee: "Federica",
    ...prefill
  }).forEach(([key, value]) => {
    if (els.assetForm[key] && key !== "visualFile") els.assetForm[key].value = value || "";
  });
  if (!namingTouched) updateGeneratedNaming();
  els.assetDrawer.hidden = false;
  els.assetForm.campaign.focus();
}

function openEditAssetDrawer(asset) {
  editingAssetId = asset.id;
  document.getElementById("drawerTitle").textContent = "Modifica asset";
  els.assetForm.querySelector('button[type="submit"]').textContent = "Aggiorna asset";
  openNewAssetDrawer({
    campaign: asset.campaign,
    goLive: asset.goLive,
    deadline: asset.deadline,
    priority: asset.priority,
    status: asset.status,
    format: asset.format,
    creativeType: asset.creativeType,
    productCategory: asset.productCategory,
    productCluster: asset.productCluster,
    country: asset.country,
    cta: asset.cta,
    prospectingMessage: asset.prospectingMessage,
    remarketingMessage: asset.remarketingMessage,
    campaignType: asset.campaignType,
    funnel: asset.funnel,
    landing: asset.landing,
    assetName: asset.assetName,
    hook: asset.hook,
    naming: asset.naming,
    assignee: asset.assignee,
    rationale: asset.rationale
  });
  editingAssetId = asset.id;
  document.getElementById("drawerTitle").textContent = "Modifica asset";
  els.assetForm.querySelector('button[type="submit"]').textContent = "Aggiorna asset";
}

function closeAssetDrawer() {
  els.assetDrawer.hidden = true;
  editingAssetId = null;
}

function handleAssetSubmit(event) {
  event.preventDefault();
  const formData = new FormData(els.assetForm);
  const existingAsset = assets.find((asset) => asset.id === editingAssetId) || null;
  const asset = buildAssetFromForm(formData, existingAsset);
  const file = formData.get("visualFile");

  const finish = () => {
    if (existingAsset) {
      Object.assign(existingAsset, asset);
    } else {
      assets.unshift(asset);
    }
    selectedId = asset.id;
    const saved = saveAssets();
    populateFilters();
    closeAssetDrawer();
    currentView = "production";
    showProductionView();
    render();
    if (saved) {
      showToast(existingAsset ? "Asset aggiornato." : "Asset creato in pipeline.");
    }
  };

  if (file && file.size) {
    compressImage(file).then((dataUrl) => {
      asset.visual = dataUrl || "";
      asset.visualName = file.name;
      finish();
    });
  } else {
    finish();
  }
}

function buildAssetFromForm(formData, existingAsset = null) {
  return {
    id: existingAsset?.id || makeAssetId(),
    campaign: String(formData.get("campaign") || "").trim(),
    goLive: String(formData.get("goLive") || "").trim(),
    deadline: String(formData.get("deadline") || "").trim(),
    priority: String(formData.get("priority") || "High"),
    campaignType: String(formData.get("campaignType") || "").trim(),
    assetName: String(formData.get("assetName") || "").trim(),
    format: String(formData.get("format") || "Video"),
    creativeType: String(formData.get("creativeType") || "UGC"),
    productCategory: String(formData.get("productCategory") || "").trim(),
    productCluster: String(formData.get("productCluster") || "").trim(),
    country: String(formData.get("country") || "").trim(),
    hook: String(formData.get("hook") || "").trim(),
    cta: String(formData.get("cta") || "").trim(),
    prospectingMessage: String(formData.get("prospectingMessage") || "").trim(),
    remarketingMessage: String(formData.get("remarketingMessage") || "").trim(),
    funnel: String(formData.get("funnel") || "pr_"),
    landing: String(formData.get("landing") || "hp"),
    naming: String(formData.get("naming") || "").trim() || generateNamingFromForm(),
    assignee: String(formData.get("assignee") || "").trim(),
    status: String(formData.get("status") || "Draft"),
    rationale: String(formData.get("rationale") || "").trim(),
    notes: existingAsset?.notes || "",
    performance: existingAsset?.performance || null,
    visual: existingAsset?.visual || "",
    visualName: existingAsset?.visualName || "",
    archived: existingAsset?.archived || false,
    pipelineTracked: existingAsset?.pipelineTracked || false,
    lastSeenImportAt: existingAsset?.lastSeenImportAt || null,
    healthIgnored: existingAsset?.healthIgnored || {}
  };
}

function updateGeneratedNaming() {
  if (namingTouched) return;
  els.assetForm.naming.value = generateNamingFromForm();
}

function generateNamingFromForm() {
  const form = els.assetForm;
  const funnel = String(form.funnel.value || "pr_").split("+")[0].trim().replace("_", "");
  const category = categoryCode(form.productCategory.value || form.assetName.value);
  const format = formatCode(form.format.value);
  const creative = creativeCode(form.creativeType.value);
  const campaign = shortSlug(form.campaign.value || "campaign", 18);
  const concept = shortSlug(form.assetName.value || "asset", 20);
  const landing = String(form.landing.value || "hp").split("/")[0].trim();
  return `${funnel}_it_${category}_${format}_${creative}_${campaign}_${concept}_v1_${landing}`.replace(/_+/g, "_");
}

function duplicateAsset(asset) {
  openNewAssetDrawer({
    campaign: asset.campaign,
    goLive: asset.goLive,
    deadline: asset.deadline,
    priority: asset.priority,
    campaignType: asset.campaignType,
    assetName: uniqueCopyName(asset.assetName),
    format: asset.format,
    creativeType: asset.creativeType,
    productCategory: asset.productCategory,
    productCluster: asset.productCluster,
    country: asset.country,
    cta: asset.cta,
    prospectingMessage: asset.prospectingMessage,
    remarketingMessage: asset.remarketingMessage,
    hook: asset.hook,
    funnel: asset.funnel,
    landing: asset.landing,
    naming: incrementVersion(asset.naming),
    assignee: asset.assignee,
    status: "Draft",
    rationale: asset.rationale
  });
  namingTouched = true;
  showToast("Asset duplicato: modifica e salva.");
}

function uniqueCopyName(assetName) {
  const base = `${assetName} copy`;
  let candidate = base;
  let counter = 2;
  while (assets.some((asset) => asset.assetName === candidate)) {
    candidate = `${base} ${counter}`;
    counter += 1;
  }
  return candidate;
}

function makeAssetId() {
  return `asset-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

function incrementVersion(naming) {
  if (!naming) return "";
  const match = naming.match(/_v(\d+)_/);
  if (!match) return `${naming}_copy`;
  const next = String(Number(match[1]) + 1);
  return naming.replace(`_v${match[1]}_`, `_v${next}_`);
}

function showProductionView() {
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("is-active", item.dataset.view === "production"));
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-active"));
  document.getElementById("productionView").classList.add("is-active");
}

function categoryCode(value) {
  const text = String(value || "").toLowerCase();
  if (text.includes("bath") || text.includes("bagno") || text.includes("sport")) return "bath";
  if (text.includes("mixed") || text.includes("mix")) return "mixed";
  if (text.includes("duvet") || text.includes("copripiumino")) return "duvet";
  return "bed";
}

function formatCode(value) {
  return String(value || "Video").toLowerCase().replace("static", "static").replace("carousel", "carousel").replace("gif", "gif").replace("video", "video");
}

function creativeCode(value) {
  const text = String(value || "").toLowerCase();
  if (text.includes("ai")) return "ai";
  if (text.includes("ugc")) return "ugc";
  return "brand";
}

function shortSlug(value, maxLength) {
  return normalizeKey(value)
    .split("_")
    .filter(Boolean)
    .slice(0, 5)
    .join("_")
    .slice(0, maxLength)
    .replace(/_+$/g, "") || "asset";
}

function handleVisualUpload(event, asset) {
  const file = event.target.files?.[0];
  if (!file) return;
  compressImage(file).then((dataUrl) => {
    asset.visual = dataUrl || "";
    asset.visualName = file.name;
    const saved = saveAssets();
    render();
    if (saved) {
      showToast("Visual collegato alla riga.");
    }
  });
}

function compressImage(file, maxDimension = 1600, quality = 0.82) {
  return new Promise((resolve) => {
    if (!file.type || file.type === "image/gif") {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(file);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDimension || height > maxDimension) {
          if (width >= height) {
            height = Math.round((height / width) * maxDimension);
            width = maxDimension;
          } else {
            width = Math.round((width / height) * maxDimension);
            height = maxDimension;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.onerror = () => resolve(reader.result);
      img.src = String(reader.result || "");
    };
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  });
}

function renderAnalytics() {
  renderAnalyticsStatusLine();
  renderScorecard();
  renderMixChart();
  renderPerformanceInsights();
}

function renderAnalyticsStatusLine() {
  const el = document.getElementById("analyticsStatusLine");
  if (!el) return;
  const importDates = assets
    .filter((asset) => asset.performance && asset.performance.importedAt)
    .map((asset) => asset.performance.importedAt)
    .sort();
  const latest = importDates.length ? importDates[importDates.length - 1] : null;
  const metaLabel = latest
    ? new Date(latest).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })
    : "mai importato";
  el.innerHTML = `Basata su <strong>${assets.length} asset</strong> attualmente in pipeline · ultimo import Meta: <strong>${escapeHtml(metaLabel)}</strong>`;
}

function renderScorecard() {
  const container = document.getElementById("formatScorecard");
  const formats = ["Video", "Static", "GIF", "Carousel"];
  container.innerHTML = formats.map((format) => {
    const items = activeAssets().filter((asset) => asset.format === format);
    const missingVisuals = items.filter((asset) => !asset.visual && asset.status !== "Done").length;
    return `
      <div class="scorecard-card">
        <span class="pill ${format.toLowerCase()}">${format}</span>
        <strong>${items.length} asset · ${missingVisuals} senza visual</strong>
        <p>${bestPerformerLine(items)}</p>
      </div>
    `;
  }).join("");
}

function bestPerformerLine(items) {
  const withPerf = items.filter((asset) => asset.performance && asset.performance.cpr);
  if (!withPerf.length) return "Nessun dato performance ancora";
  const best = [...withPerf].sort((a, b) => a.performance.cpr - b.performance.cpr)[0];
  return `🏆 ${escapeHtml(best.assetName)} · ${formatMetric(best.performance.cpr, "currency")} CPR`;
}

function renderMixChart() {
  const svg = document.getElementById("mixDonut");
  const legend = document.getElementById("mixLegend");
  const open = activeAssets().filter((asset) => asset.status !== "Done");
  const colors = { Static: "#a8522e", GIF: "#af8427", Video: "#47745a", Carousel: "#315f85" };
  const counts = countBy(open, "format");
  const data = Object.entries(counts)
    .filter(([, value]) => value > 0)
    .sort((a, b) => b[1] - a[1])
    .map(([label, value]) => ({ label, value, color: colors[label] || "#766a60" }));

  if (!data.length) {
    svg.innerHTML = "";
    legend.innerHTML = `<p class="notes">Nessun asset attivo da rappresentare.</p>`;
    return;
  }

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const r = 15.9;
  const cx = 21;
  const cy = 21;
  let offset = 0;
  let circles = "";
  data.forEach((item) => {
    const pct = (item.value / total) * 100;
    circles += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="transparent" stroke="${item.color}" stroke-width="6" stroke-dasharray="${pct} ${100 - pct}" stroke-dashoffset="${100 - offset + 25}"><title>${escapeHtml(item.label)}: ${item.value} (${pct.toFixed(0)}%)</title></circle>`;
    offset += pct;
  });
  svg.innerHTML = `${circles}<text x="21" y="23" text-anchor="middle" font-size="6" fill="#29231e" font-weight="700">${total}</text>`;

  legend.innerHTML = data.map((item) => `
    <div class="legend-row">
      <span class="legend-dot" style="background:${item.color}"></span>
      ${escapeHtml(item.label)}
      <strong>${item.value} · ${((item.value / total) * 100).toFixed(0)}%</strong>
    </div>
  `).join("");
}

function renderPerformanceInsights() {
  const matched = activeAssets().filter((asset) => asset.performance);
  const summary = document.getElementById("performanceSummary");
  const container = document.getElementById("performanceInsights");

  if (!matched.length) {
    summary.textContent = "Nessun CSV importato";
    container.innerHTML = `
      <article class="performance-card">
        <strong>Import pronto</strong>
        <p>Usa il pulsante Import Meta CSV. L'app fara match sugli ad name e salvera le metriche nel browser.</p>
      </article>
    `;
    return;
  }

  const winners = matched.filter((asset) => asset.performance.badge === "WIN").length;
  const watch = matched.filter((asset) => asset.performance.badge === "WATCH").length;
  const pause = matched.filter((asset) => asset.performance.badge === "PAUSE").length;
  const totalSpend = matched.reduce((sum, asset) => sum + (asset.performance.spend || 0), 0);
  const top = [...matched].sort((a, b) => (b.performance.spend || 0) - (a.performance.spend || 0)).slice(0, 3);

  summary.textContent = `${matched.length} asset matchati · ${formatMetric(totalSpend, "currency")} spend`;
  container.innerHTML = `
    <article class="performance-card">
      <strong>${winners} winner · ${watch} da osservare · ${pause} da pausare</strong>
      <p>Badge generati da CPR, spend e risultati importati dal CSV Meta.</p>
    </article>
    ${top.map((asset) => `
      <article class="performance-card">
        <strong>${escapeHtml(asset.assetName)}</strong>
        <p>${escapeHtml(asset.performance.badge)} · ${formatMetric(asset.performance.spend, "currency")} spend · ${formatMetric(asset.performance.cpr, "currency")} CPR</p>
      </article>
    `).join("")}
  `;
}

function renderVisualLibrary() {
  const open = activeAssets();
  const withVisual = open.filter((asset) => asset.visual);
  document.getElementById("libraryCount").innerHTML = `<strong>${withVisual.length}</strong> visual caricati su ${open.length} asset`;

  const formats = ["Video", "Static", "GIF", "Carousel"];
  document.getElementById("formatStats").innerHTML = formats.map((format) => {
    const count = open.filter((asset) => asset.format === format).length;
    return `<div><strong>${count}</strong><small>${escapeHtml(format)}</small></div>`;
  }).join("");

  const query = (els.librarySearch.value || "").trim().toLowerCase();
  const formatValue = els.libraryFormatFilter.value;
  const sortValue = els.librarySort.value;

  let filtered = withVisual.filter((asset) => {
    const text = [asset.assetName, asset.campaign, asset.naming, asset.notes].join(" ").toLowerCase();
    const matchesQuery = !query || text.includes(query);
    const matchesFormat = !formatValue || asset.format === formatValue;
    return matchesQuery && matchesFormat;
  });

  if (sortValue === "performance") {
    filtered = [...filtered].sort((a, b) => {
      const aCpr = a.performance?.cpr ?? Infinity;
      const bCpr = b.performance?.cpr ?? Infinity;
      return aCpr - bCpr;
    });
  } else if (sortValue === "campaign") {
    filtered = [...filtered].sort((a, b) => (a.campaign || "").localeCompare(b.campaign || ""));
  }
  // "recent" (default) keeps the natural array order: newly created/imported assets
  // are unshifted to the front, so it already reads most-recent-first.

  document.getElementById("visualLibrary").innerHTML = filtered.length ? filtered.map((asset) => `
    <article class="visual-card">
      <img src="${asset.visual}" alt="${escapeHtml(asset.assetName)}">
      <div>
        <strong>${escapeHtml(asset.assetName)}</strong>
        <small>${escapeHtml(asset.format)} · ${escapeHtml(asset.campaign)}</small>
        ${asset.performance ? `<small><span class="perf-badge has-data">${escapeHtml(asset.performance.badge)}</span></small>` : ""}
        <small>${escapeHtml(asset.notes || "Nessun learning ancora")}</small>
      </div>
    </article>
  `).join("") : `<article class="priority-card"><strong>Nessun visual trovato.</strong><p>${withVisual.length ? "Prova a modificare i filtri di ricerca." : "Apri Produzione e carica un'immagine su una riga specifica."}</p></article>`;
}

function handlePipelineCsvImport(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const rows = parseCsv(String(reader.result || ""));
    const importTimestamp = new Date().toISOString();
    const campaignsSeen = [...new Set(rows.map((row) => findValue(row, CAMPAIGN_HEADER_CANDIDATES)).filter(Boolean))];
    const result = applyPipelineRows(rows, importTimestamp);
    lastPipelineImportAt = importTimestamp;
    lastImportCampaigns = campaignsSeen;
    lastPipelineImportStats = { rows: rows.length, created: result.created, updated: result.updated };
    const saved = saveAssets();
    populateFilters();
    render();
    if (saved) {
      const anomalies = countOpenAnomalies();
      showToast(`${result.created} creati · ${result.updated} aggiornati dal tab ADV Pipeline${anomalies ? ` · ${anomalies} anomalie rilevate` : ""}.`);
      if (anomalies > 0) {
        setTimeout(openHealthModal, 500);
      }
    }
    els.pipelineCsvInput.value = "";
  };
  reader.readAsText(file);
}

function applyPipelineRows(rows, importTimestamp) {
  let created = 0;
  let updated = 0;

  rows.map(normalizePipelineRow).filter(Boolean).forEach((incoming) => {
    incoming.lastSeenImportAt = importTimestamp;
    incoming.pipelineTracked = true;

    const existing = findAssetForPipelineImport(incoming);
    if (existing) {
      Object.assign(existing, {
        ...incoming,
        id: existing.id,
        // Protect a naming already filled in (manually or via Health Check) from being
        // blanked out by a re-import whose source sheet still has that cell empty.
        naming: incoming.naming || existing.naming,
        // Same protection for campaign: a blank cell in a re-import should never erase
        // a campaign name the asset already has.
        campaign: incoming.campaign || existing.campaign,
        notes: existing.notes || incoming.notes || "",
        performance: existing.performance || null,
        visual: existing.visual || "",
        visualName: existing.visualName || "",
        isNew: existing.isNew || false,
        archived: existing.archived || false,
        // The asset was just re-confirmed by a fresh import, so any previous
        // "keep even though missing from CSV" orphan dismissal no longer applies.
        healthIgnored: { ...(existing.healthIgnored || {}), orphan: false }
      });
      updated += 1;
    } else {
      incoming.isNew = true;
      incoming.archived = false;
      incoming.healthIgnored = {};
      assets.unshift(incoming);
      created += 1;
    }
  });

  selectedId = assets[0]?.id || null;
  return { created, updated };
}

// Note: deliberately no bare "campaign" candidate — it fuzzy-matches the unrelated
// "Campaign Type" column (an actual real-world CSV collision found via testing) and
// would silently pull the wrong cell into the campaign field whenever "Campaign / Moment"
// is blank.
const CAMPAIGN_HEADER_CANDIDATES = ["campaign / moment", "campagna", "moment", "fase", "initiative"];

function normalizePipelineRow(row) {
  const assetName = findValue(row, ["asset focus", "focus asset", "asset name", "asset", "creative", "creative name", "nome asset", "contenuto"]);
  const campaign = findValue(row, CAMPAIGN_HEADER_CANDIDATES);
  const naming = findValue(row, ["naming convention", "naming", "ad name", "ad_name", "nome inserzione"]);

  if (!assetName && !campaign && !naming) return null;

  return {
    id: makeAssetId(),
    // Leave a genuinely blank CSV cell blank rather than papering over it with a
    // placeholder — an empty campaign should surface in the Health Check, not hide.
    campaign: campaign || "",
    goLive: findValue(row, ["go live", "go-live", "live date", "data live", "start", "launch date"]),
    deadline: findValue(row, ["deadline", "due date", "scadenza", "delivery date"]),
    country: findValue(row, ["country", "paese", "market", "mercato"]),
    priority: normalizePriority(findValue(row, ["priority", "priorita", "priorità"])),
    campaignType: findValue(row, ["campaign type", "type", "tipologia campagna", "objective"]),
    assetName: assetName || naming || "Imported asset",
    format: normalizeFormat(findValue(row, ["format", "formato", "asset format"])),
    creativeType: normalizeCreativeType(findValue(row, ["creative type", "tipo creativo", "creative", "creator type"])),
    productCategory: findValue(row, ["product category", "categoria prodotto", "category", "product", "prodotto"]),
    productCluster: findValue(row, ["product cluster", "cluster prodotto", "cluster", "product family", "famiglia prodotto", "product subcategory", "sottocategoria prodotto"]),
    hook: findValue(row, ["hook direction", "hook", "first 2 sec", "first 2 seconds", "hook first 2 sec"]),
    cta: findValue(row, ["cta", "call to action", "call-to-action"]),
    prospectingMessage: findValue(row, ["prospecting", "copy prospecting", "message prospecting", "messaggio prospecting", "pr copy", "pr_ copy"]),
    remarketingMessage: findValue(row, ["remarketing", "copy remarketing", "message remarketing", "messaggio remarketing", "rm copy", "rm_ copy"]),
    funnel: findValue(row, ["funnel", "funnel stage", "pr/rm/rt", "funnel pr/rm/rt"]) || "pr_",
    landing: findValue(row, ["landing", "landing page", "pdp/hp/plp", "lp"]) || "hp",
    naming: naming || "",
    assignee: findValue(row, ["assignee", "owner", "responsabile", "asana assignee"]) || "Federica",
    status: normalizeStatus(findValue(row, ["status", "stato"])),
    rationale: findValue(row, ["adv rationale", "rationale", "meta rationale", "insight", "notes", "note"]),
    notes: "",
    performance: null,
    visual: "",
    visualName: "",
    isNew: false
  };
}

function findAssetForPipelineImport(incoming) {
  const naming = normalizeKey(incoming.naming);
  if (naming) {
    const byNaming = assets.find((asset) => normalizeKey(asset.naming) === naming);
    if (byNaming) return byNaming;
  }

  const composite = normalizeKey(`${incoming.campaign} ${incoming.assetName}`);
  return assets.find((asset) => normalizeKey(`${asset.campaign} ${asset.assetName}`) === composite);
}

function normalizePriority(value) {
  const text = String(value || "").toLowerCase();
  if (text.includes("low")) return "Low";
  if (text.includes("med")) return "Medium";
  return "High";
}

function normalizeStatus(value) {
  const text = String(value || "").toLowerCase();
  if (text.includes("done") || text.includes("fatto")) return "Done";
  if (text.includes("ready") || text.includes("pronto")) return "Ready";
  if (text.includes("review")) return "Review";
  if (text.includes("progress") || text.includes("wip") || text.includes("lavor")) return "Work in progress";
  return "Draft";
}

function normalizeFormat(value) {
  const text = String(value || "").toLowerCase();
  if (text.includes("carousel")) return "Carousel";
  if (text.includes("gif")) return "GIF";
  if (text.includes("static") || text.includes("image") || text.includes("foto")) return "Static";
  return "Video";
}

function normalizeCreativeType(value) {
  const text = String(value || "").toLowerCase();
  if (text.includes("ai")) return "UGC+AI";
  if (text.includes("brand")) return "Brand";
  return "UGC";
}

function handleMetaCsvImport(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const rows = parseCsv(String(reader.result || ""));
    const result = applyMetaRows(rows, file.name);
    lastMetaImportStats = { rows: rows.length, matched: result.matched, unmatched: result.unmatched };
    const saved = saveAssets();
    render();
    if (saved) {
      showToast(`${result.matched} asset matchati da ${file.name}${result.unmatched ? ` · ${result.unmatched} righe senza corrispondenza` : ""}.`);
      if (result.unmatched > 0) {
        setTimeout(openMetaModal, 500);
      }
    }
    els.metaCsvInput.value = "";
  };
  reader.readAsText(file);
}

const META_ADNAME_CANDIDATES = ["ad name", "ad_name", "ad", "nome inserzione", "inserzione"];

function applyMetaRows(rows, fileName) {
  const matchedAssetIds = new Set();
  const stillUnmatched = [];

  rows.forEach((row) => {
    const adName = findValue(row, META_ADNAME_CANDIDATES);
    if (!adName) return;

    const performance = normalizePerformance(row, adName, fileName);
    const asset = findAssetByAdName(adName);
    if (asset) {
      asset.performance = performance;
      matchedAssetIds.add(asset.id);
      return;
    }

    // Never silently drop Meta spend/performance data: a row with no matching asset
    // is queued for manual review in the Meta Health Check instead of being discarded.
    const normalizedAdName = normalizeKey(adName);
    if (ignoredMetaAdNames.includes(normalizedAdName)) return;
    stillUnmatched.push({ adName, normalizedAdName, performance });
  });

  unmatchedMetaRows = stillUnmatched;
  return { matched: matchedAssetIds.size, unmatched: unmatchedMetaRows.length };
}

function findAssetByAdName(adName) {
  const normalizedAdName = normalizeKey(adName);
  if (!normalizedAdName) return null;
  // Guard against blank/very short naming or asset names: "".includes("") (and any
  // short generic fragment) would otherwise match almost anything, silently
  // misattributing Meta spend/performance to the wrong asset.
  const MIN_MATCH_LENGTH = 6;
  return assets.find((asset) => {
    const naming = normalizeKey(asset.naming);
    const assetName = normalizeKey(asset.assetName);
    const namingMatch = naming.length >= MIN_MATCH_LENGTH
      && (normalizedAdName === naming || normalizedAdName.includes(naming) || naming.includes(normalizedAdName));
    const assetNameMatch = assetName.length >= MIN_MATCH_LENGTH && normalizedAdName.includes(assetName);
    return namingMatch || assetNameMatch;
  });
}

function normalizePerformance(row, adName, fileName) {
  const spend = parseNumber(findValue(row, ["amount spent", "spend", "importo speso", "spesa"]));
  const impressions = parseNumber(findValue(row, ["impressions", "impression", "visualizzazioni"]));
  const cpm = parseNumber(findValue(row, ["cpm", "cpm (cost per 1,000 impressions)"]));
  const ctr = parseNumber(findValue(row, ["ctr", "ctr (link click-through rate)", "link ctr"]));
  const results = parseNumber(findValue(row, ["results", "risultati", "website purchases", "purchases", "acquisti"]));
  const cpr = parseNumber(findValue(row, ["cost per result", "costo per risultato", "cost per purchase", "cpa"]));
  const video25 = parseNumber(findValue(row, ["video plays at 25%", "video played at 25%", "25% video plays", "video 25%"]));
  const badge = performanceBadge({ spend, results, cpr });

  return {
    adName,
    importedFrom: fileName,
    importedAt: new Date().toISOString(),
    spend,
    impressions,
    cpm,
    ctr,
    results,
    cpr,
    video25,
    badge,
    insight: performanceInsight({ spend, results, cpr, cpm, ctr, video25, badge })
  };
}

function performanceBadge(perf) {
  if ((perf.results || 0) >= 20 && perf.cpr && perf.cpr <= 20) return "WIN";
  if ((perf.spend || 0) >= 300 && (!perf.results || (perf.cpr && perf.cpr >= 70))) return "PAUSE";
  if ((perf.spend || 0) < 100) return "LOW";
  return "WATCH";
}

function performanceInsight(perf) {
  if (perf.badge === "WIN") return "Segnale forte: risultati solidi e CPR sotto soglia. Candidato per scaling o adattamento su altri placement.";
  if (perf.badge === "PAUSE") return "Spesa significativa con ritorno debole. Da rivedere visual, hook o funnel prima di continuare.";
  if (perf.badge === "LOW") return "Dato ancora immaturo: serve piu spend prima di decidere.";
  if (perf.video25 && perf.video25 > 0 && (!perf.results || perf.results < 5)) return "Retention presente ma conversione debole: utile per learning creativo, meno per scaling conversion.";
  return "Da monitorare nel prossimo export: performance non estrema, utile confronto con benchmark formato/funnel.";
}

// ==================== Data Health Check: anomaly detection ====================

function activeAssets() {
  return assets.filter((asset) => !asset.archived);
}

function pairKeyStr(a, b) {
  return [a.id, b.id].sort().join("|");
}

function bigrams(value) {
  const text = normalizeKey(value).replace(/_/g, "");
  const grams = [];
  for (let i = 0; i < text.length - 1; i += 1) grams.push(text.slice(i, i + 2));
  return grams;
}

function diceCoefficient(a, b) {
  const bigramsA = bigrams(a);
  const bigramsB = bigrams(b);
  if (!bigramsA.length || !bigramsB.length) return 0;
  const pool = new Map();
  bigramsB.forEach((gram) => pool.set(gram, (pool.get(gram) || 0) + 1));
  let matches = 0;
  bigramsA.forEach((gram) => {
    const count = pool.get(gram) || 0;
    if (count > 0) {
      matches += 1;
      pool.set(gram, count - 1);
    }
  });
  return (2 * matches) / (bigramsA.length + bigramsB.length);
}

function computeDuplicateGroups() {
  const candidates = activeAssets();
  const pairs = [];
  const seenKeys = new Set();

  const addPair = (a, b, reason, similarity) => {
    const key = pairKeyStr(a, b);
    if (seenKeys.has(key) || ignoredDuplicatePairs.includes(key)) return;
    seenKeys.add(key);
    pairs.push({ a, b, reason, similarity, key });
  };

  const byNaming = new Map();
  candidates.forEach((asset) => {
    const key = normalizeKey(asset.naming);
    if (!key) return;
    if (!byNaming.has(key)) byNaming.set(key, []);
    byNaming.get(key).push(asset);
  });
  byNaming.forEach((group) => {
    if (group.length < 2) return;
    for (let i = 0; i < group.length; i += 1) {
      for (let j = i + 1; j < group.length; j += 1) {
        addPair(group[i], group[j], "Naming identico dopo la normalizzazione → quasi certamente lo stesso asset", 1);
      }
    }
  });

  const byBucket = new Map();
  candidates.forEach((asset) => {
    const bucketKey = `${normalizeKey(asset.campaign)}|${asset.format}|${normalizeKey(asset.goLive)}`;
    if (!byBucket.has(bucketKey)) byBucket.set(bucketKey, []);
    byBucket.get(bucketKey).push(asset);
  });
  byBucket.forEach((group) => {
    if (group.length < 2) return;
    for (let i = 0; i < group.length; i += 1) {
      for (let j = i + 1; j < group.length; j += 1) {
        const a = group[i];
        const b = group[j];
        if (seenKeys.has(pairKeyStr(a, b))) continue;
        const similarity = diceCoefficient(a.assetName, b.assetName);
        if (similarity >= 0.8) {
          addPair(a, b, `Naming diverso ma stessa campagna + formato + go live → ${Math.round(similarity * 100)}% di somiglianza sul testo dell'Asset Focus`, similarity);
        }
      }
    }
  });

  return pairs;
}

function computeOrphans() {
  if (!lastPipelineImportAt) return [];
  return activeAssets().filter((asset) => asset.pipelineTracked
    && asset.lastSeenImportAt !== lastPipelineImportAt
    && !(asset.healthIgnored && asset.healthIgnored.orphan));
}

function computeCampaignIssues() {
  return activeAssets().filter((asset) => {
    const empty = !asset.campaign;
    const unrecognized = lastImportCampaigns.length > 0 && asset.campaign && !lastImportCampaigns.includes(asset.campaign);
    return empty || unrecognized;
  });
}

function computeMissingNaming() {
  return activeAssets().filter((asset) => !asset.naming);
}

function countOpenAnomalies() {
  return computeDuplicateGroups().length + computeOrphans().length + computeCampaignIssues().length + computeMissingNaming().length;
}

function parseCsv(text) {
  const lines = [];
  let row = [];
  let cell = "";
  let insideQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && insideQuotes && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === "," && !insideQuotes) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !insideQuotes) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell);
      if (row.some((value) => value.trim())) lines.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  row.push(cell);
  if (row.some((value) => value.trim())) lines.push(row);
  if (lines.length < 2) return [];

  const headerIndex = findCsvHeaderIndex(lines);
  if (headerIndex === -1) return [];

  const headers = lines[headerIndex].map((header) => normalizeHeader(header));
  return lines.slice(headerIndex + 1).map((line) => headers.reduce((acc, header, index) => {
    acc[header] = String(line[index] || "").trim();
    acc.__cells = line;
    return acc;
  }, {}));
}

function findCsvHeaderIndex(lines) {
  return lines.findIndex((line) => {
    const headers = line.map(normalizeHeader);
    const hasCampaign = headers.some((header) => header.includes("campaign") || header.includes("campagna"));
    const hasAsset = headers.some((header) => header.includes("asset"));
    const hasFormat = headers.some((header) => header.includes("format") || header.includes("formato"));
    const isPipelineHeader = hasCampaign && hasAsset && hasFormat;

    // A real Meta Ads Manager export never has "asset"/"format" columns — its header
    // row instead always carries an ad name plus a spend/results metric. Recognizing
    // that shape too means the same CSV parser handles both import types.
    const hasAdName = headers.some((header) => header.includes("ad name") || header.includes("ad_name") || header.includes("nome inserzione"));
    const hasMetaMetric = headers.some((header) => header.includes("amount spent") || header.includes("impressions") || header.includes("cost per result") || header.includes("spesa") || header.includes("risultati"));
    const isMetaHeader = hasAdName && hasMetaMetric;

    return isPipelineHeader || isMetaHeader;
  });
}

function findValue(row, candidates) {
  const normalizedCandidates = candidates.map(normalizeHeader);
  const key = normalizedCandidates.find((candidate) => row[candidate] !== undefined && row[candidate] !== "");
  if (key) return row[key];

  const rowKeys = Object.keys(row).filter((rowKey) => rowKey !== "__cells" && row[rowKey] !== "");
  const fuzzyKey = rowKeys.find((rowKey) => normalizedCandidates.some((candidate) => rowKey.includes(candidate) || candidate.includes(rowKey)));
  return fuzzyKey ? row[fuzzyKey] : "";
}

function normalizeHeader(value) {
  return String(value || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function normalizeKey(value) {
  return String(value || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}

function parseNumber(value) {
  if (value === undefined || value === null || value === "") return null;
  const normalized = String(value)
    .replace(/[€$%]/g, "")
    .replace(/\s/g, "")
    .replace(/\.(?=\d{3}(\D|$))/g, "")
    .replace(",", ".");
  const number = Number.parseFloat(normalized);
  return Number.isFinite(number) ? number : null;
}

function formatMetric(value, type) {
  if (value === null || value === undefined || Number.isNaN(value)) return "-";
  if (type === "currency") return `EUR ${Number(value).toLocaleString("it-IT", { maximumFractionDigits: 2 })}`;
  if (type === "percent") return `${Number(value).toLocaleString("it-IT", { maximumFractionDigits: 2 })}%`;
  return Number(value).toLocaleString("it-IT", { maximumFractionDigits: 2 });
}

function exportJson() {
  downloadFile(`dalfilo-creative-hub-${dateStamp()}.json`, JSON.stringify({ assets, exportedAt: new Date().toISOString() }, null, 2), "application/json");
  showToast("JSON esportato.");
}

function exportCsv() {
  const headers = ["campaign", "goLive", "deadline", "country", "priority", "campaignType", "assetName", "format", "creativeType", "productCategory", "productCluster", "hook", "cta", "prospectingMessage", "remarketingMessage", "funnel", "landing", "naming", "assignee", "status", "rationale", "notes", "visualName", "performanceBadge", "spend", "cpm", "ctr", "results", "cpr"];
  const rows = [headers, ...assets.map((asset) => headers.map((key) => asset[key] || ""))];
  rows.slice(1).forEach((row, index) => {
    const perf = assets[index].performance || {};
    row[23] = perf.badge || "";
    row[24] = perf.spend || "";
    row[25] = perf.cpm || "";
    row[26] = perf.ctr || "";
    row[27] = perf.results || "";
    row[28] = perf.cpr || "";
  });
  const csv = rows.map((row) => row.map(csvCell).join(",")).join("\n");
  downloadFile(`dalfilo-creative-pipeline-${dateStamp()}.csv`, csv, "text/csv");
  showToast("CSV esportato.");
}

function downloadFile(name, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  link.click();
  URL.revokeObjectURL(url);
}

function countBy(list, key) {
  return list.reduce((acc, item) => {
    const value = item[key] || "Altro";
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function setText(id, value) {
  document.getElementById(id).textContent = value;
}

function csvCell(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function dateStamp() {
  return new Date().toISOString().slice(0, 10);
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("\n", " ");
}

let toastTimer;
function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.toast.classList.remove("is-visible"), 2200);
}

// ==================== Data Health Check: ADV Pipeline modal ====================

function bindHealthModal() {
  els.healthModalClose.addEventListener("click", closeHealthModal);
  els.healthModalBackdrop.addEventListener("click", (event) => {
    if (event.target === els.healthModalBackdrop) closeHealthModal();
  });
  els.healthModalBody.addEventListener("click", handleHealthModalClick);
}

function openHealthModal() {
  renderHealthCheck();
  els.healthModalBackdrop.hidden = false;
}

function closeHealthModal() {
  els.healthModalBackdrop.hidden = true;
}

function renderHealthCheck() {
  const duplicates = computeDuplicateGroups();
  const orphans = computeOrphans();
  const campaignIssues = computeCampaignIssues();
  const namingIssues = computeMissingNaming();
  const totalAnomalies = duplicates.length + orphans.length + campaignIssues.length + namingIssues.length;
  const stats = lastPipelineImportStats;

  els.healthModalBody.innerHTML = `
    <div class="summary-strip">
      <div class="summary-tile"><span>${stats ? stats.rows : "–"}</span><p>Righe nel CSV importato</p></div>
      <div class="summary-tile"><span>${activeAssets().length}</span><p>Asset nell'app</p></div>
      <div class="summary-tile"><span>${stats ? stats.updated : "–"}</span><p>Corrispondenze confermate</p></div>
      <div class="summary-tile alert"><span id="healthTotalCount">${totalAnomalies}</span><p>Anomalie da rivedere</p></div>
    </div>

    <div class="hc-section">
      <div class="hc-section-heading">
        <div><h3>Possibili duplicati</h3><p>Stesso concetto creativo, probabilmente da due import diversi</p></div>
        <span class="count-pill">${duplicates.length}</span>
      </div>
      <div class="hc-section-body">
        ${duplicates.length ? duplicates.map(dupPairTemplate).join("") : `<p class="hc-empty">Nessun duplicato rilevato.</p>`}
      </div>
    </div>

    <div class="hc-section">
      <div class="hc-section-heading">
        <div><h3>Asset non presenti nell'ultimo CSV importato</h3><p>Erano nel foglio prima, ora non ci sono più</p></div>
        <span class="count-pill">${orphans.length}</span>
      </div>
      <div class="hc-section-body">
        ${orphans.length ? orphans.map(orphanRowTemplate).join("") : `<p class="hc-empty">Nessun asset orfano rispetto all'ultimo import.</p>`}
      </div>
      <p class="hc-legend-note"><strong>Nota:</strong> "Archivia" non cancella — nasconde dalla tabella e resta nell'export JSON/CSV. Nessun visual o performance viene mai eliminato.</p>
    </div>

    <div class="hc-section">
      <div class="hc-section-heading">
        <div><h3>Campagna mancante o non riconosciuta</h3><p>Vuota, oppure non corrisponde a nessuna campagna del CSV più recente</p></div>
        <span class="count-pill">${campaignIssues.length}</span>
      </div>
      <div class="hc-section-body">
        ${campaignIssues.length ? campaignIssues.map(campaignRowTemplate).join("") : `<p class="hc-empty">Tutte le campagne corrispondono al CSV più recente.</p>`}
      </div>
    </div>

    <div class="hc-section">
      <div class="hc-section-heading">
        <div><h3>Naming mancante o da assegnare</h3><p>Naming vuoto — finché resta vuoto, l'asset non può collegarsi in automatico a un import Meta CSV</p></div>
        <span class="count-pill">${namingIssues.length}</span>
      </div>
      <div class="hc-section-body">
        ${namingIssues.length ? namingIssues.map(namingRowTemplate).join("") : `<p class="hc-empty">Tutti gli asset hanno un naming assegnato.</p>`}
      </div>
      <p class="hc-legend-note"><strong>Nota:</strong> scrivendolo qui lo salvi subito, senza dover reimportare il CSV. L'app protegge questo valore: se il prossimo CSV ha ancora la cella vuota, non lo sovrascrive.</p>
    </div>

    <div class="hc-footer">
      <p class="safety-note"><strong>Garanzia:</strong> in ogni unione o correzione, l'app tiene sempre la versione con visual, note o performance già collegati. Nessuna azione qui è distruttiva senza conferma.</p>
      <div class="hc-footer-actions">
        <button class="ghost-button" type="button" id="healthCloseBtn2">Chiudi e rivedi più tardi</button>
      </div>
    </div>
  `;

  document.getElementById("healthCloseBtn2").addEventListener("click", closeHealthModal);
}

function dupPairTemplate(pair) {
  const { a, b, reason, key } = pair;
  return `
    <div class="dup-pair" data-pair-key="${escapeAttr(key)}">
      <div class="dup-pair-header">${escapeHtml(reason)}</div>
      <div class="dup-cards">
        ${dupCardTemplate(a)}
        ${dupCardTemplate(b)}
      </div>
      <div class="dup-actions">
        <button class="primary-button" type="button" data-action="merge-duplicate" data-keep="${a.id}" data-merge="${b.id}">Tieni la sinistra, unisci la destra</button>
        <button class="ghost-button" type="button" data-action="merge-duplicate" data-keep="${b.id}" data-merge="${a.id}">Tieni la destra, unisci la sinistra</button>
        <button class="small-link" type="button" data-action="ignore-duplicate" data-pair-key="${escapeAttr(key)}">Non sono duplicati, ignora</button>
      </div>
    </div>
  `;
}

function dupCardTemplate(asset) {
  const flags = [asset.visual ? `<span class="flag has-visual">Ha visual</span>` : `<span class="flag no-visual">Senza visual</span>`];
  if (asset.performance) flags.push(`<span class="flag has-perf">Ha performance Meta</span>`);
  return `
    <div class="dup-card">
      <span class="pill ${asset.format.toLowerCase()}">${escapeHtml(asset.format)}</span>
      <strong>${escapeHtml(asset.assetName)}</strong>
      <small>${escapeHtml(asset.campaign || "-")} · Go live ${escapeHtml(asset.goLive || "-")}</small>
      <small>Naming: ${escapeHtml(asset.naming || "(vuoto)")}</small>
      <div class="flags">${flags.join("")}</div>
    </div>
  `;
}

function orphanRowTemplate(asset) {
  const detail = `Campagna: ${asset.campaign || "(vuota)"} · ${asset.visual ? "Ha visual caricato" : "Senza visual"}`;
  return `
    <div class="hc-row" data-id="${asset.id}">
      <div class="info"><strong>${escapeHtml(asset.assetName)}</strong><small>${escapeHtml(detail)}</small></div>
      <div class="row-actions">
        <button class="ghost-button" type="button" data-action="orphan-keep" data-id="${asset.id}">Mantieni</button>
        <button class="primary-button" type="button" data-action="orphan-archive" data-id="${asset.id}" style="background:var(--red)">Archivia</button>
      </div>
      <span class="resolved-tag"></span>
    </div>
  `;
}

function campaignRowTemplate(asset) {
  const currentLabel = asset.campaign ? `"${asset.campaign}"` : "(vuota)";
  const options = lastImportCampaigns.map((name) => `<option value="${escapeAttr(name)}">${escapeHtml(name)}</option>`).join("");
  return `
    <div class="hc-row" data-id="${asset.id}">
      <div class="info"><strong>${escapeHtml(asset.assetName)}</strong><small>Campagna attuale: ${escapeHtml(currentLabel)}</small></div>
      <div class="row-actions">
        <select data-role="campaign-select">
          <option value="">Assegna a una campagna del CSV attuale...</option>
          ${options}
        </select>
        <button class="primary-button" type="button" data-action="apply-campaign" data-id="${asset.id}">Applica</button>
      </div>
      <span class="resolved-tag">✓ Corretto</span>
    </div>
  `;
}

function namingRowTemplate(asset) {
  return `
    <div class="hc-row" data-id="${asset.id}">
      <div class="info"><strong>${escapeHtml(asset.assetName)}</strong><small>${escapeHtml(asset.campaign || "-")} · ${escapeHtml(asset.format)} · naming ancora da assegnare</small></div>
      <div class="row-actions">
        <input type="text" data-role="naming-input" placeholder="Es. pr_it_bed_static_brand_..._v1_hp">
        <button class="primary-button" type="button" data-action="save-naming" data-id="${asset.id}">Salva</button>
      </div>
      <span class="resolved-tag">✓ Naming salvato</span>
    </div>
  `;
}

function handleHealthModalClick(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;

  if (action === "merge-duplicate") {
    const result = mergeDuplicatePair(button.dataset.keep, button.dataset.merge);
    renderHealthCheck();
    render();
    if (result.merged) {
      showToast("Duplicato unito: visual, note e performance sono stati conservati.");
    } else if (result.reason === "conflicting-visuals") {
      window.alert("Questi due asset hanno entrambi un visual diverso: non li unisco automaticamente per non rischiare di perderne uno. Controlla i due asset e rimuovi manualmente il visual sbagliato prima di riprovare, oppure usa \"Non sono duplicati, ignora\" se in realtà sono due asset distinti.");
    }
    return;
  }

  if (action === "ignore-duplicate") {
    if (!ignoredDuplicatePairs.includes(button.dataset.pairKey)) {
      ignoredDuplicatePairs.push(button.dataset.pairKey);
      saveAssets();
    }
    renderHealthCheck();
    render();
    return;
  }

  if (action === "orphan-keep") {
    const asset = assets.find((item) => item.id === button.dataset.id);
    if (asset) {
      asset.healthIgnored = { ...(asset.healthIgnored || {}), orphan: true };
      saveAssets();
    }
    renderHealthCheck();
    render();
    return;
  }

  if (action === "orphan-archive") {
    const asset = assets.find((item) => item.id === button.dataset.id);
    if (asset) {
      asset.archived = true;
      const saved = saveAssets();
      renderHealthCheck();
      render();
      if (saved) {
        showToast(`"${asset.assetName}" archiviato: resta nell'export, sparisce dalla tabella.`);
      }
    }
    return;
  }

  if (action === "apply-campaign") {
    const row = button.closest(".hc-row");
    const select = row?.querySelector('[data-role="campaign-select"]');
    const asset = assets.find((item) => item.id === button.dataset.id);
    if (asset && select && select.value) {
      asset.campaign = select.value;
      saveAssets();
      renderHealthCheck();
      render();
    }
    return;
  }

  if (action === "save-naming") {
    const row = button.closest(".hc-row");
    const input = row?.querySelector('[data-role="naming-input"]');
    const asset = assets.find((item) => item.id === button.dataset.id);
    const value = String(input?.value || "").trim();
    if (asset && value) {
      asset.naming = value;
      const saved = saveAssets();
      renderHealthCheck();
      render();
      if (saved) {
        showToast("Naming salvato.");
      }
    }
  }
}

function mergeDuplicatePair(keepId, mergeId) {
  const keep = assets.find((item) => item.id === keepId);
  const merge = assets.find((item) => item.id === mergeId);
  if (!keep || !merge) return { merged: false, reason: "not-found" };

  // Never silently drop a visual: if BOTH sides already have their own (different)
  // visual, merging one away would violate the "a visual is never deleted" guarantee.
  // Refuse the merge rather than guess which photo to keep.
  if (keep.visual && merge.visual && keep.visual !== merge.visual) {
    return { merged: false, reason: "conflicting-visuals" };
  }

  // Additive merge only: the kept asset never loses a visual, note or performance
  // it already has — it only fills in what it's missing from the duplicate.
  keep.visual = keep.visual || merge.visual;
  keep.visualName = keep.visualName || merge.visualName;
  keep.performance = keep.performance || merge.performance;
  keep.naming = keep.naming || merge.naming;
  if (merge.notes && merge.notes !== keep.notes) {
    keep.notes = keep.notes ? `${keep.notes}\n${merge.notes}` : merge.notes;
  }
  keep.pipelineTracked = keep.pipelineTracked || merge.pipelineTracked;
  if (merge.lastSeenImportAt && (!keep.lastSeenImportAt || merge.lastSeenImportAt > keep.lastSeenImportAt)) {
    keep.lastSeenImportAt = merge.lastSeenImportAt;
  }

  assets = assets.filter((item) => item.id !== merge.id);
  if (selectedId === merge.id) selectedId = keep.id;
  if (modalAssetId === merge.id) modalAssetId = keep.id;
  const saved = saveAssets();
  return { merged: saved, reason: saved ? null : "save-failed" };
}

// ==================== Data Health Check: Meta CSV modal ====================

function bindMetaModal() {
  els.metaModalClose.addEventListener("click", closeMetaModal);
  els.metaModalBackdrop.addEventListener("click", (event) => {
    if (event.target === els.metaModalBackdrop) closeMetaModal();
  });
  els.metaModalBody.addEventListener("click", handleMetaModalClick);
}

function openMetaModal() {
  renderMetaCheck();
  els.metaModalBackdrop.hidden = false;
}

function closeMetaModal() {
  els.metaModalBackdrop.hidden = true;
}

function renderMetaCheck() {
  const stats = lastMetaImportStats;
  const pendingCount = unmatchedMetaRows.length;

  els.metaModalBody.innerHTML = `
    <div class="summary-strip cols-3">
      <div class="summary-tile"><span>${stats ? stats.rows : "–"}</span><p>Righe nel CSV Meta</p></div>
      <div class="summary-tile"><span>${stats ? stats.matched : "–"}</span><p>Collegate in automatico</p></div>
      <div class="summary-tile alert"><span id="metaTotalCount">${pendingCount}</span><p>Da collegare manualmente</p></div>
    </div>

    <div class="hc-section">
      <div class="hc-section-heading">
        <div><h3>Performance Meta senza asset collegato</h3><p>Senza un collegamento, questa spesa e questi risultati non verrebbero mai associati a nessun visual</p></div>
        <span class="count-pill">${pendingCount}</span>
      </div>
      <div class="hc-section-body">
        ${pendingCount ? unmatchedMetaRows.map(metaRowTemplate).join("") : `<p class="hc-empty">Tutte le righe del CSV Meta sono collegate a un asset.</p>`}
      </div>
      <p class="hc-legend-note"><strong>Nota:</strong> "+ Crea nuovo asset" copre il caso di un asset in più rispetto al CSV (es. due statiche pubblicate a fronte di una sola riga in pipeline): crea l'asset con naming, formato e performance già collegati, e ricorda di riportarlo anche sul CSV/Google Sheet.</p>
    </div>

    <div class="hc-footer">
      <p class="safety-note"><strong>Garanzia:</strong> nessuna spesa o risultato viene scartato in silenzio — o lo colleghi, o lo usi per creare un asset, o dichiari esplicitamente che non è vostro.</p>
      <div class="hc-footer-actions">
        <button class="ghost-button" type="button" id="metaCloseBtn2">Chiudi e rivedi più tardi</button>
      </div>
    </div>
  `;

  document.getElementById("metaCloseBtn2").addEventListener("click", closeMetaModal);
}

function metaRowTemplate(row) {
  const perf = row.performance;
  const options = activeAssets()
    .slice()
    .sort((a, b) => a.assetName.localeCompare(b.assetName))
    .map((asset) => `<option value="${asset.id}">${escapeHtml(asset.assetName)} — ${escapeHtml(asset.campaign || "-")}</option>`)
    .join("");
  return `
    <div class="hc-row" data-ad-name="${escapeAttr(row.adName)}">
      <div class="info">
        <strong class="ad-name">${escapeHtml(row.adName)}</strong>
        <small>Nessun asset con questo naming nella pipeline attuale</small>
        <div class="metrics">
          <span>Spend <strong>${formatMetric(perf.spend, "currency")}</strong></span>
          <span>CPR <strong>${formatMetric(perf.cpr, "currency")}</strong></span>
          <span>Risultati <strong>${perf.results ?? "-"}</strong></span>
        </div>
      </div>
      <div class="row-actions">
        <select data-role="asset-select">
          <option value="">Collega manualmente all'asset...</option>
          ${options}
        </select>
        <button class="primary-button" type="button" data-action="meta-link" data-ad-name="${escapeAttr(row.adName)}">Collega</button>
        <button class="ghost-button" type="button" data-action="meta-create" data-ad-name="${escapeAttr(row.adName)}">+ Crea nuovo asset</button>
        <button class="small-link" type="button" data-action="meta-ignore" data-ad-name="${escapeAttr(row.adName)}">Ignora</button>
      </div>
      <span class="resolved-tag"></span>
    </div>
  `;
}

function handleMetaModalClick(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  const adName = button.dataset.adName;
  const rowIndex = unmatchedMetaRows.findIndex((row) => row.adName === adName);
  if (rowIndex === -1) return;
  const row = unmatchedMetaRows[rowIndex];

  if (action === "meta-link") {
    const rowEl = button.closest(".hc-row");
    const select = rowEl?.querySelector('[data-role="asset-select"]');
    const asset = assets.find((item) => item.id === select?.value);
    if (!asset) {
      showToast("Seleziona prima un asset dalla lista.");
      return;
    }
    asset.performance = row.performance;
    // Teach the app this ad name maps to this asset by filling in its naming if it was
    // blank — otherwise the exact same ad name would resurface as unmatched on every
    // future Meta import, forcing her to re-link it by hand each time.
    if (!asset.naming) {
      asset.naming = row.adName;
    }
    unmatchedMetaRows.splice(rowIndex, 1);
    const savedLink = saveAssets();
    renderMetaCheck();
    render();
    if (savedLink) {
      showToast(`Performance collegata a "${asset.assetName}".`);
    }
    return;
  }

  if (action === "meta-create") {
    const created = createAssetFromMetaRow(row);
    unmatchedMetaRows.splice(rowIndex, 1);
    const savedCreate = saveAssets();
    populateFilters();
    renderMetaCheck();
    render();
    if (savedCreate) {
      showToast(`"${created.assetName}" creato dalla riga Meta — ricordati di aggiungerlo anche al CSV/Google Sheet.`);
    }
    return;
  }

  if (action === "meta-ignore") {
    if (!ignoredMetaAdNames.includes(row.normalizedAdName)) {
      ignoredMetaAdNames.push(row.normalizedAdName);
    }
    unmatchedMetaRows.splice(rowIndex, 1);
    saveAssets();
    renderMetaCheck();
    render();
  }
}

function humanizeAdName(adName) {
  // Raw ad names are unbroken machine slugs (no spaces); used verbatim as an
  // assetName they overflow every card/table layout that displays it. Spacing
  // them out keeps the exact naming intact (still stored separately) while giving
  // the table/cards something that actually wraps.
  return String(adName || "").replace(/_/g, " ").trim() || "Asset da Meta CSV";
}

function createAssetFromMetaRow(row) {
  const asset = {
    id: makeAssetId(),
    campaign: "",
    goLive: "",
    deadline: "",
    country: "",
    priority: "High",
    campaignType: "",
    assetName: humanizeAdName(row.adName),
    format: normalizeFormat(row.adName),
    creativeType: normalizeCreativeType(row.adName),
    productCategory: "",
    productCluster: "",
    hook: "",
    cta: "",
    prospectingMessage: "",
    remarketingMessage: "",
    funnel: "pr_",
    landing: "hp",
    naming: row.adName,
    assignee: "Federica",
    status: "Draft",
    rationale: "",
    notes: "",
    performance: row.performance,
    visual: "",
    visualName: "",
    isNew: true,
    archived: false,
    pipelineTracked: false,
    lastSeenImportAt: null,
    healthIgnored: {}
  };
  assets.unshift(asset);
  selectedId = asset.id;
  return asset;
}

function updateHealthBadges() {
  const healthCount = countOpenAnomalies();
  els.healthBadge.textContent = healthCount;
  els.healthBadge.style.display = healthCount ? "grid" : "none";

  const metaCount = unmatchedMetaRows.length;
  els.metaBadge.textContent = metaCount;
  els.metaBadge.style.display = metaCount ? "grid" : "none";
}

init();
