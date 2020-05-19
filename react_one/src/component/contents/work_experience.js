import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText';
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
          alignItems: "flex-start",
          flexDirection: "row",
        }}
      >
        {props.children}
      </div>
    </animated.div>
  );
}

const WorkExperience = () => {
  return (
    <Wrapper>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="First Project"
            secondary={
              <React.Fragment>
                <Typography>
                  2016.8 - 2018.1
                </Typography>
                {" - I was from engineer to leader role (dev&ops)..."}
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Second Project"
            secondary={
              <React.Fragment>
                <Typography>
                  2017.12 - 2018.2
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Third Project"
            secondary={
              <React.Fragment>
                <Typography>
                  2018.3
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Fourth Project"
            secondary={
              <React.Fragment>
                <Typography>
                  2018.4 - 2018.8
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Fifth Project"
            secondary={
              <React.Fragment>
                <Typography>
                  2018.8 - 2019.7
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Sixth Project"
            secondary={
              <React.Fragment>
                <Typography>
                  2019.6 - 2020.4
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Break"
            secondary={
              <React.Fragment>
                <Typography>
                  2020.4 - 2020.6
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="First"
            secondary={
              <React.Fragment>
                <Typography>
                  2020.6 - now
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Wrapper>
  );
}

export default WorkExperience;