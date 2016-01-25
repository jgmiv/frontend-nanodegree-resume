var name = "James McCoy";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

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
    "biopic": "http://jimbarry.net/JamesMcCoy.jpg?zoom=2&amp;resize=300%2C300",
    "welcome": "Hello World!  Watch out, here I come!",
    "skills": ["Electronics", "Designer", "Engineering", "Maintenance"]
};

bio.display = function() {

	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedPic);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcome);
	$("#header").append(formattedMessage);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.Mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.Email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);
	var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
	$("#topContacts").append(formattedBlog);
	$("#footerContacts").append(formattedBlog);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

}

bio.display();




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
        "dates": "2015-Present",
        "location": "Cottondale, AL",
        "description": "Designed placement of facilities using CAD."

    }, {
        "position": "MGR OSP ENG & DSGN (Planner)",
        "employer": "AT&T",
        "dates": "2012-2015",
        "location": "Birmingham, AL",
        "description": "Managed the capital budget for replacing high trouble areas within copper facilities for the State of Alabama."

    }, {
        "position": "MGR OSP CON & ENG",
        "employer": "AT&T",
        "dates": "2011-2012",
        "location": "Birmingham, AL",
        "description": "Supervised a crew of 18 Technicians.  Overseeing the replacement and repair of copper facilities."
    }, {
        "position": "Facility Technician",
        "employer": "AT&T",
        "dates": "2008-2011",
        "location": "Montgomery, AL",
        "description": "Isolated and repaired troubles in copper facilities, spliced copper facilities, maintained air pressure on undrground facilities."
    }, {
        "position": "MGR OSP CON & ENG (PCS Relieving)",
        "employer": "BellSOUTH",
        "dates": 2007,
        "location": "Prattville, AL",
        "description": "Plant Contract Supervisor over cable placing contractors."
    }, {
        "position": "MGR OSP ENG & DSGN (Relieving)",
        "employer": "BellSOUTH",
        "dates": 2007,
        "location": "Prattville, AL",
        "description": "Designed facility placement using CAD."
    }, {
        "position": "Services Technician",
        "employer": "BellSOUTH",
        "dates": "1999-2008",
        "location": "Prattville, AL",
        "description": "Installed and repaired telephone services."
    }, {
        "position": "Maintenance",
        "employer": "Big Lots Wharehouses",
        "dates": "1998-1999",
        "location": "Montgomery, AL",
        "description": "Maintained a computer based conveyor system."
    }, {
        "position": "Maintenance",
        "employer": "PMAg (SweetLix)",
        "dates": "1997-1998",
        "location": "Montgomery, AL",
        "description": "Maintained several machines, electrically and mechanically, used in production of feed for cattle"
    }, {
        "position": "Guidance and Control Technician",
        "employer": "USAF",
        "dates": "1993-2001",
        "location": "Fayetteville, NC",
        "description": "Maintained variuos systems required for flight on a C-130 aircraft"
    }]
};

work.display = function () {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployerTitle)
        .append(formattedDates)
        .append(formattedLocation)
        .append(formattedDescription);
    }

}
work.display();


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
	var len = projects.designs.length;
    for (var i = 0; i < len; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.designs[i].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.designs[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.designs[i].description);
        $(".project-entry:last").append(formattedTitle)
        .append(formattedDates)
        .append(formattedDescription);

        if (projects.designs[i].images.length > 0) {

            for (var image in projects.designs[i].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.designs[i].images[image]);
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
        "dates": ["2015", "2016"],
        "url": "https://www.udacity.com",

    }, {
        "name": "Troy University",
        "location": "Troy, AL",
        "degree": "BAS",
        "major": "Technologies and Resources Management",
        "dates": "2009",
        "url": "http://www.troy.edu/",

    }, {
        "name": "East Carolina University",
        "location": "Fayetteville, NC",
        "degree": "BAS (unfinished)",
        "major": "Industrial Technologies",
        "dates": "1995-1996",
        "url": "http://www.ecu.edu/"
    }, {
        "name": "Huntingdon College",
        "location": "Montgomery, AL",
        "degree": "BS (unfinished)",
        "major": "Mathematics",
        "dates": "1988-1991",
        "url": "http://www.huntingdon.edu/"
    }, ],

    "onlineCourses": [

        {
            "title": "eTroy",
            "school": "Troy University",
            "date": "2007-2009",
            "url": "http://www.troy.edu/etroy/"

        }, {
            "title": "Intro-to-CompSci",
            "school": "Udacity",
            "date": "2014-2015",
            "url": "https://www.udacity.com/course/viewer#!/c-cs101/"

        }, {
            "title": "How to use Gig and GitHub",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/viewer#!/c-ud775"

        }, {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/viewer#!/c-ud304"

        }, {
            "title": "Programming Foundations with Python",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/viewer#!/c-ud036"

        }

    ]

};

education.display = function () {
    for (var school in education.schools) {

        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameDegree = formattedName + formattedDegree;
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        var formattedURL = HTMLonlineURL.replace("%data%", education.schools[school].url);
        $(".education-entry:last").append(formattedNameDegree)
        .append(formattedDates)
        .append(formattedLocation)
        .append(formattedMajor)
        .append(formattedURL);
    }

    $(".education-entry:last").append(HTMLonlineClasses);

    for (courses in education.onlineCourses) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[courses].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[courses].school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[courses].date);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[courses].url);
        $(".education-entry:last").append(formattedTitleSchool)
		.append(formattedDates)
        .append(formattedURL);
    }

}

education.display();


function locationizer(work_obj) {
    var locationArray = [];
    for (var job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

$("#mapDiv").append(googleMap);