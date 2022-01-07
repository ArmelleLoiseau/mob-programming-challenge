const express = require('express');
const router = express.Router();
const users = [
    {
      name: "T-Rex 1",
      email: "trex1@trex.com",
      favoriteLanguage: "french",
    },
    {
      name: "T-Rex 2",
      email: "trex2@trex.com",
      favoriteLanguage: "english",
    },
    {
      name: "T-Rex 3",
      email: "trex3@trex.com",
      favoriteLanguage: "japanese",
    },
  ];


router.get('/', (req, res) => {
    res.render("users.hbs", {
        users: users
    })
})


module.exports = router;