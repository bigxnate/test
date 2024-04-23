import styled from 'styled-components';
import NoorFace from '../assets/NoorFace.png'

const HomeDiv = styled.div`
    background-color: #333;
    margin: 0 auto;
    height: 75vh;
    color: white;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
`;

export default function Home() {
    return (
        <HomeDiv>
            <h1>
                My name is Noor and I love horse c0ck!
            </h1>
            <img src={NoorFace} style={{
                textAlign: 'center',
                height: '14rem',
                width: '10rem',
                margin: '10px auto',
                display: 'flex',
                borderRadius: '10px'
            }} />
        </HomeDiv>
    )
}