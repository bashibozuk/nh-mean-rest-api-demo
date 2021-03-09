const authors = require('../models/authors');

async function main(router) {
    router.get('/authors', async function (req, res) {
        const data = await authors.find();
        res.status(200).json(data);
    });
}

module.exports = main;