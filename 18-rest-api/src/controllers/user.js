const { logger } = require("../utils");
const { users } = require("../utils/stored")

function showUsers(req, res) {
    res.status(200).send(users)
    logger.info('OK - Mostrar usuarios')
}

function showUser(req, res) {
    const id = req.params.id
    console.log(id)
    for (let user of users) {
        if (user.id === id) {
            logger.info('OK - Mostrar usuarios');
            return res.status(200).send(user);
        }
    }
    logger.warn('ATENCIÓN - Usuario no encontrado')
    return res.status(404).send({ message: 'Usuario no encontrado' });
}

function addUser(req, res) {
    // Local
    /* const param = req.params.object
    const user = JSON.parse(param)
    users.push(user)
    res.status(200).send('Created user')
    logger.info('OK - Added User') */

    const newUser = req.body
    users.push(newUser)
    res.status(200).send('Usuario Creado')
    logger.info('OK - Usuario Creado')
}

function editUser(req, res) {
    // Local
    /* const id = req.params.id
    const param = req.params.object
    const modUser = JSON.parse(param)
    let objIndex = users.findIndex((user => user.id == id));
    const oldUser = users[objIndex]
    users[objIndex] = modUser
    res.status(200).send('Modificar usuario')
    logger.info('OK - Usuario mofdificado') */

    const id = req.params.id;
    const newUser = req.body;
    let objIndex = users.findIndex((user => user.id == id));
    users[objIndex] = newUser
    res.status(200).send('Usuario Modificado')
    logger.info('OK - Usuario Modificado')

}

function removeUser(req, res) {
    const id = req.params.id
    users.filter(user => {
        if (user.id === id) {
            const index = users.indexOf(user);
            users.splice(index, 1);
        }
    });

    res.send('Usuario borrado');
    logger.info('OK - Usuario Borrado')
}

module.exports = {
    showUsers,
    showUser,
    addUser,
    editUser,
    removeUser,
};