const { Order } = require("../models")

module.exports = {
    async createOrder(req, res) {
        try{
            const order = await Order.create(req.body) 

            res.send(order)
        }catch(error){
            console.log(error)
            res.status(400).send({
                error: "Invalid menu item information"
            })
        }
    },

    async fetchSingleOrder(req, res){
        try{
            const order = await Order.findOne({
                where: {
                    id: req.params.id
                }
            }) 

            res.send(order)
        }catch(error){
            res.status(400).send({
                error: "The item does not exist"
            })
        }
    },

    async fetchAllOrders(req, res){
        try{
            const order = await Order.findAll() 

            res.send(order)
        }catch(error){
            res.status(400).send({
                error: "The item does not exist"
            })
        }
    }
}