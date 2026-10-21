const products = window.ASH_PRODUCTS || [];
const categories = window.ASH_CATEGORIES || [];

const grid = document.getElementById("productGrid");
const categoryGrid = document.getElementById("categoryGrid");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearch");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const activeFilter = document.getElementById("activeFilter");
const activeFilterLabel = document.getElementById("activeFilterLabel");
const resetFiltersBtn = document.getElementById("resetFilters");
const emptyResetBtn = document.getElementById("emptyReset");

let activeCategory = "all";
let query = "";
let lastFocused = null;

const categoryDescriptions = {
  all: "View every component in the showcase.",
  "engine-filtration": "Air, oil and cabin filtration for engine and cabin airflow.",
  braking: "Pads and rotors that make up the disc braking system.",
  electrical: "Ignition and charging components for petrol engines.",
  cooling: "Heat exchange for engine temperature control.",
  lighting: "Forward illumination assemblies for visibility.",
  transmission: "Gearbox components that transfer power to the wheels.",
};

function countFor(id) {
  return id === "all" ? products.length : products.filter((p) => p.category === id).length;
}

function renderCategories() {
  categoryGrid.innerHTML = categories
    .map(
      (c) => `
      <button type="button" class="category-card" data-category="${c.id}" aria-pressed="${activeCategory === c.id}">
        <h3>${c.label} <span class="category-count">(${countFor(c.id)})</span></h3>
        <p>${categoryDescriptions[c.id] || ""}</p>
      </button>`
    )
    .join("");
  categoryGrid.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      renderCategories();
      renderProducts();
      document.getElementById("products").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function filtered() {
  const q = query.trim().toLowerCase();
  return products.filter((p) => {
    const inCategory = activeCategory === "all" || p.category === activeCategory;
    if (!inCategory) return false;
    if (!q) return true;
    return [p.name, p.categoryLabel, p.description].join(" ").toLowerCase().includes(q);
  });
}

function renderProducts() {
  const items = filtered();
  resultCount.textContent = `Showing ${items.length} of ${products.length} products`;
  emptyState.hidden = items.length !== 0;
  grid.hidden = items.length === 0;

  const label = categories.find((c) => c.id === activeCategory)?.label || "All Products";
  activeFilter.hidden = activeCategory === "all" && !query;
  activeFilterLabel.textContent = label + (query ? ` — search: "${query}"` : "");

  grid.innerHTML = items
    .map(
      (p, i) => `
      <article class="product-card">
        <div class="card-media">
          <img src="${p.image}" alt="${p.alt}" width="800" height="600" ${i < 3 ? "" : 'loading="lazy"'} />
        </div>
        <div class="card-body">
          <p class="card-category">${p.categoryLabel}</p>
          <h3>${p.name}</h3>
          <p class="desc">${p.description}</p>
          <button type="button" class="card-action" data-id="${p.id}">View Details</button>
        </div>
      </article>`
    )
    .join("");

  grid.querySelectorAll(".card-action").forEach((btn) =>
    btn.addEventListener("click", () => openModal(btn.dataset.id, btn))
  );
}

function resetAll() {
  activeCategory = "all";
  query = "";
  searchInput.value = "";
  clearSearchBtn.hidden = true;
  renderCategories();
  renderProducts();
}

searchInput.addEventListener("input", () => {
  query = searchInput.value;
  clearSearchBtn.hidden = !query;
  renderProducts();
});
clearSearchBtn.addEventListener("click", () => {
  query = "";
  searchInput.value = "";
  clearSearchBtn.hidden = true;
  renderProducts();
  searchInput.focus();
});
resetFiltersBtn.addEventListener("click", resetAll);
emptyResetBtn.addEventListener("click", resetAll);

/* Modal — accessible, focus-trapped, Esc to close */
const backdrop = document.getElementById("modalBackdrop");
const modal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");

function openModal(id, trigger) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  lastFocused = trigger || document.activeElement;
  document.getElementById("modalImage").src = p.image;
  document.getElementById("modalImage").alt = p.alt;
  document.getElementById("modalCategory").textContent = p.categoryLabel;
  document.getElementById("modalTitle").textContent = p.name;
  document.getElementById("modalDesc").textContent = p.description;
  backdrop.hidden = false;
  document.body.style.overflow = "hidden";
  modalClose.focus();
}
function closeModal() {
  backdrop.hidden = true;
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}
modalClose.addEventListener("click", closeModal);
backdrop.addEventListener("click", (e) => { if (e.target === backdrop) closeModal(); });
document.addEventListener("keydown", (e) => {
  if (backdrop.hidden) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "Tab") {
    // Simple trap: keep focus inside modal (only focusable element besides links is close button)
    const focusables = modal.querySelectorAll("button, a[href]");
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* Mobile nav */
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");
navToggle.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});
siteNav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

document.getElementById("year").textContent = new Date().getFullYear();
renderCategories();
renderProducts();
