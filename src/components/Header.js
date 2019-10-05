import React from 'react';
import styled from 'styled-components';
import { Mail } from 'styled-icons/feather/Mail';
import { Globe } from 'styled-icons/feather/Globe';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h1`
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
  font-size: 3.5rem;
  font-weight: 400;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ContactItem = ({ icon, link, text }) => {
  const StyledIcon = styled(icon)`
    height: 1rem;
    margin-right: 0.25rem;
  `;

  const StyledLink = styled.a`
    color: black;
    text-decoration: none;
  `;

  return (
    <div>
      <StyledIcon />
      <StyledLink href={link}>{text}</StyledLink>
    </div>
  );
};

const Header = () => (
  <Container>
    <Name>Eric Krawczyk</Name>
    <ContactInfo>
      <ContactItem
        icon={Mail}
        link="mailto:eric.krawczyk@gmail.com"
        text="eric.krawczyk@gmail.com"
      />
      <ContactItem
        icon={Globe}
        link="https://eric.kraw.cz/"
        text="https://eric.kraw.cz/"
      />
    </ContactInfo>
  </Container>
);

export default Header;
