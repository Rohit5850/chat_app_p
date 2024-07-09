const socket = io()

socket.on('countUpdated', (count) => {
    console.log('The count has updated',count)
})

document.querySelector('#increment').addEventListener('click', () => {
    console.log('Clicked')
})