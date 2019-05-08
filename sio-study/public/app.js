(function(){
    
    const socket = io() 
    
    document.forms[0].addEventListener('submit', e => {
        e.preventDefault()
        socket.emit('chat message', document.getElementById('m').value)
        document.getElementById('m').value = ""
        return false
    })

    socket.on('chat message', function(msg) {
        const li = document.createElement('li')
        li.textContent = msg
        console.log(li)
        document.getElementById('messages').appendChild(li)
    })

    socket.on('connected user', function(msg){
        const li = document.createElement('li')
        li.textContent = msg
        console.log(li)
        document.getElementById('messages').appendChild(li)
    })

})()