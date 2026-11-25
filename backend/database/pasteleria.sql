CREATE TABLE IF NOT EXISTS galeria (
    idgaleria INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    foto VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS catalogo_categorias (
    idcategoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    foto VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS catalogo_productos (
    idproducto INT AUTO_INCREMENT PRIMARY KEY,
    idcategoria INT NOT NULL,
    nombre VARCHAR(120) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    preciorebajado DECIMAL(10,2) NOT NULL DEFAULT 0,
    imagenchica VARCHAR(255) NOT NULL,
    destacado TINYINT NOT NULL DEFAULT 0,
    CONSTRAINT fk_catalogo_productos_categoria
        FOREIGN KEY (idcategoria) REFERENCES catalogo_categorias (idcategoria)
);

INSERT INTO galeria (titulo, descripcion, foto) VALUES
('Torta de chocolate', 'Bizcocho húmedo con ganache de cacao', 'imagenes/galeria/galeria1.jpg'),
('Cupcakes de vainilla', 'Cobertura cremosa con flores de azúcar', 'imagenes/galeria/galeria2.jpg'),
('Tarta de frutos rojos', 'Base crocante con crema pastelera', 'imagenes/galeria/galeria3.jpg'),
('Macarons surtidos', 'Sabores de temporada hechos a mano', 'imagenes/galeria/galeria4.jpg'),
('Croissants de mantequilla', 'Horneados cada mañana', 'imagenes/galeria/galeria5.jpg'),
('Torta de boda', 'Diseños personalizados para tu celebración', 'imagenes/galeria/galeria6.jpg');

INSERT INTO catalogo_categorias (nombre, descripcion, foto) VALUES
('Tortas', 'Tortas artesanales para toda ocasión', 'imagenes/categorias/tortas.jpg'),
('Cupcakes', 'Porciones individuales con cobertura cremosa', 'imagenes/categorias/cupcakes.jpg'),
('Galletas', 'Galletas crocantes y rellenas', 'imagenes/categorias/galletas.jpg');

INSERT INTO catalogo_productos (idcategoria, nombre, precio, preciorebajado, imagenchica, destacado) VALUES
(1, 'Torta tres leches', 85.00, 0, 'imagenes/productos/torta1.jpg', 1),
(1, 'Torta de chocolate', 90.00, 75.00, 'imagenes/productos/torta2.jpg', 1),
(1, 'Torta red velvet', 95.00, 0, 'imagenes/productos/torta3.jpg', 0),
(1, 'Torta de zanahoria', 80.00, 70.00, 'imagenes/productos/torta4.jpg', 0),
(2, 'Cupcake de vainilla', 8.00, 0, 'imagenes/productos/cupcake1.jpg', 1),
(2, 'Cupcake de chocolate', 9.00, 7.50, 'imagenes/productos/cupcake2.jpg', 0),
(2, 'Cupcake de fresa', 9.00, 0, 'imagenes/productos/cupcake3.jpg', 0),
(2, 'Cupcake de limón', 8.50, 7.00, 'imagenes/productos/cupcake4.jpg', 1),
(3, 'Galleta de avena', 5.00, 0, 'imagenes/productos/galleta1.jpg', 0),
(3, 'Galleta con chispas', 6.00, 5.00, 'imagenes/productos/galleta2.jpg', 1),
(3, 'Alfajor de manjar', 4.50, 0, 'imagenes/productos/galleta3.jpg', 1),
(3, 'Galleta de mantequilla', 5.50, 4.50, 'imagenes/productos/galleta4.jpg', 0);
