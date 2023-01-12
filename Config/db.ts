import moongoose from "mongoose";

const URL:string = "mongodb://localhost/newBookStore";

moongoose.connect(URL);
moongoose.connection
.on("open", () => {
    console.log("connected to database")
})
.once("error", (err) => {
    console.log("an error occured")
})