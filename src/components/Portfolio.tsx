import Grid from '@material-ui/core/Grid';
import styled from "styled-components";
import { media } from '../utils/mixins'
import { Button, Container, Hidden } from '@material-ui/core';
import PortfolioPic from "../images/port_img_1.jpg";
import PortfolioPic2 from "../images/port_img_2.jpg";
import PortfolioPic3 from "../images/port_img_3.jpg";
import PortfolioPic4 from "../images/port_img_4.jpg"

const PortfolioContainer = styled.div`
    padding: 50px 100px;
    ${media.sm`
        padding:20px;
	`}
    h1{
        color: #333;
        font-weight: 300;
        border-bottom: 1.2px solid white;
        text-transform: uppercase;
        font-size: 24px;
        width: max-content;
    }
    img{
        width: 100%;
    }
`;

const CardContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h4{
        margin: 0px 0px 10px 0px;
        font-size: 15px;
        color: #333;
    }
    p{
        margin: 0px 0px 20px 0px;
        color: #555;
    }
    a{
       text-transform: capitalize; 
    }
`;
const CardContainer = styled.div`
    margin: 50px 0px;
    .imgcontainer{
        height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    }
`;
const ImgLeftCard = () => {
    return (
        <CardContainer>
            <Grid container spacing={5}>
                <Grid item md={4}>
                    <div className="imgcontainer">
                        <img src={PortfolioPic} />
                    </div>
                </Grid>
                <Grid item md={8}>
                    <CardContent>
                        <h4>Dashboard COVID-19</h4>
                        <p>
                            This project is mainly based on 2019 Coronavirus data from John Hopkins University.
                            The number of global infected, dead, recovered cases, and several others are included.
                            The top 20 most infected countries are chosen as our case studies. Gross domestic product,
                            average temperature, and public health system rankings are incorporated for deeper analyses.
                            The results can be visualized in line graphs, heatmap, correlation, and maps.
                    </p>
                        <a target="_blank" href="https://kmitl-rproject-covid19.shinyapps.io/Covid19">
                            go to dashboard
                        </a>
                    </CardContent>
                </Grid>
            </Grid>
        </CardContainer>
    )
}

const ImgLeftCard2 = () => {
    return (
        <CardContainer>
            <Grid container spacing={5}>
                <Grid item md={4}>
                    <div className="imgcontainer">
                        <img src={PortfolioPic2} />
                    </div>
                </Grid>
                <Grid item md={8}>
                    <CardContent>
                        <h4>SEIR And SEIRD Model</h4>
                        <p>
                            Create a model to predict the number of cases of infection SEIR for Thailand and SEIRD
                            for the United States model by R language displayed through the dashboard by R language
                            (Dplyr, Tidyverse, Shiny).
                        </p>
                        <a target="_blank" href="https://kmitl-rproject-covid19.shinyapps.io/Covid19">
                            go to dashboard
                    </a>
                    </CardContent>
                </Grid>
            </Grid>
        </CardContainer>
    )
}

const ImgLeftCard3 = () => {
    return (
        <CardContainer>
            <Grid container spacing={5}>
                <Grid item md={4}>
                    <div className="imgcontainer">
                        <img src={PortfolioPic3} />
                    </div>
                </Grid>
                <Grid item md={8}>
                    <CardContent>
                        <h4>Gold Price Predictions</h4>
                        <p>
                            Predict the price of gold by various factors such as oil price,
                            gold price, etc. by Linear Regression and Data Exploration by Seaborn,
                            Matplotlib using Jupyter notebook.
                    </p>
                        <a target="_blank" href="https://github.com/pgoodboy/GoldPredictOngAng">
                            go to Github
                        </a>
                    </CardContent>
                </Grid>
            </Grid>
        </CardContainer>
    )
}

const ImgRightCard = () => {
    return (
        <CardContainer>
            <Grid container spacing={5}>
                <Grid item md={8}>
                    <CardContent>
                        <h4>SEIR And SEIRD Model</h4>
                        <p>
                            Create a model to predict the number of cases of infection SEIR for Thailand and SEIRD
                            for the United States model by R language displayed through the dashboard by R language
                            (Dplyr, Tidyverse, Shiny).
                        </p>
                        <a target="_blank" href="https://kmitl-rproject-covid19.shinyapps.io/Covid19">
                            go to dashboard
                    </a>
                    </CardContent>
                </Grid>
                <Grid item md={4}>
                    <div className="imgcontainer">
                        <img src={PortfolioPic2} />
                    </div>
                </Grid>
            </Grid>
        </CardContainer>
    )
}

const FrontCard = () => {
    return (
        <CardContainer>
            <Grid container spacing={5}>
                <Grid item md={8}>
                    <CardContent>
                        <h4>Front-End Developer</h4>
                        <p>
                        Less than 1-year front-end developer experience in internship and part-time 
                        Developed web E-commerce using React.js, TypeScript with Visual Studio Code.
                        </p>
                        <a target="_blank" href="https://siriwanphat.github.io/landing-page-depoy/">
                            go to Landingpage
                    </a>
                    </CardContent>
                </Grid>
                <Grid item md={4}>
                    <div className="imgcontainer">
                        <img src={PortfolioPic4} />
                    </div>
                </Grid>
            </Grid>
        </CardContainer>
    )
}

const FrontCardLeft = () => {
    return (
        <CardContainer>
            <Grid container spacing={5}>
            <Grid item md={4}>
                    <div className="imgcontainer">
                        <img src={PortfolioPic4} />
                    </div>
                </Grid>
                <Grid item md={8}>
                    <CardContent>
                        <h4>Front-End Developer</h4>
                        <p>
                        Less than 1-year front-end developer experience in internship and part-time 
                        Developed web E-commerce using React.js, TypeScript with Visual Studio Code.
                        </p>
                        <a target="_blank" href="https://siriwanphat.github.io/landing-page-depoy/">
                            go to Landingpage
                    </a>
                    </CardContent>
                </Grid>
            </Grid>
        </CardContainer>
    )
}

export const Portfolio = () => {


    return (
        <Container>
            <PortfolioContainer id="portfolio" >
                <h1>Portfolio</h1>
                <ImgLeftCard />
                <Hidden smDown>
                    <ImgRightCard />
                </Hidden>
                <Hidden mdUp>
                    <ImgLeftCard2 />
                </Hidden>
                <ImgLeftCard3 />
                <Hidden smDown>
                    <FrontCard/>
                </Hidden>
                <Hidden mdUp>
                    <FrontCardLeft/>
                </Hidden>
            </PortfolioContainer >
        </Container>


    )
}