const db = require('./database/connection')

function getAllUsers() {
  return db.query(`SELECT * FROM users`).then(result => result.rows)
}

function getUser(username) {
  return db
    .query('SELECT * FROM users WHERE username LIKE ($1)', [`${username}`])
    .then(result => result.rows)
}

function getUserName(username) {
  return getUser(username).then(user => user[0].username)
}

function getPassword(username) {
  return getUser(username).then(user => user[0].password)
}

function createUser(username, password) {
  return getUser(username)
    .then(user => {
      if (username === user[0].username) {
        return 'user exists'
      }
    })
    .catch(() => {
      db.query('INSERT INTO users(username, password) VALUES($1, $2)', [
        `${username}`,
        `${password}`,
      ])
      return 'user created!'
    })
}

function getAllPostsAndUsernames() {
  return db
    .query(
      `
    SELECT posts.*, users.username 
    FROM posts
    INNER JOIN users ON posts.user_id = users.id
    `,
    )
    .then(result => result.rows)
}

module.exports = {
  getAllUsers,
  getUserName,
  getPassword,
  createUser,
  getAllPostsAndUsernames,
}

//  //   db.query('INSERT INTO users(username, password) VALUES($1, $2)', [
//     `${username}`,
//     `${password}`,
//   ])

// THE BELOW DOES NOT PROTECT AGAINST SQL INJECTION FOR POST REQUESTS
// function getTools(filter){
//     return db.query(`SELECT * FROM user_input WHERE category LIKE '${filter}'`).then(result => result.rows);;
// }

// THE BELOW DOES PROTECT AGAINST SQL INJECTION (HOPEFULLY)
// function getTools(filter){
//     return db.query("SELECT * FROM user_input WHERE category LIKE ($1)", [`${filter}`]).then(result => result.rows);;
// }

// function createTool(userEntry){
//     const values = [userEntry.category, userEntry.tool_name, userEntry.tool_description, userEntry.tool_link, userEntry.added_by, userEntry.love];
//     return db.query(
//         "INSERT INTO user_input(category, tool_name, tool_description, tool_link, added_by, love) VALUES($1, $2, $3, $4, $5, $6)",
//         values
//     );
// }

// function addLove(id){
//     return db.query(`
//     UPDATE user_input
//     SET love = love + 1
//     WHERE id = ${id}
//     `);
// }
