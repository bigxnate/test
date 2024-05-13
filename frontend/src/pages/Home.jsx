import styled from 'styled-components';
import NoorFace from '../assets/NoorFace.png'
import WhiteHorse from '../assets/whiteHorse.jpeg'

const HomeDiv = styled.div`
    background-color: #333;
    margin: 0 auto;
    color: white;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    gap: 1rem;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export default function Home() {
    return (
        <HomeDiv className="home-div">
            <h1>
                Home
            </h1>
            <div className="home-container">
                <img src={NoorFace} style={{
                    textAlign: 'center',
                    height: '14rem',
                    width: '10rem',
                    margin: '0 auto',
                    display: 'flex',
                    borderRadius: '10px'
                }} />
                <div>
                    What's up bitches. The name's Noor and I'm a whore for whorses.
                </div>

            </div>
            <div className='home-container'>

                <img src={WhiteHorse} style={{
                    textAlign: 'center',
                    height: '10rem',
                    margin: '5px auto 0 auto',
                    display: 'flex',
                    borderRadius: '10px'
                }} />
                <div>
                    This is my favorite whorse. Yippidy doo da lee loopadabahadaposdfkosfkspofdkf
                </div>

            </div>
        </HomeDiv>
    )
}