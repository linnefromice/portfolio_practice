import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";

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
          flexDirection: "column",
        }}
      >
        {props.children}
      </div>
    </animated.div>
  );
}

const Profile = () => {
  return (
    <Wrapper>
      <Card style={{backgroundColor: "transparent", borderRadius: "2rem" }}>
        <CardContent>
          <center>
            <Typography variant={"h5"}>About Me</Typography>
            <Avatar
              style={{ width: "8vw", height: "100%"}}
              src="/contents/icon_account_resize.jpg"
            />
            <Typography variant={"h5"}>Linnefromice</Typography>
            <Typography>Hello, I'm a Web Developer from Japan.</Typography>
          </center>
        </CardContent>
        <CardContent>
          <Typography variant={"h6"}>Work</Typography>
          <div style={{ padding: 1 }}>
            <Chip style={{ margin: 0.5 }} label="Java" color="primary" variant="outlined"/>
            <Chip style={{ margin: 0.5 }} label="JavaScript" color="primary" variant="outlined"/>
            <Chip style={{ margin: 0.5 }} label="AWS" color="primary" variant="outlined"/>
            <Chip style={{ margin: 0.5 }} label="Spring" color="secondary" variant="outlined"/>
            <Chip style={{ margin: 0.5 }} label="React" color="secondary" variant="outlined"/>
            <Chip style={{ margin: 0.5 }} label="Oracle" color="secondary" variant="outlined"/>
          </div>
          <Typography variant={"h6"}>Private</Typography>
          <div style={{ padding: 1 }}>
            <Chip style={{ margin: 0.5 }} label="Dart" color="primary" variant="outlined"/>
            <Chip style={{ margin: 0.5 }} label="Flutter" color="primary" variant="outlined"/>
            <Chip style={{ margin: 0.5 }} label="Spring Boot" color="secondary" variant="outlined"/>
            <Chip style={{ margin: 0.5 }} label="Vue" color="secondary" variant="outlined"/>
            <Chip style={{ margin: 0.5 }} label="Kotlin" color="primary" variant="outlined"/>
            <Chip style={{ margin: 0.5 }} label="Docker" color="primary" variant="outlined"/>
            <Chip style={{ margin: 0.5 }} label="Firebase" color="primary" variant="outlined"/>
          </div>
          <div style={{ padding: 1 }}>
            <Chip style={{ margin: 0.5 }} label="Ruby" disabled color="primary" variant="outlined"/>
            <Chip style={{ margin: 0.5 }} label="Go" disabled color="primary" variant="outlined"/>
            <Chip style={{ margin: 0.5 }} label="Ruby on Rails" disabled color="secondary" variant="outlined"/>
          </div>
        </CardContent>
      </Card>
    </Wrapper>
  );
}

export default Profile;