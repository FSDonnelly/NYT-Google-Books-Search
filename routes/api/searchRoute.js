const axios = require("axios");
const router = require("express").Router();

router.get("/search", (req, res) => {
  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=Harry+Potter&orderBy=newest&printType=all&key=AIzaSyAIHQbTotLEMOBH-PjVJO8vYPHRTp2YlD4`)
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
// GET https://www.googleapis.com/books/v1/volumes?q=Harry+Potter&orderBy=newest&printType=all&key=AIzaSyAIHQbTotLEMOBH-PjVJO8vYPHRTp2YlD4