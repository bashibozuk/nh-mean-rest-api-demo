const categories = require('../models/categories');

async function main(router) {
    router.get('/categories', async (req, res) => {
        const data = await categories.find();
        res.status(200).json(data);
    });
}

module.exports = main;