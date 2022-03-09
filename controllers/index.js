const { Cliente, Venta } = require('../models');

const createCliente = async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        return res.status(201).json({
            cliente,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll({
            include: [
                {
                    model: Venta
                }
            ]
        });
        return res.status(200).json({ clientes });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getClienteById = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findOne({
            where: { id: id },
            include: [
                {
                    model: Venta
                }
            ]
        });
        if (cliente) {
            return res.status(200).json({ cliente });
        }
        return res.status(404).send('Cliente with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
module.exports = {
    createCliente,
    getAllClientes,
    getClienteById
}