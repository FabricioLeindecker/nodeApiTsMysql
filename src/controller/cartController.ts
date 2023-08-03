import { Request, Response } from 'express';

import db from '../config/database';

//////////////////////
async function listAll(req: Request, res: Response) {
    const idClient = req.params.id;

    const querySql = ('SELECT k.id_cart, k.id_client, k.id_product from cart k WHERE c.id_client = ?');

    const params = Array(
        req.body.id_cart,
        req.body.id_client,
        req.body.id_product,
        idClient
    );

    db.connection.query(querySql, params, (err, results) => {
        if (err) {
            res.json({
                sucess: false
            })
        } else {
            res.json({
                sucess: true,
                message: 'Listagem realizada com sucesso',
                data: results
            })
        }
    })
}
/////////////////////

async function listCarts(req: Request, res: Response) {
    db.connection.query('SELECT * FROM cart', (err, results) => {
        if (err) {
            res.json({
                sucess: false
            })
        } else {
            res.json({
                sucess: true,
                message: 'Listagem realizada com sucesso',
                data: results
            })
        }
    })
};

async function createCart(req: Request, res: Response) {
    const querySql = ('INSERT INTO cart(id_client, id_product) VALUES(?,?);');

    const params = Array(
        req.body.id_client,
        req.body.id_product
    );

    db.connection.query(querySql, params, (err, results) => {
        if (err) {
            res.json({
                sucess: false
            })
        } else {
            res.json({
                sucess: true,
                message: 'Usuário criado com sucesso',
                data: results
            })
        }
    })
}


async function editCart(req: Request, res: Response) {
    const idCart = req.params.id;

    const querySql = ('UPDATE cart SET id_client = ?, id_product = ? WHERE id_cart = ?');

    const params = Array(
        req.body.id_client,
        req.body.id_product,
        idCart
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

async function deleteCart(req: Request, res: Response) {
    const idUser = req.params.id;

    const querySql = ('DELETE FROM cart WHERE id_cart = ?');

    db.connection.query(querySql, idUser, () => {
        res.json({
            message: "Carrinho excluído com sucesso",
        });
    });
}


export default {
    listCarts,
    createCart,
    editCart,
    deleteCart,
    listAll
}