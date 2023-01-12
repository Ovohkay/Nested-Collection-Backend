import { Router } from "express";
import { getAuthor, getOneAuthor, postAuthor } from "../Controller/authorController";

const router = Router();

router.route("/get").get(getAuthor);
router.route("/:authorID").get(getOneAuthor);
router.route("/newAuthor").post(postAuthor);

export default router;