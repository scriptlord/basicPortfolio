import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle,  } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { ListItem } from '../Technologies/TechnologiesStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>CALL:</LinkTitle>
          <LinkItem href='tel: +234 807 651 8353'>+234 807 651 8353</LinkItem>
          <LinkTitle>GMAIL:</LinkTitle>
          <LinkItem href='mailto: foluso.kayode.ng@gmail.com'>
            foluso.kayode.ng@gmail.com
          </LinkItem>
          <LinkTitle>PERSONALISED MAIL:</LinkTitle>
          <LinkItem href='mailto: contact@folusokayode.com'>
            contact@folusokayode.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Applying Agile Methodologies to Software Engineering...</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/scriptlord'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/folusokayodefavour/'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href=''>
            <AiFillTwitterCircle size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.instagram.com/foluso.kayode/'>
            <AiFillInstagram size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  )
};

export default Footer;
