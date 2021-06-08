import styled from 'styled-components';

const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    p{
        color: #333;
        font-size: 25px;
        font-weight: 400;
        margin-bottom: 70px;
    }
`;


export const FirstSection = () => {

    return (
        <TopContainer>
            {/* <p>Siriwan Phatsangwan</p> */}
        </TopContainer >
    )
}