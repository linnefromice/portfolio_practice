import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { animated, useSpring } from 'react-spring';

const Profile = () => {
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
        <Card style={{backgroundColor: "transparent"}}>
          <CardContent>
            <center>
              <Typography variant={"h5"}>About Me</Typography>
              <Avatar
                style={{ width: "10vw", height: "100%"}}
                src="/contents/icon_account_resize.jpg"
              />
              <Typography variant={"h5"}>Linnefromice</Typography>
              <Typography>Hello, I'm a Web Developer from Japan.</Typography>
            </center>
          </CardContent>
          <CardContent>
            <Typography variant={"h6"}>Work</Typography>
            <Typography>Java(SpringBoot) / React / AWS / Oracle ...</Typography>
            <Typography variant={"h6"}>Private</Typography>
            <Typography>Flutter / Vue / Kotlin / Ruby on Rails / Firebase ...</Typography>
          </CardContent>
        </Card>
      </div>
    </animated.div>
  );
}

export default Profile;