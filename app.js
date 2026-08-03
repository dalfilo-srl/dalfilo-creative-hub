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

const benchmarks = {
  Static: "Volume driver. Best on rm_ + HP. Always run 2+ variants.",
  Video: "Evaluate by retention, watch time and conversion role. UGC first.",
  GIF: "Lowest CPM. Mandatory rt_ asset for every active collection.",
  Carousel: "Discovery layer. Best on warm audience or HP, avoid cold PLP."
};

const seedAssets = Array.isArray(window.DALFILO_SEED_ASSETS)
  ? window.DALFILO_SEED_ASSETS.map(normalizeAssetDefaults)
  : fallbackSeedAssets.map(normalizeAssetDefaults);

const storageKey = "dalfilo-creative-hub-v3";
const legacyStorageKeys = ["dalfilo-creative-hub-v2", "dalfilo-creative-hub-v1"];
const FS_COLLECTION = "assets";
const STORAGE_PREFIX = "visuals";
const ALLOWED_DOMAIN = "dalfilo.com";

// Runtime state — populated after Auth resolves
let assets = [];
let selectedId = null;
let currentView = "production";
let editingAssetId = null;
let currentUser = null;
let firestoreUnsub = null;
let firstSnapshot = false;
let saveInFlight = new Set();     // asset IDs whose Firestore write is pending
let migrationInFlight = false;    // guard against double-run of the local→cloud migration

const els = {
  rows: document.getElementById("assetRows"),
  detail: document.getElementById("assetDetail"),
  emptyDetail: document.getElementById("emptyDetail"),
  resultCount: document.getElementById("resultCount"),
  toast: document.getElementById("toast"),
  search: document.getElementById("searchInput"),
  statusFilter: document.getElementById("statusFilter"),
  formatFilter: document.getElementById("formatFilter"),
  priorityFilter: document.getElementById("priorityFilter"),
  missingVisualOnly: document.getElementById("missingVisualOnly"),
  pipelineCsvInput: document.getElementById("pipelineCsvInput"),
  metaCsvInput: document.getElementById("metaCsvInput"),
  assetDrawer: document.getElementById("assetDrawer"),
  assetForm: document.getElementById("assetForm")
};

let namingTouched = false;

