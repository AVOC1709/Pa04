import { Request, Response } from 'express'
import { pool } from '../config/db'

export const listarProductos = async (req: Request, res: Response) => {
    const idcategoria = Number(req.query.categoria)
    if (!Number.isInteger(idcategoria) || idcategoria <= 0) {
        return res.status(400).json({ succes: false, data: [] })
    }
    try {
        const [filas] = await pool.query(
            `SELECT idproducto, nombre, precio, preciorebajado, imagenchica, destacado
             FROM catalogo_productos
             WHERE idcategoria = ?
             ORDER BY idproducto`,
            [idcategoria]
        )
        res.json({ succes: true, data: filas })
    } catch (error) {
        console.error(error)
        res.status(500).json({ succes: false, data: [] })
    }
}
