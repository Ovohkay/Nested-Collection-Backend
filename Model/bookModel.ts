import mongoose from "mongoose";

interface books {
    tittle : string;
    coverImage: string;
    category: string;
    summary: string;
    authorName: string;

}

interface iBooks extends books , mongoose.Document{}

const bookSchema = new mongoose.Schema({
    tittle: {
        type: String,
        require: true
    },
    coverImage: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    summary: {
        type: String,

    },
    authorName: {
        type: String
    }
});

const bookModel = mongoose.model<iBooks>("bookCollection", bookSchema);

export default bookModel;