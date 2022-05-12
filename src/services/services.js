const db = require('../database/models');
const dayjs = require('dayjs');
const res = require('express/lib/response');

dayjs().format()

const findAll = async (req, res) => {
    let options = {}
    if (req.body.title) {
        options = {
            title: req.body.title,
        }
    } else if (req.body.description) {
        options = {
            description: req.body.description,
        }
    } else if (req.body.typeservicesId) {
        options = {
            typeservicesId: req.body.typeservicesId,
        }
    }
    db.services.findAll({
        where: options
    }).then(response => {
        response.map((service) => {
            let stringDate = dayjs(response.date).format('MMMM DD, YYYY')
            service.dataValues.stringDate = `The service performed day ${stringDate}`
        })
        res.send(response).status(200)
        return response
    })
}
const saveService = async (req, res) => {
    if (req.body.repeat == "true") {
        const dates = await dayWeek(req.body.repeatDay, req.body.date, req.body.repeatLimit, res).catch(err => {
            return "erro"
        })
        db.services.create({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            repeat: req.body.repeat,
            repeatDay: req.body.repeatDay,
            repeatLimit: req.body.repeatLimit,
            typeservicesId: req.body.typeservicesId,
            UserId: req.body.UserId
        }).catch(console.log)

        dates.map(intem => {
            db.services.create({
                title: req.body.title,
                description: req.body.description,
                date: intem,
                repeat: req.body.repeat,
                repeatDay: req.body.repeatDay,
                repeatLimit: req.body.repeatLimit,
                typeservicesId: req.body.typeservicesId,
                UserId: req.body.UserId
            }).catch(console.log)
        })
        return res.send(200)
    } else {
        db.services.create({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            repeat: req.body.repeat,
            repeatDay: req.body.repeatDay,
            repeatLimit: req.body.repeatLimit,
            typeservicesId: req.body.typeservicesId,
            UserId: req.body.UserId
        }).catch(console.log).then(res.send(200).status(200))
    }
}

const deleteService = async (req, res) => {
    db.services.destroy({ where: { id: req.body.id } })
        .then(res.send(200))
        .catch(err => {
        res.send(err).status(400)
    })
}

const dayWeek = async (dayWeek, rangeinit, rangefinish, res) => {
    let count = 1
    let dateinit = dayjs(new Date(rangeinit)).format('YYYY-MM-DD')
    const datefinish = dayjs(new Date(rangefinish)).format('YYYY-MM-DD')
    if (rangefinish == "Invalid Date" || rangeinit == "Invalid Date") return false
    const days = []
    array = dayWeek.split(",")
    array.map(item => {
        for (let i = dateinit; i !== datefinish; i = dayjs(i).add(1, 'day').format('YYYY-MM-DD')) {
            count++
            if (count >= 200) return Promise.reject(new Error("Max Limit")), res.send("Max Limit").status(400)
            let dayy = dayjs(i).day()
            if (dayy == item) {
                days.push(i)
            }
        }
    })
    return days
}

module.exports = {
    save: saveService,
    find: findAll,
    delete:deleteService

}