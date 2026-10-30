


//1. Mobile navigation menu
   

// Find the menu button and navigation links.
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

// Open and close the menu when the button is clicked.
menuToggle.addEventListener("click", () => {
    const isExpanded =
        menuToggle.getAttribute("aria-expanded") === "true";

    // Update the menu's visual state.
    navLinks.classList.toggle("open");

    // Keep accessibility information in sync.
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));

    menuToggle.setAttribute(
        "aria-label",
        isExpanded ? "Open navigation menu" : "Close navigation menu"
    );
});

// Close the mobile menu after a navigation link is selected.
const navigationItems = navLinks.querySelectorAll("a");

navigationItems.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    });
});

// Close the mobile menu when the Escape key is pressed.
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
        menuToggle.focus();
    }
});

//2. Automatically update the footer year

// This avoids having to update the copyright year manually.
const currentYear = document.querySelector("#current-year");

currentYear.textContent = new Date().getFullYear();

//3. Highlight the current navigation section

// Collect the page sections that have matching navigation links.
const pageSections = document.querySelectorAll("main section");

const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;

                // Remove the active state from all navigation links.
                navigationItems.forEach((link) => {
                    link.classList.remove("active");
                });

                // Highlight the link for the visible section.
                const activeLink = navLinks.querySelector(
                    `a[href="#${sectionId}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    },
    {
        rootMargin: "-25% 0px -60% 0px"
    }
);

// Observe each section as the visitor scrolls.
pageSections.forEach((section) => {
    sectionObserver.observe(section);
});
