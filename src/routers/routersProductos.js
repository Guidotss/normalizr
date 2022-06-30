import { Router } from 'express';
import { generarProductos } from '../productos/generarProductos';
import path from 'path'; 

const router = Router(); 

router.get('/api/productos',(req,res)=>{
    return res.json(generarProductos()); 
})

router.get('/api/productos-test',(req,res)=>{
    res.sendFile(path.resolve('src/public/productos','mostrarProductos.html'));
})



export default router;



