import { Grid, Container } from '@material-ui/core/';
import styled from 'styled-components';
import { media } from '../utils/mixins'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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


export const ContactME = () => {
    return (
        <Container>
            <AboutMeContainer id="contact" >
                <Grid container spacing={5}>
                    <Grid item md={4}>
                        <h1>FOLLOW ME</h1>
                        <Grid direction="row"
                            justify="flex-start"
                            alignItems="center">
                            <GitHubIcon style={{ fontSize:40 ,paddingTop:5,color:'#333'}} 
                            onClick={event =>  window.location.href='https://github.com/siriwanphat'}/>
                            <LinkedInIcon style={{ fontSize:42 ,paddingLeft:15,paddingTop:5,color:'#333'}}
                            onClick={event =>  window.location.href='https://www.linkedin.com/in/siriwan-p-4586b7130/'} />
                        </Grid>
                    </Grid>
                    <Grid item md={8}>
                        <h1>CONTACT ME</h1>
                        <p>+669 9483 1350</p>
                        <p>siriwan.sp50@gmail.com</p>
                    </Grid>
                </Grid>
            </AboutMeContainer>
        </Container>
    )
}