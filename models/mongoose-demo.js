const mongoose  = require('mongoose');
const Articles = require('./articles')
const uri = 'mongodb+srv://blog-app:bl0g-@pp@cluster0.rocff.mongodb.net/blog-app?retryWrites=true&w=majority';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

async function main() {
    const id = "60473308857acd292ce9553d";
    const article = await Articles.findOne({
        _id: mongoose.Types.ObjectId(id)
    });

    console.log(article);

    Articles.updateOne({
        _id: mongoose.Types.ObjectId(id)
    }, {
        title: "Some cool new title"
    }).exec()

    const newArticle = new Articles({
        title: 'Some new title',
        text: 'Some article text',
        authorId: mongoose.Types.ObjectId('60472ebd3895c11ba8ea633a'),
        categoryId: mongoose.Types.ObjectId('60472ebe3895c11ba8ea633b')
    })

    newArticle.save((err, result) => {
        console.log(err, result);
    });

    Articles.deleteOne({
        _id: mongoose.Types.ObjectId("60473308857acd292ce9553d")
    }).exec()
}

connection.on('open', () => main());

