// *********************
// Routes
// *********************

// Scrape Function
var scrape = require('../scripts/scrape');

// Bring headlines and notes from the controller
var headlinesController = require("../controllers/headlines");
var notesController = require("../controllers/notes");

module.exports = function(router) {
  // Route to the home page
  router.get("/", function(req, res) {
    res.render("home");
  });
  // Route render save handlebars
  router.get("/save", function(req, res) {
    res.render("saved");
  });
  // Handle Scraping
  router.get("/api/fetch", function(req, res) {

    headlinesController.fetch(function(err, docs) {

      if (!docs || docs.insertedCount === 0) {
        res.json({
          message: "No new articles today. Check back tomorrow!"
        });
      }

      else {
        res.json({
          message: "Added " + docs.insertedCount + " new articles!"
        });
      }
    });
  });

  
}
