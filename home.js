   // Function to load and display user profile data
   function loadProfile() {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (user) {
        // Populate profile details
        document.getElementById('profileUsername').textContent = user.username;
        document.getElementById('profileEmail').textContent = user.email;
        document.getElementById('profilePhoneNumber').textContent = user.phoneNumber;
        document.getElementById('profileLocation').textContent = user.location;
        document.getElementById('profileCollege').textContent = user.college;
        document.getElementById('profileSkills').textContent = user.skills.join(', ');

        // Populate social links
        document.getElementById('facebookLink').href = user.socialLinks.facebook;
        document.getElementById('instagramLink').href = user.socialLinks.instagram;
        document.getElementById('twitterLink').href = user.socialLinks.twitter;
        document.getElementById('githubLink').href = user.socialLinks.github;
        document.getElementById('linkedinLink').href = user.socialLinks.linkedin;
    } else {
        alert('No user data found. Please log in.');
        window.location.href = 'login.html'; // Redirect to login page if no user is logged in
    }
}

// Call the function to load profile data when the page loads
window.onload = loadProfile;

const jobTitles = [
    "Java Developer",
    "Java Full Stack Developer",
    "Java Backend Developer",
    "Java JSP Developer",
    "Java Security Developer",
    "Python Developer",
    "Python Full Stack Developer",
    "Python Backend Developer",
    "JavaScript Developer",
    "React Developer",
    "Angular Developer",
    "Node.js Developer",
    "Data Scientist",
    "Machine Learning Engineer",
    "DevOps Engineer",
    "Cloud Engineer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Mobile App Developer",
    "iOS Developer",
    "Android Developer",
    "Flutter Developer",
    "Kotlin Developer",
    "Swift Developer",
    "C# Developer",
    ".NET Developer",
    "PHP Developer",
    "Laravel Developer",
    "Ruby on Rails Developer",
    "Go Developer",
    "Rust Developer",
    "Scala Developer",
    "Big Data Engineer",
    "Data Analyst",
    "Business Intelligence Analyst",
    "AI Engineer",
    "Deep Learning Engineer",
    "Computer Vision Engineer",
    "NLP Engineer",
    "Blockchain Developer",
    "Solidity Developer",
    "Embedded Systems Engineer",
    "Firmware Engineer",
    "QA Engineer",
    "Automation Test Engineer",
    "Manual Test Engineer",
    "Security Engineer",
    "Cybersecurity Analyst",
    "Penetration Tester",
    "IT Support Specialist",
    "Systems Administrator",
    "Network Engineer",
    "Database Administrator",
    "SQL Developer",
    "NoSQL Developer",
    "Data Engineer",
    "ETL Developer",
    "Cloud Architect",
    "AWS Solutions Architect",
    "Azure Developer",
    "Google Cloud Engineer",
    "Kubernetes Engineer",
    "Docker Specialist",
    "Site Reliability Engineer (SRE)",
    "Technical Lead",
    "Engineering Manager",
    "Product Manager",
    "Scrum Master",
    "Agile Coach",
    "UX Designer",
    "UI Designer",
    "Graphic Designer",
    "Web Designer",
    "Game Developer",
    "Unity Developer",
    "Unreal Engine Developer",
    "AR/VR Developer",
    "IoT Developer",
    "Robotics Engineer",
    "Hardware Engineer",
    "Solutions Architect",
    "Technical Consultant",
    "Business Analyst",
    "Data Architect",
    "Machine Learning Researcher",
    "AI Ethicist",
    "Quantum Computing Engineer",
    "Bioinformatics Scientist",
    "GIS Developer",
    "Salesforce Developer",
    "SAP Consultant",
    "ERP Developer",
    "CRM Developer",
    "Digital Marketing Specialist",
    "SEO Specialist",
    "Content Strategist",
    "Technical Writer",
    "IT Project Manager"
];

