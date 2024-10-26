const ticket = document.getElementById('ticket')
const ticketIn = document.getElementById('ticket-in')

ticket.addEventListener('click', () => {
    console.log('click')
    ticketIn.classList.toggle('active')
})

