import express from 'express'; 
import http from 'http'; 
import sockets from './socket'; 
import morgan from 'morgan'; 
import {Server as ioServer} from 'socket.io'; 
import routerProductos from './routers/routersProductos'; 
import 'dotenv/config';


const app = express(); 
const httpServer = http.createServer(app); 

app.use(morgan('dev')); 
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public')); 

app.use('/',routerProductos); 




const PORT = process.env.PORT || 3000; 

httpServer.listen(PORT, () =>{
    console.log(`Server on port ${httpServer.address().port}`);
})

const io = new ioServer(httpServer); 
sockets(io); 