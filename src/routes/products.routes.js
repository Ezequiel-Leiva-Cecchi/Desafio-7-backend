import { Router } from 'express';
import * as productsController from '../controllers/products.controller.js';

const ProductsRouter = Router();
// Ruta para obtener una lista de productos paginados
ProductsRouter.get('/', productsController.getProducts);
// Ruta para obtener un producto por su ID
ProductsRouter.get('/:productId', productsController.getProduct);
// Ruta para agregar un nuevo producto
ProductsRouter.post('/', productsController.addProduct);
// Ruta para editar un producto existente
ProductsRouter.put('/:productId', productsController.editProduct);
// Ruta para eliminar un producto por su ID
ProductsRouter.delete('/:productId', productsController.deleteProduct);

export default ProductsRouter;
