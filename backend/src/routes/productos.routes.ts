import { Router } from 'express'
import { listarProductos } from '../controllers/productos.controller'

export const productosRouter = Router()

productosRouter.get('/', listarProductos)
