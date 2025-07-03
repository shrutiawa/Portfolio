import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import footerData from '../../JSON data/footerData.json';

const iconMap = {
  github: AiFillGithub,
  instagram: AiFillInstagram,
  linkedin: AiFillLinkedin
};
const Footer = () => {
  return (
    <FooterWrapper>
    <LinkList>
        {footerData.contacts.map(({ type, value, href }) => (
          <LinkColumn key={type}>
            <LinkTitle>{type}</LinkTitle>
            <LinkItem href={href}>{value}</LinkItem>
          </LinkColumn>
        ))}
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>{footerData.slogan}</Slogan>
        </CompanyContainer>

        <SocialContainer>
          {footerData.socialLinks.map(({ icon, href }) => {
            const IconComponent = iconMap[icon];
            return (
              IconComponent && (
                <SocialIcons key={icon} href={href} target="_blank" rel="noopener noreferrer">
                  <IconComponent size="3rem" />
                </SocialIcons>
              )
            );
          })}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
