const articles = require('../models/articles');


function configureRoutes(router) {
    router.get('/articles', async (req, res) => {
        const data = await articles.find();
        res.status(200).json(data);
    })
    
    router.get('/articles/:id', async (req, res) => {
        const id  = req.params.id;
    
        const data = await articles.findById(id);
        if (!data) {
            return res.status(404).json(new Error('Not Found'));
        }
        res.status(200).json(data);
    });
}


module.exports = configureRoutes;