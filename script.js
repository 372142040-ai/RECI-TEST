document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const search = document.querySelector("[data-search]");
if (search) {
  search.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    const query = search.value.toLowerCase();
    const routes = {
      "golem island": "golem-island.html",
      "mod": "mods.html",
      "nexus": "mods.html",
      "vulkan": "vulkan-fix.html",
      "update": "update-history.html",
      "guide": "guide.html"
    };
    const route = Object.entries(routes).find(([term]) => query.includes(term));
    window.location.href = route ? route[1] : "guide.html";
  });
}
