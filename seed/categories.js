const faker = require('faker');
const MongoCrud = require('./mongo-crud')

const crud = new MongoCrud('blog-app', 'categories');
const categories = [
    'Helth and Wellness',
    'Technologies',
    'Politics',
    'Lifestyle',
    'Sport'
]
async function main() {

    for (let i = 0; i < 5; i++) {
        const entry = {
            name: categories[i]
        };

        const result = await crud.addOne(entry);
        console.log(result);
    }
}

main();