function loadLocalAssets() {
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
    visualPath: asset.visualPath || ""   // Storage path (for delete/cleanup)
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

// ------- Firestore writes (single asset) -------
async function saveAssetToFirestore(asset) {
  const fb = window.__firebase;
  if (!fb || !asset?.id) return;
  saveInFlight.add(asset.id);
  setSyncBadge("syncing", "Salvataggio…");
  try {
    // Strip any legacy base64 data-URL that might have leaked through (e.g. from
    // an incomplete migration). Only http(s) URLs — pointing to Storage — belong
    // in the document.
    const cleanAsset = { ...asset };
    if (cleanAsset.visual && cleanAsset.visual.startsWith("data:")) {
      cleanAsset.visual = "";
      cleanAsset.visualName = "";
      cleanAsset.visualPath = "";
    }
    await fb.setDoc(fb.doc(fb.db, FS_COLLECTION, asset.id), cleanAsset);
    setSyncBadge("online", "Sincronizzato");
  } catch (err) {
    console.error("[firestore] save failed", err);
    setSyncBadge("error", "Errore salvataggio");
    showToast("Errore salvataggio: " + (err.code || err.message));
  } finally {
    saveInFlight.delete(asset.id);
  }
}

async function deleteAssetFromFirestore(assetId) {
  const fb = window.__firebase;
  if (!fb) return;
  try {
    await fb.deleteDoc(fb.doc(fb.db, FS_COLLECTION, assetId));
  } catch (err) {
    console.error("[firestore] delete failed", err);
    showToast("Errore eliminazione: " + (err.code || err.message));
  }
}

// Backwards-compatible name used across app.js — many places call saveAssets()
// after mutating the local `assets` array. In the cloud world we save only the
// affected asset. Callers that mutate a single asset should pass it explicitly;
// callers that mutate many (import, reset, meta-CSV) call saveAssetsBulk().
function saveAssets(target) {
  if (target && target.id) {
    saveAssetToFirestore(target);
  }
}

async function saveAssetsBulk(assetList) {
  const fb = window.__firebase;
  if (!fb) return;
  setSyncBadge("syncing", "Salvataggio…");
  try {
    let batch = fb.writeBatch(fb.db);
    let n = 0;
    for (const a of assetList) {
      const cleanAsset = { ...a };
      if (cleanAsset.visual && cleanAsset.visual.startsWith("data:")) {
        cleanAsset.visual = "";
        cleanAsset.visualName = "";
        cleanAsset.visualPath = "";
      }
      batch.set(fb.doc(fb.db, FS_COLLECTION, a.id), cleanAsset);
      n++;
      if (n % 400 === 0) { await batch.commit(); batch = fb.writeBatch(fb.db); }
    }
    if (n % 400 !== 0) await batch.commit();
    setSyncBadge("online", "Sincronizzato");
  } catch (err) {
    console.error("[firestore] bulk save failed", err);
    setSyncBadge("error", "Errore salvataggio");
    showToast("Errore salvataggio bulk: " + (err.code || err.message));
  }
}

let initDone = false;
function init() {
  if (initDone) { render(); return; }
  initDone = true;
  bindNavigation();
  bindActions();
  populateFilters();
  render();
}

// ============================================================================
// AUTH
// ============================================================================
function setSyncBadge(state, label) {
  const el = document.getElementById("syncBadge");
  if (!el) return;
  el.classList.remove("online", "offline", "error", "syncing");
  if (state) el.classList.add(state);
  const lbl = document.getElementById("syncLabel");
  if (lbl) lbl.textContent = label;
}

function showAuthScreen() {
  document.getElementById("authScreen").hidden = false;
  document.getElementById("appShell").hidden = true;
}
function hideAuthScreen() {
  document.getElementById("authScreen").hidden = true;
  document.getElementById("appShell").hidden = false;
}
function showAuthError(msg) {
  const el = document.getElementById("authError");
  el.textContent = msg;
  el.hidden = false;
}
function hideAuthError() { document.getElementById("authError").hidden = true; }

function updateUserBadge(user) {
  const badge = document.getElementById("userBadge");
  const email = document.getElementById("userEmail");
  if (user) {
    badge.hidden = false;
    email.textContent = user.email;
  } else {
    badge.hidden = true;
    email.textContent = "";
  }
}

async function doLogin() {
  const fb = window.__firebase;
  if (!fb) return;
  hideAuthError();
  try {
    const provider = new fb.GoogleAuthProvider();
    provider.setCustomParameters({ hd: ALLOWED_DOMAIN, prompt: "select_account" });
    await fb.signInWithPopup(fb.auth, provider);
  } catch (err) {
    console.error("[auth] login failed", err);
    if (err.code === "auth/popup-closed-by-user" || err.code === "auth/cancelled-popup-request") return;
    if (err.code === "auth/popup-blocked") {
      showAuthError("Il popup è stato bloccato dal browser. Consenti i popup per questo sito e riprova.");
    } else if (err.code === "auth/unauthorized-domain") {
      showAuthError("Dominio non autorizzato in Firebase Auth. Contatta il team Tech.");
    } else {
      showAuthError("Errore durante il login: " + (err.code || err.message));
    }
  }
}

async function doLogout() {
  const fb = window.__firebase;
  if (!fb) return;
  try { await fb.signOut(fb.auth); }
  catch (err) { console.error("[auth] logout failed", err); }
}

function stopFirestoreListener() {
  if (firestoreUnsub) { firestoreUnsub(); firestoreUnsub = null; }
}

function startFirestoreListener() {
  const fb = window.__firebase;
  if (!fb) return;
  setSyncBadge("syncing", "Sincronizzazione…");
  const col = fb.collection(fb.db, FS_COLLECTION);
  firestoreUnsub = fb.onSnapshot(
    col,
    { includeMetadataChanges: true },
    async (snap) => {
      // If Firestore is empty on the very first load, seed it (from localStorage
      // if there's existing data, otherwise from the built-in seed).
      if (!firstSnapshot && snap.empty && !migrationInFlight) {
        migrationInFlight = true;
        try {
          await runFirstTimeSeed();
        } finally {
          migrationInFlight = false;
        }
        // The seed writes will trigger new snapshots; return so we don't paint
        // an empty pipeline momentarily.
        return;
      }
      firstSnapshot = true;

      const incoming = [];
      snap.forEach((d) => incoming.push(normalizeAssetDefaults(d.data())));
      // Preserve seed ordering — otherwise rows would shuffle by document ID.
      // Sort roughly by creation timestamp embedded in the id when possible.
      incoming.sort((a, b) => extractIdWeight(a.id) - extractIdWeight(b.id));
      assets = incoming;
      if (!assets.some((a) => a.id === selectedId)) selectedId = assets[0]?.id || null;

      const fromCache = snap.metadata.fromCache;
      const pending = snap.metadata.hasPendingWrites;
      if (pending) setSyncBadge("syncing", "Salvataggio…");
      else if (fromCache) setSyncBadge("offline", navigator.onLine ? "Connessione al server…" : "Offline · dati locali");
      else setSyncBadge("online", "Sincronizzato");

      populateFilters();
      render();
    },
    (err) => {
      console.error("[firestore] listener error", err);
      setSyncBadge("error", "Errore sync");
      showToast("Errore di sincronizzazione: " + (err.code || err.message));
    }
  );
}

// Rank assets by numeric portion of the id, so `asset-1` < `asset-2` < ... but
// also `asset-<timestamp>-<rand>` (used for user-created ones) still sorts
// consistently. Older seed IDs stay at the top of the list.
function extractIdWeight(id) {
  if (!id) return Number.MAX_SAFE_INTEGER;
  const m = /^asset-(\d+)/.exec(id);
  if (!m) return Number.MAX_SAFE_INTEGER;
  const n = Number(m[1]);
  // Seed IDs are small integers (1..N). Runtime IDs are epoch ms (13+ digits).
  return Number.isFinite(n) ? n : Number.MAX_SAFE_INTEGER;
}

// First-time seeding: prefer existing localStorage data (migration), fall back
// to the built-in seed. Any base64 data-URLs in the local data are uploaded to
// Firebase Storage and replaced with proper URLs.
async function runFirstTimeSeed() {
  const fb = window.__firebase;
  if (!fb) return;
  setSyncBadge("syncing", "Migrazione dati…");
  const local = loadLocalAssets();
  // Migrate any embedded base64 image to Storage
  const migrated = [];
  for (const a of local) {
    let visual = a.visual || "";
    let visualPath = a.visualPath || "";
    if (visual && visual.startsWith("data:")) {
      try {
        const blob = await (await fetch(visual)).blob();
        const guessedName = a.visualName || `visual.${blob.type.split("/")[1] || "jpg"}`;
        const fakeFile = new File([blob], guessedName, { type: blob.type });
        const uploaded = await uploadVisualToStorage(fakeFile, a.id);
        visual = uploaded.url;
        visualPath = uploaded.path;
      } catch (err) {
        console.warn("[migration] visual upload failed for", a.id, err);
        visual = ""; visualPath = "";
      }
    }
    migrated.push({ ...a, visual, visualPath });
  }
  await saveAssetsBulk(migrated);
  // Remove local storage so the next login on this browser doesn't try to
  // re-migrate the same content
  try {
    localStorage.removeItem(storageKey);
    legacyStorageKeys.forEach((k) => localStorage.removeItem(k));
  } catch (_) {}
  showToast(`Dati iniziali caricati (${migrated.length} asset).`);
}

// ============================================================================
// BOOT — wire login/logout and react to auth state changes
// ============================================================================
function bootFirebaseAuth() {
  const fb = window.__firebase;
  if (!fb) return;
  document.getElementById("btnLogin").addEventListener("click", doLogin);
  document.getElementById("btnLogout").addEventListener("click", doLogout);

  fb.onAuthStateChanged(fb.auth, async (user) => {
    if (!user) {
      // Signed out — tear down and show login
      currentUser = null;
      updateUserBadge(null);
      stopFirestoreListener();
      assets = []; selectedId = null; firstSnapshot = false;
      render();
      showAuthScreen();
      return;
    }
    // Verify domain and email verified
    const email = user.email || "";
    if (!email.toLowerCase().endsWith("@" + ALLOWED_DOMAIN) || !user.emailVerified) {
      console.warn("[auth] rejecting user", email, "verified=", user.emailVerified);
      try { await fb.signOut(fb.auth); } catch (_) {}
      showAuthScreen();
      showAuthError(`Solo gli account @${ALLOWED_DOMAIN} verificati possono accedere. Hai effettuato il login con ${email || "(email non disponibile)"}.`);
      return;
    }
    hideAuthError();
    currentUser = user;
    updateUserBadge(user);
    hideAuthScreen();
    // Rebuild UI now that the shell is visible
    init();
    startFirestoreListener();
  });
}

// The rest of init() (bindings) runs the moment Auth resolves. But some element
// lookups in the els cache below happen at file load time, before Auth. That's
// fine — the elements exist in the DOM even while the shell is hidden.
if (window.__firebase) {
  bootFirebaseAuth();
} else {
  window.addEventListener("firebase-ready", bootFirebaseAuth, { once: true });
  // Safety timeout in case the module import failed
  setTimeout(() => {
    if (!window.__firebase) {
      setSyncBadge("error", "Firebase non caricato");
      showAuthScreen();
      showAuthError("Non è stato possibile caricare Firebase. Ricarica la pagina.");
    }
  }, 10000);
}

function bindNavigation() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      currentView = button.dataset.view;
      document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("is-active", item === button));
      document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-active"));
      document.getElementById(`${currentView}View`).classList.add("is-active");
      render();
    });
  });
}

