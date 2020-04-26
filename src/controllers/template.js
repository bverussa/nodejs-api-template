const Template = require('../models/template');

module.exports = {
    async get(req, res, next) {
console.log('METHOD: GET');
console.log(req);
        const result = {
            'message': 'GET template'
        };
        res.status(200).json(result);
    },

    async getById(req, res, next) {
console.log('METHOD: GET BY ID');
console.log(req.params);
        const id = req.params.templateId;
        const result = {
            'message': 'GET template by ID: ' + id
        };
        if (!result) {
            res.status(404).json();
        }
        res.status(200).json(result);
    },

    // async post(req, res, next) {
    //     const newShop = {};
    //     for (const ops in req.body) {
    //         newShop[ops] = req.body[ops];
    //     }
    //     const shop = new Shop(newShop);
    //     var error = shop.validateSync();
    //     if (error) {
    //         res.status(400).json(error);
    //     }
    //     const result = await shop.save();
    //     res.status(201).json(result);
    // },

    // async patch(req, res, next) {
    //     const id = req.params.shopId;
    //     const updateOps = {};
    //     for (const ops in req.body) {
    //         updateOps[ops] = req.body[ops];
    //     }
    //     const result = await Shop.updateOne({ _id: id }, updateOps).exec();
    //     if (result.n === 0) {
    //         res.status(404).json();
    //     }
    //     res.status(204).json();
    // },

    // async delete(req, res, next) {
    //     const id = req.params.shopId;
    //     const result = await Shop.deleteOne({ _id: id }).exec();
    //     if (result.n === 0) {
    //         res.status(404).json();
    //     }
    //     res.status(204).json();
    // }
}