const controls = [
    { id: "ID.AM-1", title: "Inventory of authorized devices is maintained", metaphor: "Imagine your home as a castle. You keep a detailed inventory of all your treasures and where they are stored." },
    { id: "ID.AM-2", title: "Inventory of authorized software is maintained", metaphor: "You also maintain a catalog of all your books in the library, ensuring you know every title and its location." },
    { id: "ID.AM-3", title: "Organizational communication and data flows are mapped", metaphor: "You have a map of your castle's plumbing and wiring, understanding how everything connects and flows." },
    { id: "ID.AM-4", title: "External information systems are cataloged", metaphor: "You keep a directory of all the merchants who supply your castle with goods." },
    { id: "ID.AM-5", title: "Resources are prioritized based on their classification, criticality, and business value", metaphor: "You label your most valuable treasures, prioritizing their protection." },
    { id: "ID.AM-6", title: "Cybersecurity roles and responsibilities for the entire workforce and third-party stakeholders are established", metaphor: "Each family member has specific chores and responsibilities, ensuring the castle runs smoothly." },
    { id: "ID.GV-4", title: "Governance and risk management processes address cybersecurity risks", metaphor: "You have a family meeting to discuss safety concerns, addressing governance and risk management processes." },
    { id: "ID.RA-5", title: "Risk responses are prioritized and resources are allocated accordingly", metaphor: "You evaluate the risk of a flood, considering threats, vulnerabilities, and impacts." },
    { id: "ID.RA-6", title: "Risk responses are prioritized and resources are allocated accordingly", metaphor: "You decide which repairs to make first, prioritizing risk responses." },
    { id: "ID.SC-1", title: "Suppliers and third-party partners are identified, prioritized, and assessed using a risk-based approach", metaphor: "You vet suppliers for home repairs, ensuring they are reliable." },
    { id: "ID.SC-2", title: "Suppliers and third-party partners are identified, prioritized, and assessed using a risk-based approach", metaphor: "You choose reliable contractors, prioritizing and assessing them." },
    { id: "ID.SC-3", title: "Contracts with suppliers and third-party partners are established to meet the organization’s cybersecurity requirements", metaphor: "You sign contracts with service providers, ensuring they meet your standards." },
    { id: "ID.SC-4", title: "Suppliers and third-party partners are monitored to confirm they are meeting their contractual obligations", metaphor: "You inspect the work of contractors, confirming they meet their obligations." },
    { id: "ID.SC-5", title: "Response and recovery planning and testing are conducted with suppliers and third-party providers", metaphor: "You coordinate emergency drills with neighbors, planning and testing responses." },
    { id: "PR.AC-1", title: "Identities and credentials are managed for authorized devices and users", metaphor: "You have keys and locks for every door, and only trusted family members have access." },
    { id: "PR.AC-2", title: "Physical access to assets is managed and protected", metaphor: "You lock all doors and windows to protect your castle from intruders." },
    { id: "PR.AC-3", title: "Remote access is managed", metaphor: "You use a video doorbell to see who is at the gate before letting them in." },
    { id: "PR.AC-4", title: "Access permissions are managed, incorporating the principles of least privilege and separation of duties", metaphor: "Only those who need it have the garage code, ensuring limited access." },
    { id: "PR.AC-5", title: "Network integrity is protected", metaphor: "Your castle has separate rooms for different activities, keeping things organized." },
    { id: "PR.AT-1", title: "All users are informed and trained", metaphor: "You teach everyone in the castle how to use the fire extinguisher." },
    { id: "PR.AT-2", title: "Privileged users understand their roles and responsibilities", metaphor: "The eldest child is trained on how to babysit, understanding their role." },
    { id: "PR.AT-3", title: "Third-party stakeholders understand their roles and responsibilities", metaphor: "You inform guests about the house rules when they visit." },
    { id: "PR.AT-4", title: "Senior executives understand their roles and responsibilities", metaphor: "The parents know how to manage the household, ensuring everything runs smoothly." },
    { id: "PR.AT-5", title: "Physical and cybersecurity personnel understand their roles and responsibilities", metaphor: "The security personnel know their duties and responsibilities." },
    { id: "PR.AC-6", title: "Access permissions and authorizations are managed, incorporating the principles of least privilege and separation of duties", metaphor: "You verify the identity of visitors before letting them in, ensuring they are who they say they are." },
    { id: "PR.AC-7", title: "Users, devices, and other assets are authenticated (e.g., single-factor, multi-factor) commensurate with the risk of the transaction", metaphor: "You use a combination lock for added security, authenticating users." },{ id: "PR.DS-1", title: "Data-at-rest is protected", metaphor: "You keep valuables in a safe, protecting them from theft." },
    { id: "PR.AC-8", title: "Access to systems and assets is limited to authorized users, processes, or devices, and to authorized activities and transactions", metaphor: "You only allow trusted people into your home, limiting access to authorized users." },
    { id: "PR.DS-2", title: "Data-in-transit is protected", metaphor: "You secure packages during delivery to ensure they arrive safely." },
    { id: "PR.DS-3", title: "Assets are formally managed throughout removal, transfers, and disposition", metaphor: "You track borrowed items, ensuring they are returned." },
    { id: "PR.DS-4", title: "Adequate capacity to ensure availability is maintained", metaphor: "You have enough storage space for all your belongings." },
    { id: "PR.DS-5", title: "Protections against data leaks are implemented", metaphor: "You seal windows to prevent drafts and leaks." },
    { id: "PR.DS-6", title: "Integrity checking mechanisms are used to verify software, firmware, and information integrity", metaphor: "You check expiration dates on food to ensure it's safe to eat." },
    { id: "PR.DS-7", title: "The development and testing environment(s) are separate from the production environment", metaphor: "You have a workshop separate from the living area, keeping tools and projects organized." },
    { id: "PR.DS-8", title: "Integrity checking mechanisms are used to verify software, firmware, and information integrity", metaphor: "You check the structural integrity of your home, verifying its safety." },{ id: "PR.IP-1", title: "A baseline configuration of information technology/industrial control systems is created and maintained", metaphor: "You keep a blueprint of your house, knowing its layout and structure." },
    { id: "PR.IP-2", title: "A System Development Life Cycle to manage systems is implemented", metaphor: "You plan renovations carefully, ensuring everything is done correctly." },
    { id: "PR.IP-3", title: "Configuration change control processes are in place", metaphor: "You track home improvements, keeping a record of changes." },
    { id: "PR.IP-4", title: "Backups of information are conducted, maintained, and tested", metaphor: "You have spare keys in case of emergencies." },
    { id: "PR.IP-5", title: "Policy and regulations regarding the physical operating environment for organizational assets are met", metaphor: "You follow building codes to ensure your home is safe." },
    { id: "PR.IP-6", title: "Data is destroyed according to policy", metaphor: "You shred sensitive documents to protect your privacy." },
    { id: "PR.IP-7", title: "Protection processes are improved", metaphor: "You upgrade your home security system to improve protection." },
    { id: "PR.IP-8", title: "Effectiveness of protection technologies is shared", metaphor: "You share home security tips with neighbors to help them stay safe." },
    { id: "PR.IP-9", title: "Response plans and recovery plans are in place and managed", metaphor: "You have an emergency kit ready for any situation." },
    { id: "PR.IP-10", title: "Response and recovery plans are tested", metaphor: "You conduct fire drills to ensure everyone knows what to do in an emergency." },
    { id: "PR.IP-11", title: "Cybersecurity is included in human resources practices (e.g., deprovisioning, personnel screening)", metaphor: "You screen babysitters before hiring them, ensuring they are trustworthy." },
    { id: "PR.IP-12", title: "A vulnerability management plan is developed and implemented", metaphor: "You have a plan to fix any issues in your home, managing vulnerabilities." },{ id: "PR.MA-1", title: "Maintenance and repair of organizational assets are performed and logged, with approved and controlled tools", metaphor: "You keep a maintenance log for your appliances, ensuring they are serviced regularly." },
    { id: "PR.MA-2", title: "Remote maintenance of organizational assets is approved, logged, and performed in a manner that prevents unauthorized access", metaphor: "You supervise repairmen to ensure they do their job correctly." },
    { id: "PR.MA-3", title: "Maintenance and repair of organizational assets is performed and logged, with approved and controlled tools", metaphor: "You regularly service your HVAC system, performing maintenance on schedule." },{ id: "PR.PT-1", title: "Audit/log records are determined, documented, implemented, and reviewed in accordance with policy", metaphor: "You keep a diary of household activities, tracking important events." },
    { id: "PR.PT-2", title: "Removable media is protected and its use restricted according to policy", metaphor: "You lock up hazardous materials to keep them out of reach." },
    { id: "PR.PT-3", title: "The principle of least functionality is incorporated by configuring systems to provide only essential capabilities", metaphor: "You only keep necessary tools in your toolbox, avoiding clutter." },
    { id: "PR.PT-4", title: "Communications and control networks are protected", metaphor: "You secure your Wi-Fi network to protect against intruders." },
    { id: "PR.PT-5", title: "Mechanisms (e.g., failsafe, load balancing, hot swap) are implemented to achieve resilience requirements in normal and adverse situations", metaphor: "You have backup power for your home, ensuring resilience in normal and adverse situations." },
    { id: "DE.AE-1", title: "A baseline of network operations and expected data flows for users and systems is established and managed", metaphor: "You know the usual routines of family members, noticing any unusual behavior." },
    { id: "DE.AE-2", title: "Detected events are analyzed to understand attack targets and methods", metaphor: "You investigate strange noises, ensuring everything is safe." },
    { id: "DE.AE-3", title: "Event data are collected and correlated from multiple sources and sensors", metaphor: "You use multiple security cameras to monitor your property." },
    { id: "DE.AE-4", title: "Impact of events is determined", metaphor: "You assess damage after a storm, understanding its impact." },
    { id: "DE.AE-5", title: "Incident alert thresholds are established", metaphor: "You set up alarm systems to alert you of any issues." },
    { id: "DE.AE-6", title: "Detection systems are tested", metaphor: "You alert family members about a potential issue, communicating detection information." },{ id: "DE.CM-1", title: "The network is monitored to detect potential cybersecurity events", metaphor: "You keep an eye on your property, watching for potential problems." },
    { id: "DE.CM-2", title: "The physical environment is monitored to detect potential cybersecurity events", metaphor: "You watch for intruders, ensuring your home is secure." },
    { id: "DE.CM-3", title: "Personnel activity is monitored to detect potential cybersecurity events", metaphor: "You monitor who enters and leaves the house, keeping track of visitors." },
    { id: "DE.CM-4", title: "Malicious code is detected", metaphor: "You spot pests in your home, taking action to remove them." },
    { id: "DE.CM-5", title: "Unauthorized mobile code is detected", metaphor: "You notice unfamiliar devices, ensuring they are safe." },
    { id: "DE.CM-6", title: "External service provider activity is monitored to detect potential cybersecurity events", metaphor: "You supervise contractors, ensuring they do their job correctly." },
    { id: "DE.CM-7", title: "Monitoring for unauthorized personnel, connections, devices, and software is performed", metaphor: "You check for unauthorized guests, keeping your home secure." },
    { id: "DE.CM-8", title: "Vulnerability scans are performed", metaphor: "You inspect your home for structural issues, ensuring its safety." },
    { id: "DE.CM-9", title: "Detection processes are tested", metaphor: "You test your home alarm system, ensuring detection processes work." },{ id: "DE.DP-1", title: "Roles and responsibilities for detection are well defined to ensure accountability", metaphor: "You assign lookout duties during a watch, ensuring everyone is alert." },
    { id: "RS.RP-1", title: "Response plan is executed during or after an incident", metaphor: "You use a fire extinguisher during a fire, taking immediate action." },
    { id: "RS.CO-1", title: "Personnel know their roles and order of operations when a response is needed", metaphor: "You have a family emergency plan, ensuring everyone knows their role." },
    { id: "RS.CO-2", title: "Incidents are reported consistent with established criteria", metaphor: "You call 911 when necessary, reporting incidents promptly." },
    { id: "RS.CO-3", title: "Information is shared consistent with response plans", metaphor: "You inform neighbors about a break-in, sharing important information." },
    { id: "RS.CO-4", title: "Coordination with stakeholders occurs consistent with response plans", metaphor: "You work with neighbors during a neighborhood watch, coordinating efforts." },
    { id: "RS.CO-5", title: "Voluntary information sharing occurs with external stakeholders to achieve broader cybersecurity situational awareness", metaphor: "You share safety tips with the community, helping others stay safe." },
    { id: "RS.CO-6", title: "Response personnel are identified and trained", metaphor: "You designate family members for specific emergency roles, identifying and training response teams." },
    { id: "RS.CO-7", title: "Response plans are tested", metaphor: "You conduct emergency drills, testing response plans." },
    { id: "RS.AN-1", title: "Notifications from detection systems are investigated", metaphor: "You check the smoke detector when it goes off, investigating alerts." },
    { id: "RS.AN-2", title: "The impact of the incident is understood", metaphor: "You assess the damage after a flood, understanding its impact." },
    { id: "RS.AN-3", title: "Forensics are performed", metaphor: "You investigate the cause of a fire, performing forensics." },
    { id: "RS.AN-4", title: "Incidents are categorized consistent with response plans", metaphor: "You classify types of emergencies, categorizing incidents." },
    { id: "RS.AN-5", title: "Processes are established to receive, analyze and respond to vulnerabilities disclosed to the organization from internal and external sources", metaphor: "You listen to weather alerts, preparing for potential issues." },
    { id: "RS.MI-1", title: "Incidents are contained", metaphor: "You isolate a leak, containing the problem." },
    { id: "RS.MI-2", title: "Incidents are mitigated", metaphor: "You patch a hole in the roof, mitigating damage." },
    { id: "RS.MI-3", title: "Newly identified vulnerabilities are mitigated or documented as accepted risks", metaphor: "You fix a broken fence, addressing newly identified vulnerabilities." },
    { id: "RS.IM-1", title: "Response plans incorporate lessons learned", metaphor: "You improve your emergency plan after a drill, incorporating lessons learned." },
    { id: "RS.IM-2", title: "Response strategies are updated", metaphor: "You update your home insurance policy, revising response strategies." },
    { id: "RS.MI-4", title: "Incidents are documented", metaphor: "You note areas of your home that need future attention, documenting accepted risks." },
    { id: "RC.RP-2", title: "Recovery plans are tested", metaphor: "You practice your emergency evacuation plan, testing recovery plans." },
    { id: "RC.IM-3", title: "Recovery strategies are updated", metaphor: "You improve your home renovation plans after a project, updating recovery strategies." },
    { id: "RC.CO-4", title: "Recovery activities are communicated to internal and external stakeholders as well as executive and management teams", metaphor: "You update your family and neighbors on the progress of home repairs, communicating recovery activities." },
    { id: "PR.DS-9", title: , metaphor: "You lock up valuables in a safe, protecting data-at-rest using encryption."},
];
