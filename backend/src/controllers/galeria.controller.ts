import { Request, Response } from 'express'
import { pool } from '../config/db'

export const listarGaleria = async (_req: Request, res: Response) => {
    try {
        const [filas] = await pool.query(
            'SELECT idgaleria, titulo, descripcion, foto FROM galeria ORDER BY idgaleria'
        )
        res.json({ succes: true, data: filas })
    } catch (error) {
        console.error(error)
        res.status(500).json({ succes: false, data: [] })
    }
}
