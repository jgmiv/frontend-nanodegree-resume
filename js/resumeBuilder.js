var bio = {
"name": "James McCoy",
"role": "Web Developer",
"contacts": {
    "mobile": "205-331-0758",
    "email": "jgmchris@bellsouth.net",
    "github": "https://github.com/jgmiv",
    "twitter": "https://twitter.com",
    "blog": "https://blog.com",
    "location": "Cottondale, AL"
},

"welcomeMessage": "Hello World!  Watch out, here I come!",
"skills": ["Electronics","Designer","Engineering","Maintenance"],
"biopic": "http://jimbarry.net/JamesMcCoy.jpg?zoom=2&amp;resize=300%2C300",

};

bio.display = function() {

if (bio.skills.length) {

$("#header").append(HTMLskillsStart);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);

}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

// $("#header");
$("#header").prepend(HTMLcontactsStart)
.prepend(formattedMessage)
.prepend(formattedPic)
.prepend(formattedRole)
.prepend(formattedName);

$("#topContacts")
.prepend(formattedLocation)
.prepend(formattedBlog)
.prepend(formattedGithub)
.prepend(formattedTwitter)
.prepend(formattedEmail)
.prepend(formattedMobile);

$("#footerContacts").append(formattedMobile)
.append(formattedEmail)
.append(formattedTwitter)
.append(formattedGithub)
.append(formattedBlog)
.append(formattedLocation);

}

bio.display();

var work = {

"jobs": [{
    "title": "MGR OSP ENG & DSGN",
    "employer": "AT&T",
    "dates": "2015-Present",
    "location": "Cottondale, AL",
    "description": "Design placement of facilities using CAD."

}, {
    "title": "MGR OSP ENG & DSGN (Planner)",
    "employer": "AT&T",
    "dates": "2012-2015",
    "location": "Birmingham, AL",
    "description": "Managed the capital budget for replacing high trouble areas within copper facilities for the State of Alabama."

}, {
    "title": "MGR OSP CON & ENG",
    "employer": "AT&T",
    "dates": "2011-2012",
    "location": "Birmingham, AL",
    "description": "Supervised a crew of 18 Technicians.  Overseeing the replacement and repair of copper facilities."
}, {
    "title": "Facility Technician",
    "employer": "AT&T",
    "dates": "2008-2011",
    "location": "Montgomery, AL",
    "description": "Isolated and repaired troubles in copper facilities, spliced copper facilities, maintained air pressure on undrground facilities."
}, {
    "title": "MGR OSP CON & ENG (PCS Relieving)",
    "employer": "BellSOUTH",
    "dates": "2007",
    "location": "Prattville, AL",
    "description": "Plant Contract Supervisor over cable placing contractors."
}, {
    "title": "MGR OSP ENG & DSGN (Relieving)",
    "employer": "BellSOUTH",
    "dates": "2007",
    "location": "Prattville, AL",
    "description": "Designed facility placement using CAD."
}, {
    "title": "Services Technician",
    "employer": "BellSOUTH",
    "dates": "1999-2008",
    "location": "Prattville, AL",
    "description": "Installed and repaired telephone services."
}, {
    "title": "Maintenance",
    "employer": "Big Lots Wharehouses",
    "dates": "1998-1999",
    "location": "Montgomery, AL",
    "description": "Maintained a computer based conveyor system."
}, {
    "title": "Maintenance",
    "employer": "PMAg (SweetLix)",
    "dates": "1997-1998",
    "location": "Montgomery, AL",
    "description": "Maintained several machines, electrically and mechanically, used in production of feed for cattle"
}, {
    "title": "Guidance and Control Technician",
    "employer": "USAF",
    "dates": "1993-2001",
    "location": "Fayetteville, NC",
    "description": "Maintained variuos systems required for flight on a C-130 aircraft"
}]
};

work.display = function () {
var len = work.jobs.length;
for (var i = 0; i < len; i++) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(formattedEmployerTitle)
    .append(formattedDates)
    .append(formattedLocation)
    .append(formattedDescription);
}

}
work.display();


var projects = {

"projects": [{
    "title": "Webmockup",
    "dates": "2015",
    "description": "Created a responsive web site utilizing the mobile first approach.",
    "images": ["images/intotheteam.jpg", "images/intotheteam.jpg"]
}, {
    "title": "About Me",
    "dates": "2015",
    "description": "Created a web site that tells just a little bit about me.",
    "images": ["images/fry.jpg", "images/fry.jpg"]

}]
};

projects.display = function() {
var len = projects.projects.length;
for (var i = 0; i < len; i++) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    $(".project-entry:last").append(formattedTitle)
    .append(formattedDates)
    .append(formattedDescription);

    if (projects.projects[i].images.length > 0) {

        for (var image in projects.projects[i].images) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
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
    "majors": ["Intro-to-CompSci", "Front-End-Web-Developer Nanodegree"],
    "dates": "2015-2016",
    "url": "https://www.udacity.com",

}, {
    "name": "Troy University",
    "location": "Troy, AL",
    "degree": "BAS",
    "majors": ["Technologies and Resources Management"],
    "dates": "2009",
    "url": "http://www.troy.edu/",

}, {
    "name": "East Carolina University",
    "location": "Fayetteville, NC",
    "degree": "BAS (unfinished)",
    "majors": ["Industrial Technologies"],
    "dates": "1995-1996",
    "url": "http://www.ecu.edu/"
}, {
    "name": "Huntingdon College",
    "location": "Montgomery, AL",
    "degree": "BS (unfinished)",
    "majors": ["Mathematics"],
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
        "date": "2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud775"

    }, {
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "date": "2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud304"

    }, {
        "title": "Programming Foundations with Python",
        "school": "Udacity",
        "date": "2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud036"

    }

]

};

education.display = function () {
var len = education.schools.length;
for (var i = 0; i < len; i++)  {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedNameDegree = formattedName + formattedDegree;
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
    var formattedURL = HTMLonlineURL.replace("%data%", education.schools[i].url);
    $(".education-entry:last").append(formattedNameDegree)
    .append(formattedDates)
    .append(formattedLocation)
    .append(formattedMajor)
    .append(formattedURL);
}

$(".education-entry:last").append(HTMLonlineClasses);
var len = education.onlineCourses.length;
for (var i = 0; i < len; i++)  {
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
    var formattedTitleSchool = formattedTitle + formattedSchool;
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
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