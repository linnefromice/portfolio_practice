import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from '@material-ui/core/ListItemText';
import { GiSoccerBall } from 'react-icons/gi';
import { MdRadio, MdMovie, MdMusicNote } from 'react-icons/md';
import { FaGamepad, FaHeart, FaBasketballBall, FaFootballBall, FaChessKing } from 'react-icons/fa';

import { animated, useSpring } from 'react-spring';

const Wrapper = (props) => {
  const animatedStyle = useSpring({
    from: { opacity: "0" },
    to: { opacity: "1" },
  });

  return (
    <animated.div
      style={animatedStyle}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {props.children}
      </div>
    </animated.div>
  );
}

const hobbyListOne = [
  {
    icon: <GiSoccerBall/>,
    primary: "Soccer",
    secondary: "midfielder / since elementary school / I like barcelona FC."
  },
  {
    icon: <MdMovie/>,
    primary: "Movie",
    secondary: "Fav: The Trueman Show / The Family Man / Real Steel / Avengers ..."
  },
  {
    icon: <FaHeart/>,
    primary: "Japanese Idol",
    secondary: "Hinatazaka46, Miyuki Watanabe (Milky), Erika Ikuta (Nogizaka46) ..."
  },
  {
    icon: <FaBasketballBall/>,
    primary: "NBA Appreciation",
    secondary: "Fav: Stephan Curry, Rajon Rondo, Derrick Rose, Warriors, Celtics..."
  },
  {
    icon: <FaChessKing/>,
    primary: "Board Game",
    secondary: "Fav: Catan, Village (department of architecture) ..."
  },

];
const hobbyListTwo = [
  {
    icon: <FaGamepad/>,
    primary: "TV Game",
    secondary: "Fav: DewPrism(PS), GunparadeMarch(PS), FinalFantasy..."
  },
  {
    icon: <MdMusicNote/>,
    primary: "Music",
    secondary: "Fav: Mrs. Green Apple, Carly Rae Jepsen, Hikaru Utada, Owl City ..."
  },
  {
    icon: <MdRadio/>,
    primary: "Radio",
    secondary: "All Night-NIPPON (Audrey)"
  },
  {
    icon: <FaFootballBall/>,
    primary: "NFL Appreciation",
    secondary: "I learned from Audrey NFL Club, no longer from Masayasu.W"
  },
]

const Hobby = () => {
  return (
    <Wrapper>
      <List>
        {hobbyListOne.map(value => (
          <ListItem alignItems="flex-start">
            <ListItemAvatar>{value.icon}</ListItemAvatar>
            <ListItemText
              primary={value.primary}
              secondary={value.secondary}
            />
          </ListItem>
        ))}
      </List>
      <List>
        {hobbyListTwo.map(value => (
          <ListItem alignItems="flex-start">
            <ListItemAvatar>{value.icon}</ListItemAvatar>
            <ListItemText
              primary={value.primary}
              secondary={value.secondary}
            />
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}

export default Hobby;