const ProjectsAPI = {
    projects: [
        {
            name: "MasterKey",
            description: "Universal authentication with data privacy controls and visualizations.",
            platform: "SKETCH + INVISION",
            type: "MOBILE  /  WEB",
            categories: ["Design", "UX"],
            images: ['/images/headshot.jpg'],
            date: 'SPRING 2018'
        },
        {
            name: "CrowdCheck",
            description: "A crowd-sourced solution for annotating and fact-checking the news.",
            platform: "ADOBE XD + JAVASCRIPT",
            type: "WEB",
            categories: ["Design", "UX"],
            images: ['/images/headshot.jpg'],
            date: 'SPRING 2018'
        },
        {
            name: "Guestbook",
            description: "Sign up for events to cook new recipes and meet new friends.",
            platform: "SKETCH + INVISION",
            type: "MOBILE",
            categories: ["Design", "UX"],
            images: ['/images/headshot.jpg'],
            date: 'SPRING 2018'
        }
    ],
    all: function() {return this.projects},
    get: function(name) {
        const isProject = (p) => p.name === name;
        return this.projects.find(isProject);
    }
};

export default ProjectsAPI;