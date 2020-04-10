const handlers = require('./handlers')
const { parse } = require('cookie')
const jwt = require('jsonwebtoken')
const secret = 'survivethevirus'
let jwtCookie
const signInTemplate = `<a href="/signin" class="sign-link">sign in</a> <a href="signup" class="sign-link">sign up</a>`
const signOutTemplate = `<a href="/signout" class="sign-link">sign out</a>`
const addPostButton = `<a class="new-page-link" href='/add'>Add a tool</a>`

function router(request, response) {
  const { url, method } = request
  // Homepage
  if (url === '/' && method === 'GET') {
    if (request.headers.cookie) {
      jwtCookie = parse(request.headers.cookie).token
    } else {
      jwtCookie = false
    }

    if (!jwtCookie) {
      handlers.homeHandler(request, response, signInTemplate, '') //with sign in and up
    } else {
      jwt.verify(jwtCookie, 'survivethevirus', (err, decoded) => {
        if (err) {
          response.writeHead(401, { 'Content-Type': 'text/plain' })
          handlers.missingHandler(request, response)
        } else {
          handlers.homeHandler(
            request,
            response,
            signOutTemplate,
            addPostButton,
            decoded.username,
          ) //with sign out and add post
        }
      })
    }
  } else if (url === '/' && method === 'POST') {
    handlers.homeHandler(request, response)
    // Get static files from /public
  } else if (url.includes('public')) {
    handlers.publicHandler(request, response)
    // Add a tool page
  } else if (url === '/add' && method == 'GET') {
    handlers.addPageHandler(request, response)
  } else if (url.includes("/delete-tools")){
    handlers.deleteHandler(request, response)
  //Submit tool data
}
    else if (url === '/create-tool' && method == 'POST') {
    if (request.headers.cookie) {
      jwtCookie = parse(request.headers.cookie).token
    } else {
      jwtCookie = false
    }
    jwt.verify(jwtCookie, 'survivethevirus', (err, decoded) => {
      handlers.addToolHandler(request, response, decoded.username)
    })
    // get form page
  } else if (url === '/signin' && method === 'GET') {
    handlers.signinPageHandler(request, response)
    // validate user in db and create JWT
  } else if (url === '/signin' && method === 'POST') {
    handlers.signinPostHandler(request, response)
    // Go to sign up page
  } else if (url === '/signup' && method === 'GET') {
    handlers.signupPageHandler(request, response)
    // Send sign up data (success / fail)
  } else if (url === '/signup' && method === 'POST') {
    handlers.signupPostHandler(request, response)
    // 404 page
  } else if (url === '/signout') {
    response.writeHead(302, {
      location: '/',
      'Set-Cookie': 'token=0; Max-Age=0',
    })
    return response.end()
    //remove cookie and redirect to home.
  } else {
    handlers.missingHandler(request, response)
  }
}

module.exports = router
