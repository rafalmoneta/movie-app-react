import React,{ useState} from 'react';
import styled from 'styled-components';
import Button from './Button';
import GridContainer from './GridContainer';

const Container = styled.div`
  display: block;
  width: 100%;
`
const CastInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  text-align: center;
  div:first-child {
    display: flex;
    flex-direction: row;
    ${'' /* align-items: center; */}
    justify-content: space-between;
    p { margin: 0;}
  }
  p {
      margin: 5px 0;
    }
`

const ImageContainer = styled.div`
  display: block;
  width: 100%;
  img {
    width: 100%;
    border-radius: 25px;
  }
`
const CastName = styled.h3`
  margin: 1rem;
`

const BlankImage = styled.div`
  display: block;
  width: 100%;
  height: 365px;
  background-color: white;
  border-radius: 25px;
`

const PlayingBox = styled.div`
  display: flex;
  flex-direction: column;
`

const CenteredDiv = styled.div`
  display: block;
  width: fit-content;
  margin: 1rem auto 5rem;
`

const MoviePageInfo = ({cast, crew}) => {
  const [loadNumber, setLoadNumber] = useState(5);

  return (
    <Container>
      <GridContainer>
        {cast.slice(0,loadNumber).map((castMember) => {
          return (
            <CastInfo>
              {!castMember.profile_path ? <BlankImage />
                : 
                <ImageContainer><img src={`http://image.tmdb.org/t/p/w500${castMember.profile_path}`} alt="poster"/></ImageContainer> 
              }
              
              <CastName>{castMember.name}!</CastName>
              <PlayingBox>Playing: 
                <span> {castMember.character}</span>
              </PlayingBox>
            </CastInfo>
          )
        })}
        
      </GridContainer>
      <CenteredDiv>
        {cast.length > loadNumber && 
          <Button onClick={() => setLoadNumber(loadNumber + 5)} name="Load more members!"/>
        }
      </CenteredDiv>
      {/* CREW */}
      <h1>Producers, directors..</h1>
      <GridContainer>
        {crew.map((crewMember) => {
          let job = crewMember.job;
          if(job === 'Director' || job === 'Executive Producer' || job === 'Screenplay' || job === 'Producer' || job === 'Original Music Composer' || job === 'Director of Photography')
          return (
            <CastInfo>
              {!crewMember.profile_path ? <BlankImage />
                : 
                <ImageContainer><img src={`http://image.tmdb.org/t/p/w500${crewMember.profile_path}`} alt="poster"/></ImageContainer> 
              }
              
              <CastName>{crewMember.name}!</CastName>
              <h3>{crewMember.job}</h3>
            </CastInfo>
          )
        })}
      </GridContainer>
    </Container>
  );
}
 
export default MoviePageInfo