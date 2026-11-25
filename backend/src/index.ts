import express from 'express'
import cors from 'cors'
import path from 'path'
import 'dotenv/config'
import { galeriaRouter } from './routes/galeria.routes'
import { categoriasRouter } from './routes/categorias.routes'
import { productosRouter } from './routes/productos.routes'

const app = express()
const PORT = Number(process.env.PORT) || 3000
const BASE = (process.env.BASE_PATH || '').replace(/\/$/, '')

app.use(cors())
app.use(express.json())
app.use(BASE + '/imagenes', express.static(path.join(__dirname, '..', 'public', 'imagenes')))

app.get(BASE + '/', (_req, res) => {
    res.json({ succes: true, data: 'API Pastelería' })
})

app.use(BASE + '/galeria', galeriaRouter)
app.use(BASE + '/categorias', categoriasRouter)
app.use(BASE + '/productos', productosRouter)

app.listen(PORT, process.env.IP || '::', () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`)
})
