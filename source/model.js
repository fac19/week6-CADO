const db = require('./database/connection')

function getAllUsers() {
  return db.query(`SELECT * FROM users`).then(result => result.rows)
}

function getUser(username) {
  return db
    .query('SELECT * FROM users WHERE username = ($1)', [`${username}`])
    .then(result => result.rows) // Does this reject if no user exists
    .catch(error => {
      console.log('I AM THE GET USER ERROR')
      return error
    })
}

function getUserName(username) {
  return getUser(username).then(user => user[0].username)
}

function getPassword(username) {
  return getUser(username).then(user => user[0].password)
}

function createUser(data) {  
  return getUser(data.username)
    .then(userArray => {
      if(userArray.length == 0) {
        return db.query('INSERT INTO users(username, password) VALUES($1, $2)', [        
          `${data.username}`,
          `${data.password}`
        ])
      }
      // else {
      //   return
      // }
    }) 
}

function deletePost(postId) {
  return db.query('DELETE FROM posts WHERE posts.id = ($1)', [postId])
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

// function validateUser

module.exports = {
  getAllUsers,
  getUserName,
  getPassword,
  createUser,
  getAllPostsAndUsernames,
  getTools,
  deletePost
}

// function createUser(data) {  
//   return getUser(data.username)
//     .then(user => {
//       console.log("createUser -> user", user)
//       if (data.username === user[0].username) {       
//         return 'user exists'
//       } else {
//         return 'I am in the else'
//       }
//     })
//     .catch(() => {
//       db.query('INSERT INTO users(username, password) VALUES($1, $2)', [        
//         `${data.username}`,
//         `${data.password}`
//       ]).then(() => 'user created!')
//       return "We are in the catch"
//     })
// }

// function createUser(data) {  
//   return getUser(data.username)
//     .then(user => {
//       if (data.username === user[0].username) {       
//         return 'user exists'
//       } else {
//         const values = [data.username, data.password];
//         return db.query('INSERT INTO users(username, password) VALUES($1, $2)', values)
//       } 
//     })
// }

//  //   db.query('INSERT INTO users(username, password) VALUES($1, $2)', [
//     `${username}`,
//     `${password}`,
//   ])

// THE BELOW DOES NOT PROTECT AGAINST SQL INJECTION FOR POST REQUESTS
function getTools() {
  return db.query('SELECT * FROM posts').then(result => result.rows)
}
// module.exports = { getTools, getAllUsers };

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
