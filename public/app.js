document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/data');
        const data = await response.json();
        const dataContainer = document.getElementById('data-container');

        data.forEach(item => {
            const card = document.createElement.Element('div');
            card.className = 'card mt-3';
            card.innerHtml = `
              <div class="card-body">
               <h5 class="card-title">${item.title}</h5>
               <p class="card-text">${item.body}</p>
              </div>
            `;
            dataContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});