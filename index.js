const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello From My first node with nodemon");
});

// all users data
const users = [
  {
    id: 0,
    name: "Shabana",
    email: "Shabana@gmail.com",
    phone: "01788888888",
  },
  {
    id: 1,
    name: "Shabnoor",
    email: "Shabnoor@gmail.com",
    phone: "01788888888",
  },
  {
    id: 2,
    name: "Shrabonti",
    email: "Shrabonti@gmail.com",
    phone: "01788888888",
  },
  {
    id: 3,
    name: "Suchorita",
    email: "Suchorita@gmail.com",
    phone: "01788888888",
  },
  {
    id: 4,
    name: "Soniya",
    email: "Soniya@gmail.com",
    phone: "01788888888",
  },
  {
    id: 5,
    name: "Susmita",
    email: "Susmita@gmail.com",
    phone: "01788888888",
  },
];

// get search result or get all users
app.get("/users", (req, res) => {
  const search = req.query.search;
  // use query parameter
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(res.send(users));
  }
});

// get specific user (dynamic api)
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

// example for another address
app.get("/fruits", (req, res) => {
  res.send(["mango", "oranges", "banana", "apple"]);
});

// example for sub-address
app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("This is a fazli mango");
});

// checking whether port is working or not in cmd
app.listen(port, () => {
  console.log("listening to port", port);
});
