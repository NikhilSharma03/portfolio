import React from "react";
import Container from "../../components/Container/Container";
import {
  ExperienceBox,
  ExperienceBoxContainer,
  ExperienceBoxLi,
  ExperienceBoxName,
  ExperienceBoxTimeline,
  ExperienceBoxTitle,
  ExperienceBoxUl,
  ExperienceHead,
  ExperienceMain,
} from "./Experience.style";
import SectionHead from "../../components/SectionHead/SectionHead";

const Skills: React.FC = () => {
  const experienceData = [
    {
      name: "HENNGE",
      title: "Software Engineer Intern",
      timeline: "Feb 2023 - Mar 2023",
      details: [
        "Implemented E2E tests for fzero application using TypeScript, Cucumberjs, Playwright",
        "Implemented Continuous Integration Pipeline for tests using CircleCI",
      ],
    },
    {
      name: "VELVET.CAPITAL",
      title: "Software Engineer Intern",
      timeline: "Nov 2022 - Jan 2023",
      details: [
        "Designed and Developed APIs for Velvet.Capital backend using Nodejs, Express, Docker, Moralis, MongoDB",
        "Implemented Continuous Integration/Deployment Pipeline using Github Actions",
        "Implemented UI features, Portfolio Performance Graph UI, and improved web responsiveness for Velvet.Capital web app using Reactjs, Redux, Recharts",
      ],
    },
    {
      name: "SOLANA LABS",
      title: "Software Engineer Fellow (MLH Fellowship)",
      timeline: "Jun 2022 - Aug 2022",
      details: [
        "Designed and Developed UI features for NFTCraft project using Nextjs, Redux, Canvas, styled-components",
        "Implemented landing page and UI features for frontend client for Hydra Wallet using NextJS, Tailwind",
        "Implemented UI features and the functionality to update NFTs metadata for NFT Mutator application using NextJS, Tailwind, Metaplex",
      ],
    },
    {
      name: "LAYER5",
      title: " LFX Mentee (The Linux Foundation Mentorship)",
      timeline: "Mar 2022 - May 2022",
      details: [
        "Implemented UI features for Meshery extension - Meshmap using ReactJS, Cytoscape, Material UI",
        "Migrated Meshery Cloud multi-page HTML/CSS website to NextJS application",
        "Designed and Developed community handbook landing page and improved web responsiveness forthe Layer5 website using ReactJS, styled-components",
        "Implemented enhancements that improved web functionality and responsiveness for Meshery, Getnighthawk, Service Mesh Performance websites using HTML and SCSS",
      ],
    },
    {
      name: "HENNGE",
      title: "Software Engineer Intern",
      timeline: "Mar 2022 - Apr 2022",
      details: [
        "Designed and Developed an full stack application using Golang, React, Redux, Redis from scratch that utilizes OAuth2, AWS S3, and Nginx",
        "Containerized the full stack application with Docker and Deployed it to AWS using Terraform",
      ],
    },
    {
      name: "LGMVIP",
      title: "Web Developer Intern",
      timeline: "Aug 2021 - Sept 2021",
      details: [
        "Designed and Developed an Student portal website using ReactJS and Redux from scratch",
        "Implemented REST API for Student portal in Node.js using ExpressJS framework and MongoDB database",
        "Received Letter Of Recommendation for my performance during the internship",
      ],
    },
    {
      name: "DEVINCEPT",
      title: "Open Source Developer",
      timeline: "July 2021 - Aug 2021",
      details: [
        "Worked on project LearnZilla using ReactJS, NodeJS, ExpressJS, MongoDB, and Mongoose",
        "Ranked #5 among 1000+ contributors in the one month program and got featured on program’s page",
      ],
    },
  ];

  return (
    <Container id="experience">
      <ExperienceMain>
        <ExperienceHead>
          <SectionHead>Work Experience & Open Source</SectionHead>
        </ExperienceHead>
        <ExperienceBoxContainer>
          {experienceData.map((item) => {
            return (
              <ExperienceBox key={item.name}>
                <ExperienceBoxName>{item.name}</ExperienceBoxName>
                <ExperienceBoxTitle>{item.title}</ExperienceBoxTitle>
                <ExperienceBoxTimeline>{item.timeline}</ExperienceBoxTimeline>
                <ExperienceBoxUl>
                  {item.details.map((det) => {
                    return <ExperienceBoxLi key={det}>{det}</ExperienceBoxLi>;
                  })}
                </ExperienceBoxUl>
              </ExperienceBox>
            );
          })}
        </ExperienceBoxContainer>
      </ExperienceMain>
    </Container>
  );
};

export default Skills;
