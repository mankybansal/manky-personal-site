import React, { useState } from "react";
import Link from "next/link";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Project from "../components/Project";

import { skills } from "../data/skills";
import { socials } from "../data/socials";
import { projects } from "../data/projects";
import { experiences } from "../data/experiences";
import { education } from "../data/education";
import Education from "../components/Education";
import { routes } from "../routes";
import MediumArticles from "../components/MediumArticles";

const LandingContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px);

  background: url("/images/IMG_20180521_102454_998.jpg") no-repeat;
  background-size: 100% auto;

  overflow: hidden;
  position: relative;

  @media (max-width: 576px) {
    background-size: auto 100%;
    background-position-x: -100px;
  }
`;

const LandingContainerInner = styled.div`
  display: flex;
  min-width: 200px;
  padding: 100px;
  justify-content: center;
  width: 100%;
  position: relative;
  z-index: 1;
  height: calc(100vh - 80px);

  @media (max-width: 576px) {
    padding: 25px;
    flex-direction: column;
    backdrop-filter: blur(10px);
  }
`;

const LandingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LandingTitleBase = styled.div`
  text-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
  color: #333;
  font-weight: 400;
`;

const LandingTitle = styled(LandingTitleBase)`
  display: inline-block;
  min-width: 10px;
  min-height: 10px;
  font-size: 36px;
  @media (max-width: 576px) {
    font-size: 24px;
    margin-top: 16px;
  }
`;

const LandingName = styled(LandingTitleBase)<{ bold?: boolean }>`
  font-size: 65px;
  letter-spacing: 5px;
  font-weight: ${(props) => (props.bold ? 700 : 400)};

  :not(:first-of-type) {
    margin-left: 4px;
  }

  @media (max-width: 576px) {
    font-size: 40px;
    :not(:first-of-type) {
      margin-left: 0 !important;
    }
  }
`;

const ExperienceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const UnderlinedLink = styled.a`
  font-weight: 600;
  text-decoration: underline !important;
`;

const ImagesContainer = styled.div`
  width: 100%;
  max-height: 400px;
  display: flex;
  justify-content: center;
  img {
    :not(:first-of-type) {
      margin-left: 16px;
    }
  }

  @media (max-width: 576px) {
    flex-direction: column;
    max-height: unset;

    img {
      :not(:first-of-type) {
        margin-left: 0;
        margin-top: 16px;
      }
    }
  }
`;

const ImageContainer = styled.img`
  max-height: 400px;
  height: 100%;

  @media (max-width: 576px) {
    height: auto;
    width: 100%;
  }
`;

const TextContainer = styled.div`
  font-size: 20px;
  margin: 50px auto;
  max-width: 600px;
  line-height: 28px;
  font-weight: 300;
  text-align: left;
`;

const SectionContainer = styled.div<{
  variableHeight?: boolean;
  whiteOverride?: boolean;
}>`
  width: 100%;
  padding: 50px;
  background: white;
  display: inline-block;
  border-top: 1px solid #eee;

  :nth-of-type(even) {
    background: #fafafa;
  }

  min-height: ${({ variableHeight }) => (variableHeight ? "unset" : "100vh")};
  background: ${({ whiteOverride }) =>
    whiteOverride ? "white !important" : "initial"};

  @media (max-width: 576px) {
    padding: 25px 16px;
  }
`;

const HandleText = styled.div`
  font-weight: 600;
  color: #eb9a3f;
  font-size: 16px;
  float: left;
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

const AboutMeText = styled.div`
  width: 700px;
  font-weight: 300;
  font-size: 24px;
  color: #555;
  line-height: 36px;
  text-align: left;
  margin-top: 60px;
  float: right;
  margin-right: 200px;

  @media (max-width: 576px) {
    margin-right: unset;
  }
`;

const AboutMeLogo = styled.div`
  margin: 50px 150px 0 150px;
  @media (max-width: 576px) {
    display: none;
  }
`;

const SkillGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  vertical-align: top;
  text-align: left;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const LandingNameContainer = styled.div`
  display: flex;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LandingLogo = styled.div`
  width: 270px;
  height: 200px;
`;

const PronunciationTooltip = styled.div<{ visible: boolean }>`
  position: absolute;
  margin-left: 70px;
  margin-top: ${(props) => (props.visible ? "-90px" : "-100px")};
  padding: 5px 25px 5px 25px;
  font-size: 15px;
  background: #eb9a3f;
  border-radius: 25px;
  color: white;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  transition: all ease-in-out 0.2s;
