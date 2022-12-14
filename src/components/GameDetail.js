import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
//Import game icons
import {
  FaPlaystation,
  FaXbox,
  FaAppStoreIos,
  FaGamepad,
} from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { SiNintendoswitch } from "react-icons/si";

const GameDetails = ({ pathId }) => {
  const { game, screen, store, isLoading } = useSelector((state) => state.detail);
  const navigate = useNavigate();

  const closeDetailComponent = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      navigate("/game-catalog-redux");
    }
  };

  //get game icon function
  const getIcon = (gameName) => {
    switch (gameName) {
      case "PlayStation 4":
        return <FaPlaystation />;
      case "PlayStation 5":
        return <FaPlaystation />;
      case "Xbox One":
        return <FaXbox />;
      case "Nintendo Switch":
        return <SiNintendoswitch />;
      case "PC":
        return <MdComputer />;
      case "iOS":
        return <FaAppStoreIos />;

      default:
        return <FaGamepad />;
    }
  };

  return (
    <>
      {!isLoading && (
        <CardShadow onClick={closeDetailComponent} className="shadow">
          <Detail layoutId={pathId}>
            <Stats>
              <div className="card-header">
                <motion.h2 layoutId={`tittle ${pathId}`}>{game.name}</motion.h2>
                <p> Rating:{game.rating}</p>
              </div>
              <Platforms>
                <h3>Platforms</h3>
                <PlatformsIcons>
                  {game.platforms.map((data) => (
                    <h3 key={data.platform.id} className="icon">
                      {getIcon(data.platform.name)}
                    </h3>
                  ))}
                </PlatformsIcons>
              </Platforms>
            </Stats>
            <StyleLink href={store.results[0].url} target="_blank">Buy Now</StyleLink>
            <Media>
              <motion.img
                layoutId={`img ${pathId}`}
                src={game.background_image}
                alt={game.name}
              ></motion.img>
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
        </CardShadow>
      )}
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
  max-width: 650px;
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
  font-size: 1.4rem;
  img {
    margin-left: 3rem;
  }
  .icon{
    margin-left: 10px;
  }
`;

const StyleLink = styled(motion.a)`

background-color:rgba(184,45,0,0.6);
padding: 0.5rem 1rem;
color: rgba(255,255,255,1);
transition: 700ms;
&:hover{
  background-color:rgba(184,45,0,1);
  border-radius: 0.5rem;
}

`;

const Media = styled(motion.div)`
  margin-top: 3rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetails;