function bindActions() {
  [els.search, els.statusFilter, els.formatFilter, els.priorityFilter, els.missingVisualOnly].forEach((control) => {
    control.addEventListener("input", render);
  });

  document.getElementById("resetData").addEventListener("click", async () => {
    if (!confirm("Sei sicuro di voler ripristinare la pipeline con i dati iniziali? Verranno cancellati tutti i modifiche fatte dal team.")) return;
    const fb = window.__firebase;
    // Delete every asset currently in Firestore before writing the seed
    if (fb) {
      try {
        let batch = fb.writeBatch(fb.db);
        let n = 0;
        for (const a of assets) {
          batch.delete(fb.doc(fb.db, FS_COLLECTION, a.id));
          n++;
          if (n % 400 === 0) { await batch.commit(); batch = fb.writeBatch(fb.db); }
        }
        if (n % 400 !== 0) await batch.commit();
      } catch (err) {
        console.error("[reset] delete failed", err);
        showToast("Errore reset: " + (err.code || err.message));
        return;
      }
    }
    assets = structuredClone(seedAssets);
    selectedId = assets[0].id;
    await saveAssetsBulk(assets);
    populateFilters();
    render();
    showToast("Pipeline ripristinata.");
  });

  document.getElementById("importPipelineCsv").addEventListener("click", () => els.pipelineCsvInput.click());
  els.pipelineCsvInput.addEventListener("change", handlePipelineCsvImport);
  document.getElementById("importMetaCsv").addEventListener("click", () => els.metaCsvInput.click());
  els.metaCsvInput.addEventListener("change", handleMetaCsvImport);
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
  fillSelect(els.statusFilter, ["Tutti gli status", ...unique("status")]);
  fillSelect(els.formatFilter, ["Tutti i format", ...unique("format")]);
  fillSelect(els.priorityFilter, ["Tutte le priorita", ...unique("priority")]);
}

