const { MenuItem } = require("../models")

module.exports = {
    async createItem(req, res) {
        try{
            const menuItem = await MenuItem.create(req.body) 

            res.send(menuItem)
        }catch(error){
            res.status(400).send({
                error: "Invalid menu item information"
            })
        }
    },

    async fetchSingleItem(req, res){
        try{
            const menuItem = await MenuItem.findOne({
                where: {
                    id: req.params.id
                }
            }) 

            res.send(menuItem)
        }catch(error){
            res.status(400).send({
                error: "The item does not exist"
            })
        }
    },

    async fetchAllItems(req, res){
        try{
            const menuItems = await MenuItem.findAll() 

            res.send(menuItems)
        }catch(error){
            res.status(400).send({
                error: "The item does not exist"
            })
        }
    }
}