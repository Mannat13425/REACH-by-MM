
const GRADUATION_DATE = new Date("2026-03-15T19:00:00"); // <-- change me

// DOM helpers
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

// Footer year
$("#year").textContent = String(new Date().getFullYear());

/** =========================
 *  Mobile Navbar
 *  ========================= */
const navToggle = $(".nav-toggle");
const navLinks = $("#navLinks");

function setNavOpen(open) {
  navLinks.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
}

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.contains("open");
  setNavOpen(!isOpen);
});

// Close menu after clicking a link (mobile)
$$(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    setNavOpen(false);
  });
});

/** =========================
 *  Active nav link on scroll
 *  ========================= */
const sections = ["home", "events", "dates", "forms", "fundraisers", "contact"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

const linkById = new Map(
  $$(".nav-link").map((a) => [a.getAttribute("href")?.replace("#", ""), a])
);

const onScroll = () => {
  const y = window.scrollY + 120; // offset for sticky navbar
  let currentId = "home";

  for (const section of sections) {
    if (section.offsetTop <= y) currentId = section.id;
  }

  $$(".nav-link").forEach((a) => a.classList.remove("active"));
  const active = linkById.get(currentId);
  if (active) active.classList.add("active");
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/** =========================
 *  Countdown Timer
 *  ========================= */
const daysEl = $("#days");
const hoursEl = $("#hours");
const minutesEl = $("#minutes");
const secondsEl = $("#seconds");
const gradDateLabel = $("#gradDateLabel");

function pad2(n) {
  return String(n).padStart(2, "0");
}

function formatGradLabel(d) {
  // Localized, friendly label
  return d.toLocaleString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

gradDateLabel.textContent = `Battle: ${formatGradLabel(GRADUATION_DATE)}`;

function updateCountdown() {
  const now = new Date();
  const diff = GRADUATION_DATE.getTime() - now.getTime();

  if (diff <= 0) {
    daysEl.textContent = "0";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    $("#countdownNote").textContent = "Congratulations, Seniors! 🎓 (Update the date anytime.)";
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = String(days);
  hoursEl.textContent = pad2(hours);
  minutesEl.textContent = pad2(minutes);
  secondsEl.textContent = pad2(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);

/** =========================
 *  Reveal on Scroll
 *  ========================= */
const revealEls = $$(".reveal");

const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    }
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => io.observe(el));

/** =========================
 *  Event "Learn More" Modal
 *  ========================= */
const modal = $("#eventModal");
const modalTitle = $("#modalTitle");
const modalBody = $("#modalBody");
const closeModalBtn = $("#closeModalBtn");
const modalOkBtn = $("#modalOkBtn");

function openModal(eventName) {
  modalTitle.textContent = eventName;
  modalBody.textContent =
    "Details will be posted soon (time, location, tickets, and any permission forms). Check back closer to the event date.";
  if (typeof modal.showModal === "function") modal.showModal();
  else alert(`${eventName}\n\nDetails will be posted soon.`);
}

function closeModal() {
  if (modal.open) modal.close();
}

$$(".card-btn").forEach((btn) => {
  btn.addEventListener("click", () => openModal(btn.dataset.modal || "Event"));
});

closeModalBtn.addEventListener("click", closeModal);
modalOkBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  // Click outside modal inner closes it
  const rect = modal.getBoundingClientRect();
  const inDialog =
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom;

  // If browser reports click on backdrop, close
  if (!inDialog) closeModal();
});

/** =========================
 *  Contact Form (demo)
 *  =========================
 *  This does NOT send emails by itself. It only shows a success message.
 *  To actually send messages, connect to a backend or form service.
 */
const contactForm = $("#contactForm");
const formStatus = $("#formStatus");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(contactForm);
  const name = String(data.get("name") || "").trim();

  formStatus.textContent = "Sending...";
  setTimeout(() => {
    formStatus.textContent = `Thanks${name ? `, ${name}` : ""}! Your message has been recorded (demo).`;
    contactForm.reset();
  }, 650);
});