// Sample job data
const jobs = [
    {
        company: "Tata Consultancy Services (TCS)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/512px-Tata_Consultancy_Services_Logo.svg.png",
        type: "Full-Time",
        location: "All India",
        experience: "Fresher/Entry-Level",
        education: "Any Graduate",
        tags: ["Java", "Python", "PHP", "Front-end"],
        enrolled: 7911,
        deadline: "16 Mar, 07:00 pm",
        salary: 500000, // Added salary field
        applyLink: "https://www.tcs.com/careers" // Added apply link
    },
    {
        company: "Wipro",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/512px-Wipro_Primary_Logo_Color_RGB.svg.png",
        type: "Full-Time",
        location: "India",
        experience: "Fresher/Entry-Level",
        education: "Any Graduate",
        tags: ["IT Services", "Business Services", "Digital Services", "Engineering Services"],
        enrolled: 7912,
        deadline: "30 Mar, 10:00 pm",
        salary: 600000, // Added salary field
        applyLink: "https://careers.wipro.com/" // Added apply link
    }
    ,
{
"company": "TechNova Solutions",
"logo": "https://example.com/technova-logo.png",
"type": "Full-Time",
"location": "Hyderabad, India",
"experience": "Fresher/Entry-Level",
"education": "Any Graduate",
"tags": ["Software Development", "Cloud Computing", "Data Analytics", "AI/ML"],
"enrolled": 6500,
"deadline": "20 Apr, 11:59 pm",
"salary": 550000,
"applyLink": "https://careers.technova.com"
},
{
"company": "Cloudify Tech",
"logo": "https://example.com/cloudify-logo.png",
"type": "Internship",
"location": "Remote",
"experience": "Fresher/Entry-Level",
"education": "B.Tech/B.E.",
"tags": ["Cloud Computing", "DevOps", "AWS", "Azure"],
"enrolled": 3200,
"deadline": "15 May, 11:59 pm",
"salary": 300000,
"applyLink": "https://careers.cloudify.com"
},
{
"company": "DataMinds Inc.",
"logo": "https://example.com/dataminds-logo.png",
"type": "Full-Time",
"location": "Bangalore, India",
"experience": "Mid-Level",
"education": "M.Tech/M.E.",
"tags": ["Data Science", "Machine Learning", "Big Data", "Python"],
"enrolled": 4800,
"deadline": "10 May, 11:59 pm",
"salary": 850000,
"applyLink": "https://careers.dataminds.com"
},
{
"company": "CodeCrafters",
"logo": "https://example.com/codecrafters-logo.png",
"type": "Part-Time",
"location": "Pune, India",
"experience": "Junior",
"education": "B.Sc. in Computer Science",
"tags": ["Web Development", "JavaScript", "React", "Node.js"],
"enrolled": 2100,
"deadline": "25 Apr, 11:59 pm",
"salary": 400000,
"applyLink": "https://careers.codecrafters.com"
},
{
"company": "AI Innovators",
"logo": "https://example.com/ai-innovators-logo.png",
"type": "Full-Time",
"location": "Chennai, India",
"experience": "Senior",
"education": "Ph.D. in AI/ML",
"tags": ["Artificial Intelligence", "Deep Learning", "NLP", "TensorFlow"],
"enrolled": 1200,
"deadline": "30 Apr, 11:59 pm",
"salary": 1200000,
"applyLink": "https://careers.aiinnovators.com"
},
{
"company": "GreenTech Solutions",
"logo": "https://example.com/greentech-logo.png",
"type": "Full-Time",
"location": "Delhi, India",
"experience": "Mid-Level",
"education": "B.Tech/B.E. in Environmental Engineering",
"tags": ["Renewable Energy", "Sustainability", "IoT", "Solar Energy"],
"enrolled": 3400,
"deadline": "12 May, 11:59 pm",
"salary": 750000,
"applyLink": "https://careers.greentech.com"
},
{
"company": "FinTech Wizards",
"logo": "https://example.com/fintech-wizards-logo.png",
"type": "Full-Time",
"location": "Mumbai, India",
"experience": "Fresher/Entry-Level",
"education": "B.Com/M.Com",
"tags": ["Financial Technology", "Blockchain", "Cryptocurrency", "Python"],
"enrolled": 5600,
"deadline": "18 May, 11:59 pm",
"salary": 600000,
"applyLink": "https://careers.fintechwizards.com"
},
{
"company": "HealthTech Innovators",
"logo": "https://example.com/healthtech-logo.png",
"type": "Full-Time",
"location": "Bangalore, India",
"experience": "Mid-Level",
"education": "B.Tech/B.E. in Biotechnology",
"tags": ["Healthcare", "Medical Devices", "AI in Healthcare", "IoT"],
"enrolled": 2900,
"deadline": "22 May, 11:59 pm",
"salary": 900000,
"applyLink": "https://careers.healthtech.com"
},
{
"company": "EduTech Masters",
"logo": "https://example.com/edutech-logo.png",
"type": "Full-Time",
"location": "Remote",
"experience": "Junior",
"education": "B.Ed/M.Ed",
"tags": ["E-Learning", "EdTech", "Gamification", "AI in Education"],
"enrolled": 4100,
"deadline": "28 May, 11:59 pm",
"salary": 500000,
"applyLink": "https://careers.edutech.com"
},
{
"company": "CyberSec Experts",
"logo": "https://example.com/cybersec-logo.png",
"type": "Full-Time",
"location": "Hyderabad, India",
"experience": "Senior",
"education": "M.Tech in Cybersecurity",
"tags": ["Cybersecurity", "Ethical Hacking", "Network Security", "Penetration Testing"],
"enrolled": 1800,
"deadline": "5 Jun, 11:59 pm",
"salary": 1100000,
"applyLink": "https://careers.cybersec.com"
},
{
"company": "AgriTech Solutions",
"logo": "https://example.com/agritech-logo.png",
"type": "Full-Time",
"location": "Pune, India",
"experience": "Mid-Level",
"education": "B.Sc. in Agriculture",
"tags": ["Agriculture Technology", "IoT in Farming", "Drones", "Sustainable Farming"],
"enrolled": 2700,
"deadline": "8 Jun, 11:59 pm",
"salary": 700000,
"applyLink": "https://careers.agritech.com"
},
{
"company": "RoboTech Labs",
"logo": "https://example.com/robotech-logo.png",
"type": "Full-Time",
"location": "Chennai, India",
"experience": "Fresher/Entry-Level",
"education": "B.Tech/B.E. in Robotics",
"tags": ["Robotics", "Automation", "AI in Robotics", "IoT"],
"enrolled": 3900,
"deadline": "12 Jun, 11:59 pm",
"salary": 600000,
"applyLink": "https://careers.robotech.com"
},
{
"company": "SpaceTech Innovators",
"logo": "https://example.com/spacetech-logo.png",
"type": "Full-Time",
"location": "Bangalore, India",
"experience": "Senior",
"education": "M.Tech in Aerospace Engineering",
"tags": ["Space Technology", "Satellite Communication", "Rocket Science", "AI in Space"],
"enrolled": 1500,
"deadline": "15 Jun, 11:59 pm",
"salary": 1300000,
"applyLink": "https://careers.spacetech.com"
},
{
"company": "AutoTech Solutions",
"logo": "https://example.com/autotech-logo.png",
"type": "Full-Time",
"location": "Pune, India",
"experience": "Mid-Level",
"education": "B.Tech/B.E. in Mechanical Engineering",
"tags": ["Automotive Technology", "Electric Vehicles", "Autonomous Driving", "IoT in Vehicles"],
"enrolled": 3200,
"deadline": "20 Jun, 11:59 pm",
"salary": 800000,
"applyLink": "https://careers.autotech.com"
},
{
"company": "MediCare Tech",
"logo": "https://example.com/medicare-logo.png",
"type": "Full-Time",
"location": "Delhi, India",
"experience": "Junior",
"education": "B.Pharm/M.Pharm",
"tags": ["Healthcare Technology", "Telemedicine", "AI in Healthcare", "IoT in Healthcare"],
"enrolled": 4400,
"deadline": "25 Jun, 11:59 pm",
"salary": 550000,
"applyLink": "https://careers.medicare.com"
},
    {
        company: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png",
        type: "Full-Time",
        location: "USA",
        experience: "Mid-Level",
        education: "B.Tech/B.E.",
        tags: ["Software Engineering", "Data Science", "Product Management", "Marketing"],
        enrolled: 7009,
        deadline: "29 Mar, 12:00 pm",
        salary: 1200000, // Added salary field
        applyLink: "https://careers.google.com/" // Added apply link
    },
    {
        company: "Amazon",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png",
        type: "Full-Time",
        location: "Telangana",
        experience: "Fresher/Entry-Level",
        education: "Any Graduate",
        tags: ["Sortation Center", "Delivery Station", "Amazon Air", "Grocery Warehouses"],
        enrolled: 8911,
        deadline: "16 Mar, 07:00 pm",
        salary: 700000, // Added salary field
        applyLink: "https://www.amazon.jobs/" // Added apply link
    },
    {
        company: "State Bank Of India (SBI)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/State_Bank_of_India_logo.svg/512px-State_Bank_of_India_logo.svg.png",
        type: "Full-Time",
        location: "India",
        experience: "Graduation",
        education: "Any Graduate",
        tags: ["Clerk", "Probationary Officer", "Specialist Officer", "Accountants Officer"],
        enrolled: 7001,
        deadline: "30 Mar, 12:00 pm",
        salary: 400000, // Added salary field
        applyLink: "https://sbi.co.in/web/careers" // Added apply link
    }
];

