# SVR|VRS 2: Return of COVID Tools
![](https://media.giphy.com/media/gzkUBdP1zNRCM/giphy.gif =400x)

---

### A web app, hosted on heroku

- A user can view all post on the survival tools but cant create a post or delete. Once signed in they then have access to add posts and delete their posts they've created.

---

## Demo 

![show me](https://media3.giphy.com/media/82Sk9h66RfOSCyZ0r4/200.gif?cid=e1bb72ff8411aeceb46101bd713ce2a97e377fd84efaf2be&rid=200.gif =400x)

---

### Planning

![](https://i.imgur.com/I9oBS1G.png =650x600)

---

![](https://i.imgur.com/vgpKo1g.png)

---

## schema structure 

![](https://i.imgur.com/IZuxO5D.png)

---

### Safety first
![](https://media.giphy.com/media/U8GCzn3SWJkziaugx2/giphy.gif)

---

- Passwords
- Tokens and payloads
- Form validation

---

### Deploying a DB on Heroku
- If you haven't pushed changes to the GitHub repo: Manual Deploy!
- Debugging!
- You can connect to remote DB using CLI to `\ include` tables

`psql \c <HEROKU URL>`


---

### Displaying the join table on our home page 
Combining WHERE and ORDER BY in a join table to get most recent posts

```javascript=
return db
    .query(
      `SELECT posts.*, users.username 
       FROM posts
       INNER JOIN users ON posts.user_id = users.id
       WHERE posts.user_id = ($1)
       ORDER BY posts.id DESC`, [userId]
    )
```

---

### Re-using similar templates

![](https://i.imgur.com/0LOp2cZ.png)

---

![](https://i.imgur.com/m1pWlrF.png)

---

```javascript=
function home(tools, links, button, username) {
  return htmlSkeleton(
    // Redirect Parameter
    `<h2 ...>A collection of ..</h2>
    ${button}`,
    
    // Content Parameter
    `${links}
    <p ...>Select a category...:</p>
    <div ...>
      ...
    </div>
    ${printTools(tools, username)}`,
  )
}
```

---

### What we learned?
- Promises are cool and dangerous. 
- Estimated time is always less than actual time.
- Working on someone else code might be hard.
- Documentation habbits.

---

### What we should improve?
- Form verification 
- Filter

---

## Was challenging / Personal takeaways
![challenging](https://media.giphy.com/media/ehTMCiPzFTiak/giphy.gif)

---

### Ako

--- 

#### router.js "/create-tool" route
![](https://i.imgur.com/8l1ij9T.png)

---

#### handler.js addToolHandler() 
![](https://i.imgur.com/823quJl.png)

---

#### model.js creaTool()
![](https://i.imgur.com/Gm92mtW.png)

---

### James (SM)

- Spending time planning and making sure everything was clear
- understanding the priorities at different stages in the project 
- Not mobbing when working on problems
- Finally understand promises and chaining them to get what we want

---

### User exists database Query

![](https://media.giphy.com/media/l1AvALOphoaWbxeRa/giphy.gif)

---

- checkUser helper function queries the database 
```JavaScript
checkUser(data.username) //Returns true / false from a DB query
      .then(result => {
        if (result) {
        // CREATE ERROR
        } else {
        // DO THE BCRYPT AND CREATE USER 
```


---

### Verifying the token and displaying content

![](https://media.giphy.com/media/G4qAZYIFr1Cww/giphy.gif)

---

### Joe
- You can use if/else statements within a db query
- Make sure you know what you're returning from your db queries (you can return what you want!)
- If you don't know what you're returning. Hard to handle it!

---

```javascript=
function signinPostHandler(request, response) {
    model.checkUser(data.username) // I am a helper function!
      .then(BOOLEAN => {
        if (BOOLEAN) {
          'do something'          
        } else {
          'do something else'
        }
      })
  })
}
```

---

- Kill your darlings 

![](https://media2.giphy.com/media/QHYHhShm1sjVS/200.gif?cid=e1bb72ffe9fb90a071b438fab9128f059352a1bbfb6178ec&rid=200.gif)

---

### Jack
- Deploying on Heroku
- Using payload in our code
- Delete/filter in ``<a>`` href

---

![beers](https://media.giphy.com/media/JRsY1oIVA7IetTkKVO/giphy.gif)
