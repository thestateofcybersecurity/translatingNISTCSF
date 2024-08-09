let controlsData = {};

// Load controls data from data.json
async function loadControlsData() {
    try {
        console.log('Fetching controls data...');
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        controlsData = await response.json();
        console.log('Controls data loaded:', controlsData);
        displaySoupOfTheDay();
    } catch (error) {
        console.error('Error loading controls data:', error);
    }
}

// Sanitize user input to prevent XSS
function sanitizeHTML(str) {
    var temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

// Get metaphor and translation of the entered control
async function getMetaphorTranslation() {
    const control = sanitizeHTML(document.getElementById('searchInput').value.trim().toUpperCase());
    if (!control || !isValidInput(control)) {
        return;
    }
    const results = findMatchingControls(control);
    displayResults(control, results);
}

// Validate input to allow only alphanumeric characters, spaces, and hyphens
function isValidInput(input) {
    const regex = /^[a-zA-Z0-9\s\-]+$/;
    return regex.test(input);
}

// Find matching controls
function findMatchingControls(query) {
    const results = [];
    for (const control of controlsData) {
        if (control.subcategory.includes(query)) {
            results.push(control);
        }
    }
    return results;
}

// Display search results
function displayResults(query, results) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = ''; // Clear any previous results

    if (results.length === 0) {
        const noMatch = document.createElement('p');
        noMatch.textContent = `No matches found for ${query}.`;
        resultDiv.appendChild(noMatch);
        return;
    }

    results.forEach(result => {
        const resultContainer = document.createElement('div');

        const controlElement = document.createElement('h2');
        controlElement.textContent = result.subcategory;
        resultContainer.appendChild(controlElement);

        const metaphorElement = document.createElement('p');
        metaphorElement.innerHTML = `<strong>Metaphor:</strong> ${result.metaphor}`;
        resultContainer.appendChild(metaphorElement);

        const translationElement = document.createElement('p');
        translationElement.innerHTML = `<strong>Translation:</strong> ${result.translation}`;
        resultContainer.appendChild(translationElement);

        resultDiv.appendChild(resultContainer);
    });
}

// Trigger search on Enter key press
function checkEnter(event) {
    if (event.key === 'Enter') {
        getMetaphorTranslation();
    }
}

document.getElementById('searchButton').addEventListener('click', getMetaphorTranslation);

// Display Soup of the Day
function displaySoupOfTheDay() {
    const today = new Date().toISOString().slice(0, 10);
    let soupOfTheDay = JSON.parse(localStorage.getItem('soupOfTheDay'));

    if (!soupOfTheDay || soupOfTheDay.date !== today) {
        const controls = controlsData;
        const randomControl = controls[Math.floor(Math.random() * controls.length)];
        soupOfTheDay = {
            date: today,
            subcategory: randomControl.subcategory,
            metaphor: randomControl.metaphor,
            translation: randomControl.translation
        };
        localStorage.setItem('soupOfTheDay', JSON.stringify(soupOfTheDay));
    }

    const soupAcronym = document.getElementById('soupAcronym');
    
    // Clear any previous content
    soupAcronym.textContent = '';

    // Create the elements safely
    const strongElement = document.createElement('strong');
    strongElement.textContent = soupOfTheDay.subcategory;
    soupAcronym.appendChild(strongElement);

    const textNode = document.createTextNode(`: ${soupOfTheDay.metaphor}`);
    soupAcronym.appendChild(textNode);
}

// Load the controls data when the page loads
window.onload = loadControlsData;
