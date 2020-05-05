const characters = []
const list = document.getElementById('list')
const search = document.querySelector('input')

fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(jsonResponse => {
        characters.push(...jsonResponse.results)
    })
console.log(characters)
console.dir(list)



const render = (arr) => {
    let html = arr.join('')
    list.innerHTML = html
}

function filterText() {
    const filtered = characters
    .filter(item => item.name.toLowerCase().includes(this.value.toLowerCase()))
    .map(item =>`<li>${item.name}</li>`)
    if (filtered.length) {
        render(filtered)
    }
}


search.addEventListener('keyup', filterText)