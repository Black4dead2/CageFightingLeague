// References to the form and list container
const fighterForm = document.getElementById("fighterForm");
const fighterList = document.getElementById("fighterList");

// Render all fighters in the admin dashboard
function renderFighters() {
    const fighters = JSON.parse(localStorage.getItem("fighters")) || [];
    fighterList.innerHTML = ""; // Clear existing list

    fighters.forEach((fighter, index) => {
        const fighterDiv = document.createElement("div");
        fighterDiv.classList.add("fighter");
        fighterDiv.innerHTML = `
            <img src="${fighter.image}" alt="${fighter.name}" style="width: 100px; height: 100px; object-fit: cover;">
            <p><strong>${fighter.name}</strong> - ${fighter.record}</p>
            <button onclick="deleteFighter(${index})">Delete</button>
        `;
        fighterList.appendChild(fighterDiv);
    });
}

// Convert uploaded file to Base64
function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
}

// Handle form submission to add a new fighter
fighterForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    const fighters = JSON.parse(localStorage.getItem("fighters")) || [];
    const imageFile = document.getElementById("fighterImage").files[0];

    if (!imageFile) {
        alert("Please upload an image.");
        return;
    }

    const base64Image = await convertToBase64(imageFile);

    const newFighter = {
        name: document.getElementById("fighterName").value,
        image: base64Image,
        record: document.getElementById("fighterRecord").value,
        gym: document.getElementById("fighterGym").value,
        style: document.getElementById("fighterStyle").value,
        highlights: document.getElementById("fighterHighlights").value,
    };

    fighters.push(newFighter);
    localStorage.setItem("fighters", JSON.stringify(fighters)); // Save to localStorage
    renderFighters(); // Re-render fighters in the admin dashboard
    fighterForm.reset(); // Reset the form
});


// Function to delete a fighter
function deleteFighter(index) {
    const fighters = JSON.parse(localStorage.getItem("fighters")) || [];
    fighters.splice(index, 1);
    localStorage.setItem("fighters", JSON.stringify(fighters));
    renderFighters();
}

// Initial render of fighters
renderFighters();
