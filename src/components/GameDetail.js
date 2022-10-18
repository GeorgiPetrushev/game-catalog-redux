import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const GameDetails = () => {
  const { game, screen ,isLoading } = useSelector((state) => state.detail);
  const navigate = useNavigate();

  const closeDetailComponent = (e) => {
    const element = e.target;
    if(element.classList.contains("shadow")){
      navigate("/");
    }
  }

  return (
    <>
    {!isLoading && (
    <CardShadow onClick={closeDetailComponent} className="shadow">

      <Detail>
        <Stats>
          <div className="card-header">
            <h2>{game.name}</h2>
            <p> Rating:{game.rating}</p>
          </div>
          <Platforms>
            <h3>Platforms</h3>
            <PlatformsIcons>
              {game.platforms.map((data) => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </PlatformsIcons>
          </Platforms>
        </Stats>
        <Media>
          <img src={game.background_image} alt={game.name}></img>
        </Media>
        <Description>
          {" "}
          <p>{game.description_raw}</p>
        </Description>
        <div className="gallery">
          {screen.results.map((data) => (
            <img src={data.image} alt={data.id} key={data.id}></img>
          ))}
        </div>
      </Detail>
    </CardShadow>)}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  /* width */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #fff;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #ff7575;
  }
`;

const Detail = styled(motion.div)`
  max-width: 80%;
  margin: auto;
  border-radius: 1em;
  padding: 2rem 5rem;
  background-color: white;
  color: black;
  position: absolute;
  right: 10%;
  left: 10%;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Platforms = styled(motion.div)`
  text-align: center;
`;

const PlatformsIcons = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetails;
