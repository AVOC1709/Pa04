import { Router } from 'express'
import { listarGaleria } from '../controllers/galeria.controller'

export const galeriaRouter = Router()

galeriaRouter.get('/', listarGaleria)
