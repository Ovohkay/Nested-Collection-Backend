import { Request, Response } from "express";
import mongoose  from "mongoose";
import authorModel from "../Model/authorModel";
import bookModel from "../Model/bookModel";

const createBook = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const {tittle,category, summary} =req.body;
        const myAuthor = await  authorModel.findById(req.params.authorBookID);
        const newBook = await bookModel.create({
            tittle,
            coverImage: tittle.charAt(0),
            category,
            summary,
            authName: myAuthor?.authName
        });

        myAuthor?.books.push(new mongoose.Types.ObjectId(newBook._id));

        myAuthor?.save();

        return res.status(201).json({
            message: "book Create Successfully"
        })
    } catch (error) {
        return res.status(404).json({
            message: "could't create authors",
            data: error
        })
    }
}

export { createBook };