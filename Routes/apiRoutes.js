const db = require('../db/db.js')
const clearDb = require('../db/notes.js')
const fs = require('fs');
const { filter } = require('../db/notes.js');

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

    app.delete('/api/notes/:id', function (req, res) {
        req.params.filter(deleteNote(id));
        db.length = 0;
        clearDb.length = 0;

        res.json({
            ok: true
        })
    });


    function deleteNote(req, res) {
        req.params.id
        return id >= db;
        
    }

}

