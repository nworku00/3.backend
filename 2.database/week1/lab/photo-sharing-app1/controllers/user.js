const  User  = require('../models/user');
const Photo = require('../models/photo');

const listUser = async (req, res) => {
    try {
        const user = await User.findAll({
            include: [
                {
                    model: Photo,
                    as: 'photos',
                }
            ],
            order: [
                ['createdAt', 'DESC'],
                [{model: Photo, as:'photos'}, 'createdAt', 'DESC']
            ]
        })
        return res.status(200).json(user)
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            message: 'users not found'
        })
    }
}
const createUser = async (req, res) => {
    try {
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
        });
        return res.status(201).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
module.exports = {
    listUser, createUser
}