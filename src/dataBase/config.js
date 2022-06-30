import dotenv from "dotenv";
dotenv.config(); 

export default{
    MongoDB:{
        URL:`mongodb+srv://guido:${process.env.DB_PASSWORD}@cluster0.wtvdvhi.mongodb.net/Mensajes?retryWrites=true&w=majority` ,
        options:{
            useNewUrlParser:true,
            useUnifiedTopology:true
        }
    }
}; 
