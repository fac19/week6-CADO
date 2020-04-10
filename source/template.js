function htmlSkeleton(redirect, content) {
  return `

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Survive the virus</title>
        <link rel='shortcut icon' href='https://ps.w.org/covid-19/assets/icon.svg?rev=2262770' type='image/x-icon'> 
        <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans&display=swap" rel="stylesheet">
        <link href="public/styles.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;800&display=swap" rel="stylesheet">
    </head>
    <body>
        <h1 class="heading-logo">SRV|VRS</h1>
          ${redirect}
        <main>
          ${content}
        </main>
        <script src="public/main.js"></script>
    </body>
    </html>
    `
}
function signinPage(extra, action) {
  return htmlSkeleton(
    `<a class="new-page-link" href='/'>Go back home</a>`,
    // Content Parameter
    `<form action="${action}" method="POST" class="user-form">
        <label class="user-form__label" for="username">Name<span aria-hidden=true>*</span></label>
        <input class="username__input" id="username" name="username" required>

        <label class="user-form__label" for="password">Password<span aria-hidden=true>*</span></label>
        <input type="password" class="user-form__input" id="password" name="password" minlength="8" required>
       ${extra}
       <button class="user-form__submit-btn" type="submit">${action}</button>
     </form>`,
  )
}

function signupPage() {
  return signinPage(``, 'signup')
}

function printTools(tools, currentuser) {
  return tools
    .map(tool => {
      let deleteButton = ''
      console.log(currentuser, tool.username)
      if (currentuser === tool.username) {
        deleteButton = `<a class="post__remove-button"
        aria-label="button to remove post"
        href="/delete-post?id=${tool.id}">
         delet ME!!!
        </a>`
      }
      return `
      <article id="tool_${tool.id}" class="tool-card"> 
            <h2 class="tool-card__name"><a href="https://www.${tool.tool_link}">${tool.tool_name}</a></h2>
            <p class="tool-card__user">Added by: ${tool.username}</p>
            <p class="tool-card__desc">What is it: ${tool.tool_description}</p>
            <p class="tool-card__category">Category: ${tool.category}</p>
            ${deleteButton}
      </article>
      `
    })
    .join('')
}

function home(tools, links, button, username) {
  return htmlSkeleton(
    // Redirect Parameter

    `<h2 class="home-description">A collection of tools to help you survive social distancing!</h2>
    ${button}`,
    // Content Parameter
    `${links}
    <p class="home-filter-description">Select a category to filter the results:</p>
    <div id="categoryIcon" class="cat">
      <a class="cat__filter">Work</a>
      <a class="cat__filter">Social</i></a>
      <a class="cat__filter">Entertainment</i></a>
      <a class="cat__filter">Health</i></a>
      <a class="cat__filter">News</i></a>
    </div>
    ${printTools(tools, username)}`,
  )
}

function addPage() {
  return htmlSkeleton(
    // Redirect Parameter
    `<a class="new-page-link" href='/'>Go back home</a>`,
    // Content Parameter
    `<form action="create-tool" method="POST">
        <fieldset>
          <legend>Category:</legend>
          <label class="radio-label" for="work">Work
          <input type="radio" id="work" name="category" value="Work" required>
          </label>
          <label class="radio-label" for="social">Social
          <input type="radio" id="social" name="category" value="Social" required>
          </label>
          <label class="radio-label" for="entertainment">Entertainment
          <input type="radio" id="entertainment" name="category" value="Entertainment" required>
          </label>
          <label class="radio-label" for="health">Health
          <input type="radio" id="health" name="category" value="Health" required>
          </label>
          <label class="radio-label" for="news">News
          <input type="radio" id="news" name="category" value="News" required>
          </label>
        </fieldset>

        <label class='user-info-label' for="tool_name">Name
        <input class="user-info" id="tool_name" name="tool_name" required>
        </label>

        <label class='user-info-label' for="tool_description">Description
        <input class="user-info" id="tool_description" name="tool_description" required>
        </label>
       
       <label class='user-info-label' for="tool_link">Link https://www.
       <input class="user-info" id="tool_link" name="tool_link" placeholder="google.com" required>
       </label>
       
       <button class="post-tool-button" type="submit">Post tool</button>
     </form>`,
  )
}

function missing() {
  return htmlSkeleton(
    // Redirect Parameter
    `<a href='/'><h2 class='error-subtitle'>Go back home!</h2></a>`,
    // Content Parameter
    `<h1 class="error-title">Content Not Found</h1>`,
  )
}

module.exports = { home, addPage, missing, signinPage, signupPage }
