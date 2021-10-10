/*
1. When save button is pressed url from current tab is taken and saved to local storage
    - Needs to grab the url from  the tab OR input field
    - Assign the url to an array
    - save the value to localStorage
        - In order to save array to localStorage will need to convert to string
2. Values from local storage is taken and displayed in an ul.
    - parse local storage from string back into an array
    - iterate through the array and display in html (+= to display each item)
    - innerHTML need to include <li> and <a> tags
3. When delete button is pressed localStorage, array and ul is cleared. 
*/

let urlArr = []
let inputEl = document.getElementById('input-el')
let deleteBtn = document.getElementById('delete-btn')
let ulEl = document.getElementById('ul-el')

document.getElementById('save-tab').addEventListener('click', function() {
    urlArr.push(inputEl.value || window.location.href)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let myList = ""
    for (let i = 0; i < urlArr.length; i++) {
        myList = urlArr[i]
    }
    ulEl.innerHTML += `<li>${myList}</li>`
}

deleteBtn.addEventListener('click', function() {
    urlArr = []
    ulEl.textContent = ""
})