function fillSelect(select, values) {
  select.innerHTML = values.map((value, index) => `<option value="${index === 0 ? "" : escapeHtml(value)}">${escapeHtml(value)}</option>`).join("");
}

function unique(key) {
  return [...new Set(assets.map((asset) => asset[key]).filter(Boolean))].sort();
}

function getFilteredAssets() {
  const query = els.search.value.trim().toLowerCase();
  return assets.filter((asset) => {
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
      asset.remarketingMessage
    ].join(" ").toLowerCase();
    const matchesQuery = !query || text.includes(query);
    const matchesStatus = !els.statusFilter.value || asset.status === els.statusFilter.value;
    const matchesFormat = !els.formatFilter.value || asset.format === els.formatFilter.value;
    const matchesPriority = !els.priorityFilter.value || asset.priority === els.priorityFilter.value;
    const matchesVisual = !els.missingVisualOnly.checked || !asset.visual;
    return matchesQuery && matchesStatus && matchesFormat && matchesPriority && matchesVisual;
  });
}

function render() {
  renderKpis();
  if (currentView === "production") {
    renderRows();
    renderDetail();
  }
  if (currentView === "analytics") renderAnalytics();
  if (currentView === "visuals") renderVisualLibrary();
}

function renderKpis() {
  const open = assets.filter((asset) => asset.status !== "Done");
  setText("kpiTotal", assets.length);
  setText("kpiDraft", assets.filter((asset) => asset.status === "Draft").length);
  setText("kpiWip", assets.filter((asset) => asset.status === "Work in progress").length);
  setText("kpiVisuals", assets.filter((asset) => asset.visual).length);
  setText("kpiHigh", open.filter((asset) => asset.priority === "High").length);
  setText("kpiPerf", assets.filter((asset) => asset.performance).length);
}

