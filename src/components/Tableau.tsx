import React, { useState } from "react";
import { ReactComponent as Logo } from '../svg/logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styled from "styled-components";
import img from '../images/img1.png';
import { Button, Container} from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { media } from '../utils/mixins'

const TableauContainer = styled.div`
    padding: 50px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        color: #333; 
        font-weight: 300;
        border-bottom: 1.2px solid white;
        text-transform: uppercase; 
        font-size: 24px;
        margin: 0px 0px 40px 0px; 
    }
    a{
        max-width: 500px;
        width: 100%;
        background-color: #fff;
        span{
            text-transform: capitalize; 
        }
    }
    ${media.sm`
        padding:20px;
	`}
`;


export const Tableau = () => {
    return (
        <Container>
            <TableauContainer id="tableau" >
                <p>
                MY TABLEAU PUBLIC
                </p>
                <Button variant="contained" target="_blank" href="https://public.tableau.com/profile/siriwan.phatsangwan">
                    Let’s see
                </Button>
            </TableauContainer>
        </Container>
    )
}