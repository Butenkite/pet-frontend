window.onload = async () => {
    //register form submission
    const formButton = document.querySelector("#addPet");
    formButton.onclick = formHandler;

    //gather our data with a fetch call
    const url = "http://localhost:3000/api/v1/pets";
    const config = {
        method: "get",
        mode: "cors"
    }

    const response = await fetch(url, config);
    const data = await response.json();

    console.log(data);
    showPets(data);
}

async function formHandler(event) {
    //stop the regular behavior of the button (form submission)
    event.preventDefault();

    //gather up the form data
    const formData = {
        petName: document.querySelector("#petName").value,
        petDescription: document.querySelector("#petDescription").value
    }

    //make the post request
    const url = "http://localhost:3000/api/v1/pets";
    const config = {
        method: "post",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    }

    const response = await fetch(url, config);
    const data = await response.json();
    
    console.log(response);
    console.log(data);

    //handle the response
    const playpen = document.querySelector(".playpen");
    const firstPet = playpen.firstElementChild;

    const petSection = createPetCard(data);
    petSection.style.backgroundColor = "lightgreen";
    playpen.insertBefore(petSection, firstPet);
}

function showPets(pets) {
    const playpen = document.querySelector("#results-table");
    let html = "";
    for (const pet of pets) {
        // const card = createPetCard(pet);
        // playpen.appendChild(card);

        html += `<tr class="row">
                <td>${pet.petName}</td>
                <td>${pet.petDescription}</td>
                <td>${pet.petId}</td>
            </tr>`;
    }
    playpen.innerHTML = html;
}

function createPetCard(pet) {
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    section.className = "row";
    h2.textContent = pet.petName;
    p.textContent = pet.petDescription

    section.appendChild(h2);
    section.appendChild(p);

    return section;
}

const searchBox = document.getElementById('search-input');
const resultsTable = document.getElementById('results-table');

searchBox.addEventListener('input', async (event) => {
    //make fetch call here...

    //update DOM with results...
});