function renderRows() {
  const filtered = getFilteredAssets();
  els.resultCount.textContent = `${filtered.length} righe`;
  if (!filtered.some((asset) => asset.id === selectedId)) selectedId = filtered[0]?.id || null;

  els.rows.innerHTML = filtered.map((asset) => `
    <tr class="${asset.id === selectedId ? "is-selected" : ""}" data-id="${asset.id}">
      <td>
        <div class="asset-name campaign-cell">
          <strong>${escapeHtml(asset.campaign || "-")}</strong>
          <small>${escapeHtml(asset.assignee || "-")}</small>
        </div>
      </td>
      <td>
        <div class="asset-name">
          <strong>${escapeHtml(asset.assetName)}</strong>
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
    row.addEventListener("click", () => {
      selectedId = row.dataset.id;
      renderRows();
      renderDetail();
    });
  });
}

function renderDetail() {
  const asset = assets.find((item) => item.id === selectedId);
  els.emptyDetail.hidden = Boolean(asset);
  els.detail.hidden = !asset;
  if (!asset) return;

  els.detail.innerHTML = `
    <div class="detail-hero">
      ${asset.visual ? `<img src="${asset.visual}" alt="${escapeHtml(asset.assetName)}">` : uploadTemplate(asset.id)}
    </div>
    <div class="detail-body">
      <div class="detail-title">
        <span class="pill ${asset.format.toLowerCase()}">${escapeHtml(asset.format)} · ${escapeHtml(asset.creativeType)}</span>
        <h3>${escapeHtml(asset.assetName)}</h3>
      </div>
      <div class="meta-grid">
        ${metaItem("Campagna", asset.campaign)}
        ${metaItem("Go live", asset.goLive)}
        ${metaItem("Deadline", asset.deadline)}
        ${metaItem("Country", asset.country)}
        ${metaItem("Campaign type", asset.campaignType)}
        ${metaItem("Product category", asset.productCategory)}
        ${metaItem("Product cluster", asset.productCluster)}
        ${metaItem("Funnel", asset.funnel)}
        ${metaItem("Landing", asset.landing)}
        ${metaItem("Naming", asset.naming)}
        ${metaItem("Owner", asset.assignee)}
        ${metaItem("Priorita", asset.priority)}
      </div>
      <p class="notes"><strong>Hook:</strong> ${escapeHtml(asset.hook || "-")}</p>
      ${copyTemplate(asset)}
      <p class="notes"><strong>Rationale:</strong> ${escapeHtml(asset.rationale || "-")}</p>
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
        <input id="hiddenVisualInput" type="file" accept="image/*" hidden>
      </div>
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

function metaItem(label, value) {
  return `<div class="meta-item"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value || "-")}</strong></div>`;
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
    <p class="notes"><strong>Insight:</strong> ${escapeHtml(perf.insight)}</p>
  `;
}

function performanceMetric(label, value) {
  return `<div class="perf-metric"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value || "-")}</strong></div>`;
}

function copyTemplate(asset) {
  if (!asset.cta && !asset.prospectingMessage && !asset.remarketingMessage) return "";
  return `
    <div class="copy-block">
      ${asset.cta ? `<p><strong>CTA:</strong> ${escapeHtml(asset.cta)}</p>` : ""}
      ${asset.prospectingMessage ? `<p><strong>Prospecting:</strong> ${escapeHtml(asset.prospectingMessage)}</p>` : ""}
      ${asset.remarketingMessage ? `<p><strong>Remarketing:</strong> ${escapeHtml(asset.remarketingMessage)}</p>` : ""}
    </div>
  `;
}

function bindDetailControls(asset) {
  const update = (patch) => {
    Object.assign(asset, patch);
    saveAssets(asset);
    renderKpis();
    renderRows();
  };

  document.getElementById("detailStatus").addEventListener("change", (event) => update({ status: event.target.value }));
  document.getElementById("detailOwner").addEventListener("input", (event) => update({ assignee: event.target.value }));
  document.getElementById("detailNotes").addEventListener("input", (event) => update({ notes: event.target.value }));

  const input = document.querySelector(`#visual-${asset.id}`) || document.getElementById("hiddenVisualInput");
  input.addEventListener("change", (event) => handleVisualUpload(event, asset));

  document.getElementById("replaceVisual")?.addEventListener("click", () => document.getElementById("hiddenVisualInput").click());
  document.getElementById("editAsset")?.addEventListener("click", () => openEditAssetDrawer(asset));
  document.getElementById("duplicateAsset")?.addEventListener("click", () => duplicateAsset(asset));
  document.getElementById("removeVisual")?.addEventListener("click", () => {
    const oldPath = asset.visualPath;
    update({ visual: "", visualName: "", visualPath: "" });
    if (oldPath) deleteVisualFromStorage(oldPath);
    renderDetail();
    showToast("Visual rimosso.");
  });
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

async function handleAssetSubmit(event) {
  event.preventDefault();
  const formData = new FormData(els.assetForm);
  const existingAsset = assets.find((asset) => asset.id === editingAssetId) || null;
  const asset = buildAssetFromForm(formData, existingAsset);
  const file = formData.get("visualFile");

  // Optional visual: upload to Firebase Storage first, then persist the asset
  if (file && file.size) {
    try {
      setSyncBadge("syncing", "Caricamento visual…");
      const { url, path } = await uploadVisualToStorage(file, asset.id);
      // If we're replacing a visual, remove the old file from Storage
      if (existingAsset?.visualPath && existingAsset.visualPath !== path) {
        deleteVisualFromStorage(existingAsset.visualPath); // fire-and-forget
      }
      asset.visual = url;
      asset.visualName = file.name;
      asset.visualPath = path;
    } catch (err) {
      console.error("[storage] upload failed", err);
      setSyncBadge("error", "Errore upload visual");
      showToast("Errore upload visual: " + (err.code || err.message));
      return;
    }
  }

  if (existingAsset) {
    Object.assign(existingAsset, asset);
  } else {
    assets.unshift(asset);
  }
  selectedId = asset.id;
  await saveAssetToFirestore(existingAsset || asset);
  populateFilters();
  closeAssetDrawer();
  currentView = "production";
  showProductionView();
  render();
  showToast(existingAsset ? "Asset aggiornato." : "Asset creato in pipeline.");
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
    visualPath: existingAsset?.visualPath || ""
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

async function handleVisualUpload(event, asset) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    setSyncBadge("syncing", "Caricamento visual…");
    const { url, path } = await uploadVisualToStorage(file, asset.id);
    const oldPath = asset.visualPath;
    asset.visual = url;
    asset.visualName = file.name;
    asset.visualPath = path;
    if (oldPath && oldPath !== path) deleteVisualFromStorage(oldPath);
    await saveAssetToFirestore(asset);
    render();
    showToast("Visual collegato alla riga.");
  } catch (err) {
    console.error("[storage] upload failed", err);
    setSyncBadge("error", "Errore upload visual");
    showToast("Errore upload visual: " + (err.code || err.message));
  }
}

