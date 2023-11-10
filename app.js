import express from 'express'
import connectDB from './db/connectdb.js';
import{join} from 'path'
import web from "./routes/web.js";
const app = express()
const port = process.env.PORT|| '3001'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";

//Database Connection
connectDB(DATABASE_URL);

app.use(express.urlencoded({extended:false}))

//static files
app.use('/student',express.static(join(process.cwd(), "public")))

//set tamplate enfine
app.set("view engine", "ejs");

//Load Routes
app.use("/student", web);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});