const MIN_NUMBER = -5
const MAX_NUMBER = 10


const number = document.querySelector('[data-key="number"]')
const add = document.querySelector('[data-key="add"]')
const minus = document.querySelector('[data-key="minus"]')

const addHandler = () => {
    const newValue = parseInt(number.value) +1
    number.value = newValue

    if( minus.disabled === true) {
        minus.disabled = false
    }
    if( newValue >= MAX_NUMBER){
        add.disabled = true
    }
}
const minusHandler = () => {
    const newValue = parseInt(number.value) -1
    number.value = newValue

    if( add.disabled === true) {
        add.disabled = false
    }
    if( newValue <= MIN_NUMBER) {
        minus.disabled = true
    }


}

add.addEventListener('click', addHandler)
minus.addEventListener('click', minusHandler)