// ------- Firebase Storage helpers -------
function pickExtension(file) {
  const match = /\.([a-z0-9]+)$/i.exec(file.name || "");
  if (match) return match[1].toLowerCase();
  const mimeMap = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/gif": "gif" };
  return mimeMap[file.type] || "bin";
}

async function uploadVisualToStorage(file, assetId) {
  const fb = window.__firebase;
  if (!fb) throw new Error("Firebase non pronto");
  const ext = pickExtension(file);
  const path = `${STORAGE_PREFIX}/${assetId}-${Date.now()}.${ext}`;
  const ref = fb.storageRef(fb.storage, path);
  const snap = await fb.uploadBytes(ref, file, { contentType: file.type || "application/octet-stream" });
  const url = await fb.getDownloadURL(snap.ref);
  return { url, path };
}

async function deleteVisualFromStorage(path) {
  const fb = window.__firebase;
  if (!fb || !path) return;
  try {
    await fb.deleteObject(fb.storageRef(fb.storage, path));
  } catch (err) {
    // Silent — file may already be gone
    console.warn("[storage] delete failed", path, err.code || err.message);
  }
}

function renderAnalytics() {
  renderScorecard();
  renderMixChart();
  renderPriorities();
  renderPerformanceInsights();
}

function renderScorecard() {
  const container = document.getElementById("formatScorecard");
  const formats = ["Video", "Static", "GIF", "Carousel"];
  container.innerHTML = formats.map((format) => {
    const items = assets.filter((asset) => asset.format === format);
    const missingVisuals = items.filter((asset) => !asset.visual && asset.status !== "Done").length;
    return `
      <div class="scorecard-card">
        <span class="pill ${format.toLowerCase()}">${format}</span>
        <strong>${items.length} asset · ${missingVisuals} senza visual</strong>
        <p>${benchmarks[format]}</p>
      </div>
    `;
  }).join("");
}

