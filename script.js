document.addEventListener('DOMContentLoaded', () => {
    const controlsContainer = document.getElementById('controlsContainer');
    const searchInput = document.getElementById('searchInput');

    function displayControls(controls) {
        controlsContainer.innerHTML = '';
        controls.forEach(control => {
            const controlDiv = document.createElement('div');
            controlDiv.className = 'control';
            controlDiv.innerHTML = `
                <div class="control-title">${control.id}: ${control.title}</div>
                <div>${control.metaphor}</div>
            `;
            controlsContainer.appendChild(controlDiv);
        });
    }

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredControls = controls.filter(control => 
            control.id.toLowerCase().includes(searchTerm) ||
            control.title.toLowerCase().includes(searchTerm) ||
            control.metaphor.toLowerCase().includes(searchTerm)
        );
        displayControls(filteredControls);
    });

    displayControls(controls);
});
