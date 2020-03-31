const skills = [
    {
        title: "Frontend",
        items: [
            {title: 'HTML5, CSS3, SASS', level: 5},
            {title: 'REACT, REACT NATIVE', level: 4},
            {title: 'SVELTE, ANGULAR', level: 4},
            {title: 'APOLLO + GRAPHQL', level: 3},
            {title: 'JAVASCRIPT', level: 5},
            {title: 'NEXT.JS, RAILS', level: 3},
            {title: 'MOCHA / JEST,  CYPRESS', level: 3},

        ]
    }, {
        title: "Backend",
        items: [
            {title: 'NODE.JS + EXPRESS', level: 4},
            {title: 'MYSQL/SQL', level: 5},
            {title: 'MONGODB, FIREBASE', level: 3},
        ]
    }, {
        title: "Programming",
        items: [
            {title: 'PYTHON, C/C++', level: 4},
            {title: 'TypeScript', level: 4},
            {title: 'JAVA', level: 3.5},
            {title: 'C#, ROBOTC, RUBY', level: 2.5},
        ]
    }, {
        title: "Mobile Development",
        items: [
            {title: 'ANDROID', level: 4}
        ]
    }, {
        title: "Design Tools",
        items: [
            {title: 'ADOBE ILLUSTRATOR', level: 5},
            {title: 'SKETCH + Principle + Origami', level: 4},
            {title: 'ADOBE PHOTOSHOP', level: 3.5},
            {title: 'Figma', level: 3.5},
        ]
    }
];

const awards = [
    {
        position: 'HONORS',
        title: 'CUM LAUDE',
        awarded_by: 'ILLINOIS TECH',
        year: 2018
    }, {
        position: 'RUNNER UP',
        title: "ANGELHACK '17",
        awarded_by: 'BANGALORE',
        year: 2017
    }, {
        position: 'BEST USE OF BACKEND TECH',
        title: "SCARLETHACKS '17",
        awarded_by: 'MAJOR LEAGUE HACKING',
        year: 2017
    }, {
        position: 'RUNNER UP',
        title: 'DESIGNATHON',
        awarded_by: 'MIT MANIPAL',
        year: 2016
    }, {
        position: 'RUNNER UP',
        title: "CODE HEAT '16",
        awarded_by: 'MIT MANIPAL',
        year: 2016
    }, {
        position: 'NATIONAL FINALIST',
        title: 'MICROSOFT HACKATHON',
        awarded_by: 'MICROSOFT IDC',
        year: 2015
    },
];

const socials = [
    {
        link: "https://www.facebook.com/MankyBansal",
        site: "facebook",
        handle: "mankybansal"
    }, {
        link: "https://www.instagram.com/MankyBansal",
        site: "instagram",
        handle: "mankybansal"
    }, {
        link: "https://www.twitter.com/MankyBansal",
        site: "twitter",
        handle: "mankybansal"
    }, {
        link: "https://www.dribbble.com/MankyBansal",
        site: "dribbble",
        handle: "mankybansal"
    }, {
        link: "https://www.linkedin.com/in/MankyBansal",
        site: "linkedin",
        handle: "mankybansal"
    }, {
        link: "https://www.github.com/MankyBansal",
        site: "github",
        handle: "mankybansal"
    }, {
        link: "https://www.medium.com/@MankyBansal",
        site: "medium",
        handle: "mankybansal"
    },
];

$(document).ready(() => {
    $(".skill-container").append(`
        ${skills.map(skill => `
             <div class="skill-group">
                    <div class="skill-group-title">${skill.title}</div>
                    ${skill.items.map(item => `
                        <div class="skill">
                            <div class="skill-details">
                                <div class="skill-title">${item.title}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
        `).join('')}
    `);

    $(".award-container").append(`
        ${awards.map(award => `
            <div class="award">
                <div class="award-position">${award.position}</div>
                <div class="award-title">${award.title}</div>
                <div class="award-awarded-by">${award.awarded_by}</div>
                <div class="award-year">${award.year}</div>
            </div>
        `).join('')}
    `);

    $(".social-container").append(`
        ${socials.map(social => `
            <a href="${social.link}" class="contact-links" target="_blank">
                <i class="fab fa-${social.site} contact-icons"></i>
                <div class="handle-text">/${social.handle}</div>
            </a>
        `).join('')}
    `);
});

$(window).scroll(() => {

    let headerContainer = $(".header-container");

    if ($(window).scrollTop() >= headerContainer.offset().top) {
        $(".header, .header-link, .header-link-2").addClass('shrink');

        $(".cool").css({
            'margin-top': 0,
            'opacity': 1
        });
    }

    if (($(window).scrollTop()) < headerContainer.offset().top) {
        $(".header, .header-link, .header-link-2").removeClass('shrink');

        $(".cool").css({
            'margin-top': 100,
            'opacity': 0
        });
    }

});