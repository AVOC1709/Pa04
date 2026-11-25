import { Router } from 'express'
import { listarCategorias } from '../controllers/categorias.controller'

export const categoriasRouter = Router()

categoriasRouter.get('/', listarCategorias)
