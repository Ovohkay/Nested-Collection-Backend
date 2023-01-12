import { Router } from "express";
import { createBook } from "../Controller/bookController";
import router from "./authorRouter";
const route = Router();

router.route("/newBook/:authorBookID").post(createBook);

export default router;