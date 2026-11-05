
/* =====================================
   NORTH STAR BANK
   MAIN JAVASCRIPT
===================================== */

/* SIDEBAR MENU */

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");

  if (!sidebar || !overlay) return;

  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
}

/* CLOSE SIDEBAR WITH ESCAPE KEY */

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");

    if (sidebar && overlay) {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    }
  }
});

/* SEARCH PANEL */

function toggleSearch() {
  const searchPanel = document.getElementById("searchPanel");

  if (!searchPanel) return;

  searchPanel.classList.toggle("active");

  if (searchPanel.classList.contains("active")) {
    const searchInput = searchPanel.querySelector("input");

    if (searchInput) {
      searchInput.focus();
    }
  }
}

/* SEARCH WEBSITE */

document.addEventListener("DOMContentLoaded", function() {

  const searchInput = document.querySelector(
    "#searchPanel input"
  );

  if (searchInput) {
    searchInput.addEventListener("keydown", function(event) {

      if (event.key !== "Enter") return;

      const query = searchInput.value.trim().toLowerCase();

      if (!query) return;

      const destinations = {
        "personal banking": "index.html#personal",
        "personal": "index.html#personal",
        "credit cards": "credit-cards.html",
        "cards": "credit-cards.html",
        "services": "index.html#services",
        "online banking": "online-banking.html",
        "about": "about.html",
        "about us": "about.html",
        "contact": "contact.html",
        "contact us": "contact.html",
        "accounts": "accounts.html",
        "business banking": "business-banking.html",
        "wealth management": "wealth-management.html",
        "security": "security.html"
      };

      if (destinations[query]) {
        window.location.href = destinations[query];
      } else {
        alert("No matching page found. Please try another search.");
      }

    });
  }

});

/* CLOSE MENU AFTER CLICKING A LINK */

document.addEventListener("DOMContentLoaded", function() {

  const sidebarLinks = document.querySelectorAll(
    ".sidebar a"
  );

  sidebarLinks.forEach(function(link) {

    link.addEventListener("click", function() {

      const sidebar = document.getElementById("sidebar");
      const overlay = document.getElementById("sidebarOverlay");

      if (sidebar && overlay) {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
      }

    });

  });

});

/* FOOTER YEAR */

document.addEventListener("DOMContentLoaded", function() {

  const footerYear = document.querySelector(
    ".footer-bottom"
  );

  if (footerYear) {
    footerYear.textContent =
      "© " + new Date().getFullYear() +
      " North Star Bank. All rights reserved.";
  }

});
