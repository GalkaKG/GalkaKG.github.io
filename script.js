"use strict";

/* =========================
   ELEMENT TOGGLE
========================= */
const elementToggleFunc = (elem) => {
  elem.classList.toggle("active");
};

/* =========================
   SIDEBAR
========================= */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn?.addEventListener("click", () => {
  elementToggleFunc(sidebar);
});

/* =========================
   TESTIMONIAL MODAL
========================= */
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const toggleModal = () => {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

testimonialsItem.forEach((item) => {
  item.addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;

    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    toggleModal();
  });
});

modalCloseBtn?.addEventListener("click", toggleModal);
overlay?.addEventListener("click", toggleModal);

/* =========================
   CUSTOM SELECT + FILTER
========================= */
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

select?.addEventListener("click", () => {
  elementToggleFunc(select);
});

function filterFunc(value) {
  filterItems.forEach((item) => {
    const category = item.dataset.category;

    if (value === "all") {
      item.classList.add("active");
      return;
    }

    item.classList.toggle("active", category === value);
  });
}

/* dropdown select */
selectItems.forEach((item) => {
  item.addEventListener("click", function () {
    const value = this.innerText.toLowerCase();

    if (selectValue) selectValue.innerText = this.innerText;

    elementToggleFunc(select);
    filterFunc(value);
  });
});

/* buttons filter */
let lastClickedBtn = filterBtn[0];

filterBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    const value = this.innerText.toLowerCase();

    if (selectValue) selectValue.innerText = this.innerText;

    filterFunc(value);

    lastClickedBtn?.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
});

/* =========================
   EMAILJS
========================= */
(function () {
  emailjs.init("uKBS3sCy5Uf8WlJig");
})();

const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

function validateForm() {
  const isValid = Array.from(formInputs).every((input) =>
    input.checkValidity()
  );

  formBtn?.toggleAttribute("disabled", !isValid);
}

formInputs.forEach((input) => {
  input.addEventListener("input", validateForm);
  input.addEventListener("blur", validateForm);
});

form?.addEventListener("submit", function (e) {
  e.preventDefault();

  formBtn?.setAttribute("disabled", "");
  formInputs.forEach((input) => input.setAttribute("readonly", ""));

  const templateParams = {
    from_name: form.fullname.value,
    from_email: form.email.value,
    message: form.message.value,
    to_email: "galina_georgieva_net@abv.bg",
  };

  emailjs
    .send(
      "service_2nsspmc",
      "template_xx0ijch",
      templateParams,
      "uKBS3sCy5Uf8WlJig"
    )
    .then(() => {
      showNotification("Message sent successfully!", "success");
      form.reset();
    })
    .catch(() => {
      showNotification("Failed to send message.", "error");
    })
    .finally(() => {
      formInputs.forEach((input) => input.removeAttribute("readonly"));
      validateForm();
    });
});

function showNotification(message, type) {
  const notification = document.createElement("div");

  notification.textContent = message;

  notification.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${type === "success" ? "#4CAF50" : "#f44336"};
    color: white;
    padding: 15px 30px;
    border-radius: 8px;
    z-index: 1000;
  `;

  document.body.appendChild(notification);

  setTimeout(() => notification.remove(), 3000);
}

/* =========================
   PAGE NAVIGATION (FIXED)
========================= */
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const target = this.innerText.toLowerCase();

    pages.forEach((page) => {
      page.classList.toggle("active", page.dataset.page === target);
    });

    navigationLinks.forEach((btn) => {
      btn.classList.toggle("active", btn === this);
    });

    window.scrollTo(0, 0);
  });
});