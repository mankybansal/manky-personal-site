import React, { useEffect, useState } from "react";
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
import { RandomFacts } from "../components/RandomFacts";
import {
  GlassyButton,
  SectionTitle,
  ShimmerButton,
} from "../components/Common";

const ActionButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin: 24px 0;
`;

const Divider = styled.hr`
  width: 60px;
  border: none;
  height: 1px;
  background: #ddd;
  margin: 32px auto;
`;

const ContactInfo = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 8px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  max-width: 500px;
  justify-content: center;
  margin-top: 32px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #444;
  text-decoration: none;
  transition: color 0.2s ease;

  i {
    font-size: 18px;
    margin-right: 8px;
    color: #eb9a3f;
  }

  &:hover {
    color: #eb9a3f;
  }
`;

const HandleText = styled.span`
  font-weight: 500;
`;

const LandingContainer = styled.div`
  position: relative;
  height: 100vh;
  background-color: #f5f3ef;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url("/images/cardboard-texture.jpg") repeat;
    opacity: 0.15;
    z-index: 0;
    pointer-events: none;
  }
`;

const LandingCard = styled.div`
  position: relative;
  width: 90%;
  max-width: 1080px;
  aspect-ratio: 4/3;
  border-radius: 48px;
  overflow: hidden;
  box-shadow: 0 40px 160px rgba(0, 0, 0, 0.5);
  transition: transform 0.1s ease;

  @media (max-width: 576px) {
    aspect-ratio: 9/16;
  }
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  height: 100%;
  padding: 64px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6) 10%,
    rgba(0, 0, 0, 0) 60%
  );

  @media (max-width: 576px) {
    padding: 48px;
  }
`;

const LandingName = styled.h1`
  font-family: "Cormorant Garamond", serif;
  color: white;
  font-size: 60px;
  font-weight: 700;
  margin: 0 0 8px 0;

  @media (max-width: 576px) {
    font-size: 40px;
  }
`;

const LandingTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  color: white;
  opacity: 0.8;
  font-weight: 300;
  margin: 0;

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

const ExperienceContainer = styled.div`
  display: flex;
  margin-top: 48px;
  justify-content: center;
  flex-flow: row wrap;
  gap: 16px;
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
}>`
  width: 100%;
  padding: 64px;
  display: flex;
  flex-direction: column;

  position: relative;
  min-height: ${({ variableHeight }) => (variableHeight ? "unset" : "100vh")};
  background-color: #f5f3ef;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url("/images/cardboard-texture.jpg") repeat;
    opacity: 0.15;
    z-index: 0;
    pointer-events: none;
  }

  @media (max-width: 576px) {
    padding: 25px 16px;
  }
`;

const AboutMeText = styled.div`
  max-width: 768px;
  width: 100%;
  font-weight: 300;
  font-size: 24px;
  color: #555;
  line-height: 36px;
  text-align: left;
  margin-top: 60px;

  @media (max-width: 576px) {
    margin-right: unset;
  }
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

const SkillGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-top: 2rem;
`;

const SkillCard = styled.div`
  width: 280px;
  background: #fffdf8;
  border: 1px solid #eee;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.2s ease;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  }
`;

const SkillHeader = styled.div`
  padding: 16px 20px;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ArrowIcon = styled.span<{ isOpen: boolean }>`
  transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0deg")});
  transition: transform 0.3s ease;
`;

