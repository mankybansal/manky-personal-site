const skills = [
    {
        title: "Frontend",
        items: [
            {title: 'REACT + REDUX', level: 4},
            {title: 'ANGULAR, RAILS', level: 3},
            {title: 'JAVASCRIPT, JQUERY', level: 5},
            {title: 'HTML5, CSS3, SASS', level: 5}
        ]
    }, {
        title: "Backend",
        items: [
            {title: 'MYSQL/SQL', level: 5},
            {title: 'NODE.JS + EXPRESS', level: 3},
            {title: 'MONGODB, FIREBASE', level: 3},
            {title: 'PHP', level: 4}
        ]
    }, {
        title: "Programming",
        items: [
            {title: 'C/C++', level: 4},
            {title: 'C#, ROBOTC, RUBY', level: 2.5},
            {title: 'JAVA', level: 3.5},
            {title: 'PYTHON', level: 4}
        ]
    }, {
        title: "Mobile Development",
        items: [
            {title: 'ANDROID', level: 4}
        ]
    }, {
        title: "Design & CAD",
        items: [
            {title: 'ADOBE PHOTOSHOP', level: 3.5},
            {title: 'ADOBE ILLUSTRATOR', level: 5},
            {title: 'SKETCHUP', level: 3.5}
        ]
    }, {
        title: "Platforms & Tools",
        items: [
            {title: 'Git, Jira', level: 0},
            {title: 'Selenium', level: 0},
            {title: 'Webpack', level: 0},
            {title: 'AWS, DigitalOcean, Docker', level: 0},
            {title: 'Jetbrains Tools', level: 0}
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
                                ${(item.level>0)?`
                                    <div class="skill-proficiency">
                                        ${`<div class="skill-circle"></div>`.repeat(Math.ceil(item.level / 5 * 7))}
                                        ${`<div class="skill-circle-o"></div>`.repeat(7 - Math.ceil(item.level / 5 * 7))}
                                    </div>
                                `:``}
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