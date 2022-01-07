const express = require('express');
const router = express.Router();
const images = ["/img/virtual-city.jpg", "/img/nft.jpg", "/img/html.jpg"];


router.get('/', (req, res) => {
    res.render("home.hbs", {
        images: images
    })
})


module.exports = router;