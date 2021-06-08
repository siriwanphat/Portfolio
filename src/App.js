import './App.css';
import { HeaderBar } from './components/HeaderBar.tsx';
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Background from './images/whale-in-the-sky2.png';
import { Container, Button, Grid } from '@material-ui/core';
import { FirstSection } from './components/Firstsection.tsx'
import { AboutME } from './components/AboutME'
import { Skill } from './components/Skill'
import { Tableau } from './components/Tableau'
import { Portfolio } from './components/Portfolio'
import { ContactME } from './components/ContactME'

const HeaderScreen = styled.div`
  background-image:url(${Background});
  height: 640px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 50px solid white;
`;

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`;


const BodyScreen = styled.div`
  background-color: #fff;
  
`;

const ColorContainer = styled.div`
  background-color: #c4d6e2;
`;

const ScreenContainer = styled.div`
  background-color: #fff;
  height: 2000px;
`;

const TableauContainer = styled.div`
  background-color: #99b8cd;
`;

const App = () => {
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0 && goingUp) {
        setGoingUp(false);
      }
      if (currentScrollY <= 0 && !goingUp) {
        setGoingUp(true);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp])

  return (
    <ScreenContainer>
      <HeaderScreen>
        <Transition>
          <HeaderBar status={goingUp} />
        </Transition>
        <FirstSection />
      </HeaderScreen>

      <BodyScreen>
        <ColorContainer>
          <AboutME />
        </ColorContainer>

        <Skill/>
        <TableauContainer>
          <Tableau />
        </TableauContainer>
        <ColorContainer>
          <Portfolio />
        </ColorContainer>
        <TableauContainer>
          <ContactME/>
        </TableauContainer>

      </BodyScreen>

      {/* <BodyScreen>
        <Container>
          <NdSection />
          <FourthSection />
          <Trdsection />
        </Container>
        <ScreenLast>
       
      </ScreenLast>
      </BodyScreen> */}
    </ScreenContainer>
  );
}


export default App;
