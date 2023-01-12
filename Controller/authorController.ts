import authorModel from "../Model/authorModel";
import { Response, Request } from "express";
import cloudinary from "../Config/Cloudinary";

//get method

const getAuthor = async (req: Request, res: Response): Promise <Response> => {
    try {
        const authorDetalis = await authorModel.find();
        return res.status(200).json({
            message: "Successfully gotten author details",
            data: authorDetalis
        })
    } catch (error) {
        return res.status(404).json({
            message: "couldn't get author details",
            data: error
        })
    }
};

//getOneAutjor;
const getOneAuthor = async (req: Request, res: Response): Promise<Response> => {
    try {
        const authorDetalis = await authorModel.findById(req.params.authorID);
        return res.status(200).json({
            message:`${req.params.authorID} gotten suscessfully`,
            data: authorDetalis
        })
    } catch (error) {
    return res.status(404).json({
        message: `couldn't get ${req.params.authorID}`,
        data : error
    });
    }
};

//post 
const postAuthor = async (req : Request , res : Response):Promise<Response> =>{
    try {
        const {
            authName,
            bio,
            authorImg,
            books } = req.body
            // const clawait cloudinary.uploader.upload(req?.file!.path)oudImage = 
        const newAuthor = await authorModel.create({
            authName,
            bio,
            authorImg : authName.charAt(0),
            books
        })

        return res.status(201).json({
            messsage : "new author uploaded",
            data : newAuthor
        })
    } catch (error) {
        console.log("error",error)
        return res.status(400).json({
            message : "failed to create new author",
            data : error
        })
    }
}

export { getAuthor, getOneAuthor, postAuthor };