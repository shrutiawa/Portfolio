import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, OneLineText, ProfileImage, RightSection } from './HeroStyles';
import styled from 'styled-components';
import heroData from '../../JSON data/heroData.json'


const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        {heroData.title.split('My Personal Portfolio')[0]}<br />
        <OneLineText>{heroData.oneLine}</OneLineText>

        <SectionText>{heroData.description}</SectionText>
      </SectionTitle>
      <a
         href={heroData.resumeLink}
        target="_blank"
        rel="noopener noreferrer"
        download
        style={{ textDecoration: 'none' }}
      >
        <Button>{heroData.buttonText}</Button>
      </a>
    </LeftSection>

    <RightSection>
      <ProfileImage src={heroData.image} alt="Shruti Awasthi" />
    </RightSection>
  </Section>
);

export default Hero;
