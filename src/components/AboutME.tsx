import { Grid, Container } from '@material-ui/core/';
import styled from 'styled-components';
import ProfilePic from "../images/profileimg.jpg";
import { media } from '../utils/mixins'
const AboutMeContainer = styled.div`
    padding: 50px 100px;
    h1{
        color: #333;
        font-weight: 300;
        border-bottom: 1.2px solid white;
        text-transform: uppercase;
        font-size: 24px;
        width: max-content;
    }
    p{
        color: #555
    }
    img{
        width: 100%;
    }
    ${media.sm`
        padding:20px;
	`}
`;

export const AboutME = () => {
    return (
        <Container>
            <AboutMeContainer id="aboutme" >
                <Grid container spacing={5}>
                    <Grid item md={8}>
                        <h1>About me</h1>
                        <p>Hi, my name is Siriwan Phatsangwan. I graduated with a Bachelor’s degree in engineering (Computer Engineering, king Mongkut's institute of technology Ladkrabang).</p>
                        <p>
                            My degree course has prepared me well for this position. During my project about covid-19 using R language, I was required to do a lot of independent research,
                            which required self-motivation, and the ability to organize and work on a long-term project.
                    </p>
                        <p>
                            Introduction to Data Analytics course has helped prepare me by use python and jupyter notebooks for analyst and visualization and prediction data.
                    </p>
                    </Grid>
                    <Grid item md={4}>
                        <img src={ProfilePic} />
                    </Grid>
                </Grid>
            </AboutMeContainer>
        </Container>
    )
}