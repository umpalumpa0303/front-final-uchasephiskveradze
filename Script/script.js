function toggleMenu() {
  const menu = document.querySelector(".a-links");
  menu.classList.toggle("show");
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {
  const menu = document.querySelector(".a-links");
  const burgerIcon = document.querySelector(".burger-icon");

  if (
    !menu.contains(event.target) &&
    !burgerIcon.contains(event.target) &&
    menu.classList.contains("show")
  ) {
    menu.classList.remove("show");
  }
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  clearErrors([name, email, message]);

  let isValid = true;

  if (!name.value || name.value.trim().length < 2) {
    showError(name);
    isValid = false;
  }

  if (!email.value || !isValidEmail(email.value)) {
    showError(email);
    isValid = false;
  }

  if (!message.value || message.value.trim().length < 10) {
    showError(message);
    isValid = false;
  }

  if (isValid) {
    console.log("Form is valid");
  } else {
    console.log("Form is invalid");
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showError(element) {
  element.classList.add("error");
}

function clearErrors(elements) {
  elements.forEach((element) => element.classList.remove("error"));
}

const inputs = document.querySelectorAll(
  "#contactForm input, #contactForm textarea"
);
inputs.forEach((input) => {
  input.addEventListener("input", function () {
    if (this.classList.contains("error")) {
      validateForm();
    }
  });
});
