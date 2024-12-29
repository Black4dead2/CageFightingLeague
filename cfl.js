// Reference to the fighters grid container
const fightersGrid = document.querySelector(".fighters-grid");

// Function to load fighters from localStorage and render them
function loadFighters() {
    // Retrieve fighters from localStorage
    const fighters = JSON.parse(localStorage.getItem("fighters")) || [];
    
    // Clear the grid before rendering
    fightersGrid.innerHTML = "";

    // Check if there are any fighters in localStorage
    if (fighters.length === 0) {
        fightersGrid.innerHTML = "<p>No fighters available.</p>";
        return;
    }

    // Render each fighter as a card
    fighters.forEach((fighter) => {
        const card = document.createElement("div");
        card.classList.add("fighter-card");
        card.innerHTML = `
            <img src="${fighter.image}" alt="${fighter.name}" style="width: 150px; height: 150px; object-fit: cover;">
            <h3>${fighter.name}</h3>
            <p>Record: ${fighter.record}</p>
        `;
        
        // Add click functionality to redirect to fighter-detail.html
        card.addEventListener("click", () => {
            const queryParams = new URLSearchParams({
                name: fighter.name,
                image: fighter.image,
                record: fighter.record,
                gym: fighter.gym,
                style: fighter.style,
                highlights: fighter.highlights,
            }).toString();
            window.location.href = `fighter-detail.html?${queryParams}`;
        });

        // Append the card to the grid
        fightersGrid.appendChild(card);
    });
}

// Call the function to load fighters when the page loads
loadFighters();
