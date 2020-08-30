var db = require('../db/db.js')
var clearDb = require('../db/notes.js')

module.exports = function (app) {

    app.get('/api/notes', function (req, res) {
        res.json(db)
    });

    app.post("/api/notes", function (req, res) {
        if (db) {
            db.push(req.body)
            res.json(true)
        } else {
            clearDb.res.json(false)
        }
    });

    app.delete('/api/notes', function (req, res) {
        db.length = 0;
        clearDb.length = 0;

        res.json({
            ok: true
        })
    });

}