const events = [
    {
        title: "Konser Musik",
        date: "2023-11-01",
        description: "Konser musik oleh band terkenal di kota."
    },
    {
        title: "Pameran Seni",
        date: "2023-11-15",
        description: "Pameran seni lokal dengan berbagai karya seni."
    },
    {
        title: "Workshop Teknologi",
        date: "2023-12-05",
        description: "Workshop tentang teknologi terbaru dan inovasi."
    }
];

function displayEvents() {
    const eventList = document.getElementById('event-list');
    events.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.innerHTML = `
            <h2>${event.title}</h2>
            <p><strong>Tanggal:</strong> ${event.date}</p>
            <p>${event.description}</p>
        `;
        eventList.appendChild(eventDiv);
    });
}

document.addEventListener('DOMContentLoaded', displayEvents);