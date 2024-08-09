// Embed the JSON data directly into the script
const controlsData = [
    {
        "subcategory": "GV.OC-01: The organizational mission is understood and informs cybersecurity risk management.",
        "metaphor": "Understanding the purpose of your family and using it to guide decisions.",
        "translation": "The family knows what’s important to them and uses that to decide how they should handle risks and challenges."
    },
    {
        "subcategory": "GV.OC-02: Internal and external stakeholders are understood, and their needs and expectations regarding cybersecurity risk management are understood and considered.",
        "metaphor": "Considering the needs of everyone in the household when making safety plans.",
        "translation": "The family understands what each member needs to feel safe and considers these needs when making decisions."
    },
    {
        "subcategory": "GV.OC-03: Legal, regulatory, and contractual requirements regarding cybersecurity - including privacy and civil liberties obligations - are understood and managed.",
        "metaphor": "Keeping track of legal requirements, like having a smoke detector in the house.",
        "translation": "The family ensures they are following all the necessary rules and regulations to stay safe and compliant."
    },
    {
        "subcategory": "GV.OC-04: Critical objectives, capabilities, and services that external stakeholders depend on or expect from the organization are understood and communicated.",
        "metaphor": "Making sure that the house’s main functions, like electricity and water, are reliable and well-maintained.",
        "translation": "The family ensures that critical systems and services are dependable and meet the expectations of everyone living in the house."
    },
    {
        "subcategory": "GV.OC-05: Outcomes, capabilities, and services that the organization depends on are understood and communicated.",
        "metaphor": "Understanding which household services and functions are essential for everyday living.",
        "translation": "The family knows what services and systems they rely on most and ensures they are properly maintained and functioning."
    },
    {
        "subcategory": "GV.RM-01: Risk management objectives are established and agreed to by organizational stakeholders.",
        "metaphor": "Setting household budgets based on family priorities.",
        "translation": "The family decides what’s most important to spend money on, ensuring that the budget aligns with these goals."
    },
    {
        "subcategory": "GV.RM-02: Risk appetite and risk tolerance statements are established, communicated, and maintained.",
        "metaphor": "Agreeing on household rules for safety.",
        "translation": "The family agrees on how much risk they are willing to take, like when children can play outside alone, and everyone follows these rules."
    },
    {
        "subcategory": "GV.RM-03: Cybersecurity risk management activities and outcomes are included in enterprise risk management processes.",
        "metaphor": "Planning home renovations to match long-term family plans.",
        "translation": "Any updates to the house, like adding an extra room, align with the family’s future plans, such as growing the family or hosting more visitors."
    },
    {
        "subcategory": "GV.RM-04: Strategic direction that describes appropriate risk response options is established and communicated.",
        "metaphor": "Setting boundaries for safe areas in the home.",
        "translation": "The family defines and communicates where it’s safe to play or work, like keeping certain tools in the garage and not in the living room."
    },
    {
        "subcategory": "GV.RM-05: Lines of communication across the organization are established for cybersecurity risks, including risks from suppliers and other third parties.",
        "metaphor": "Setting up a family chat group for emergencies.",
        "translation": "The family knows how to quickly and effectively communicate with each other if something goes wrong, like using a group chat to stay in touch during a storm."
    },
    {
        "subcategory": "GV.RM-06: A standardized method for calculating, documenting, categorizing, and prioritizing cybersecurity risks is established and communicated.",
        "metaphor": "Using a checklist for home safety inspections.",
        "translation": "The family regularly checks off items on a list to ensure the home remains safe, using the same list every time to make sure nothing is missed."
    },
    {
        "subcategory": "GV.RM-07: Strategic opportunities (i.e., positive risks) are characterized and are included in organizational cybersecurity risk discussions.",
        "metaphor": "Deciding whether to invest in home improvements.",
        "translation": "The family weighs the benefits of making improvements to the house, like adding solar panels, to decide if the potential benefits are worth the cost."
    },
    {
        "subcategory": "GV.RR-01: Organizational leadership is responsible and accountable for cybersecurity risk and fosters a culture that is risk-aware, ethical, and continually improving.",
        "metaphor": "Parents ensuring safety rules are followed at home.",
        "translation": "The parents ensure that everyone in the house follows the safety rules, integrating these into everyday routines."
    },
    {
        "subcategory": "GV.RR-02: Roles, responsibilities, and authorities related to cybersecurity risk management are established, communicated, understood, and enforced.",
        "metaphor": "Assigning chores and responsibilities at home.",
        "translation": "Everyone in the family knows what chores they are responsible for, and who to go to if they need help."
    },
    {
        "subcategory": "GV.RR-03: Adequate resources are allocated commensurate with the cybersecurity risk strategy, roles, responsibilities, and policies.",
        "metaphor": "Setting aside money to buy safety tools like smoke detectors.",
        "translation": "The family allocates resources to make sure they can afford important safety tools and services."
    },
    {
        "subcategory": "GV.RR-04: Cybersecurity is included in human resources practices.",
        "metaphor": "Including safety guidelines in the household rules.",
        "translation": "The family integrates safety practices into their everyday activities, ensuring everyone knows what to do to stay safe."
    },
    {
        "subcategory": "GV.PO-01: Policy for managing cybersecurity risks is established based on organizational context, cybersecurity strategy, and priorities and is communicated and enforced.",
        "metaphor": "Setting house rules for safety.",
        "translation": "The family establishes and communicates safety rules, like locking doors at night, that everyone agrees to follow."
    },
    {
        "subcategory": "GV.PO-02: Policy for managing cybersecurity risks is reviewed, updated, communicated, and enforced to reflect changes in requirements, threats, technology, and organizational mission.",
        "metaphor": "Updating house rules as the family grows.",
        "translation": "The family reviews and updates the house safety rules as new situations arise, like when a baby starts crawling, to keep everyone safe."
    },
    {
        "subcategory": "GV.OV-01: Cybersecurity risk management strategy outcomes are reviewed to inform and adjust strategy and direction.",
        "metaphor": "Reviewing the effectiveness of your home security system.",
        "translation": "The family regularly checks if the security measures they put in place are working and makes adjustments if necessary."
    },
    {
        "subcategory": "GV.OV-02: The cybersecurity risk management strategy is reviewed and adjusted to ensure coverage of organizational requirements and risks.",
        "metaphor": "Adjusting your home security plan based on new threats.",
        "translation": "The family updates their security plan, like installing new locks after a neighbor’s break-in, to address any new risks."
    },
    {
        "subcategory": "GV.OV-03: Organizational cybersecurity risk management performance is evaluated and reviewed for adjustments needed.",
        "metaphor": "Checking if your home safety rules are being followed.",
        "translation": "The family periodically reviews how well everyone is following the safety rules and makes changes if they see issues."
    },
    {
        "subcategory": "GV.SC-01: A cybersecurity supply chain risk management program, strategy, objectives, policies, and processes are established and agreed to by organizational stakeholders.",
        "metaphor": "Setting up a list of trusted service providers for home repairs.",
        "translation": "The family agrees on which service providers to trust for repairs and maintenance to ensure the home is well taken care of."
    },
    {
        "subcategory": "GV.SC-02: Cybersecurity roles and responsibilities for suppliers, customers, and partners are established, communicated, and coordinated internally and externally.",
        "metaphor": "Assigning chores and responsibilities for home upkeep.",
        "translation": "The family clearly defines who is responsible for different tasks, like mowing the lawn or cleaning the gutters, and communicates this to everyone involved."
    },
    {
        "subcategory": "GV.SC-03: Cybersecurity supply chain risk management is integrated into cybersecurity and enterprise risk management, risk assessment, and improvement processes.",
        "metaphor": "Including service provider reviews in your regular home maintenance checks.",
        "translation": "The family makes sure that checking on the reliability of service providers is part of their regular home maintenance routine."
    },
{
        "subcategory": "GV.SC-05: Requirements to address cybersecurity risks in supply chains are established, prioritized, and integrated into contracts and other types of agreements with suppliers and other relevant third parties.",
        "metaphor": "Setting expectations with a contractor before starting home renovations.",
        "translation": "The family agrees on what they expect from a contractor before work begins, like making sure they follow safety protocols."
    },
    {
        "subcategory": "GV.SC-06: Planning and due diligence are performed to reduce risks before entering into formal supplier or other third-party relationships.",
        "metaphor": "Researching a contractor before hiring them.",
        "translation": "The family checks references and reviews before hiring someone to work on the house, ensuring they’re trustworthy."
    },
    {
        "subcategory": "GV.SC-07: The risks posed by a supplier, their products and services, and other third parties are understood, recorded, prioritized, assessed, responded to, and monitored over the course of the relationship.",
        "metaphor": "Keeping track of how well a contractor performs during a home renovation.",
        "translation": "The family monitors the contractor’s work and addresses any issues that come up, making sure everything is done to their standards."
    },
    {
        "subcategory": "GV.SC-08: Relevant suppliers and other third parties are included in incident planning, response, and recovery activities.",
        "metaphor": "Having a repair crew on standby during a big home project.",
        "translation": "The family coordinates with service providers so they’re ready to help quickly if something goes wrong during a major renovation."
    },
    {
        "subcategory": "GV.SC-09: Supply chain security practices are integrated into cybersecurity and enterprise risk management programs, and their performance is monitored throughout the technology product and service life cycle.",
        "metaphor": "Regularly checking on the quality of materials used in home repairs.",
        "translation": "The family ensures that the materials and products used in the house meet their standards and perform well over time."
    },
    {
        "subcategory": "GV.SC-10: Cybersecurity supply chain risk management plans include provisions for activities that occur after the conclusion of a partnership or service agreement.",
        "metaphor": "Reviewing a contractor’s work even after the job is done.",
        "translation": "The family makes sure that everything is still in good condition and that there are no issues, even after the contractor has finished their work."
    },
    {
        "subcategory": "ID.AM-01: Inventories of hardware managed by the organization are maintained.",
        "metaphor": "Keeping a list of all your household appliances.",
        "translation": "The family keeps an up-to-date list of all the appliances they own, like the refrigerator, washing machine, and microwave, so they know what they have and can maintain them properly."
    },
    {
        "subcategory": "ID.AM-02: Inventories of software, services, and systems managed by the organization are maintained.",
        "metaphor": "Tracking all the apps and subscriptions your family uses.",
        "translation": "The family maintains a list of all the apps and services they use, like streaming services and home security systems, to keep track of their subscriptions and ensure everything is functioning as expected."
    },
    {
        "subcategory": "ID.AM-03: Representations of the organization's authorized network communication and internal and external network data flows are maintained.",
        "metaphor": "Drawing a map of your home’s plumbing and electrical systems.",
        "translation": "The family has a map that shows where all the pipes and wires run in their home, so they know how everything is connected and can troubleshoot problems if they arise."
    },
    {
        "subcategory": "ID.AM-04: Inventories of services provided by suppliers are maintained.",
        "metaphor": "Listing all the service providers you rely on, like the plumber, electrician, and gardener.",
        "translation": "The family keeps a list of all the service providers they use, so they know who to call when they need help with something in the house."
    },
    {
        "subcategory": "ID.AM-05: Assets are prioritized based on classification, criticality, resources, and impact on the mission.",
        "metaphor": "Prioritizing which home repairs to tackle first based on their importance.",
        "translation": "The family decides which repairs to address first, like fixing a leaking roof before painting a room, based on what’s most critical to the home’s safety and functionality."
    },
    {
        "subcategory": "ID.AM-07: Inventories of data and corresponding metadata for designated data types are maintained.",
        "metaphor": "Cataloging all your family photos and important documents.",
        "translation": "The family keeps track of where all their important documents and photos are stored, so they can easily find them when needed."
    },
    {
        "subcategory": "ID.AM-08: Systems, hardware, software, services, and data are managed throughout their life cycles.",
        "metaphor": "Regularly servicing your car and replacing it when it gets too old.",
        "translation": "The family ensures that all their appliances, cars, and other important items are maintained and replaced when they are no longer reliable."
    },
     {
        "subcategory": "ID.RA-01: Vulnerabilities in assets are identified, validated, and recorded.",
        "metaphor": "Checking your home for any potential safety hazards.",
        "translation": "The family regularly inspects the house for any issues, like loose floorboards or faulty wiring, and keeps a record of what needs to be fixed."
    },
    {
        "subcategory": "ID.RA-02: Cyber threat intelligence is received from information sharing forums and sources.",
        "metaphor": "Staying updated on local crime reports to protect your home.",
        "translation": "The family keeps up with news about crime in the neighborhood to know if they need to take extra precautions to protect their home."
    },
    {
        "subcategory": "ID.RA-03: Internal and external threats to the organization are identified and recorded.",
        "metaphor": "Noticing potential dangers inside and outside your home, like a slippery floor or a neighbor’s aggressive dog.",
        "translation": "The family identifies and keeps track of any risks, both inside the house and in the surrounding area, to ensure everyone stays safe."
    },
    {
        "subcategory": "ID.RA-04: Potential impacts and likelihoods of threats exploiting vulnerabilities are identified and recorded.",
        "metaphor": "Evaluating the risk of a fire starting from a frayed electrical cord.",
        "translation": "The family assesses how likely it is that something bad will happen, like a fire from faulty wiring, and how serious the consequences would be."
    },
    {
        "subcategory": "ID.RA-05: Threats, vulnerabilities, likelihoods, and impacts are used to understand inherent risk and inform risk response prioritization.",
        "metaphor": "Deciding to fix a broken lock immediately because it could lead to a break-in.",
        "translation": "The family prioritizes which issues to address based on how likely and severe the risks are, ensuring they tackle the most critical problems first."
    },
    {
        "subcategory": "ID.RA-06: Risk responses are chosen, prioritized, planned, tracked, and communicated.",
        "metaphor": "Creating a plan to address all the repairs needed in the house and keeping track of progress.",
        "translation": "The family decides how to handle different risks, makes a plan to address them, and communicates who will take care of each task."
    },
    {
        "subcategory": "ID.RA-07: Changes and exceptions are managed, assessed for risk impact, recorded, and tracked.",
        "metaphor": "Noting any changes in the house, like new furniture, and making sure it doesn’t create new risks.",
        "translation": "The family keeps track of any changes in the home, like adding new furniture, and assesses if it introduces any new safety concerns."
    },
    {
        "subcategory": "ID.RA-08: Processes for receiving, analyzing, and responding to vulnerability disclosures are established.",
        "metaphor": "Setting up a system for neighbors to alert you if they see something wrong with your house.",
        "translation": "The family has a way to receive information about potential issues, like a neighbor noticing a broken window, and knows how to respond to those warnings."
    },
    {
        "subcategory": "ID.RA-09: The authenticity and integrity of hardware and software are assessed prior to acquisition and use.",
        "metaphor": "Researching a product before buying it to ensure it’s high quality and safe.",
        "translation": "The family checks reviews and verifies the quality of a product before purchasing it to make sure it’s reliable and safe to use in the home."
    },
    {
        "subcategory": "ID.RA-10: Critical suppliers are assessed prior to acquisition.",
        "metaphor": "Checking the credentials of a contractor before hiring them to work on your home.",
        "translation": "The family ensures that anyone they hire for important work, like a contractor for home renovations, is trustworthy and capable."
    },
   {
        "subcategory": "ID.IM-01: Improvements are identified from evaluations.",
        "metaphor": "After a family meeting, deciding on ways to make the home safer.",
        "translation": "The family regularly evaluates how well things are going at home and makes decisions on how to improve safety and efficiency."
    },
    {
        "subcategory": "ID.IM-02: Improvements are identified from security tests and exercises, including those done in coordination with suppliers and relevant third parties.",
        "metaphor": "Conducting a fire drill with the family and making adjustments based on the results.",
        "translation": "The family practices emergency procedures and makes improvements based on how well they perform during the drill."
    },
    {
        "subcategory": "ID.IM-03: Improvements are identified from execution of operational processes, procedures, and activities.",
        "metaphor": "Noticing that the new way of organizing the kitchen is more efficient and deciding to keep it that way.",
        "translation": "The family identifies improvements based on how well things are working in the home and makes adjustments to keep things running smoothly."
    },
    {
        "subcategory": "ID.IM-04: Incident response plans and other cybersecurity plans that affect operations are established, communicated, maintained, and improved.",
        "metaphor": "Creating, sharing, and updating an emergency plan for the family.",
        "translation": "The family establishes and regularly updates a plan for emergencies, making sure everyone knows what to do if something goes wrong."
    },
    {
        "subcategory": "PR.AA-01: Identities and credentials for authorized users, services, and hardware are managed by the organization.",
        "metaphor": "Keeping track of who has keys to your home.",
        "translation": "The family manages and tracks who has keys to the house, ensuring that only trusted people can enter."
    },
    {
        "subcategory": "PR.AA-02: Identities are proofed and bound to credentials based on the context of interactions.",
        "metaphor": "Verifying someone’s identity before giving them a spare key.",
        "translation": "Before giving someone a spare key, the family confirms their identity, making sure they’re trustworthy."
    },
    {
        "subcategory": "PR.AA-03: Users, services, and hardware are authenticated.",
        "metaphor": "Checking ID before letting someone into your home.",
        "translation": "The family always verifies that someone is who they say they are before allowing them into the house."
    },
    {
        "subcategory": "PR.AA-04: Identity assertions are protected, conveyed, and verified.",
        "metaphor": "Making sure a person’s ID is secure and verified when they enter your home.",
        "translation": "The family ensures that any identification used to enter the home is securely handled and verified each time."
    },
    {
        "subcategory": "PR.AA-05: Access permissions, entitlements, and authorizations are defined in a policy, managed, enforced, and reviewed, and incorporate the principles of least privilege and separation of duties.",
        "metaphor": "Setting house rules for who can access different parts of the home.",
        "translation": "The family sets rules about who is allowed in certain areas of the house, ensuring that access is limited to those who need it."
    },
    {
        "subcategory": "PR.AA-06: Physical access to assets is managed, monitored, and enforced commensurate with risk.",
        "metaphor": "Locking and monitoring access to valuable items in the home.",
        "translation": "The family locks up valuable items and keeps an eye on who accesses them to prevent theft or damage."
    },
    {
        "subcategory": "PR.AT-01: Personnel are provided with awareness and training so that they possess the knowledge and skills to perform general tasks with cybersecurity risks in mind.",
        "metaphor": "Teaching everyone in the family how to safely use the stove.",
        "translation": "The family makes sure everyone knows how to safely perform basic tasks in the home, like using the stove, to prevent accidents."
    },
    {
        "subcategory": "PR.AT-02: Individuals in specialized roles are provided with awareness and training so that they possess the knowledge and skills to perform relevant tasks with cybersecurity risks in mind.",
        "metaphor": "Training one family member to handle emergency repairs.",
        "translation": "The family ensures that the person responsible for emergency repairs knows exactly what to do, so they can respond quickly and effectively."
    },
    {
        "subcategory": "PR.DS-01: The confidentiality, integrity, and availability of data-at-rest are protected.",
        "metaphor": "Keeping important documents locked in a safe.",
        "translation": "The family stores important documents, like birth certificates, in a safe to protect them from damage or theft."
    },
    {
        "subcategory": "PR.DS-02: The confidentiality, integrity, and availability of data-in-transit are protected.",
        "metaphor": "Ensuring that your mail is secure while being delivered.",
        "translation": "The family makes sure that any important letters or packages sent through the mail are secure and won’t be tampered with."
    },
    {
        "subcategory": "PR.DS-10: The confidentiality, integrity, and availability of data-in-use are protected.",
        "metaphor": "Keeping your personal information safe while you’re working on your computer.",
        "translation": "The family ensures that personal information is protected while they are using it, like when typing passwords or accessing bank accounts online."
    },
    {
        "subcategory": "PR.DS-11: Backups of data are created, protected, maintained, and tested.",
        "metaphor": "Making copies of important documents and storing them in a safe place.",
        "translation": "The family keeps backups of important documents, like wills and insurance papers, in case the originals are lost or damaged."
    },
    {
        "subcategory": "PR.PS-01: Configuration management practices are established and applied.",
        "metaphor": "Keeping the settings on your home security system up to date.",
        "translation": "The family ensures that the home security system is properly configured and updated to keep the house safe."
    },
    {
        "subcategory": "PR.PS-02: Software is maintained, replaced, and removed commensurate with risk.",
        "metaphor": "Updating or removing old apps on your family’s devices.",
        "translation": "The family regularly updates the software on their devices and removes any that are no longer needed or could be a security risk."
    },
    {
        "subcategory": "PR.PS-03: Hardware is maintained, replaced, and removed commensurate with risk.",
        "metaphor": "Replacing old appliances when they start to become a safety hazard.",
        "translation": "The family replaces old or faulty appliances, like a malfunctioning microwave, to prevent potential hazards."
    },
    {
        "subcategory": "PR.PS-04: Log records are generated and made available for continuous monitoring.",
        "metaphor": "Keeping a diary of daily activities and checking it regularly.",
        "translation": "The family keeps track of important activities, like who enters the house, and regularly reviews the records to ensure everything is in order."
    },
{
        "subcategory": "PR.PS-05: Installation and execution of unauthorized software are prevented.",
        "metaphor": "Making sure no one installs unapproved apps on the family computer.",
        "translation": "The family ensures that only approved software is installed on their devices to prevent security risks."
    },
    {
        "subcategory": "PR.PS-06: Secure software development practices are integrated, and their performance is monitored throughout the software development life cycle.",
        "metaphor": "Building a treehouse and making sure it’s safe for the kids to play in at every stage of construction.",
        "translation": "The family follows best practices when building something new, like a treehouse, and checks at each stage to ensure it’s safe."
    },
    {
        "subcategory": "PR.IR-01: Networks and environments are protected from unauthorized logical access and usage.",
        "metaphor": "Setting up a home Wi-Fi password and only sharing it with family members.",
        "translation": "The family ensures that their Wi-Fi network is secure by using a strong password and only allowing trusted people to access it."
    },
    {
        "subcategory": "PR.IR-02: The organization's technology assets are protected from environmental threats.",
        "metaphor": "Installing surge protectors to protect your electronics during a storm.",
        "translation": "The family protects their electronics from damage by using surge protectors during storms."
    },
    {
        "subcategory": "PR.IR-03: Mechanisms are implemented to achieve resilience requirements in normal and adverse situations.",
        "metaphor": "Having a generator ready in case of a power outage.",
        "translation": "The family prepares for emergencies by having a backup power source, like a generator, to keep things running if the electricity goes out."
    },
    {
        "subcategory": "PR.IR-04: Adequate resource capacity to ensure availability is maintained.",
        "metaphor": "Keeping enough supplies on hand to last through a storm.",
        "translation": "The family makes sure they have enough food, water, and other essentials to last through a storm or other emergency."
    },
    {
        "subcategory": "DE.CM-01: Networks and network services are monitored to find potentially adverse events.",
        "metaphor": "Watching security cameras to spot any intruders.",
        "translation": "The family keeps an eye on security cameras to catch any suspicious activity around the house."
    },
    {
        "subcategory": "DE.CM-02: The physical environment is monitored to find potentially adverse events.",
        "metaphor": "Checking for unusual sounds or smells in the house.",
        "translation": "The family pays attention to any unusual sounds or smells in the house that could indicate a problem, like a gas leak or an intruder."
    },
    {
        "subcategory": "DE.CM-03: Personnel activity and technology usage are monitored to find potentially adverse events.",
        "metaphor": "Keeping track of who is using the computer and what they are doing.",
        "translation": "The family monitors computer usage to make sure no one is doing anything risky, like visiting dangerous websites."
    },
    {
        "subcategory": "DE.CM-06: External service provider activities and services are monitored to find potentially adverse events.",
        "metaphor": "Keeping an eye on the work done by contractors or service providers in your home.",
        "translation": "The family monitors the work done by external service providers, like plumbers or electricians, to ensure everything is done safely and correctly."
    },
    {
        "subcategory": "DE.CM-09: Computing hardware and software, runtime environments, and their data are monitored to find potentially adverse events.",
        "metaphor": "Regularly checking your home computer for viruses or malware.",
        "translation": "The family monitors their computers and devices to make sure they are not infected with viruses or malware."
    },
    {
        "subcategory": "DE.AE-02: Potentially adverse events are analyzed to better understand associated activities.",
        "metaphor": "Investigating a strange noise in the middle of the night to figure out what caused it.",
        "translation": "The family investigates any strange occurrences in the house, like noises at night, to understand what happened and whether it’s a threat."
    },
    {
        "subcategory": "DE.AE-03: Information is correlated from multiple sources.",
        "metaphor": "Gathering information from different family members to get a complete picture of what happened.",
        "translation": "The family collects input from everyone to piece together what’s going on, like if multiple people heard the same strange noise."
    },
    {
        "subcategory": "DE.AE-04: The estimated impact and scope of adverse events are understood.",
        "metaphor": "Assessing how much damage a storm has caused to your home.",
        "translation": "The family evaluates the extent of damage after a storm to understand how bad the situation is and what needs to be fixed."
    },
    {
        "subcategory": "DE.AE-06: Information on adverse events is provided to authorized staff and tools.",
        "metaphor": "Sharing details about a home repair issue with the contractor.",
        "translation": "The family communicates important details about a problem, like a leak, to the person who will fix it."
    },
    {
        "subcategory": "DE.AE-07: Cyber threat intelligence and other contextual information are integrated into the analysis.",
        "metaphor": "Using local news reports to understand why there have been more break-ins recently.",
        "translation": "The family uses information from the news or other sources to understand broader issues that might affect their safety."
    },
    {
        "subcategory": "DE.AE-08: Incidents are declared when adverse events meet the defined incident criteria.",
        "metaphor": "Deciding to call the police when you hear a window break.",
        "translation": "The family declares an emergency, like calling the police, when a situation meets their criteria for a serious threat."
    },
    {
        "subcategory": "RS.MA-01: The incident response plan is executed in coordination with relevant third parties once an incident is declared.",
        "metaphor": "Calling the fire department when the smoke alarm goes off.",
        "translation": "The family follows their emergency plan and contacts the necessary professionals, like the fire department, when a problem arises."
    },
    {
        "subcategory": "RS.MA-02: Incident reports are triaged and validated.",
        "metaphor": "Determining whether a reported problem, like a suspected gas leak, is real or a false alarm.",
        "translation": "The family checks whether a reported issue is actually a problem, like smelling for gas to confirm a leak."
    },
    {
        "subcategory": "RS.MA-03: Incidents are categorized and prioritized.",
        "metaphor": "Deciding whether a problem, like a broken window or a clogged drain, needs immediate attention or can wait.",
        "translation": "The family ranks issues by importance, like fixing a broken window immediately while a clogged drain might wait until morning."
    },
    {
        "subcategory": "RS.MA-04: Incidents are escalated or elevated as needed.",
        "metaphor": "Calling in a professional if a DIY repair turns out to be too difficult.",
        "translation": "The family decides when to bring in professional help, like calling a plumber if a home repair is beyond their skills."
    },
    {
        "subcategory": "RS.MA-05: The criteria for initiating incident recovery are applied.",
        "metaphor": "Starting the cleanup after a storm once it’s safe.",
        "translation": "The family begins repairs or recovery, like cleaning up after a storm, once they determine it’s safe to do so."
    },
    {
        "subcategory": "RS.AN-03: Analysis is performed to establish what has taken place during an incident and the root cause of the incident.",
        "metaphor": "Figuring out why the power went out by checking the breaker and talking to neighbors.",
        "translation": "The family investigates to understand what caused a problem, like why the power went out, so they can fix it."
    },
    {
        "subcategory": "RS.AN-06: Actions performed during an investigation are recorded, and the records' integrity and provenance are preserved.",
        "metaphor": "Keeping notes of what you checked and did when trying to fix a home issue.",
        "translation": "The family keeps a record of what steps they took when investigating a problem, like writing down what they checked when the power went out."
    },
    {
        "subcategory": "RS.AN-07: Incident data and metadata are collected, and their integrity and provenance are preserved.",
        "metaphor": "Documenting the damage after a storm to report to insurance.",
        "translation": "The family collects and keeps accurate records of what happened during an incident, like taking photos of storm damage for insurance."
    },
    {
        "subcategory": "RS.AN-08: An incident's magnitude is estimated and validated.",
        "metaphor": "Assessing how much damage a burst pipe has caused.",
        "translation": "The family evaluates how serious a problem is, like determining the extent of water damage from a burst pipe."
    },
    {
        "subcategory": "RS.CO-02: Internal and external stakeholders are notified of incidents.",
        "metaphor": "Calling the neighbors to warn them about a fire in your house.",
        "translation": "The family alerts anyone who needs to know about an emergency, like calling the neighbors during a fire."
    },
    {
        "subcategory": "RS.CO-03: Information is shared with designated internal and external stakeholders.",
        "metaphor": "Sharing information about a security issue with your home insurance company.",
        "translation": "The family provides necessary information to those who need it, like telling the insurance company about a break-in."
    },
    {
        "subcategory": "RS.MI-01: Incidents are contained.",
        "metaphor": "Closing a door to keep smoke from spreading during a fire.",
        "translation": "The family takes steps to stop a problem from getting worse, like closing a door to contain smoke during a fire."
    },
    {
        "subcategory": "RS.MI-02: Incidents are eradicated.",
        "metaphor": "Putting out a fire in the kitchen.",
        "translation": "The family completely resolves the problem, like putting out a fire to ensure it doesn’t spread."
    },
    {
        "subcategory": "RC.RP-01: The recovery portion of the incident response plan is executed once initiated from the incident response process.",
        "metaphor": "Starting repairs after the fire is out.",
        "translation": "The family begins fixing the damage, like starting home repairs after a fire has been extinguished."
    },
    {
        "subcategory": "RC.RP-02: Recovery actions are selected, scoped, prioritized, and performed.",
        "metaphor": "Deciding which repairs to do first after a storm.",
        "translation": "The family prioritizes and begins the necessary repairs, like deciding to fix the roof before repainting after a storm."
    },
    {
        "subcategory": "RC.RP-03: The integrity of backups and other restoration assets is verified before using them for restoration.",
        "metaphor": "Checking that your emergency supplies are still good before using them.",
        "translation": "The family checks that backup supplies or resources are still usable before relying on them, like making sure stored water is safe to drink."
    },
    {
        "subcategory": "RC.RP-04: Critical mission functions and cybersecurity risk management are considered to establish post-incident operational norms.",
        "metaphor": "Adjusting your home safety plan after an emergency to prevent future problems.",
        "translation": "The family updates their safety routines after an emergency to ensure they are better prepared for the future."
    },
    {
        "subcategory": "RC.RP-05: The integrity of restored assets is verified, systems and services are restored, and normal operating status is confirmed.",
        "metaphor": "Making sure everything works properly after repairs are completed.",
        "translation": "The family checks that all repairs were done correctly and that the home is safe and functional again."
    },
    {
        "subcategory": "RC.RP-06: The end of incident recovery is declared based on criteria, and incident-related documentation is completed.",
        "metaphor": "Declaring the home safe to live in again after renovations.",
        "translation": "The family officially considers the home restored after ensuring everything is back to normal and documenting the process."
    },
    {
        "subcategory": "RC.CO-03: Recovery activities and progress in restoring operational capabilities are communicated to designated internal and external stakeholders.",
        "metaphor": "Updating family members and contractors on the progress of home repairs.",
        "translation": "The family keeps everyone informed about the status of repairs, like updating each other and any contractors involved."
    },
    {
        "subcategory": "RC.CO-04: Public updates on incident recovery are shared using approved methods and messaging.",
        "metaphor": "Posting a sign outside your house to inform neighbors that repairs are ongoing.",
        "translation": "The family shares updates with the public, like letting the neighbors know that the house is under repair, using clear and approved communication methods."
    }
];

