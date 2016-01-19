var name = "James McCoy";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace('%data%', name);
var formattedRole = HTMLheaderRole.replace('%data%', role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
    "name": "James McCoy",
    "role": "Web Developer",
    "contacts": {
        "Mobile": "205-331-0758",
        "Email": "jgmchris@bellsouth.net",
        "github": "https://github.com/jgmiv",
        "twitter": "https://twitter.com",
        "blog": "https://blog.com",
        "location": "Cottondale, AL"
    },
    "photo": "http://jimbarry.net/JamesMcCoy.jpg?zoom=2&amp;resize=300%2C300",
    "welcome": "Hello World!  Watch out, here I come!",
    "skills": ["Electronics", "Designer", "Engineering", "Maintenance"]
};
var formattedPic = HTMLbioPic.replace("%data%", bio.photo);
$("#header").append(formattedPic);
var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcome);
$("#header").append(formattedMessage);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.Mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.Email);
$("#topContacts").append(formattedEmail);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
$("#topContacts").append(formattedBlog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);

}

var work = {

    "jobs": [{
        "position": "MGR OSP ENG & DSGN",
        "employer": "AT&T",
        "years": "2015-Present",
        "location": "Cottondale, AL",
        "description": "Designed placement of facilities using CAD."

    }, {
        "position": "MGR OSP ENG & DSGN (Planner)",
        "employer": "AT&T",
        "years": "2012-2015",
        "location": "Birmingham, AL",
        "description": "Managed the capital budget for replacing high trouble areas within copper facilities for the State of Alabama."

    }, {
        "position": "MGR OSP CON & ENG",
        "employer": "AT&T",
        "years": "2011-2012",
        "location": "Birmingham, AL",
        "description": "Supervised a crew of 18 Technicians.  Overseeing the replacement and repair of copper facilities."
    }, {
        "position": "Facility Technician",
        "employer": "AT&T",
        "years": "2008-2011",
        "location": "Montgomery, AL",
        "description": "Isolated and repaired troubles in copper facilities, spliced copper facilities, maintained air pressure on undrground facilities."
    }, {
        "position": "MGR OSP CON & ENG (PCS Relieving)",
        "employer": "BellSOUTH",
        "years": 2007,
        "location": "Prattville, AL",
        "description": "Plant Contract Supervisor over cable placing contractors."
    }, {
        "position": "MGR OSP ENG & DSGN (Relieving)",
        "employer": "BellSOUTH",
        "years": 2007,
        "location": "Prattville, AL",
        "description": "Designed facility placement using CAD."
    }, {
        "position": "Services Technician",
        "employer": "BellSOUTH",
        "years": "1999-2008",
        "location": "Prattville, AL",
        "description": "Installed and repaired telephone services."
    }, {
        "position": "Maintenance",
        "employer": "Big Lots Wharehouses",
        "years": "1998-1999",
        "location": "Montgomery, AL",
        "description": "Maintained a computer based conveyor system."
    }, {
        "position": "Maintenance",
        "employer": "PMAg (SweetLix)",
        "years": "1997-1998",
        "location": "Montgomery, AL",
        "description": "Maintained several machines, electrically and mechanically, used in production of feed for cattle"
    }, {
        "position": "Guidance and Control Technician",
        "employer": "USAF",
        "years": "1993-2001",
        "location": "Fayetteville, NC",
        "description": "Maintained variuos systems required for flight on a C-130 aircraft"
    }]
};

function displaywork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);


        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }

}
displaywork();


var projects = {
    "designs": [{
        "title": "Webmockup",
        "dates": 2015,
        "description": "Created a responsive web site utilizing the mobile first approach.",
        "images": ["images/intotheteam.jpg", "images/intotheteam.jpg"]
    }, {
        "title": "About Me",
        "dates": 2015,
        "description": "Created a web site that tells just a little bit about me.",
        "images": ["images/fry.jpg", "images/fry.jpg"]

    }]
}


projects.display = function() {
    for (project in projects.designs) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.designs[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.designs[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.designs[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.designs[project].images.length > 0) {

            for (image in projects.designs[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.designs[project].images[image]);
                $(".project-entry:last").append(formattedImage);

            }
        }
    }

}
projects.display();

var education = {
    "schools": [{
        "name": "Udacity",
        "location": "Mountain View, CA",
        "degree": ["Certificate", "Nanodegree"],
        "major": ["Intro-to-CompSci", "Front-End-Web-Developer Nanodegree"],
        "graduated": ["2015", "2016"],

    }, {
        "name": "Troy University",
        "location": "Troy, AL",
        "degree": "BAS",
        "major": "Technologies and Resources Management",
        "graduated": "2009",

    }, {
        "name": "East Carolina University",
        "location": "Fayetteville, NC",
        "degree": "BAS (unfinished)",
        "major": "Industrial Technologies",
        "graduated": "1995-1996",
    }, {
        "name": "Huntingdon College",
        "location": "Montgomery, AL",
        "degree": "BS (unfinished)",
        "major": "Mathematics",
        "graduated": "1988-1991",
    }, ],

    "onlineCourses": [

        {
            "title": "eTroy",
            "school": "Troy University",
            "dates": "2007-2009",
            "url": "http://www.troy.edu/etroy/"

        }, {
            "title": "Intro-to-CompSci",
            "school": "Udacity",
            "dates": "2014-2015",
            "url": "https://www.udacity.com/course/viewer#!/c-cs101/"

        }, {
            "title": "How to use Gig and GitHub",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/viewer#!/c-ud775"

        }, {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/viewer#!/c-ud304"

        }, {
            "title": "Programming Foundations with Python",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/viewer#!/c-ud036"

        }

    ]

}

function displayeducation() {
    for (school in education.schools) {

        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].graduated);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);


        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedMajor);
    }

    $(".education-entry:last").append(HTMLonlineClasses);

    for (courses in education.onlineCourses) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[courses].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[courses].school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[courses].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[courses].url);
        $(".education-entry:last").append(formattedURL);
    }

}
displayeducation();


function locationizer(work_obj) {
    var locationArray = [];
    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

function inName(name) {

    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];

}
$("#main").append(internationalizeButton)

$("#mapDiv").append(googleMap);