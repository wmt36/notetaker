var db = require('../db/db.json')

module.exports = function (app) {

    app.get('/api/notes', function (req, res) {
        res.json(db)
    })

    app.post('/api/notes', function(req, res) {
        if (db.length > 0) {
            db.push(req.body)
            res.json(true)
        }
    })

    app.delete('/api/notes', function (req, res) {
        db.length = 0;

        res.json({
            ok: true
        })
    })

}