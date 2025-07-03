import React from 'react';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img
} from './ProjectsStyles';

import {
  Section,
  SectionDivider,
  SectionTitle
} from '../../styles/GlobalComponents';

import projectData from '../../JSON data/projectData.json';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projectData.projects.map((p, i) => (
        <BlogCard key={i}>
          <Img src={p.image} alt={p.title} />
          <TitleContent>
            <HeaderThree title>{p.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{p.description}</CardInfo>
          <div>
            <HeaderThree>Tech Stack</HeaderThree>
            <TagList>
              {p.tags.map((t, i) => (
                <Tag key={i}>{t},</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            {p.visit && <ExternalLinks href={p.visit} target="_blank" rel="noopener noreferrer">
              Code
            </ExternalLinks>}
            {p.source&&<ExternalLinks href={p.source} target="_blank" rel="noopener noreferrer">
              Live Demo
            </ExternalLinks>}
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