`;

const Home = () => {
  const [shouldShowPronunciation, setShouldShowPronunciation] = useState(false);

  return (
    <>
      <LandingContainer>
        <LandingContainerInner>
          <LandingContent>
            <LandingNameContainer>
              <LandingName bold>MAYANK</LandingName>
              <LandingName>BANSAL</LandingName>
            </LandingNameContainer>
            <LandingTitle>Lead Frontend Engineer + Designer</LandingTitle>
            <br />
            <div style={{ display: "flex" }}>
              <a
                href="https://www.facebook.com/MankyBansal"
                target="_blank"
                rel="noreferrer"
              >
                <i className={`fab fa-facebook ${styles.socialIcons}`} />
              </a>
              <a
                href="https://www.instagram.com/MankyBansal"
                target="_blank"
                rel="noreferrer"
              >
                <i className={`fab fa-instagram ${styles.socialIcons}`} />
              </a>
              <a
                href="https://www.twitter.com/MankyBansal"
                target="_blank"
                rel="noreferrer"
              >
                <i className={`fab fa-twitter ${styles.socialIcons}`} />
              </a>
              <a
                href="https://www.dribbble.com/MankyBansal"
                target="_blank"
                rel="noreferrer"
              >
                <i className={`fab fa-dribbble ${styles.socialIcons}`} />
              </a>
              <a
                href="https://www.linkedin.com/in/MankyBansal"
                target="_blank"
                rel="noreferrer"
              >
                <i className={`fab fa-linkedin ${styles.socialIcons}`} />
              </a>
              <a
                href="https://www.github.com/MankyBansal"
                target="_blank"
                rel="noreferrer"
              >
                <i className={`fab fa-github ${styles.socialIcons}`} />
              </a>
              <a
                href="https://www.medium.com/@MankyBansal"
                target="_blank"
                rel="noreferrer"
              >
                <i className={`fab fa-medium ${styles.socialIcons}`} />
              </a>
              <a href="mailto:hi@manky.me" target="_blank" rel="noreferrer">
                <i className={`fas fa-envelope ${styles.socialIcons}`} />
              </a>
            </div>
          </LandingContent>
          <div className={styles.mouse} />
        </LandingContainerInner>
      </LandingContainer>
      <Header />
      <SectionContainer id="about">
        <div className={styles.sectionTitle}>About Me</div>
        <hr className={styles.sectionHeaderDark} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <AboutMeLogo>
            <Image
              src="/images/Logo.png"
              width={200}
              height={315}
              alt={"Manky Logo — About Us"}
            />
          </AboutMeLogo>
          <AboutMeText>
            👋🏼 I&apos;m{" "}
            <span style={{ fontWeight: 700 }}>
              Mayank Bansal{" "}
              <span style={{ fontWeight: 500, marginRight: 4 }}>
                (मयंक बंसल)
              </span>
            </span>
            <i
              className={`fas fa-volume-up ${styles.pronounce}`}
              onClick={() => {
                setShouldShowPronunciation((p) => !p);
              }}
            />
            <PronunciationTooltip visible={shouldShowPronunciation}>
              My-unk Bun-sal
              <a
                href={
                  "https://translate.google.com/?sl=en&tl=hi&text=myUnk%20bunsal&op=translate"
                }
                rel="noreferrer"
                target={"_blank"}
                style={{ marginLeft: 16 }}
              >
                <i className={`fas fa-volume-up ${styles.pronounce2}`} />{" "}
                <b>Hear pronunciation</b>
              </a>
            </PronunciationTooltip>
            , a{" "}
            <span style={{ fontWeight: 600 }}>Senior Frontend Engineer</span>{" "}
            and self-taught <span style={{ fontWeight: 600 }}>Designer</span>{" "}
            with full-stack experience that loves to design and build products
            that solve challenging world-scale problems with careful user
            research, design, planning and strong engineering principles. I have
            a sharp eye for pixel-perfect detail.
            <br />
            <br />
            In my free time, you can find me mentoring, teaching, cooking or
            playing my guitar. I hope to use my interdisciplinary skills to help
            build a better and sustainable future.
            <br />
            <br />
            Currently an all-in-one employee at{" "}
            <UnderlinedLink href={"https://www.outgo.co"} target={"_blank"}>
              Outgo
            </UnderlinedLink>
            . Our mission is to build an all-in-one fintech solution for
            carriers. Previously at{" "}
            <UnderlinedLink href={"https://www.convoy.co,"} target={"_blank"}>
              Convoy
            </UnderlinedLink>{" "}
            and{" "}
            <UnderlinedLink href={"https://www.legalpad.io"} target={"_blank"}>
              Legalpad
            </UnderlinedLink>
            .
            <br />
            <br />
            <b>10 Facts About Me</b>
            <ul
              className={css`
                font-size: 20px;
                margin-left: -20px;
                margin-top: 0;
              `}
            >
              <li>
                Born in{" "}
                <UnderlinedLink
                  href={"https://en.wikipedia.org/wiki/Bangalore"}
                  target={"_blank"}
                >
                  Bengaluru
                </UnderlinedLink>{" "}
                <i className="fa fa-heart" />
              </li>
              <li>
                Personality type:{" "}
                <UnderlinedLink
                  href="https://www.16personalities.com/infj-personality"
                  target="_blank"
                  rel="noreferrer"
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
                  rel="noreferrer"
                >
                  boarding school
                </UnderlinedLink>
              </li>
              <li>I own 27,500+ Lego</li>
              <li>Webstorm &gt; VS Code (fight me)</li>
              <li>Chai &gt; Coffee (am I even a Seattleite?)</li>
              <li>Have an excellent credit score</li>
              <li>
                The U.S. government thinks I&apos;m{" "}
                <UnderlinedLink
                  href="https://www.uscis.gov/working-in-the-united-states/temporary-workers/o-1-visa-individuals-with-extraordinary-ability-or-achievement"
                  target="_blank"
                  rel="noreferrer"
                >
                  &quot;extraordinary&quot;
                </UnderlinedLink>
              </li>
              <li>I play percussive fingerstyle guitar 🎸</li>
            </ul>
          </AboutMeText>
        </div>
      </SectionContainer>

      <SectionContainer id="medium">
        <div className={styles.sectionTitle}>Posts</div>
        <hr className={styles.sectionHeaderDark} />
        <TextContainer>
          Sometimes, I write about social issues, personal life stories,
          technology and projects I&apos;ve worked on. Here are a few
          highlights:
        </TextContainer>

        <MediumArticles />
        <br />
        <br />
        <a
          href="https://medium.com/mankybansal"
          className={styles.resumeButton}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-medium" /> &nbsp; Visit my Blog
        </a>
        <br />
        <br />
      </SectionContainer>
      <SectionContainer id="education" variableHeight>
        <div className={styles.sectionTitle}>Education</div>
        <hr className={styles.sectionHeaderDark} />
        <ExperienceContainer>
          {education.map((education, idx) => (
            <Education
              key={`${education.institution}-${idx}`}
              education={education}
            />
          ))}
        </ExperienceContainer>
      </SectionContainer>
      <SectionContainer id="experience" variableHeight whiteOverride>
        <div className={styles.sectionTitle}>Experience</div>
        <hr className={styles.sectionHeaderDark} />
        <ExperienceContainer>
          {experiences.map((experience, idx) => (
            <Experience
              key={`${experience.name}-${idx}`}
              experience={experience}
            />
          ))}
        </ExperienceContainer>
      </SectionContainer>
      <SectionContainer id="projects" variableHeight>
        <div className={styles.sectionTitle}>Projects</div>
        <hr className={styles.sectionHeaderDark} />
        <TextContainer>
          Here are some side projects / code samples I&apos;ve worked on. Some
          of these projects may not have aged well, but hey... engineering
          involves an incremental learning process.
        </TextContainer>
        <ProjectsContainer>
          {projects.map((project, idx) => (
            <Project key={`${project.title}-${idx}`} project={project} />
          ))}
        </ProjectsContainer>
      </SectionContainer>
      <SectionContainer id="skills" variableHeight>
        <div className={styles.sectionTitle}>Technical Skills</div>
        <hr className={styles.sectionHeaderDark} />
        <TextContainer>
          Though I&apos;m a Frontend Engineer, my time is split 60/30/10
          frontend/backend/design. I like to work on high quality experiences
          from user research to launch.
        </TextContainer>
        <div className={styles.skillContainer}>
          {skills.map((skill, idx) => (
            <SkillGroup key={`${skill.title}-${idx}`}>
              <div className={styles.skillGroupTitle}>{skill.title}</div>
              {skill.items.map((item, idx) => (
                <div className={styles.skill} key={`${item.title}-${idx}`}>
                  <div className={styles.skillDetails}>
                    <div className={styles.skillTitle}>{item.title}</div>
                  </div>
                </div>
              ))}
            </SkillGroup>
          ))}
        </div>
      </SectionContainer>
      <SectionContainer id="volunteer" variableHeight>
        <div className={styles.sectionTitle}>Volunteer Work</div>
        <hr className={styles.sectionHeaderDark} />
        <TextContainer>
          I spend about 10-12 weekends a year volunteering for STEM programs.
          It&apos;s a great way to inspire kids to become engineers and work on
          the worlds toughest problems.
        </TextContainer>
        <TextContainer>
          <b>FIRST Robotics</b>
          <br />
          Over 500+ hours of event volunteering at FTC, FRC & FLL as Lead
          Scorekeeper, Field Management and Judge at the city, state, and world
          championship level. Former technical mentor for Illinois Tech
          Perspectives Math & Science Academy FRC Team 2709 - Iron Wolves (focus
          on robot programming, automation and game strategy) & multiple FLL
          teams.
          <br />
          <br />
          <a
            href="https://www.firstinspires.org/"
            className={styles.colorLink}
            target="_blank"
            rel="noreferrer"
          >
            https://firstinspires.org
          </a>
        </TextContainer>
        <ImagesContainer>
          <ImageContainer
            src={"/images/first-robotics.jpg"}
            alt="FIRST ROBOTICS"
            width={"auto"}
            height={"100%"}
          />
          <ImageContainer
            src={"/images/first-robotics-2.jpg"}
            alt="FIRST ROBOTICS 2"
            width={"auto"}
            height={"100%"}
          />
        </ImagesContainer>
        <TextContainer>
          <b>Google CS First</b>
          <br />
          Google CS First is an 8-week after-school computer science program for
          elementary schools. It uses MIT&apos;s Scratch programming language to
          teach basic CS principles with the help of short modules each with
          different focus and objective.
          <br />
          <br />
          <a
            href="https://csfirst.withgoogle.com/s/en/home"
            className={styles.colorLink}
            target="_blank"
            rel="noreferrer"
          >
            https://csfirst.withgoogle.com
          </a>
        </TextContainer>
      </SectionContainer>
      <SectionContainer id="contact" variableHeight>
        <div className={styles.sectionTitle}>Contact Me</div>
        <hr className={styles.sectionHeaderDark} />
        <TextContainer>
          Whether you want to hire me, collaborate, get some advice or just chat
          about mutual interests, please reach out!
        </TextContainer>
        <br />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link
            href={routes.meet}
            target="_blank"
            rel="noreferrer"
            className={styles.resumeButton}
            style={{ margin: 4 }}
          >
            <i className="fa fa-calendar-check" /> &nbsp; Schedule a 30-min
            Meeting
          </Link>
          <Link
            href={routes.resume}
            target="_blank"
            rel="noreferrer"
            className={styles.resumeButton}
            style={{ margin: 4 }}
          >
            <i className="fa fa-file-download" /> &nbsp; Download my Resume
          </Link>
        </div>
        <br />
        <br />
        <br />
        <span className={styles.segoeLight20}>
          <i className="fa fa-mobile-alt" />
          &nbsp; +1 (206) 588 — six three eight seven
        </span>
        <br />
        <br />
        <span className={styles.segoeLight20}>
          <i className="fa fa-envelope" />
          &nbsp; hi@manky.me
        </span>
        <br />
        <br />
        <TextContainer>
          If you found my help useful, you can buy me coffee ☕️.
        </TextContainer>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <a
            href="https://paypal.me/mankybansalUSA"
            className={styles.resumeButton}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-paypal" /> &nbsp; PayPal
          </a>
          <a
            href="https://venmo.com/u/mankybansal"
            className={styles.resumeButton}
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: 8 }}
          >
            <i className="fa fa-dollar-sign" /> &nbsp; Venmo
          </a>
        </div>
        <br />
        <br />
        <div className={styles.socialContainer}>
          {socials.map((social, idx) => (
            <a
              href={social.link}
              className={styles.contactLinks}
              target="_blank"
              rel="noreferrer"
              key={`${social.site}-${idx}`}
            >
              <i className={`fab fa-${social.site} ${styles.contactIcons}`} />
              <HandleText>/{social.handle}</HandleText>
            </a>
          ))}
        </div>
      </SectionContainer>
      <SectionContainer id="footer" variableHeight>
        <Image
          src={"/images/Logo.png"}
          width={100}
          height={157}
          alt={"Manky Logo"}
        />
        <br />
        <br />
        <div className={styles.segoeLight17}>
          <div>
            Handmade with <i className="fa fa-heart" /> in <b>Seattle, WA</b>{" "}
            using <b>Next.js</b> and{" "}
            <a href="https://vercel.com" target="_blank" rel="noreferrer">
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
          <b>
            &copy; {new Date().getFullYear()} Mayank Bansal. All Rights
            Reserved.
          </b>
        </div>
      </SectionContainer>
    </>
  );
};

export default Home;
