const faker = require('faker');
const MongoCrud = require('./mongo-crud')
const {ObjectID} = require('mongodb');

const crud = new MongoCrud('blog-app', 'articles');

/**
 * Query mechanism
 * - client.connect()
 * - exec query
 * - client.close()
 */

async function main() {
    const articles = [];
    const authorCrud = new MongoCrud('blog-app', 'authors');
    const categoryCrud = new MongoCrud('blog-app', 'categories');

    const authors = await authorCrud.find();
    const categories = await categoryCrud.find();


    for (let i = 0; i < 20; i++) {
        const randomAuthorINdex = faker.random.number(authors.length - 1);
        const randomCategoriesINdex = faker.random.number(categories.length - 1);
        const article = {
            title: faker.lorem.sentence(),
            text: faker.lorem.paragraphs(10),
            visits: faker.random.number(),
            createdAt: faker.date.past(),
            authorId: ObjectID(authors[randomAuthorINdex]._id),
            categoryId: ObjectID(authors[randomCategoriesINdex]._id)
        };

        const result = await crud.addOne(article);
        console.log(result);
    }
}

main();


