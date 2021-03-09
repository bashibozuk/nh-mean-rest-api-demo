const faker = require('faker');
const MongoCrud = require('./mongo-crud')

const crud = new MongoCrud('blog-app', 'authors');

async function main() {

    for (let i = 0; i < 5; i++) {
        const entry = {
            name: faker.name.firstName() + ' ' + faker.name.lastName()
        };

        const result = await crud.addOne(entry);
        console.log(result);
    }
}

main();