import styles from "../styles/Home.module.css";
import { css } from "@emotion/css";
import { useEffect } from "react";
import Experience from "../components/Experience";
import styled from "@emotion/styled";
import Header from "../components/Header";
import Image from "next/image";
import Project from "../components/Project";

import { skills } from "../data/skills";
import { socials } from "../data/socials";
import { projects } from "../data/projects";

const ExperienceContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const UnderlinedLink = styled.a`
  font-weight: 600;
  text-decoration: underline !important;
`;

const SectionContainer = styled.div`
  width: 100%;
  padding: 50px;
  background: white;
  display: inline-block;
  border-top: 1px solid #eee;

  :nth-child(even) {
    background: #fafafa;
  }

  min-height: ${({ variableHeight }) => (variableHeight ? "unset" : "100vh")};
  background: ${({ whiteOverride }) =>
    whiteOverride ? "white !important" : "initial"};
`;

export default function Index() {
  useEffect(() => {
    window.MediumWidget.Init({
      renderTo: "#medium-widget",
      params: {
        resource: "https://medium.com/@mankybansal",
        postsPerLine: 2,
        limit: 4,
        picture: "big",
        fields: ["description", "author", "claps", "publishAt"],
        ratio: "landscape",
      },
    });

    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-162415812-1");
  }, []);

  return (
    <>
      <div className={styles.landingContainer}>
        <div className={styles.landingContainerInner}>
          <Image src="/images/Layer%201.png" width={270} height={200} />
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              margin-left: 100px;
            `}
          >
            <div style={{ display: "flex" }}>
              <span className={styles.landingName} style={{ fontWeight: 700 }}>
                MAYANK
              </span>
              <span className={styles.landingName}>&nbsp;BANSAL</span>
            </div>
            <div className={styles.landingTitle}>
              Full Stack Engineer + Designer
            </div>

            <br />

            <div style={{ display: "flex" }}>
              <a href="https://www.facebook.com/MankyBansal" target="_blank">
                <i className={`fab fa-facebook ${styles.socialIcons}`} />
              </a>
              <a href="https://www.instagram.com/MankyBansal" target="_blank">
                <i className={`fab fa-instagram ${styles.socialIcons}`} />
              </a>
              <a href="https://www.twitter.com/MankyBansal" target="_blank">
                <i className={`fab fa-twitter ${styles.socialIcons}`} />
              </a>
              <a href="https://www.dribbble.com/MankyBansal" target="_blank">
                <i className={`fab fa-dribbble ${styles.socialIcons}`} />
              </a>
              <a href="https://www.linkedin.com/in/MankyBansal" target="_blank">
                <i className={`fab fa-linkedin ${styles.socialIcons}`} />
              </a>
              <a href="https://www.github.com/MankyBansal" target="_blank">
                <i className={`fab fa-github ${styles.socialIcons}`} />
              </a>
              <a href="https://www.medium.com/@MankyBansal" target="_blank">
                <i className={`fab fa-medium ${styles.socialIcons}`} />
              </a>
              <a href="mailto:manky.bansal@gmail.com" target="_blank">
                <i className={`fas fa-envelope ${styles.socialIcons}`} />
              </a>
            </div>
          </div>
          <div className={styles.mouse} />
        </div>
      </div>
      <Header />
      <SectionContainer id="about">
        <div className={styles.sectionTitle}>About Me</div>
        <hr className={styles.sectionHeaderDark} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ margin: "50px 150px 0 150px" }}>
            <Image src="/images/Logo.png" width={200} height={315} />
          </div>
          <div className={styles.aboutMeText}>
            👋🏼 I'm <span style={{ fontWeight: 700 }}>Mayank Bansal</span>
            <i className={`fas fa-volume-up ${styles.pronounce}`} />
            <div className={styles.pronounceTooltip}>
              <i className={`fas fa-volume-up ${styles.pronounce2}`} />{" "}
              <b>my-YUNGK BUN-sel</b>
            </div>
            , a 25 year-old{" "}
            <span style={{ fontWeight: 600 }}>Software Engineer</span> and
            self-taught <span style={{ fontWeight: 600 }}>Designer</span> that
            loves to design and build products that solve challenging
            world-scale problems with careful user research, design, planning
            and strong engineering principles. I have a sharp eye for
            pixel-perfect detail.
            <br />
            <br />
            In my free time, you can find me mentoring, teaching, cooking or
            playing my guitar. I hope to use my interdisciplinary skills to help
            build a better and sustainable future.
            <br />
            <br />
            Currently an engineer at{" "}
            <UnderlinedLink href={"www.convoy.com"} target={"_blank"}>
              Convoy
            </UnderlinedLink>
            , a freight and logistics company that wants to transport the world
            with endless capacity and zero waste. <br />
            <br />
            <b>Facts</b>
            <ul
              className={css`
                font-size: 20px;
                margin-left: -20px;
                margin-top: 0;
              `}
            >
              <li>
                Born in Bengaluru <i className="fa fa-heart" />
              </li>
              <li>
                Personality type:{" "}
                <UnderlinedLink
                  href="https://www.16personalities.com/infj-personality"
                  target="_blank"
                >
                  INF-J
                </UnderlinedLink>
              </li>
              <li>Left-handed (yes, ink smears everywhere)</li>
              <li>
                Went to a beautiful{" "}
                <UnderlinedLink
                  href="https://www.thelawrenceschool.org/"
                  target="_blank"
                >
                  boarding school
                </UnderlinedLink>
              </li>
              <li>I own 20,000+ Lego</li>
              <li>Webstorm > VS Code (fight me)</li>
              <li>Chai > Coffee (am I even a Seattleite?)</li>
              <li>Have an excellent credit score</li>
            </ul>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer id="medium">
        <div className={styles.sectionTitle}>Posts</div>
        <hr className={styles.sectionHeaderDark} />
        <div id="medium-widget" />
      </SectionContainer>
      <SectionContainer id="education" variableHeight>
        <div className={styles.sectionTitle}>Education</div>
        <hr className={styles.sectionHeaderDark} />
        <ExperienceContainer>
          <Experience
            image={"/images/IIT.png"}
            name={"Illinois Institute of Technology"}
            imageHeight={"100px"}
            year={"2017 - 2018, Chicago, Illinois"}
            city={"Cum Laude, Dean's List, Scholarship, Finished Early"}
            details={"3.65/4.00 GPA, B.S. Computer Science"}
          />
          <Experience
            image={"/images/manipal.png"}
            name={"Manipal University"}
            imageHeight={"100px"}
            year={"2014 - 2016, Manipal, Karnataka"}
            city={" Two Year Transfer"}
            details={"B.S. Computer Science"}
          />
        </ExperienceContainer>
      </SectionContainer>
      <SectionContainer id="experience" variableHeight whiteOverride>
        <div className={styles.sectionTitle}>Experience</div>
        <hr className={styles.sectionHeaderDark} />
        <ExperienceContainer>
          <Experience
            image={"/images/C-Block.svg"}
            name={"Convoy, Inc."}
            imageHeight={"50px"}
            year={"2019 - Present"}
            city={"Seattle, Washington"}
            details={"Software Engineer II"}
          />
          <Experience
            image={"/images/legalpad.png"}
            name={"Legalpad, Inc."}
            imageHeight={"70px"}
            year={"2018 - 2019"}
            city={"Seattle, Washington"}
            details={"Software Engineer + Designer"}
          />
        </ExperienceContainer>
      </SectionContainer>
      <SectionContainer id="projects" variableHeight>
        <div className={styles.sectionTitle}>Projects</div>
        <hr className={styles.sectionHeaderDark} />
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
          }}
        >
          {projects.map((project, idx) => (
            <Project
              key={`${project.title}-${idx}`}
              title={project.title}
              subtitle={project.subtitle}
              demoLink={project.demoLink}
              imageUrl={project.imageUrl}
              videoUrl={project.videoUrl}
              height={project.height}
              width={project.width}
            />
          ))}
        </div>
      </SectionContainer>
      <SectionContainer id="skills" variableHeight>
        <div className={styles.sectionTitle}>Technical Skills</div>
        <hr className={styles.sectionHeaderDark} />
        <div className={styles.skillContainer}>
          {skills.map((skill, idx) => (
            <div className={styles.skillGroup} key={`${skill.title}-${idx}`}>
              <div className={styles.skillGroupTitle}>{skill.title}</div>
              {skill.items.map((item, idx) => (
                <div className={styles.skill} key={`${item.title}-${idx}`}>
                  <div className={styles.skillDetails}>
                    <div className={styles.skillTitle}>{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </SectionContainer>
      <SectionContainer id="volunteer" variableHeight>
        <div className={styles.sectionTitle}>Volunteer Work</div>
        <hr className={styles.sectionHeaderDark} />
        <div
          className={`
            ${styles.segoeLight20} ${css`
            margin: 50px auto;
            max-width: 600px;
            line-height: 28px;
            font-weight: 300;
            text-align: left;
          `}`}
        >
          I spend about 10-12 weekends a year volunteering for STEM programs.
          It's a great way to inspire kids to become engineers and work on the
          worlds toughest problems.
        </div>
        <div
          className={`
            ${styles.segoeLight20} ${css`
            margin: 50px auto;
            max-width: 600px;
            line-height: 28px;
            font-weight: 300;
            text-align: left;
          `}`}
        >
          <b>FIRST Robotics</b>
          <br />
          Over 500+ hours of event volunteering at FTC, FRC & FLL as Lead
          Scorekeeper, Field Management and Judge at the city, state, and world
          championship level. Former technical mentor for Illinois Tech
          Perspectives Math & Science Academy FRC Team 2709 - Iron Wolves (focus
          on robot programming, automation and game strategy).
          <br />
          <br />
          <a
            href="https://www.firstinspires.org/"
            className={styles.colorLink}
            target="_blank"
          >
            https://firstinspires.org
          </a>
        </div>
        <div
          className={`
            ${styles.segoeLight20} ${css`
            margin: 50px auto;
            max-width: 600px;
            line-height: 28px;
            font-weight: 300;
            text-align: left;
          `}`}
        >
          <b>Google CS First</b>
          <br />
          Google CS First is an 8-week after-school computer science program for
          elementary schools. It uses MIT's Scratch programming language to
          teach basic CS principles with the help of short modules each with
          different focus and objective.
          <br />
          <br />
          <a
            href="https://csfirst.withgoogle.com/s/en/home"
            className={styles.colorLink}
            target="_blank"
          >
            https://csfirst.withgoogle.com
          </a>
        </div>
      </SectionContainer>
      <SectionContainer id="github" variableHeight>
        <div className={styles.sectionTitle}>GitHub</div>
        <hr className={styles.sectionHeaderDark} />
        <span className={styles.segoeLight20}>
          Things I'm working on - Coming Soon
        </span>
        <br />
        <br />
        <br />
        <br />
        <a
          href="https://github.com/mankybansal"
          className={styles.resumeButton}
          target="_blank"
        >
          <i className="fab fa-github" /> &nbsp; Visit my GitHub
        </a>
        <br />
        <br />
      </SectionContainer>
      <SectionContainer id="dribbble" variableHeight>
        <div className={styles.sectionTitle}>Dribbble</div>
        <hr className={styles.sectionHeaderDark} />
        <span className={styles.segoeLight20}>
          Things I've designed - Coming Soon
        </span>
        <br />
        <br />
        <br />
        <br />
        <a
          href="https://dribbble.com/mankybansal"
          className={styles.resumeButton}
          target="_blank"
        >
          <i className="fab fa-dribbble" /> &nbsp; Visit my Dribbble
        </a>
        <br />
        <br />
      </SectionContainer>
      <SectionContainer id="instagram" variableHeight>
        <div className={styles.sectionTitle}>Instagram</div>
        <hr className={styles.sectionHeaderDark} />
        <span className={styles.segoeLight20}>A peak into my world</span>
        <br />
        <br />
        <div id="instafeed" />
        <br />
        <br />
        <br />
        <a
          href="https://instagram.com/mankybansal"
          className={styles.resumeButton}
          target="_blank"
        >
          <i className="fab fa-instagram" /> &nbsp; Visit my Instagram
        </a>
        <br />
        <br />
      </SectionContainer>
      <SectionContainer id="contact" variableHeight>
        <div className={styles.sectionTitle}>Contact Me</div>
        <hr className={styles.sectionHeaderDark} />
        <br />
        <span className={styles.segoeLight20}>
          <i className="fa fa-mobile-alt" />
          &nbsp; +1 (312) 593 - two four six five
        </span>
        <br />
        <br />
        <span className={styles.segoeLight20}>
          <i className="fa fa-envelope" />
          &nbsp; manky.bansal[at]gmail[dot]com
        </span>

        <br />
        <br />
        <br />
        <br />
        <a href="/resume" className={styles.resumeButton} target="_blank">
          <i className="fa fa-file-download" /> &nbsp; Download my Resume
        </a>
        <br />
        <br />

        <div className={styles.socialContainer}>
          {socials.map((social, idx) => (
            <a
              href={social.link}
              className={styles.contactLinks}
              target="_blank"
              key={`${social.site}-${idx}`}
            >
              <i className={`fab fa-${social.site} ${styles.contactIcons}`} />
              <div className={styles.handleText}>/{social.handle}</div>
            </a>
          ))}
        </div>
      </SectionContainer>
      <SectionContainer id="footer" variableHeight>
        <Image src={"/images/Logo.png"} width={100} height={157} />
        <br />
        <br />
        <div className={styles.segoeLight17}>
          <div>
            Handmade with <i className="fa fa-heart" /> in <b>Seattle, WA</b>{" "}
            using <b>NextJS</b> and{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/vercel.svg"}
                alt="Vercel Logo"
                height={16}
                width={70}
                className={styles.vercelLogo}
              />
            </a>
          </div>
          <br />
          <b>&copy; 2021 Mayank Bansal. All Rights Reserved.</b>
        </div>
      </SectionContainer>
    </>
  );
}
