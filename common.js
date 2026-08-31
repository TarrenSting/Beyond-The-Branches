const DATA_KEY = "btb-data-v2";

const defaultData = {
  checkins: [],
  roots: [],
  reflections: [],
  letters: {
    future: "",
    younger: "",
    unsent: ""
  }
};

/**
 * Retrieve data from localStorage
 * @returns {Object} The stored data or default structure
 */
function getData() {
  return JSON.parse(localStorage.getItem(DATA_KEY) || JSON.stringify(defaultData));
}

/**
 * Save data to localStorage
 * @param {Object} d - Data object to save
 */
function saveData(d) {
  localStorage.setItem(DATA_KEY, JSON.stringify(d));
}

/**
 * Escape HTML special characters to prevent XSS
 * @param {*} s - String to escape
 * @returns {string} Escaped string
 */
function esc(s) {
  return String(s || "").replace(/[&<>"']/g, match => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[match]));
}

// ----- THEME MANAGEMENT -----

// Load saved theme preference
const savedTheme = localStorage.getItem("btb-theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

/**
 * Update the theme toggle button text
 */
function updateThemeButton() {
  const isDark = document.body.classList.contains("dark");
  const button = document.getElementById("theme-toggle");
  if (button) {
    button.innerHTML = isDark
      ? '☀ <span>Light mode</span>'
      : '◐ <span>Dark mode</span>';
  }
}

// Theme toggle event listener
const toggleButton = document.getElementById("theme-toggle");
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "btb-theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
    updateThemeButton();
  });
}

// Initialize theme button state
updateThemeButton();

// ----- DATE DISPLAY -----

// Display current date
const now = new Date();
const todayElement = document.getElementById("today");
if (todayElement) {
  todayElement.textContent = now.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}