//API
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const apiQuery = urlParams.get('query');

    if (apiQuery) {
        searchByAPI(apiQuery);
    }
});

function searchByAPI(query) {
    const result = controlData.find(item => item.subcategory.toLowerCase() === query.toLowerCase());

    if (result) {
        displayAPIResult(result);
    } else {
        document.body.textContent = `No results found for query: ${query}`;
    }
}

function displayAPIResult(result) {
    const resultContainer = document.createElement('div');

    const subcategoryElement = document.createElement('h2');
    subcategoryElement.textContent = result.subcategory;
    resultContainer.appendChild(subcategoryElement);

    const metaphorElement = document.createElement('p');
    metaphorElement.textContent = `Metaphor: ${result.metaphor}`;
    resultContainer.appendChild(metaphorElement);

    const translationElement = document.createElement('p');
    translationElement.textContent = `Translation: ${result.translation}`;
    resultContainer.appendChild(translationElement);

    document.body.appendChild(resultContainer);
}

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
    console.log("Search results:", results);  // Debugging line
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
        console.log("Checking control:", control);  // Debugging line
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
        metaphorElement.textContent = `Metaphor: ${result.metaphor}`;
        resultContainer.appendChild(metaphorElement);
        
        const translationElement = document.createElement('p');
        translationElement.textContent = `Translation: ${result.translation}`;
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
        metaphorElement.textContent = `Metaphor: ${result.metaphor}`;
        resultContainer.appendChild(metaphorElement);

        const translationElement = document.createElement('p');
        translationElement.textContent = `Translation: ${result.translation}`;
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
