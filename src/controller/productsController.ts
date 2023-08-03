import { Request, Response } from 'express';

import db from '../config/database';

async function listProducts(req: Request, res: Response) {
    db.connection.query('SELECT * FROM products_ecommerce', (err, results) => {
        if (err) {
            res.json({
                sucess: false
            })
        } else {
            res.json({
                sucess: true,
                message: 'Listagem de Produtos realizada com sucesso',
                data: results
            })
        }
    })
};

async function createProduct(req: Request, res: Response) {
    const querySql = ('INSERT INTO products_ecommerce(ds_name, ds_description, nm_value, ds_brand, ds_status) VALUES(?,?,?,?,?);');

    const params = Array(
        req.body.ds_name,
        req.body.ds_description,
        req.body.nm_value,
        req.body.ds_brand,
        req.body.ds_status
    );

    db.connection.query(querySql, params, (err, results) => {
        if (err) {
            res.json({
                sucess: false
            })
        } else {
            res.json({
                sucess: true,
                message: 'Produto criado com sucesso',
                data: results
            })
        }
    })
}

async function editProduct(req: Request, res: Response) {
    const idProduct = req.params.id;

    const querySql = ('UPDATE products_ecommerce SET ds_name = ?, ds_description = ?, nm_value = ?, ds_brand = ?, ds_status = ? WHERE id_product = ?');

    const params = Array(
        req.body.ds_name,
        req.body.ds_description,
        req.body.nm_value,
        req.body.ds_brand,
        req.body.ds_status,
        idProduct
    );

    db.connection.query(querySql, params, (err, results) => {
        if (err) {
            res.json({
                sucess: false
            });
        } else {
            res.json({
                sucess: true,
                message: 'Atualização realizada com sucesso',
                data: results
            });
        }
    });
}

async function deleteProduct(req: Request, res: Response) {
    const idProduct = req.params.id;

    const querySql = ('DELETE FROM products_ecommerce WHERE id_product = ?');

    db.connection.query(querySql, idProduct, () => {
        res.json({
            message: "Produto excluído com sucesso",
        });
    });
}


export default {
    listProducts,
    createProduct,
    editProduct,
    deleteProduct
}