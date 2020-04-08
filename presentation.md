# Week 5 Project: SRV|VRS

![](https://ps.w.org/covid-19/assets/icon.svg?rev=2262770)

---

![](https://i.imgur.com/8f1AX3H.png)

---

## __*DEMO THE WEBSITE*__
https://srv-vrs.herokuapp.com/

---

## Project Description

##### List of resources/tools for surviving self-isolation

---

## Planning, Using Miro *

![](https://media.giphy.com/media/Dps6uX4XPOKeA/giphy.gif)
*Commission for Jack secured

https://miro.com/app/board/o9J_kuF5bdE=/

---

![](https://i.imgur.com/uaCWuPE.png)

---

![](https://i.imgur.com/x0ugMgk.png)

---

![](https://i.imgur.com/NDmnGul.png)

---

![](https://i.imgur.com/TcrXtgO.png)

---

## Estimation
**E1** - First gym with starter pokemon
**E2** - Second gym with super effective pokemon against the gym types
**E3** - Third gym with strong pokemon against unknown gym types
**E5** - ELITE FOUR with magikarp

---

![](https://i.imgur.com/nSiNRKR.png)

---

## Database Schema

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  category TEXT NOT NULL,
  tool_name VARCHAR(50),
  tool_description VARCHAR(280),
  tool_link VARCHAR(75),
  added_by VARCHAR(50)
  love INTEGER 
);
```

---

## Database
- One big table
- No relations, we could have split the categories and users up

---

## Struggles 🥊
![](https://media.giphy.com/media/wZHzd1ZL3oENO/giphy.gif)

---

### The f&%^ing filter 

![](https://i.imgur.com/6C3Nw0Y.png)

---

![](https://i.imgur.com/CijnFaP.png)


---

```javascript
filter = 'News';
    newHtml = await fetch ("/", {
        method: "POST",
        headers: {"Content-Type": "application/javascript"},
        body: filter,
    });
    document.open('text/html');
    document.write(`${await newHtml.text()}`);
    document.close();
```

---

### Callbacks with arguments

```javascript
fetch(
    //do an asynchronous thing
)
.then(getTool) //run getTool() when fetch complete 
```

---


```javascript
fetch(
    //do an asynchronous thing
)
.then(() => {
    getTool(arguments) //run getTool() with arguments 
}) 
```

---

### Testing queries
- We wrote our tests in a way that passed sometimes when run 😊 and then failed when run again 🙁
- Always run your test twice to check for this!

![](https://media.giphy.com/media/110dhxfJebYOTm/giphy.gif)

---

### VSCode LiveShare bug 🐞🙀

![](https://i.imgur.com/FXhFXKd.png)

...we got this very creepy message when our live sharing code wasn't syncing up properly...

---

### NPM ERROR: Digest Method Not Supported

![](https://media.giphy.com/media/Oe4V14aLzv7JC/giphy.gif)

When this happens...delete `package-lock.json` and `node_modules` and `npm install` again

---

### EADDRINUSE: address already in use :::3000 💀

![](https://media.giphy.com/media/tei52cyY5mroA/giphy.gif)

```
sudo lsof -i :3000
kill -9 PID VALUE
```

##### Thanks Ayub! :+1: 

---

### Styling Radio! 📻  (in the last 5 mins) 😬

![](https://i.imgur.com/Dn2EPx9.png)

---

## Successes 👍
![](https://media.giphy.com/media/a0h7sAqON67nO/giphy.gif)

---

## TDD for server queries
![](https://media.giphy.com/media/fvA1ieS8rEV8Y/giphy.gif)

---

```javascript
test("Can get filtered user entries with getTools() function (id)", t => {
  build().then(() => {
    getTools(`News`)
      .then(entries => {
        const firstEntry = entries[0];
        t.equal(firstEntry.id, 4);
        t.end();
      })
      .catch(error => {
        t.error(error);
        t.end();
      })
  });
});
```

---

![](https://i.imgur.com/v3ZtdkI.png)

---

## Linking handlers to model

![](https://media.giphy.com/media/kxFoogJYza7Kw/giphy.gif)

- Just general understanding of the flow 🌊

---

## Somehow deploying on heroku...

![](https://media.giphy.com/media/H6JdkRnhXQaImiCYp2/giphy.gif)

```javascript=
connection.js file 

dotenv.config();

const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    // if we have a database URL (e.g. from Heroku we'll use that, otherwise it'll default to your local .env variables
});

module.exports = db;
```

---

## Questions 

![](https://media.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif)


--- 

# Team SRVVRS SGC

## STOP
- Enabling Oli to steal our passwords


## GO
- Mind map of file architecture (Miro?)
- Maybe having set in breaks?
- Also reminding each other to drink water and not look at the screen 20/20/20
- Fixing Oli being able to hack us
- Bring this joyful energy into future teams (stay resilient)
- Maybe 3min-ish group movement 
- User manual feedback


## CONTINUE
- Pokemon analogies
- Being total angels
- Being honest to each other :+1:
- Being flexible (honesty is key!)
- Asking each other questions 
- Being a fantastic scrum master
- Listening to each other
- Reluctantly learning Oli's best practice
- More GIFs, pics and demo time than writing on slides
- Laughing/joking!! :100: 
- Relaxed environment but still productive

---

# Minutes
## Stop
### Enabling Oli to steal our passwords
J: Remember what Oli has taught us

## Go
###  Mind map of file architecture (Miro?)
J: Help to visualise how it all fits together

### Maybe having set in breaks?
K: hands away from keyboards, chat about not FAC stuff, built in breaks - 5 min every hour? Could include with CoC chat.
H: Nice to make sure we're also allowing people to get a break if they're nervous about asking for one

### Also reminding each other to drink water and not look at the screen: 20/20/20
J: Being there for each other's health

### Fixing Oli being able to hack us
H: Let's fix the template literal
C: This should be quite simple
H: Can do this at 6.30

### Bring this joyful energy into future teams (stay resilient)
J: Let's bring this joy with us into new team

### Maybe 3min-ish group movement
K: Japanese video at start to move / exercise together, random stretches. Uncomfortable at first but nice.
H: has noticed K is great at standing and moving, let's be inspired

### User manual feedback
H: Writing honest but constructive comments on each other's user manuals
K: Would be super interesting & valuable to get feedback in this way
H: I wouldn't criticise anyone in the user manual but can be helpful for more feedback
J: Inspired by this, love it
H: It was my idea because I'm so clever

## Continue
### Pokemon analogies
H: Love Pokemon

### Being total angels
H: Cheesy. No one hung onto their ideas except Jack and document.write()
J: I really wanted to use the banned thing

### Being honest to each other :+1:
K: We were really open and that's nice

### Being flexible (honesty is key!)
J: Cheese
C: If I have to give one more ultimatum I'm going to bed

### Asking each other questions
K: Always happy to ask questions 

### Being a fantastic scrum master
J: Han great and inspirational scrum master

### Listening to each other
K: This was great

### Excitedly learning Oli's best practice
J: Let's keep learning from Oli

### More GIFs, pics and demo time than writing on slides
J: Makes for more engaging presentation

### Laughing/joking!! :100: 
K: Mum is concerned I'm laughing so much. Great vibes.

### Relaxed environment but still productive
K: Most relaxed and able to work, great balance
J: Planning really helped! It's reassuring to know it's possible to have fun and make a great project
H: I hate everyone
