const modalEl = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')


setTimeout(() => {
    modalEl.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click',() => {
    modalEl.style.display = 'none'
})