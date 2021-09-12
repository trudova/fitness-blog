const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const authRout = require("./routes/auth");
const usersRout = require("./routes/users");
const postsRout = require("./routes/posts");
const catsRout = require("./routes/categories");
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images")))
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("Conected to mongoDB"))
.catch(err =>{ console.log(err)});

const storage= multer.diskStorage({
    destination:(req, file, cb )=>{
        cb(null, "images")
    },
    filename:(req, file, cb)=>{
        cb(null, req.body.name);
    }
});

const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"), (req, res)=>{
    res.status(200).json("file has been uploaded");
})

app.use("/api/auth", authRout);
app.use("/api/users", usersRout);
app.use("/api/posts", postsRout);
app.use("/api/categories", catsRout);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

const port =process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(" server running on port "+ port)
})
