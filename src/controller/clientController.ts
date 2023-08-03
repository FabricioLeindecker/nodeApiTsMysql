import { Request, Response } from 'express';

import db from '../config/database';

async function listClients(req: Request, res: Response) {
    db.connection.query('SELECT * FROM clients_ecommerce', (err, results) => {
        if (err) {
            res.json({
                sucess: false
            })
        } else {
            res.json({
                sucess: true,
                message: 'Listagem de usuários realizada com sucesso',
                data: results
            })
        }
    })
};

async function createClient(req: Request, res: Response) {
    const querySql = ('INSERT INTO clients_ecommerce(ds_name, nm_cpf, fl_status) VALUES(?,?,?);');

    const params = Array(
        req.body.ds_name,
        req.body.nm_cpf,
        req.body.fl_status
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

async function editClient(req: Request, res: Response) {
    const idUser = req.params.id;

    const querySql = ('UPDATE clients_ecommerce SET ds_name = ?, nm_cpf = ?, fl_status = ? WHERE id_client = ?');

    const params = Array(
        req.body.ds_name,
        req.body.nm_cpf,
        req.body.fl_status,
        idUser
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

async function deleteClient(req: Request, res: Response) {
    const idUser = req.params.id;

    const querySql = ('DELETE FROM clients_ecommerce WHERE ID_CLIENT = ?');

    db.connection.query(querySql, idUser, () => {
        res.json({
            message: "Usuário excluído com sucesso",
        });
    });
}


export default {
    listClients,
    createClient,
    editClient,
    deleteClient
}