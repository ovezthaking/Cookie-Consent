const modalEl = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')


setTimeout(() => {
    modalEl.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click',() => {
    modalEl.style.display = 'none'
})

consentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('form submitted')
})