module.exports = {
    createUser({ name, contact }) {
        console.log(`Add user with name ${name} and contact ${contact}`)
        return Promise.resolve()
    }
}