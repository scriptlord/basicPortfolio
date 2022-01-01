import Link from 'next/link'; //to link to different pages
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'; //from react packages
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center',color: 'white',marginBottom: '20px'}}>
          <DiCssdeck size='3rem' />
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#projects'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#projects'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
)

export default Header;