function renderMixChart() {
  const container = document.getElementById("mixChart");
  const open = assets.filter((asset) => asset.status !== "Done");
  const counts = countBy(open, "format");
  const max = Math.max(...Object.values(counts), 1);
  container.innerHTML = Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([label, count]) => `
    <div class="bar-row">
      <header><span>${escapeHtml(label)}</span><span>${count}</span></header>
      <div class="bar-track"><div class="bar-fill" style="width:${(count / max) * 100}%"></div></div>
    </div>
  `).join("");
}

function renderPriorities() {
  const container = document.getElementById("priorityList");
  const items = assets
    .filter((asset) => asset.priority === "High" && asset.status !== "Done")
    .slice(0, 6);

  container.innerHTML = items.map((asset) => `
    <article class="priority-card">
      <strong>${escapeHtml(asset.assetName)}</strong>
      <p>${escapeHtml(asset.deadline || "-")} · ${escapeHtml(asset.format)} · ${escapeHtml(asset.funnel)}</p>
    </article>
  `).join("");
}

function renderPerformanceInsights() {
  const matched = assets.filter((asset) => asset.performance);
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
  const withVisual = assets.filter((asset) => asset.visual);
  document.getElementById("libraryCount").textContent = `${withVisual.length} visual`;
  document.getElementById("visualLibrary").innerHTML = withVisual.length ? withVisual.map((asset) => `
    <article class="visual-card">
      <img src="${asset.visual}" alt="${escapeHtml(asset.assetName)}">
      <div>
        <strong>${escapeHtml(asset.assetName)}</strong>
        <small>${escapeHtml(asset.format)} · ${escapeHtml(asset.campaign)}</small>
        <small>${escapeHtml(asset.notes || "Nessun learning ancora")}</small>
      </div>
    </article>
  `).join("") : `<article class="priority-card"><strong>Nessun visual caricato.</strong><p>Apri Produzione e carica un'immagine su una riga specifica.</p></article>`;
}

