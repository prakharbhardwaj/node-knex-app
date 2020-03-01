const CreateUser = document.querySelector('.CreateUser')
CreateUser.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = CreateUser.querySelector('.name').value
    const contact = CreateUser.querySelector('.contact').value
    post('/createUser', { name, contact })
    
})

function post(path, data) {
    return window.fetch(path, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}