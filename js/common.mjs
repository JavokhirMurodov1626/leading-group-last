

let selectField = document.querySelector(".select__field");
let selectOptions = document.querySelector(".select__options");
let options = document.getElementsByClassName("option");
let languageSelect = document.querySelector(".language-select");
let selectIcon = document.querySelector(".select__icon");

selectField.prepend(options[0].firstElementChild.cloneNode(true));

for (let option of options) {
  option.addEventListener("click", () => {
    let fch = option.firstElementChild;
    let clone = fch.cloneNode(true);
    selectField.firstElementChild.replaceWith(clone);
  });
}
    
languageSelect.addEventListener("click", () => {
  selectOptions.classList.toggle("hidden");
  // selectIcon.classList.toggle("rotate");
});

document.addEventListener("mouseup", function (e) {
  if (!languageSelect.contains(e.target)) {
    selectOptions.classList.add("hidden");
    // selectIcon.classList.toggle("rotate");
  }
});

// scrolling navbar
let navBar = document.querySelector(".nav-wrap");
let navBarHeight = navBar.offsetHeight;
window.addEventListener("scroll", () => {
  if (window.scrollY >= navBarHeight) {
    navBar?.classList.add("fixed-top");
  } else {
    navBar?.classList.remove("fixed-top");
  }
});

// banner section bg img change js begins
// tabs js
let tabs = document.querySelectorAll("[data-tab-target]");
let tabContents = document.querySelectorAll(".content-box");
let bannerBg = document.querySelector(".banner");
tabs.forEach((tab) => {
  tab.nextElementSibling.firstElementChild.addEventListener("click", (e) => {

    let target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    target.classList.add("active");
    let source = target.lastElementChild.firstElementChild.src;
    if (screen.width < 1024) {
      source = null;
    }
    bannerBg.style.backgroundImage = source ? `url(${source})` : "";
  });
});

///// hamburger menu/////
var acc = document.querySelectorAll(".dropdown-icon-wrap.nav-link");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.parentElement.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
///// tabs menu for phone/////
var acc = document.querySelectorAll(".tab-button");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//hamburger-icon

let hamburgerIcon = document.querySelector(".hamburger-icon");
let htmlTag=document.querySelector('#html-tag');
let navMenu = document.querySelector(".navbar-menu");
let nav = document.querySelector(".nav-wrap nav");
hamburgerIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  nav.classList.toggle("active");
  htmlTag.classList.toggle('fixed-body')
  
});


// button click blur animation on surface
var button = document.querySelector(".select__field");
button.addEventListener("click", createRipple);

function createRipple(event) {
  var ripple = document.createElement("span");
  ripple.classList.add("ripple");

  var max = Math.max(this.offsetWidth, this.offsetHeight);

  ripple.style.width = ripple.style.height = max * 2 + "px";

  var rect = button.getBoundingClientRect();

  ripple.style.left = event.clientX - rect.left - max + "px";
  ripple.style.top = event.clientY - rect.top - max + "px";
  button.appendChild(ripple);
}

// validating form ****************************************
const forms = document.querySelectorAll("form");

function insertAfter(newNode, referenceNode) {
  this.insertBefore(newNode, referenceNode.nextElementSibling);

  return newNode;
}

// Takes a single argument, a form input field, and replaces the browsers
// native rendering of form validation errors. Fields where this override
// is applied will display validation errors only when the field is
// invalid and loses focus, or when the field is invalid and it's parent
// form is submitted. When the field regains focus, the validation message
// will update as the user updates the field, finally removing the error
// altogether once the validation constraints have been met.
class FieldValidator {
  constructor(field) {
    this._field = field;
    this._error = null;

    this._onInvalid = this._onInvalid.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onBlur = this._onBlur.bind(this);

    this.bindEventListeners();
  }

  bindEventListeners() {
    this._field.addEventListener("invalid", this._onInvalid);
    this._field.addEventListener("input", this._onInput);
    this._field.addEventListener("blur", this._onBlur);
  }

  // Displays an error message and adds error styles and aria attributes
  showError() {
    let errorNode;

    if (this._error !== null) {
      return this.updateError();
    }

    this._error = document.createElement("div");
    this._error.className = "help-block";
    this._error.innerHTML = this._field.validationMessage;

    this._field.setAttribute("aria-invalid", "true");
    this._field.closest(".form-control").classList.add("has-error");

    insertAfter.call(this._field.parentNode, this._error, this._field);
  }

  // Updates an existing error message
  updateError() {
    if (this._error === null) return;

    this._error.innerHTML = this._field.validationMessage;
  }

  // Hides an error message if one is being displayed
  // and removes error styles and aria attributes
  hideError() {
    if (this._error !== null) {
      this._error.parentNode.removeChild(this._error);
      this._error = null;
    }

    this._field.removeAttribute("aria-invalid");
    this._field.closest(".form-control").classList.remove("has-error");
  }

  // Suppress the browsers default error messages
  _onInvalid(event) {
    event.preventDefault();
  }

  // When the user inputs something in to the field,
  // hide the error message if the field is now valid,
  // otherwise update the existing error if one is being shown
  _onInput(event) {
    if (this._field.validity.valid) {
      this.hideError();
    } else {
      this.updateError();
    }
  }

  // When this field loses focus and is invalid, then
  // show the error message
  _onBlur(event) {
    if (!this._field.validity.valid) {
      this.showError();
    }
  }
}


for(let form of forms){

  Array.prototype.slice.call(form.elements).forEach((element) => {
    element._validator = new FieldValidator(element);
  });

  form.setAttribute("novalidate", true);

  form.addEventListener(
    "invalid",
    (event) => {
      event.preventDefault();
  
      event.target._validator.showError();
    },
    true
  );

  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
  
      form.querySelectorAll(":invalid")[0].focus();
      return;
    }
  
    console.log("submit");
    event.preventDefault();
  });
}