// Function to render job listings
function renderJobs(filteredJobs) {
    const jobListings = document.getElementById("jobListings");
    jobListings.innerHTML = "";

    if (filteredJobs.length === 0) {
        alert("No jobs available with the selected filters. Please check back later.");
        return;
    }

    filteredJobs.forEach(job => {
        const tagHtml = job.tags.map(tag => `<span>#${tag}</span>`).join("");

        const card = `
            <div class="card">
                <div class="header">
                    <img src="${job.logo}" alt="${job.company} Logo">
                    <div class="header-text">
                        <h2>${job.company}</h2>
                        <p class="sub-text">Job Campus</p>
                    </div>
                </div>
                <div class="details">
                    <p><strong>Job Type:</strong> ${job.type}</p>
                    <p><strong><i class='bx bxs-graduation'></i></strong> ${job.experience}</p>
                    <p><strong><i class='bx bx-map'></i></strong> ${job.location}</p>
                </div>
                <div class="tags">
                    ${tagHtml}
                </div>
                <div class="footer">
                    <p class="enrolled">${job.enrolled} Enrolled</p>
                    <button onclick="window.open('${job.applyLink}', '_blank')">Apply Now</button>
                    <p class="deadline">Reg. closes on ${job.deadline}</p>
                </div>
            </div>
        `;
        jobListings.innerHTML += card;
    });
}

