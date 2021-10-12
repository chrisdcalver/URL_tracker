// Initialise variables
let urlArr = []
let inputEl = document.getElementById('input-el')
let deleteBtn = document.getElementById('delete-btn')
let ulEl = document.getElementById('ul-el')
let leadsFromLocalStorage = JSON.parse( localStorage.getItem('storedURL') )

// If we exit browser although localStorage will have data urlARR var will clear so if localStorage is true then reassign its value to urlArr
if (leadsFromLocalStorage) {
    urlArr = leadsFromLocalStorage
    render(urlArr)
}

// Each time button is preseed it goes through the array then lists localStorage out in the DOM
function render(leads) {
    let myList = ""
    for (let i = 0; i < leads.length; i++) {
        myList = leads[i]
    }  
    ulEl.innerHTML += `<li><a href="${myList}">${myList}</a></li>`
}

// When saveTab Btn prssed we need to grab input.value OR url from browser and assign to array, then to localStorage and then clear input field
document.getElementById('save-tab').addEventListener('click', function() {
    urlArr.push(inputEl.value || window.location.href)
    localStorage.setItem('storedURL', JSON.stringify(urlArr))
    inputEl.value = ""
    render(urlArr)
})

// When the deleteBtn is pressed the array is cleared, localStorage is cleared and the DOM <li> is cleared.
deleteBtn.addEventListener('click', function() {
    urlArr = []
    localStorage.clear()
    ulEl.textContent = ""
})