const SkillList = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  padding: ${({ isOpen }) => (isOpen ? "0 20px 16px" : "0 20px")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  overflow: hidden;
  text-align: left;
  transition: all 0.3s ease;
`;

const SkillItem = styled.div<{ bold?: boolean }>`
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  font-size: 14px;
  padding: 4px 0;
  color: #444;
`;

const AlternatingBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 64px 0;
  max-width: 1000px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageBlock = styled.div<{ align: "left" | "right"; src: string }>`
  width: 50%;
  min-width: 300px;
  background-image: url(${({ src }) => `'${src}'`});
  background-size: cover;
  background-position: center;
  height: 300px;
  border-radius: 16px;
  margin: ${({ align }) => (align === "left" ? "0 32px 0 0" : "0 0 0 32px")};

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 0 24px 0;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  min-width: 280px;
  font-size: 18px;
  text-align: left;
  line-height: 1.6;
`;

const Home = () => {
  const [shouldShowPronunciation, setShouldShowPronunciation] = useState(false);

  useEffect(() => {
    const card = document.querySelector(".tilt-card");

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scale = 1 + Math.min(scrollTop / 1000, 0.3); // max 1.1x scale
      if (card) (card as HTMLElement).style.transform = `scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [skillsExpanded, setSkillsExpanded] = useState(false);

  return (
    <>
      <LandingContainer>
        <LandingCard className="tilt-card">
          <VideoBackground
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <ContentOverlay>
            <LandingName>Mayank Bansal</LandingName>
            <LandingTitle>Lead Frontend Engineer + Designer</LandingTitle>
            <GlassyButton href="#contact" style={{ marginTop: 48 }}>
              <span> Get In Touch</span>
            </GlassyButton>
          </ContentOverlay>
        </LandingCard>
      </LandingContainer>
      <Header />

      <SectionContainer id="about">
        <SectionTitle>About Me</SectionTitle>

        <AlternatingBlock>
          <ImageBlock align="left" src="images/first-robotics.jpg" />
          <TextBlock>
            👋🏼 I&#39;m <strong>Mayank Bansal</strong>{" "}
            <span style={{ fontWeight: 500 }}>(मयंक बंसल)</span>, a{" "}
            <strong>Lead Frontend Engineer</strong> and self-taught{" "}
            <strong>Designer</strong> with full-stack experience. I love
            crafting products that blend usability, aesthetics, and engineering
            principles — all shaped by research and care.
          </TextBlock>
        </AlternatingBlock>

        <AlternatingBlock>
          <TextBlock>
            I&#39;m currently building AI products at{" "}
            <UnderlinedLink href="https://www.openai.com" target="_blank">
              OpenAI
            </UnderlinedLink>
            . I would love to hear about how ChatGPT can help you be more
            productive at work!
            <br />
            <br />
            In the past, I’ve worked at{" "}
            <UnderlinedLink href="https://www.outgo.com" target="_blank">
              Outgo
            </UnderlinedLink>
            ,{" "}
            <UnderlinedLink href="https://www.convoy.co" target="_blank">
              Convoy
            </UnderlinedLink>
            , and{" "}
            <UnderlinedLink href="https://www.legalpad.io" target="_blank">
              Legalpad
            </UnderlinedLink>
            — all of which have gotten acquired.
          </TextBlock>
          <ImageBlock align="right" src="images/first-robotics.jpg" />
        </AlternatingBlock>

        <AlternatingBlock>
          <ImageBlock align="left" src="images/first-robotics.jpg" />

          <TextBlock>
            When I’m not working, I’m usually mentoring, cooking, playing
            guitar, or thinking about ways to make technology feel more human. I
            hope to use my skills to contribute to a more sustainable and
            equitable future.
          </TextBlock>
        </AlternatingBlock>

        <br />

        <RandomFacts />
      </SectionContainer>

      <SectionContainer id="medium">
        <SectionTitle>Writings</SectionTitle>

        <TextContainer>
          Sometimes, I write about social issues, personal life stories,
          technology and projects I&apos;ve worked on. Here are a few
          highlights:
        </TextContainer>

        <MediumArticles />
        <br />
        <br />
        <a
          href="https://mankybansal.medium.com/"
          className={styles.resumeButton}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-medium" /> &nbsp; Visit my Blog
        </a>
        <br />
        <br />
      </SectionContainer>

      <SectionContainer id="experience" variableHeight>
        <SectionTitle>Experience & Education</SectionTitle>
        <ExperienceContainer>
          {experiences.map((experience, idx) => (
            <Experience
              key={`${experience.name}-${idx}`}
              experience={experience}
            />
          ))}
        </ExperienceContainer>
        <ExperienceContainer>
          {education.map((education, idx) => (
            <Education
              key={`${education.institution}-${idx}`}
              education={education}
            />
          ))}
        </ExperienceContainer>
      </SectionContainer>

      <SectionContainer id="projects" variableHeight>
        <SectionTitle>Projects</SectionTitle>

        <TextContainer>
          Here are some selected side projects / code samples I&apos;ve worked
          on. You can view all of them here:
        </TextContainer>
        <a
          href={routes.projects}
          className={styles.resumeButton}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fas fa-tools" /> &nbsp; See all projects
        </a>
        <ProjectsContainer style={{ marginTop: 64 }}>
          {projects.map((project, idx) => (
            <Project key={`${project.title}-${idx}`} project={project} />
          ))}
        </ProjectsContainer>
      </SectionContainer>
      <SectionContainer id="skills" variableHeight>
        <SectionTitle>Technical Skills</SectionTitle>

        <TextContainer>
          While my core focus is frontend engineering, my work often spans the
          full stack — roughly 60% frontend, 30% backend, and 10% design. I care
          deeply about crafting thoughtful, high-quality user experiences from
          initial research through to final launch, across both web and mobile.
          <br />
          <br />I also bring experience in{" "}
          <span style={{ fontWeight: 500 }}>
            internationalization (i18n)
          </span>, <span style={{ fontWeight: 500 }}>accessibility (a11y)</span>
          , <span style={{ fontWeight: 500 }}>motion design</span>,{" "}
          <span style={{ fontWeight: 500 }}>security</span>, and{" "}
          <span style={{ fontWeight: 500 }}>performance optimization</span>.
        </TextContainer>

        <SkillGroupContainer>
          {skills.map((skill, idx) => (
            <SkillCard key={idx}>
              <SkillHeader onClick={() => setSkillsExpanded((prev) => !prev)}>
                {skill.title}
                <ArrowIcon isOpen={skillsExpanded}>⌵</ArrowIcon>
              </SkillHeader>
              <SkillList isOpen={skillsExpanded}>
                {skill.items.map((item, i) => (
                  <SkillItem key={i} bold={item.bold}>
                    {item.title}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillGroupContainer>
      </SectionContainer>
      <SectionContainer id="volunteer" variableHeight>
        <SectionTitle>Volunteer Work</SectionTitle>

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
        <SectionTitle>Get In Touch</SectionTitle>

        <TextContainer>
          Whether you&#39;re exploring a collaboration, looking for advice, or
          just want to say hello — I&#39;d love to hear from you.
        </TextContainer>

        <ActionButtonRow>
          <ShimmerButton href={routes.meet}>
            <i className="fa fa-calendar-check" />
            &nbsp; Schedule a Chat
          </ShimmerButton>
          <ShimmerButton href={routes.resume} target="_blank" rel="noreferrer">
            <i className="fa fa-file-download" />
            &nbsp; View Resume
          </ShimmerButton>
        </ActionButtonRow>

        <Divider />

        <ContactInfo>
          <i className="fa fa-mobile-alt" />
          &nbsp; +1 (206) 588 — six three eight seven
        </ContactInfo>

        <ContactInfo>
          <i className="fa fa-envelope" />
          &nbsp; hi@manky.me
        </ContactInfo>

        <Divider />

        <SocialRow>
          {socials.map((social, idx) => (
            <SocialLink
              href={social.link}
              target="_blank"
              rel="noreferrer"
              key={`${social.site}-${idx}`}
            >
              <i className={`fab fa-${social.site}`} />
              <HandleText>/{social.handle}</HandleText>
            </SocialLink>
          ))}
        </SocialRow>
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
        <div>
          <div>
            Handmade with <i className="fa fa-heart" /> in <b>Seattle, WA</b>
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
