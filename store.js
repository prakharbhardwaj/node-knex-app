const knex = require('knex')(require('./knexfile'))
module.exports = {
    createUser({ name, contact }) {
        console.log(`Add user with name ${name} and contact ${contact}`)
        return knex('user').insert({
            name,
            contact
        }).debug()
    },
    authenticate({ contact }) {
        console.log(`Authenticating user with contact ${contact}`)
        return knex('user').where({ contact })
            .then(([user]) => {
                if (!user) return { success: false }
                else return { success: true }
        })
    }
}