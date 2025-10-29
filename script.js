// Get all day elements
const days = document.querySelectorAll('.day');
const detailsContent = document.getElementById('details-content');
const dayTitle = document.querySelector('#day-details h3');

// Schedule data for each day
const scheduleData = {
    mandag: {
        lessons: [
            "08:30 - 09:00: Klander & Morgenrunde",
            "09:45 - 11:15: Matematik",
            "12:00 - 13:30: Engelsk"
        ],
        notes: "Husk idrætstøj"
    },
    tirsdag: {
        lessons: [
            "08:30 - 09:00: Klander & Morgenrunde",
            "09:45 - 11:15: Fysik/Kemi",
            "12:00 - 13:30: Engelsk"
        ],
        notes: "Matematikbog medbringes"
    },
    onsdag: {
        lessons: [
            "08:30 - 09:00: Klander & Morgenrunde",
            "09:45 - 11:15: Idræt",
            "12:00 - 13:30: Dansk"
        ],
        notes: ""
    },
    torsdag: {
        lessons: [
            "08:30 - 09:30: Klander & Morgenrunde",
            "09:45 - 11:15: Fysik/Kemi",
            "12:00 - 13:30: Dansk"
        ],
        notes: "Afleveringsfrist for projekt"
    },
    fredag: {
        lessons: [
            "08:30 - 09:00: Klander & Morgenrunde",
            "09:45 - 11:15: Idræt",
            "12:00 - 13:30: Engelsk"
        ],
        notes: "Tidlig fri"
    }
};

// Add click event to each day
days.forEach(day => {
    day.addEventListener('click', () => {
        // Get the day's data attribute
        const dayName = day.getAttribute('data-day');
        const schedule = scheduleData[dayName];
        
        // Update the title
        dayTitle.textContent = day.textContent;
        
        // Create the content HTML
        let html = '<h4>Lektioner:</h4><ul>';
        schedule.lessons.forEach(lesson => {
            html += `<li>${lesson}</li>`;
        });
        html += '</ul>';
        
        if (schedule.notes) {
            html += `<h4>Noter:</h4><p>${schedule.notes}</p>`;
        }
        
        // Update the content
        detailsContent.innerHTML = html;
        
        // Remove active class from all days
        days.forEach(d => d.classList.remove('active'));
        // Add active class to clicked day
        day.classList.add('active');
    });
});