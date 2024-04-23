import styled from 'styled-components';
import NoorFace from '../assets/NoorFace.png'

const HomeDiv = styled.div`
    background-color: #333;
    margin: 0 10vw;
    height: 80vh;
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
                My name is Noor and I love horses
            </h1>
            <div style={{
                textAlign: 'center',
                width: '10rem',
                display: 'flex',
                backgroundImage: 'url(../assets/NoorFace.png)'
            }} />
        </HomeDiv>
    )
}