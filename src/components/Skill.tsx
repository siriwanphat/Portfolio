import styled from 'styled-components';
import { Container, Button, Grid } from '@material-ui/core';
import Analytics from "../images/analytics.png";
import Dashboard from "../images/dashboard.png";
import Search from "../images/search.png";
import Frontend from "../images/frontend.png";
import { media } from '../utils/mixins'

const SkillContainer = styled.div`
    padding: 50px 100px;
    h1{
        color: #333;
        font-weight: 300;
        border-bottom: 1.2px solid #c4d6e2 ;
        text-transform: uppercase;
        font-size: 24px;
        width: max-content;
    }
    p{
        color: #555
    }
    .content{
        margin: 50px 0px;
    }
    ${media.sm`
        padding:20px;
	`}
`;

const SkillCardContainer = styled.div`
    margin: 0px 0px 50px 0px;
    display: flex;
    img{
      width :70px;
      height: 70px;
    }
`;

const CardContent = styled.div`
    margin: 0px 0px 0px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h4{
        margin: 0px;
        font-size: 15px;
        color: #333;
    }
    p{
        margin: 0px;
        color: #555;
    }
    
`;
const SkillCard = ({ title, des, img }: any) => {
    return (
        <SkillCardContainer>
            <img src={img} />
            <CardContent>
                <h4>{title}</h4>
                <p>{des}</p>
            </CardContent>
        </SkillCardContainer>
    )
}
export const Skill = () => {
    return (
        <Container>
            <SkillContainer id="skill" >
                <h1>Skill</h1>
                <p>
                    I am experienced in Data Analytics processing such as Data Collection, DataCleaning, Data Wrangling, Data Mining, and use data visualization techniques to present the results.
                </p>
                <p>
                    I use SQL, R, Python, Power BI, and Tableau for my data projects.
                </p>
                <div className="content">
                    <Grid container>
                        <Grid md={6}>
                            <SkillCard
                                title={"Data analysis"}
                                des={"(Analyzing data)"}
                                img={Search}
                            />
                        </Grid>
                        <Grid md={6}>
                            <SkillCard
                                title={"Data analytics"}
                                des={"(Get more value from your data with prediction models)"}
                                img={Analytics}
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid md={6}>
                            <SkillCard
                                title={"Dashboards"}
                                des={"(Show the most recent results in an interactive)"}
                                img={Dashboard}
                            />
                        </Grid>
                        <Grid md={6}>
                            <SkillCard
                                title={"Front-end web developer"}
                                des={"(Development of web using React.js, TypeScript)"}
                                img={Frontend}
                            />
                        </Grid>
                    </Grid>
                </div>
                <div className="content">
                    
                </div>

            </SkillContainer>
        </Container>

    )
}