const skills = [
  {
    title: "Frontend",
    items: [
      { title: "React, Svelte, Angular", level: 4 },
      { title: "Apollo + GraphQL", level: 3 },
      { title: "Framer Motion", level: 4 },
      { title: "JavaScript", level: 5 },
      { title: "Emotion, SASS/CSS", level: 5 },
      { title: "Next.js, Rails", level: 3 },
      { title: "Mocha / Jest, Cypress", level: 3 },
    ],
  },
  {
    title: "Backend",
    items: [
      { title: "Node.js + Express", level: 4 },
      { title: "GraphQL, REST", level: 5 },
      { title: "Postgres, MySQL/SQL", level: 5 },
      { title: "MongoDb, Firebase", level: 3 },
    ],
  },
  {
    title: "Programming",
    items: [
      { title: "TypeScript", level: 4 },
      { title: "Python, C/C++, Java", level: 4 },
      { title: "C#, RobotC, Ruby", level: 2.5 },
    ],
  },
  {
    title: "Mobile",
    items: [
      { title: "Android", level: 4 },
      { title: "React Native", level: 4 },
    ],
  },
  {
    title: "Prototyping",
    items: [
      { title: "Adobe Illustrator, Photoshop", level: 5 },
      { title: "Sketch + Principle + Origami", level: 4 },
      { title: "Figma", level: 3.5 },
    ],
  },
];

const socials = [
  {
    link: "https://www.facebook.com/MankyBansal",
    site: "facebook",
    handle: "mankybansal",
  },
  {
    link: "https://www.instagram.com/MankyBansal",
    site: "instagram",
    handle: "mankybansal",
  },
  {
    link: "https://www.twitter.com/MankyBansal",
    site: "twitter",
    handle: "mankybansal",
  },
  {
    link: "https://www.dribbble.com/MankyBansal",
    site: "dribbble",
    handle: "mankybansal",
  },
  {
    link: "https://www.linkedin.com/in/MankyBansal",
    site: "linkedin",
    handle: "mankybansal",
  },
  {
    link: "https://www.github.com/MankyBansal",
    site: "github",
    handle: "mankybansal",
  },
  {
    link: "https://www.medium.com/@MankyBansal",
    site: "medium",
    handle: "mankybansal",
  },
];

$(document).ready(() => {
  $(".skill-container").append(`
        ${skills
          .map(
            (skill) => `
             <div class="skill-group">
                    <div class="skill-group-title">${skill.title}</div>
                    ${skill.items
                      .map(
                        (item) => `
                        <div class="skill">
                            <div class="skill-details">
                                <div class="skill-title">${item.title}</div>
                            </div>
                        </div>
                    `
                      )
                      .join("")}
                </div>
        `
          )
          .join("")}
    `);

  $(".social-container").append(`
        ${socials
          .map(
            (social) => `
            <a href="${social.link}" class="contact-links" target="_blank">
                <i class="fab fa-${social.site} contact-icons"></i>
                <div class="handle-text">/${social.handle}</div>
            </a>
        `
          )
          .join("")}
    `);
});

$(window).scroll(() => {
  let headerContainer = $(".header-container");

  if ($(window).scrollTop() >= headerContainer.offset().top) {
    $(".header, .header-link, .header-link-2").addClass("shrink");

    $(".cool").css({
      "margin-top": 0,
      opacity: 1,
    });
  }

  if ($(window).scrollTop() < headerContainer.offset().top) {
    $(".header, .header-link, .header-link-2").removeClass("shrink");

    $(".cool").css({
      "margin-top": 100,
      opacity: 0,
    });
  }
});
