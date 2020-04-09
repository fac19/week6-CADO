const test = require('tape')
const db = require('../database/connection')
const build = require('../database/build')
const model = require('../model')

// test getTools()

test('Test to see if this runs', t => {
  t.equal(1 + 1, 2, '1+1 should equal 2')
  t.end()
})

test('Check model is exporting getAllUsers function', t => {
  build()
    .then(() => {
      t.equal('getAllUsers' in model, true)
      t.end()
    })
    .catch(error => {
      t.error(error)
      t.end()
    })
})

test('Test to get first user', t => {
  build()
  model
    .getAllUsers()
    .then(entries => {
      const firstEntry = entries[0]
      t.equal(firstEntry.id, 1, 'id of first user is equal to 1')
      t.equal(
        firstEntry.username,
        'jimmyface123',
        `First username should be "jimmyface123" but is ${firstEntry.username}`,
      )
      t.end()
    })
    .catch(error => {
      t.error(error)
      t.end()
    })
})

test('Test to get user by username', t => {
  build()
  let user = 'jimmyface123'
  model
    .getUserName(user)
    .then(username => {
      t.equal(username, user, 'db username should match the username input')
      t.end()
    })
    .catch(error => {
      t.error(error)
      t.end()
    })
})

test('Test to get user password by username', t => {
  build()
  let user = 'jimmyface123'
  let pass = 'password'
  model
    .getPassword(user)
    .then(password => {
      t.equal(password, pass)
      t.end()
    })
    .catch(error => {
      t.error(error)
      t.end()
    })
})

test('Test if user doesnt exist create new user', t => {
  build()
  let user = 'jimmyface123'
  let password = 'password'
  model
    .createUser(user, password)
    .then(username => {
      t.equal(
        username,
        'user exists',
        'didnt create new user because user exists',
      )
      t.end()
    })
    .catch(error => {
      t.error(error)
      t.end()
    })
})

test('Test if user doesnt exist create new user', t => {
  build()
  let user = 'ron4'
  let password = 'hello123'
  model
    .createUser(user, password)
    .then(username => {
      console.log(username)
      t.equal(username, 'user created!')
      t.end()
    })
    .catch(error => {
      t.error(error)
      t.end()
    })
})

test('Test to see if the join table with the username and post data returns', t => {
  build()
  model
    .getAllPostsAndUsernames()
    .then(allPosts => {
      const post2 = allPosts[1]
      t.equal(post2.tool_name, 'Amazon', 'Check tool_name')
      t.equal(post2.username, 'newUser', 'Check username')
      t.equal(
        Object.entries(post2).length,
        7,
        'Check index!',
        `Length of post2 should be 7 and is ${post2.length}`,
      )
      t.end()
    })
    .catch(error => {
      t.error(error)
      t.end()
    })
})

// test('Test to get all users', t => {
//   build()
//     .then(() => {
//       t.equal(model.getAllUsers(), 1, 'should return all our users')
//     })
//     .catch(error => {
//       t.error(error)
//       t.end()
//     })
// })

// test("Can get all user entries with getTools() function", t => {
//   build().then(() => {
//       getTools(`%`)
//       .then(entries => {
//           const firstEntry = entries[0];
//           t.equal(firstEntry.category, "Entertainment");
//           t.end();
//       })
//       .catch(error => {
//           t.error(error);
//           t.end();
//       })
//   });
// });

// test("Can get unique IDs of each tool for use in creating cards", t => {
//   build().then(() => {
//     getTools(`%`)
//     .then(entries => {
//         const firstEntry = entries[0];
//         t.equal(firstEntry.id, 1);
//         t.end();
//     })
//     .catch(error => {
//         t.error(error);
//         t.end();
//     })
//   });
// });

// test("Can get filtered user entries with getTools() function (name)", t => {
//   build().then(() => {
//     getTools(`Work`)
//     .then(entries => {
//         const firstEntry = entries[0];
//         t.equal(firstEntry.tool_name, "Jitsi");
//         t.end();
//     })
//     .catch(error => {
//         t.error(error);
//         t.end();
//     })
//   });
// });

// test("Can get filtered user entries with getTools() function (id)", t => {
//   build().then(() => {
//     getTools(`News`)
//       .then(entries => {
//         const firstEntry = entries[0];
//         t.equal(firstEntry.id, 4);
//         t.end();
//       })
//       .catch(error => {
//         t.error(error);
//         t.end();
//       })
//   });
// });

// test("Does filter return all filtered tools", t => {
//   build().then(() => {
//     getTools(`Health`)
//       .then(entries => {
//         t.equal(entries.length, 2);
//         t.end();
//       })
//       .catch(error => {
//         t.error(error);
//         t.end();
//       })
//   });
// });

// // test createTool
// test("Can user add to the database", t => {
//   build().then(() => {
//     const userEntry = {
//         category: "Work",
//         tool_name: "Slack",
//         tool_description: "Great for chatting in channels!",
//         tool_link: "https://www.slack.com",
//         added_by: "slackfiend"
//     };
//     createTool (userEntry)
//     .then (getTools(`%`)
//     .then (entries => {
//       const latestEntry = entries[entries.length-1];
//       t.equal(latestEntry.tool_name, "Slack");
//       t.end();
//     })
//     .catch (error => {
//       t.error(error);
//       t.end();
//     }))
//   })
// })

// // test addLove
// test("Can add love to specific tool", t => {
//   build().then(() => {
//     addLove(5)
//     .then(() =>
//       getTools(`%`)
//       .then(entries => {
//         const newMiroLove = entries.find(entry => entry.id == 5).love;
//         t.equal(newMiroLove, 14, `for ${entries[4].tool_name}`);
//         t.end();
//       })
//       .catch(error => {
//         t.error(error);
//         t.end();
//       }));
//   });
// });

// test("Can increase tool love by one", t => {
//   let currentLove;
//   build().then(() => {
//     getTools(`%`)
//     .then(entries => {
//       currentLove = entries.find(entry => entry.id == 4).love;
//     })
//     .catch(error => {
//       console.error(error);
//     })
//     addLove(4)
//     .then(() =>
//       getTools(`%`)
//       .then(entries => {
//         const newLove = entries.find(entry => entry.id == 4).love;
//         t.equal(newLove, currentLove + 1, `was ${currentLove} now ${newLove}`);
//         t.end();
//       })
//       .catch(error => {
//         t.error(error);
//         t.end();
//       }));
//   });
// });
