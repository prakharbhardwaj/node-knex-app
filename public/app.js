const CreateUser = document.querySelector('.CreateUser')
CreateUser.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = CreateUser.querySelector('.name').value
    const contact = CreateUser.querySelector('.contact').value
    post('/createUser', { name, contact })
    
})

const Login = document.querySelector('.Login')
Login.addEventListener('submit', (e) => {
    e.preventDefault()
    const contact = Login.querySelector('.contact').value
    post('/login', { contact })
        .then(({ status }) => {
            console.log(`Status ${status}`)
            if (status === 200) {
                console.log('login success')
                alert('login success')
            } else {
                console.log('login failed')
                alert('login failed')
            }
    })
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