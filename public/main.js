var filter = '%';

var workFilter = document.querySelector(".cat__work-icon");
var socialFilter = document.querySelector(".cat__social-icon");
var entFilter = document.querySelector(".cat__ent-icon");
var healthFilter = document.querySelector(".cat__health-icon");
var newsFilter = document.querySelector(".cat__news-icon");

// JS Form validation 
// const form = document.querySelector("form");
//      const messages = {
//        email: {
//          valueMissing: "Please enter an email.",
//          typeMismatch: "Please enter a valid email.",
//        },
//        password: {
//          valueMissing: "Please enter a password.",
//          patternMismatch: "Please include at least one letter and one number.",
//          tooShort: "Please enter at least 8 characters.",
//        },
//      };
//      const inputs = form.querySelectorAll("input");

//      inputs.forEach(input => {
//        input.setAttribute("aria-invalid",false);
//        input.addEventListener("invalid", handleInvalidInput)
//        input.addEventListener("input", clearValidity)
//      });

//      form.setAttribute("novalidate", "");
//      form.addEventListener("submit", event => {
//        const allInputsValid = event.target.checkValidity();
//        if (!allInputsValid){
//          event.preventDefault();
//        }
//      });

//      function handleInvalidInput(event){
//        const input = event.target;
//        const validity = input.validity;
//        const inputMessages = messages[input.id];
//        const errorContainer = input.nextElementSibling;

//        input.setAttribute("aria-invalid", true);
//        let message = '';

//        if (validity.valueMissing) {
//            message = inputMessages.valueMissing;
//        } else if (validity.typeMismatch){
//            message = inputMessages.typeMismatch;
//        } else if (validity.patternMismatch){
//            message = inputMessages.patternMismatch
//        } else if (validity.tooShort){
//            message = inputMessages.tooShort;
//        } errorContainer.textContent = message;
//      }

//      function clearValidity(event) {
//        const input = event.target;

//        input.setAttribute("aria-invalid", false);
//        input.nextElementSibling.textContent = "";
//      }

// IN THE FUTURE WE WOULD REFACTOR THE BELOW FUNCTIONS!

workFilter.addEventListener("click", async () => {
    filter = 'Work';
    var newHtml = await fetch ("/", {
        method: "POST",
        headers: {"Content-Type": "application/javascript"},
        body: filter,
    });
    document.open('text/html');
    document.write(`${await newHtml.text()}`);
    document.close();
})

socialFilter.addEventListener("click", async () => {
    filter = 'Social';
    var newHtml = await fetch ("/", {
        method: "POST",
        headers: {"Content-Type": "application/javascript"},
        body: filter,
    });
    document.open('text/html');
    document.write(`${await newHtml.text()}`);
    document.close();
})

entFilter.addEventListener("click", async () => {
    filter = 'Entertainment';
    var newHtml = await fetch ("/", {
        method: "POST",
        headers: {"Content-Type": "application/javascript"},
        body: filter,
    });
    document.open('text/html');
    document.write(`${await newHtml.text()}`);
    document.close();
})

healthFilter.addEventListener("click", async () => {
    filter = 'Health';
    var newHtml = await fetch ("/", {
        method: "POST",
        headers: {"Content-Type": "application/javascript"},
        body: filter,
    });
    document.open('text/html');
    document.write(`${await newHtml.text()}`);
    document.close();
})

newsFilter.addEventListener("click", async () => {
    filter = 'News';
    var newHtml = await fetch ("/", {
        method: "POST",
        headers: {"Content-Type": "application/javascript"},
        body: filter,
    });
    document.open('text/html');
    document.write(`${await newHtml.text()}`);
    document.close();
})