// Function to apply filters
function applyFilters() {
    const jobType = document.getElementById("jobType").value;
    const location = document.getElementById("location").value;
    const experience = document.getElementById("experience").value;

    const filteredJobs = jobs.filter(job => {
        return (
            (jobType === "Select Job Type" || job.type === jobType) &&
            (location === "Select Location" || job.location === location) &&
            (experience === "Select Experience Level" || job.experience === experience)
        );
    });

    renderJobs(filteredJobs);
}

// Function to clear filters
function clearFilters() {
    document.getElementById("minSalary").value = "";
    document.getElementById("maxSalary").value = "";
    document.getElementById("jobType").selectedIndex = 0;
    document.getElementById("location").selectedIndex = 0;
    document.getElementById("experience").selectedIndex = 0;
    document.getElementById("education").selectedIndex = 0;
    renderJobs(jobs); // Render all jobs when filters are cleared
}

// Show search suggestions
function showSuggestions() {
    const input = document.getElementById('jobTitle').value.toLowerCase();
    const suggestions = document.getElementById('searchSuggestions');
    suggestions.innerHTML = '';

    if (input.length > 0) {
        const filteredTitles = jobTitles.filter(title => title.toLowerCase().includes(input));
        if (filteredTitles.length > 0) {
            filteredTitles.forEach(title => {
                const div = document.createElement('div');
                div.textContent = title;
                div.addEventListener('click', () => {
                    document.getElementById('jobTitle').value = title;
                    suggestions.style.display = 'none';
                });
                suggestions.appendChild(div);
            });
            suggestions.style.display = 'block';
        } else {
            suggestions.style.display = 'none';
        }
    } else {
        suggestions.style.display = 'none';
    }
}

// Toggle profile section visibility
const profileButton = document.getElementById('profileButton');
const profileIcon = document.getElementById('profileIcon');
const profileSection = document.getElementById('profile');

profileButton.addEventListener('click', (e) => {
    e.stopPropagation();
    profileSection.style.display = profileSection.style.display === 'block' ? 'none' : 'block';
});

profileIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    profileSection.style.display = profileSection.style.display === 'block' ? 'none' : 'block';
});

// Close profile section when clicking outside
document.addEventListener('click', (e) => {
    if (!profileSection.contains(e.target) && !profileButton.contains(e.target) && !profileIcon.contains(e.target)) {
        profileSection.style.display = 'none';
    }
});

// Toggle mobile navbar
const navIcon = document.getElementById('navIcon');
const navMenu = document.getElementById('navMenu');

navIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile navbar when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navIcon.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Toggle filter sidebar in mobile view
const filterIcon = document.getElementById('filterIcon');
const filterSidebar = document.getElementById('filterSidebar');

filterIcon.addEventListener('click', () => {
    filterSidebar.classList.toggle('active');
});

// Close filter sidebar when clicking outside
document.addEventListener('click', (e) => {
    if (!filterSidebar.contains(e.target) && !filterIcon.contains(e.target)) {
        filterSidebar.classList.remove('active');
    }
});

// Function to populate dropdowns with unique values from job data
function populateDropdowns() {
    const jobTypes = [...new Set(jobs.map(job => job.type))];
    const locations = [...new Set(jobs.map(job => job.location))];
    const experiences = [...new Set(jobs.map(job => job.experience))];
    const educations = [...new Set(jobs.map(job => job.education))];

    const jobTypeDropdown = document.getElementById('jobType');
    const locationDropdown = document.getElementById('location');
    const experienceDropdown = document.getElementById('experience');
    const educationDropdown = document.getElementById('education');

    jobTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        jobTypeDropdown.appendChild(option);
    });

    locations.forEach(location => {
        const option = document.createElement('option');
        option.value = location;
        option.textContent = location;
        locationDropdown.appendChild(option);
    });

    experiences.forEach(experience => {
        const option = document.createElement('option');
        option.value = experience;
        option.textContent = experience;
        experienceDropdown.appendChild(option);
    });

    educations.forEach(education => {
        const option = document.createElement('option');
        option.value = education;
        option.textContent = education;
        educationDropdown.appendChild(option);
    });
}

// Initial render of all jobs and populate dropdowns
renderJobs(jobs);
populateDropdowns();

// Add scroll event listener for header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});