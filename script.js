document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('results');

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            searchInput.addEventListener('input', () => {
                const query = searchInput.value.toLowerCase();
                const filteredResults = data.filter(item => 
                    item.subcategory.toLowerCase().includes(query)
                );

                displayResults(filteredResults);
            });

            const displayResults = (results) => {
                resultsContainer.innerHTML = '';
                results.forEach(item => {
                    const resultDiv = document.createElement('div');
                    resultDiv.classList.add('result-item');
                    resultDiv.innerHTML = `
                        <h2>${item.subcategory}</h2>
                        <p><strong>Metaphor:</strong> ${item.metaphor}</p>
                        <p><strong>Translation:</strong> ${item.translation}</p>
                    `;
                    resultsContainer.appendChild(resultDiv);
                });
            };
        })
        .catch(error => console.error('Error loading data:', error));
});
