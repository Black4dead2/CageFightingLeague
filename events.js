// Sample event data with thumbnails
const events = [
    {
        name: "CFL 10",
        date: "December 20, 2024",
        location: "Baghdad Arena",
        tickets: "https://www.example.com/tickets-cfl10",
        thumbnail: "images/izzy vs sean.jpg" // Path to the thumbnail image
    },
    {
        name: "CFL 11",
        date: "January 15, 2025",
        location: "Erbil Stadium",
        tickets: "https://www.example.com/tickets-cfl11",
        thumbnail: "images/islam vs porier.jpg"
    },
    {
        name: "CFL 12",
        date: "February 20, 2025",
        location: "Sulaymaniyah Hall",
        tickets: "https://www.example.com/tickets-cfl12",
        thumbnail: "images/volk vs ilia.jpg"
    }
];

// Select the events container
const eventsContainer = document.querySelector(".events-container");

// Function to render events
function renderEvents() {
    eventsContainer.innerHTML = ""; // Clear existing events
    events.forEach(event => {
        const card = document.createElement("div");
        card.classList.add("event-card");

        card.innerHTML = `
            <img src="${event.thumbnail}" alt="${event.name}" class="event-thumbnail">
            <h3>${event.name}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <a href="${event.tickets}" target="_blank" class="button">Buy Tickets</a>
        `;

        eventsContainer.appendChild(card);
    });
}

// Render the events on page load
renderEvents();
