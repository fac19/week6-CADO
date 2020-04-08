const fs = require("fs");
const path = require("path");
const model = require("./model");
const templates = require("./template");
const types = {
  html: "text/html",
  css: "text/css",
  js: "application/javascript",
  jpg: "image/jpeg",
  ico: "image/x-icon"
};


// MODEL => TEMPLATE
function homeHandler(request, response) {
  let filter = "%";
  request.on('data', chunk => (filter += chunk));
  request.on('end', () => {
    model
      .getTools(filter) // return tools object with name, likes, desc, user
      .then(tools => {
        response.writeHead(200, { "content-type": "text/html" });
        const html = templates.home(tools, "user--hidden");
        response.end(html);
      })
      .catch(error => {
        console.error(error);
        missingHandler(request, response);
      });
  })
  //serves home page with SELECT query on database getTools() / filterTools()
}

function publicHandler(request, response) {
  const url = request.url;
  const urlArray = url.split(".");
  const extension = urlArray[1];
  const type = types[extension];

  fs.readFile(path.join(__dirname, "..", url), (error, file) => {
    // console.log("publicHandler -> file", file);
    if (error) {
      missingHandler(request, response);
    } else {
      response.writeHead(200, { "content-type": type });
      response.end(file);
    }
  });
}

function addPageHandler(request, response) {
  response.writeHead(200, { "content-type": "text/html" });
  const formPage = templates.addPage();
  response.end(formPage);
  response.on("error", error => {
    console.error(error);
    missingHandler(request, response);
  });
}

function addToolHandler(request, response) {
    let body = "";
    request.on('data', chunk => (body += chunk));
    request.on('end', () => {
        const searchParams = new URLSearchParams(body);
        const data = Object.fromEntries(searchParams);
        data.love = 0;
        console.log(data)
        model
         .createTool(data)
         .then(() => {
             response.writeHead(302, { location: '/' })
             response.end();
         })
         .catch(error => {
            console.log(error);
            response.writeHead(500, { "content-type": "text/html" });
            response.end(`<h1>Something went wrong saving your data</h1>`);
         })
    })
}

function signinPageHandler(request, response){
  response.writeHead(200, { "content-type": "text/html" });
  const signinPage = templates.signinPage('','signin');
  response.end(signinPage);
  response.on("error", error => {
    console.error(error);
    missingHandler(request, response);
  });
}

function signinPostHandler(request, response) {
  let body = "";
    request.on('data', chunk => (body += chunk));
    request.on('end', () => {
        const searchParams = new URLSearchParams(body);
        const data = Object.fromEntries(searchParams);
        console.log(data)
        model
         .validateUser(data)
         .then(() => {
             response.writeHead(302, { location: '/' })
             response.end();
         })
         .catch(error => {
            console.log(error);
            response.writeHead(500, { "content-type": "text/html" });
            response.end(`<h1>Something went wrong logging in</h1>`);
         })
    })
}

function signupPageHandler(request, response) {
  response.writeHead(200, { "content-type": "text/html" });
  const signupPage = templates.signupPage();
  response.end(signupPage);
  response.on("error", error => {
    console.error(error);
    missingHandler(request, response);
  });
}

function signupPostHandler(request, response) {
  let body = "";
    request.on('data', chunk => (body += chunk));
    request.on('end', () => {
        const searchParams = new URLSearchParams(body);
        const data = Object.fromEntries(searchParams);
        console.log(data)
        model
         .createUser(data)
         .then(() => {
             response.writeHead(302, { location: '/' })
             response.end();
         })
         .catch(error => {
            console.log(error);
            response.writeHead(500, { "content-type": "text/html" });
            response.end(`<h1>You failed to sign up</h1>`);
         })
    })
}

// function loveHandler(request, response) {
//   //UPDATE love of card in table
// }

function missingHandler(request, response) {
    response.writeHead(404, { "content-type": "text/html" });
    const missingHtml = templates.missing();
    response.end(missingHtml);
}

module.exports = {
  homeHandler,
  publicHandler,
  addPageHandler,
  addToolHandler,
//   loveHandler,
  missingHandler,
  signinPageHandler,
  signinPostHandler,
  signupPostHandler,
  signupPageHandler
};
