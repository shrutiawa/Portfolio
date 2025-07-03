import Link from 'next/link';
import React from 'react';
import {  AiFillGithub, AiFillInstagram, AiFillLinkedin,  AiOutlineUser } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';
import headerData from '../../JSON data/headerData.json';

const iconMap = {
  github: AiFillGithub,
  instagram: AiFillInstagram,
  linkedin: AiFillLinkedin,
  portfolio: AiOutlineUser
};
const Header = () =>  (
  <Container>
    <Div1>
      <Link href={headerData.logo.link}>
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>{headerData.logo.text}</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      {headerData.navLinks.map(({ label, href }) => (
        <li key={label}>
          <Link href={href}>
            <NavLink>{label}</NavLink>
          </Link>
        </li>
      ))}
    </Div2>
       <Div3>
      {headerData.socialLinks.map(({ icon, href }) => {
        const IconComponent = iconMap[icon];
        return (
          <SocialIcons key={icon} href={href} target="_blank" rel="noopener noreferrer">
            <IconComponent size="3rem" />
          </SocialIcons>
        );
      })}
    </Div3>
    </Container>
);

export default Header;
