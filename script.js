// Embed the JSON data directly into the script
const controlsData = [
    {
        "subcategory": "ID.AM-03",
        "metaphor": "Drawing a map of your home’s plumbing and electrical systems.",
        "translation": "The family has a map that shows where all the pipes and wires run in their home, so they know how everything is connected and can troubleshoot problems if they arise."
    },
    {
        "subcategory": "ID.AM-04",
        "metaphor": "Listing all the service providers you rely on, like the plumber, electrician, and gardener.",
        "translation": "The family keeps a list of all the service providers they use, so they know who to call when they need help with something in the house."
    },
    {
        "subcategory": "ID.AM-05",
        "metaphor": "Prioritizing which home repairs to tackle first based on their importance.",
        "translation": "The family decides which repairs to address first, like fixing a leaking roof before painting a room, based on what’s most critical to the home’s safety and functionality."
    },
    {
        "subcategory": "ID.AM-07",
        "metaphor": "Cataloging all your family photos and important documents.",
        "translation": "The family keeps track of where all their important documents and photos are stored, so they can easily find them when needed."
    },
    {
        "subcategory": "ID.AM-08",
        "metaphor": "Regularly servicing your car and replacing it when it gets too old.",
        "translation": "The family ensures that all their appliances, cars, and other important items are maintained and replaced when they are no longer reliable."
    },
    {
        "subcategory": "ID.RA-01",
        "metaphor": "Checking your home for any potential safety hazards.",
        "translation": "The family regularly inspects the house for any issues, like loose floorboards or faulty wiring, and keeps a record of what needs to be fixed."
    },
    {
        "subcategory": "ID.RA-02",
        "metaphor": "Staying updated on local crime reports to protect your home.",
        "translation": "The family keeps up with news about crime in the neighborhood to know if they need to take extra precautions to protect their home."
    },
    {
        "subcategory": "ID.RA-03",
        "metaphor": "Noticing potential dangers inside and outside your home, like a slippery floor or a neighbor’s aggressive dog.",
        "translation": "The family identifies and keeps track of any risks, both inside the house and in the surrounding area, to ensure everyone stays safe."
    },
    {
        "subcategory": "ID.RA-04",
        "metaphor": "Evaluating the risk of a fire starting from a frayed electrical cord.",
        "translation": "The family assesses how likely it is that something bad will happen, like a fire from faulty wiring, and how serious the consequences would be."
    },
    {
        "subcategory": "ID.RA-05",
        "metaphor": "Deciding to fix a broken lock immediately because it could lead to a break-in.",
        "translation": "The family prioritizes which issues to address based on how likely and severe the risks are, ensuring they tackle the most critical problems first."
    },
    {
        "subcategory": "ID.RA-06",
        "metaphor": "Creating a plan to address all the repairs needed in the house and keeping track of progress.",
        "translation": "The family decides how to handle different risks, makes a plan to address them, and communicates who will take care of each task."
    },
    {
        "subcategory": "ID.RA-07",
        "metaphor": "Noting any changes in the house, like new furniture, and making sure it doesn’t create new risks.",
        "translation": "The family keeps track of any changes in the home, like adding new furniture, and assesses if it introduces any new safety concerns."
    },
    {
        "subcategory": "ID.RA-08",
        "metaphor": "Setting up a system for neighbors to alert you if they see something wrong with your house.",
        "translation": "The family has a way to receive information about potential issues, like a neighbor noticing a broken window, and knows how to respond to those warnings."
    },
    {
        "subcategory": "ID.RA-09",
        "metaphor": "Researching a product before buying it to ensure it’s high quality and safe.",
        "translation": "The family checks reviews and verifies the quality of a product before purchasing it to make sure it’s reliable and safe to use in the home."
    },
    {
        "subcategory": "ID.RA-10",
        "metaphor": "Checking the credentials of a contractor before hiring them to work on your home.",
        "translation": "The family ensures that anyone they hire for important work, like a contractor for home renovations, is trustworthy and capable."
    },
    {
        "subcategory": "ID.IM-01",
        "metaphor": "After a family meeting, deciding on ways to make the home safer.",
        "translation": "The family regularly evaluates how well things are going at home and makes decisions on how to improve safety and efficiency."
    },
    {
        "subcategory": "ID.IM-02",
        "metaphor": "Conducting a fire drill with the family and making adjustments based on the results.",
        "translation": "The family practices emergency procedures and makes improvements based on how well they perform during the drill."
    },
    {
        "subcategory": "ID.IM-03",
        "metaphor": "Noticing that the new way of organizing the kitchen is more efficient and deciding to keep it that way.",
        "translation": "The family identifies improvements based on how well things are working in the home and makes adjustments to keep things running smoothly."
    },
    {
        "subcategory": "ID.IM-04",
        "metaphor": "Creating, sharing, and updating an emergency plan for the family.",
        "translation": "The family establishes and regularly updates a plan for emergencies, making sure everyone knows what to do if something goes wrong."
    },
    {
        "subcategory": "PR.AA-01",
        "metaphor": "Keeping track of who has keys to your home.",
        "translation": "The family manages and tracks who has keys to the house, ensuring that only trusted people can enter."
    },
    {
        "subcategory": "PR.AA-02",
        "metaphor": "Verifying someone’s identity before giving them a spare key.",
        "translation": "Before giving someone a spare key, the family confirms their identity, making sure they’re trustworthy."
    },
    {
        "subcategory": "PR.AA-03",
        "metaphor": "Checking ID before letting someone into your home.",
        "translation": "The family always verifies that someone is who they say they are before allowing them into the house."
    },
    {
        "subcategory": "PR.AA-04",
        "metaphor": "Making sure a person’s ID is secure and verified when they enter your home.",
        "translation": "The family ensures that any identification used to enter the home is securely handled and verified each time."
    },
    {
        "subcategory": "PR.AA-05",
        "metaphor": "Setting house rules for who can access different parts of the home.",
        "translation": "The family sets rules about who is allowed in certain areas of the house, ensuring that access is limited to those who need it."
    },
    {
        "subcategory": "PR.AA-06",
        "metaphor": "Locking and monitoring access to valuable items in the home.",
        "translation": "The family locks up valuable items and keeps an eye on who accesses them to prevent theft or damage."
    },
    {
        "subcategory": "PR.AT-01",
        "metaphor": "Teaching everyone in the family how to safely use the stove.",
        "translation": "The family makes sure everyone knows how to safely perform basic tasks in the home, like using the stove, to prevent accidents."
    },
    {
        "subcategory": "PR.AT-02",
        "metaphor": "Training one family member to handle emergency repairs.",
        "translation": "The family ensures that the person responsible for emergency repairs knows exactly what to do, so they can respond quickly and effectively."
    },
    {
        "subcategory": "PR.DS-01",
        "metaphor": "Keeping important documents locked in a safe.",
        "translation": "The family stores important documents, like birth certificates, in a safe to protect them from damage or theft."
    },
    {
        "subcategory": "PR.DS-02",
        "metaphor": "Ensuring that your mail is secure while being delivered.",
        "translation": "The family makes sure that any important letters or packages sent through the mail are secure and won’t be tampered with."
    },
    {
        "subcategory": "PR.DS-10",
        "metaphor": "Keeping your personal information safe while you’re working on your computer.",
        "translation": "The family ensures that personal information is protected while they are using it, like when typing passwords or accessing bank accounts online."
    },
    {
        "subcategory": "PR.DS-11",
        "metaphor": "Making copies of important documents and storing them in a safe place.",
        "translation": "The family keeps backups of important documents, like wills and insurance papers, in case the originals are lost or damaged."
    },
    {
        "subcategory": "PR.PS-01",
        "metaphor": "Keeping the settings on your home security system up to date.",
        "translation": "The family ensures that the home security system is properly configured and updated to keep the house safe."
    },
    {
        "subcategory": "PR.PS-02",
        "metaphor": "Updating or removing old apps on your family’s devices.",
        "translation": "The family regularly updates the software on their devices and removes any that are no longer needed or could be a security risk."
    },
    {
        "subcategory": "PR.PS-03",
        "metaphor": "Replacing old appliances when they start to become a safety hazard.",
        "translation": "The family replaces old or faulty appliances, like a malfunctioning microwave, to prevent potential hazards."
    },
    {
        "subcategory": "PR.PS-04",
        "metaphor": "Keeping a diary of daily activities and checking it regularly.",
        "translation": "The family keeps track of important activities, like who enters the house, and regularly reviews the records to ensure everything is in order."
    },
    {
        "subcategory": "PR.PS-05",
        "metaphor": "Making sure no one installs unapproved apps on the family computer.",
        "translation": "The family ensures that only approved software is installed on their devices to prevent security risks."
    },
    {
        "subcategory": "PR.PS-06",
        "metaphor": "Building a treehouse and making sure it’s safe for the kids to play in at every stage of construction.",
        "translation": "The family follows best practices when building something new, like a treehouse, and checks at each stage to ensure it’s safe."
    },
    {
        "subcategory": "PR.IR-01",
        "metaphor": "Setting up a home Wi-Fi password and only sharing it with family members.",
        "translation": "The family ensures that their Wi-Fi network is secure by using a strong password and only allowing trusted people to access it."
    },
    {
        "subcategory": "PR.IR-02",
        "metaphor": "Installing surge protectors to protect your electronics during a storm.",
        "translation": "The family protects their electronics from damage by using surge protectors during storms."
    },
    {
        "subcategory": "PR.IR-03",
        "metaphor": "Having a generator ready in case of a power outage.",
        "translation": "The family prepares for emergencies by having a backup power source, like a generator, to keep things running if the electricity goes out."
    },
    {
        "subcategory": "PR.IR-04",
        "metaphor": "Keeping enough supplies on hand to last through a storm.",
        "translation": "The family makes sure they have enough food, water, and other essentials to last through a storm or other emergency."
    },
    {
        "subcategory": "DE.CM-01",
        "metaphor": "Watching security cameras to spot any intruders.",
        "translation": "The family keeps an eye on security cameras to catch any suspicious activity around the house."
    },
    {
        "subcategory": "DE.CM-02",
        "metaphor": "Checking for unusual sounds or smells in the house.",
        "translation": "The family pays attention to any unusual sounds or smells in the house that could indicate a problem, like a gas leak or an intruder."
    },
    {
        "subcategory": "DE.CM-03",
        "metaphor": "Keeping track of who is using the computer and what they are doing.",
        "translation": "The family monitors computer usage to make sure no one is doing anything risky, like visiting dangerous websites."
    },
    {
        "subcategory": "DE.CM-06",
        "metaphor": "Keeping an eye on the work done by contractors or service providers in your home.",
        "translation": "The family monitors the work done by external service providers, like plumbers or electricians, to ensure everything is done safely and correctly."
    },
    {
        "subcategory": "DE.CM-09",
        "metaphor": "Regularly checking your home computer for viruses or malware.",
        "translation": "The family monitors their computers and devices to make sure they are not infected with viruses or malware."
    },
    {
        "subcategory": "DE.AE-02",
        "metaphor": "Investigating a strange noise in the middle of the night to figure out what caused it.",
        "translation": "The family investigates any strange occurrences in the house, like noises at night, to understand what happened and whether it’s a threat."
    },
    {
        "subcategory": "DE.AE-03",
        "metaphor": "Gathering information from different family members to get a complete picture of what happened.",
        "translation": "The family collects input from everyone to piece together what’s going on, like if multiple people heard the same strange noise."
    },
    {
        "subcategory": "DE.AE-04",
        "metaphor": "Assessing how much damage a storm has caused to your home.",
        "translation": "The family evaluates the extent of damage after a storm to understand how bad the situation is and what needs to be fixed."
    },
    {
        "subcategory": "DE.AE-06",
        "metaphor": "Sharing details about a home repair issue with the contractor.",
        "translation": "The family communicates important details about a problem, like a leak, to the person who will fix it."
    },
    {
        "subcategory": "DE.AE-07",
        "metaphor": "Using local news reports to understand why there have been more break-ins recently.",
        "translation": "The family uses information from the news or other sources to understand broader issues that might affect their safety."
    },
    {
        "subcategory": "DE.AE-08",
        "metaphor": "Deciding to call the police when you hear a window break.",
        "translation": "The family declares an emergency, like calling the police, when a situation meets their criteria for a serious threat."
    },
    {
        "subcategory": "RS.MA-01",
        "metaphor": "Calling the fire department when the smoke alarm goes off.",
        "translation": "The family follows their emergency plan and contacts the necessary professionals, like the fire department, when a problem arises."
    },
    {
        "subcategory": "RS.MA-02",
        "metaphor": "Determining whether a reported problem, like a suspected gas leak, is real or a false alarm.",
        "translation": "The family checks whether a reported issue is actually a problem, like smelling for gas to confirm a leak."
    },
    {
        "subcategory": "RS.MA-03",
        "metaphor": "Deciding whether a problem, like a broken window or a clogged drain, needs immediate attention or can wait.",
        "translation": "The family ranks issues by importance, like fixing a broken window immediately while a clogged drain might wait until morning."
    },
    {
        "subcategory": "RS.MA-04",
        "metaphor": "Calling in a professional if a DIY repair turns out to be too difficult.",
        "translation": "The family decides when to bring in professional help, like calling a plumber if a home repair is beyond their skills."
    },
    {
        "subcategory": "RS.MA-05",
        "metaphor": "Starting the cleanup after a storm once it’s safe.",
        "translation": "The family begins repairs or recovery, like cleaning up after a storm, once they determine it’s safe to do so."
    },
    {
        "subcategory": "RS.AN-03",
        "metaphor": "Figuring out why the power went out by checking the breaker and talking to neighbors.",
        "translation": "The family investigates to understand what caused a problem, like why the power went out, so they can fix it."
    },
    {
        "subcategory": "RS.AN-06",
        "metaphor": "Keeping notes of what you checked and did when trying to fix a home issue.",
        "translation": "The family keeps a record of what steps they took when investigating a problem, like writing down what they checked when the power went out."
    },
    {
        "subcategory": "RS.AN-07",
        "metaphor": "Documenting the damage after a storm to report to insurance.",
        "translation": "The family collects and keeps accurate records of what happened during an incident, like taking photos of storm damage for insurance."
    },
    {
        "subcategory": "RS.AN-08",
        "metaphor": "Assessing how much damage a burst pipe has caused.",
        "translation": "The family evaluates how serious a problem is, like determining the extent of water damage from a burst pipe."
    },
    {
        "subcategory": "RS.CO-02",
        "metaphor": "Calling the neighbors to warn them about a fire in your house.",
        "translation": "The family alerts anyone who needs to know about an emergency, like calling the neighbors during a fire."
    },
    {
        "subcategory": "RS.CO-03",
        "metaphor": "Sharing information about a security issue with your home insurance company.",
        "translation": "The family provides necessary information to those who need it, like telling the insurance company about a break-in."
    },
    {
        "subcategory": "RS.MI-01",
        "metaphor": "Closing a door to keep smoke from spreading during a fire.",
        "translation": "The family takes steps to stop a problem from getting worse, like closing a door to contain smoke during a fire."
    },
    {
        "subcategory": "RS.MI-02",
        "metaphor": "Putting out a fire in the kitchen.",
        "translation": "The family completely resolves the problem, like putting out a fire to ensure it doesn’t spread."
    },
    {
        "subcategory": "RC.RP-01",
        "metaphor": "Starting repairs after the fire is out.",
        "translation": "The family begins fixing the damage, like starting home repairs after a fire has been extinguished."
    },
    {
        "subcategory": "RC.RP-02",
        "metaphor": "Deciding which repairs to do first after a storm.",
        "translation": "The family prioritizes and begins the necessary repairs, like deciding to fix the roof before repainting after a storm."
    },
    {
        "subcategory": "RC.RP-03",
        "metaphor": "Checking that your emergency supplies are still good before using them.",
        "translation": "The family checks that backup supplies or resources are still usable before relying on them, like making sure stored water is safe to drink."
    },
    {
        "subcategory": "RC.RP-04",
        "metaphor": "Adjusting your home safety plan after an emergency to prevent future problems.",
        "translation": "The family updates their safety routines after an emergency to ensure they are better prepared for the future."
    },
    {
        "subcategory": "RC.RP-05",
        "metaphor": "Making sure everything works properly after repairs are completed.",
        "translation": "The family checks that all repairs were done correctly and that the home is safe and functional again."
    },
    {
        "subcategory": "RC.RP-06",
        "metaphor": "Declaring the home safe to live in again after renovations.",
        "translation": "The family officially considers the home restored after ensuring everything is back to normal and documenting the process."
    },
    {
        "subcategory": "RC.CO-03",
        "metaphor": "Updating family members and contractors on the progress of home repairs.",
        "translation": "The family keeps everyone informed about the status of repairs, like updating each other and any contractors involved."
    },
    {
        "subcategory": "RC.CO-04",
        "metaphor": "Posting a sign outside your house to inform neighbors that repairs are ongoing.",
        "translation": "The family shares updates with the public, like letting the neighbors know that the house is under repair, using clear and approved communication methods."
    }
];

// Sanitize user input to prevent XSS
function sanitizeHTML(str) {
    var temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

// Get metaphor and translation of the entered control
function getMetaphorTranslation() {
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

// Find matching controls with relaxed criteria for non-exact matches
function findMatchingControls(query) {
    const results = [];
    const lowerCaseQuery = query.toLowerCase();
    
    for (const control of controlsData) {
        const subcategoryLower = control.subcategory.toLowerCase();
        const metaphorLower = control.metaphor.toLowerCase();
        const translationLower = control.translation.toLowerCase();
        
        if (
            subcategoryLower.includes(lowerCaseQuery) ||
            metaphorLower.includes(lowerCaseQuery) ||
            translationLower.includes(lowerCaseQuery)
        ) {
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

// Display all controls
function displayAllControls() {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = ''; // Clear any previous results

    controlsData.forEach(result => {
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

// Event listeners for search and displaying all controls
document.getElementById('searchInput').addEventListener('keypress', checkEnter);
document.getElementById('searchButton').addEventListener('click', getMetaphorTranslation);
document.getElementById('allControlsButton').addEventListener('click', displayAllControls);

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
window.onload = displaySoupOfTheDay;
