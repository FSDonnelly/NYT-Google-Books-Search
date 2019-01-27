require("dotenv").config();
require("../../.env").config();
const axios = require("axios");
const router = require("express").Router();
const API_KEY = process.env.KEY;
router.get("/search", (req, res) => {
  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=Harry+Potter&orderBy=newest&printType=all&key=`${API_Key})
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
