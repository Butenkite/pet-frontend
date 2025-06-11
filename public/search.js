window.onload = async () => {
    //on page load, fill the table initially
    await loadPets();

    const searchBox = document.getElementById('search-input');
    searchBox.addEventListener('input', queryPets);
}

async function loadPets() {
    const response = await fetch("http://localhost:3000/api/v1/pets", { method: "get" });
    const data = await response.json();
    rendersPets(data);
}

function rendersPets(pets) {
    const tbody = document.querySelector("#results-table");
    tbody.innerHTML = ''; //clear the table...
    for (const pet of pets) {
        const row = createRow(pet);
        tbody.innerHTML += row;
    }
}

function createRow(pet) {
    return `<tr>
        <td>${pet.petId}</td>
        <td>${pet.petName}</td>
        <td>${pet.petDescription}</td>
    </tr>`
}

//may want to consider adding a debounce!
async function queryPets(event) {
    const textBox = event.target; //this gives the source of event
    const searchText = textBox.value;

        const response = await fetch(`http://localhost:3000/api/v1/pets/query?field=petName&query=${searchText}&sortField=petName&sortDirection=asc`, { method: "get" });
        const data = await response.json();
    rendersPets(data);
}