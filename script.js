const controlsDataUrl = 'data.json';

let controlsData = [];

fetch(controlsDataUrl)
    .then(response => response.json())
    .then(data => {
        controlsData = data;
    })
    .catch(error => console.error('Error loading data:', error));

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.trim().toUpperCase();
    const resultDiv = document.getElementById('result');
    const results = controlsData.filter(control => control.subcategory.includes(query));

    if (results.length === 0) {
        resultDiv.textContent = `No matches found for ${query}.`;
    } else {
        resultDiv.innerHTML = results.map(result => `
            <div>
                <h2>${result.subcategory}</h2>
                <p><strong>Metaphor:</strong> ${result.metaphor}</p>
                <p><strong>Translation:</strong> ${result.translation}</p>
            </div>
        `).join('');
    }
});
