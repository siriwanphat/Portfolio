import styled from "styled-components";
import { Button } from '@material-ui/core';
import { Link } from 'react-scroll'
const HeaderBarContainer = styled.div`
  
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

const HeaderBarStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0px;
    height: 50px;
    background-color: #fff;
    .midButton{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        button{
            margin: 0px 20px;
        }
    }
`;


export const HeaderBar = ({ status }: any) => {
    return (
        <HeaderBarContainer>
            <HeaderBarStyled className={status ? "hidden" : "active"}>
                <div className="midButton">
                    <Button>
                        <Link activeClass="active" to="aboutme" spy={true} smooth={true} >
                            About me
                        </Link>
                    </Button>
                    <Button>
                        <Link activeClass="active" to="skill" spy={true} smooth={true}>
                            Skill
                        </Link>
                    </Button>
                    <Button>
                        <Link activeClass="active" to="portfolio" spy={true} smooth={true}>
                            Portfolio
                        </Link>
                    </Button>
                    <Button>
                        <Link activeClass="active" to="contact" spy={true} smooth={true}>
                            Contact
                        </Link>
                    </Button>
                </div>
            </HeaderBarStyled>
        </HeaderBarContainer>
    )
}