const handlers = require("./handlers");

function router(request, response) {
  const { url, method } = request;
  // Homepage
  if (url === "/" && method === "GET") {
    handlers.homeHandler(request, response);
  } else if (url === "/" && method === "POST") {
    handlers.homeHandler(request, response);
  // Get static files from /public
  } else if (url.includes("public")) {
    handlers.publicHandler(request, response);
  // Add a tool page  
  } else if (url === "/add" && method == "GET") {
    handlers.addPageHandler(request, response);
  //Submit tool data
  } else if (url === "/create-tool" && method == "POST") {
    handlers.addToolHandler(request, response);
    // get form page
  } else if (url === "/signin" && method === "GET") {
    handlers.signinPageHandler(request, response);
    // validate user in db and create JWT
  } else if (url === "/signin" && method === "POST") {
    handlers.signinPostHandler(request, response);
  // Go to sign up page
  } else if (url === "/signup" && method === "GET") {
    handlers.signupPageHandler(request, response);
  // Send sign up data (success / fail)
  } else if (url === "/signup" && method === "POST") {
    handlers.signupPostHandler(request, response);
  // 404 page
  } else {
    handlers.missingHandler(request, response);
  }
}

module.exports = router;
