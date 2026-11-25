import { Request, Response } from 'express'
import { pool } from '../config/db'

export const listarCategorias = async (_req: Request, res: Response) => {
    try {
        const [filas] = await pool.query(
            `SELECT c.idcategoria, c.nombre, c.descripcion, c.foto, COUNT(p.idproducto) AS total
             FROM catalogo_categorias c
             LEFT JOIN catalogo_productos p ON p.idcategoria = c.idcategoria
             GROUP BY c.idcategoria, c.nombre, c.descripcion, c.foto
             ORDER BY c.idcategoria`
        )
        res.json({ succes: true, data: filas })
    } catch (error) {
        console.error(error)
        res.status(500).json({ succes: false, data: [] })
    }
}