function handlePipelineCsvImport(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async () => {
    const rows = parseCsv(String(reader.result || ""));
    const result = applyPipelineRows(rows);
    await saveAssetsBulk(assets);
    populateFilters();
    render();
    showToast(`${result.created} creati · ${result.updated} aggiornati dal tab ADV Pipeline.`);
    els.pipelineCsvInput.value = "";
  };
  reader.readAsText(file);
}

function applyPipelineRows(rows) {
  let created = 0;
  let updated = 0;

  rows.map(normalizePipelineRow).filter(Boolean).forEach((incoming) => {
    const existing = findAssetForPipelineImport(incoming);
    if (existing) {
      Object.assign(existing, {
        ...incoming,
        id: existing.id,
        notes: existing.notes || incoming.notes || "",
        performance: existing.performance || null,
        visual: existing.visual || "",
        visualName: existing.visualName || ""
      });
      updated += 1;
    } else {
      assets.unshift(incoming);
      created += 1;
    }
  });

  selectedId = assets[0]?.id || null;
  return { created, updated };
}

function normalizePipelineRow(row) {
  const assetName = findValue(row, ["asset focus", "focus asset", "asset name", "asset", "creative", "creative name", "nome asset", "contenuto"]);
  const campaign = findValue(row, ["campaign / moment", "campaign", "moment", "campagna", "fase", "initiative"]);
  const naming = findValue(row, ["naming convention", "naming", "ad name", "ad_name", "nome inserzione"]);

  if (!assetName && !campaign && !naming) return null;

  return {
    id: makeAssetId(),
    campaign: campaign || "Imported pipeline",
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
    visualName: ""
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
  reader.onload = async () => {
    const rows = parseCsv(String(reader.result || ""));
    const result = applyMetaRows(rows, file.name);
    await saveAssetsBulk(assets);
    render();
    showToast(`${result.matched} asset matchati da ${file.name}.`);
    els.metaCsvInput.value = "";
  };
  reader.readAsText(file);
}

function applyMetaRows(rows, fileName) {
  const matchedAssetIds = new Set();
  rows.forEach((row) => {
    const adName = findValue(row, ["ad name", "ad_name", "ad", "nome inserzione", "inserzione"]);
    if (!adName) return;

    const asset = findAssetByAdName(adName);
    if (!asset) return;

    const performance = normalizePerformance(row, adName, fileName);
    asset.performance = performance;
    matchedAssetIds.add(asset.id);
  });

  return { matched: matchedAssetIds.size };
}

function findAssetByAdName(adName) {
  const normalizedAdName = normalizeKey(adName);
  return assets.find((asset) => {
    const naming = normalizeKey(asset.naming);
    const assetName = normalizeKey(asset.assetName);
    return normalizedAdName === naming || normalizedAdName.includes(naming) || naming.includes(normalizedAdName) || normalizedAdName.includes(assetName);
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
    acc[header] = line[index] || "";
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
    return hasCampaign && hasAsset && hasFormat;
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

// init() is now called from bootFirebaseAuth() after a valid @dalfilo.com login.
