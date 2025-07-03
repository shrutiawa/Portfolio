import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaVuejs
} from 'react-icons/fa';
import {
  SiNextdotjs, SiJavascript, SiTailwindcss, SiTypescript
} from 'react-icons/si';

import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, OtherSkillsContainer, OtherSkillsText, OtherSkillsTitle, TechGrid, TechItem } from './TechnologiesStyles';

import techData from '../../JSON data/technologiesData.json';
const iconMap = {
  DiReact: <DiReact size="3rem" />,
  SiNextdotjs: <SiNextdotjs size="3rem" />,
  FaVuejs: <FaVuejs size="3rem" />,
  FaHtml5: <FaHtml5 size="3rem" />,
  FaCss3Alt: <FaCss3Alt size="3rem" />,
  SiJavascript: <SiJavascript size="3rem" />,
  SiTailwindcss: <SiTailwindcss size="3rem" />,
  SiTypescript: <SiTypescript size="3rem" />
};


const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>{techData.description}</SectionText>

    <TechGrid>
      {techData.technologies.map(({ name, icon }) => (
        <TechItem key={name}>
          {icon ? (
            <img
              src={icon}
              alt={name}
              width="100"
              height="100"
              style={{ objectFit: 'contain', borderRadius: '8px', padding: '8px' }}
            />
          ) : (
            <div style={{
              width: '100px',
              height: '100px',
              backgroundColor: '#2d2d2d',
              color: '#fff',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              padding: '8px',
              textAlign: 'center'
            }}>
              {name}
            </div>
          )}
          <span style={{ marginTop: '0.5rem', color: '#fff', textAlign: 'center' }}>{name}</span>
        </TechItem>
      ))}
    </TechGrid>
    {techData.otherSkills && (
      <OtherSkillsContainer>
        <SectionText>Other Skills</SectionText>
        <OtherSkillsText>
  {techData.otherSkills.map((skill, index) => (
    <span key={index}>{skill}{index !== techData.otherSkills.length - 1 && ','}&nbsp;</span>
  ))}
</OtherSkillsText>
      </OtherSkillsContainer>
    )}
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
