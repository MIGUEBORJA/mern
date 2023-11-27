import  Express  from "express";
import morgan from "morgan";

const app  = Express(); 
app.use(morgan('dev'));


export default app; 