const axios = require("axios")

module.exports = function (app) {
    app.get("/api/classes", (req, res) => {
        axios.get("http://dnd5eapi.co/api/classes/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/classes/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/classes/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/classes/:name/level/:level", (req, res) => {
        axios.get("http://dnd5eapi.co/api/classes/" + req.params.name + "/level/" + req.params.level).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/races", (req, res) => {
        axios.get("http://dnd5eapi.co/api/races/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/races/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/races/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/subraces", (req, res) => {
        axios.get("http://dnd5eapi.co/api/subraces/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/subraces/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/subraces/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    
    app.get("/api/features", (req, res) => {
        axios.get("http://dnd5eapi.co/api/features/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/features/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/features/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    // app.get("/api/ability-scores", (req, res) => {
    //     axios.get("http://dnd5eapi.co/api/ability-scores/").then(results => {
    //         let data = results.data
    //         res.json(data)
    //     }).catch(err => {
    //         res.json(err)
    //     })
    // })

    // app.get("/api/ability-scores/:id", (req, res) => {
    //     axios.get("http://dnd5eapi.co/api/ability-scores/" + req.params.id).then(results => {
    //         let data = results.data
    //         res.json(data)
    //     }).catch(err => {
    //         res.json(err)
    //     })
    // })

    app.get("/api/skills", (req, res) => {
        axios.get("http://dnd5eapi.co/api/skills/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/skills/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/skills/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

  
}