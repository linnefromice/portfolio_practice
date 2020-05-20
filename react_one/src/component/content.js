import React, { useState } from 'react';
import { FaCode, FaLink, FaGithub } from 'react-icons/fa';
import { MdAccountCircle, MdWork, MdFreeBreakfast } from 'react-icons/md';
import { RiProfileLine, RiFlutterLine, RiVuejsLine } from 'react-icons/ri';
import { animated, useSpring } from 'react-spring';
import { config } from 'react-spring/renderprops';

import Profile from './contents/profile';
import WorkExperience from './contents/work_experience';
import Hobby from './contents/hobby';
import InfoStudyRecordApp from './contents/info_study_record_app';
import './content.scss';

const MainMenu = ({icon, name, onClick}) => {
  return (
    <div
      className="mainMenu"
      style={{ opacity: "0.5", color: "silver" }}
      onClick={onClick}
    >
      <div style={{ height: "80%" }}>
        {icon}
      </div>
      <div style={{ height: "20%" }}>
        <center >{name}</center>
      </div>
    </div>
  )
}

const FocusedMainMenu = ({icon, name, onClick}) => {
  const animatedStyle = useSpring({
    from: { opacity: "0.5", color: "silver" },
    to: async (next, cancel) => {
      await next({ opacity: "0.75", color: "#64f38c" });
      await next({ opacity: "1", color: "#45B649" });
    },
    config: config.gentle
  });

  return (
    <animated.div
      className="mainMenu"
      style={animatedStyle}
      onClick={onClick}
    >
      <div style={{ height: "80%" }}>
        {icon}
      </div>
      <div style={{ height: "20%" }}>
        <center >{name}</center>
      </div>
    </animated.div>
  )
}

const SubMenu = ({icon, name, onClick}) => {
  return (
    <div
      className="subMenu"
      style={{ opacity: "0.5", color: "silver" }}
      onClick={onClick}
    >
      <div style={{ width: "80%" }}>
        {icon}
      </div>
      <div style={{ width: "20%" }}>
        <center>{name}</center>
      </div>
    </div>
  )
}

const FocusedSubMenu = ({icon, name, onClick}) => {
  const animatedStyle = useSpring({
    from: { opacity: "0.5", color: "silver" },
    to: async (next, cancel) => {
      await next({ opacity: "0.75", color: "#64f38c" });
      await next({ opacity: "1", color: "#45B649" });
    },
    config: config.gentle
  });

  return (
    <animated.div
      className="subMenu"
      style={animatedStyle}
      onClick={onClick}
    >
      <div style={{ width: "80%" }}>
        {icon}
      </div>
      <div style={{ width: "20%" }}>
        <center>{name}</center>
      </div>
    </animated.div>
  )
}

const key_sub_profile = "key_sub_profile";
const sub_profile = {
  icon: <RiProfileLine size="100%"/>,
  name: "Profile",
  content: <Profile/>,
};
const key_sub_work_experience = "key_sub_work_experience";
const sub_work_experience = {
  icon: <MdWork size="100%"/>,
  name: "Work Experience",
  content: <WorkExperience/>,
};
const key_sub_hobby = "key_sub_hobby";
const sub_hobby = {
  icon: <MdFreeBreakfast size="100%"/>,
  name: "Hobby",
  content: <Hobby/>,
};
const accountMenuList = {
  key_sub_profile: sub_profile,
  key_sub_work_experience: sub_work_experience,
  key_sub_hobby: sub_hobby,
};

const key_study_record_app = "key_study_record_app";
const study_record_app = {
  icon: <RiFlutterLine size="75%"/>,
  name: "study_record_app",
  content: <InfoStudyRecordApp/>,
};
const key_ff_quiz_app = "key_ff_quiz_app";
const ff_quiz_app = {
  icon: <RiFlutterLine size="75%"/>,
  name: "ff_quiz_app",
  content: <div>Content - ff_quiz_app</div>,
};
const key_marvel_data_app = "key_marvel_data_app";
const marvel_data_app = {
  icon: <RiFlutterLine size="75%"/>,
  name: "marvel_data_app",
  content: <div>Content - marvel_data_app</div>,
};
const key_vuetify_news_app = "key_vuetify_news_app";
const vuetify_news_app = {
  icon: <RiVuejsLine size="75%"/>,
  name: "vuetify_news_app",
  content: <div>Content - vuetify_news_app</div>,
};
const productMenuList = {
  key_study_record_app: study_record_app,
  key_ff_quiz_app: ff_quiz_app,
  key_marvel_data_app: marvel_data_app,
  key_vuetify_news_app: vuetify_news_app,
};

const key_link_github = "key_link_github";
const link_github = {
  icon: <FaGithub size="100%"/>,
  name: "Github",
  content: <div>Content - Github</div>,
}
const linkMenuList = {
  key_link_github: link_github,
};
const subMenuList = {
  key_sub_profile: sub_profile,
  key_sub_work_experience: sub_work_experience,
  key_sub_hobby: sub_hobby,
  key_study_record_app: study_record_app,
  key_ff_quiz_app: ff_quiz_app,
  key_marvel_data_app: marvel_data_app,
  key_vuetify_news_app: vuetify_news_app,
  key_link_github: link_github,
}

const key_main_account_information = "key_main_account_information";
const main_account_information = {
  icon: <MdAccountCircle size="100%"/>,
  name: "Account Information",
  subMenuList: accountMenuList,
};
const key_main_product = "key_main_product";
const main_product = {
  icon: <FaCode size="100%"/>,
  name: "Product(private)",
  subMenuList: productMenuList,
};
const key_main_links = "key_main_links";
const main_links = {
  icon: <FaLink size="100%"/>,
  name: "Links",
  subMenuList: linkMenuList
};
const mainMenuList = {
  key_main_account_information: main_account_information,
  key_main_product: main_product,
  key_main_links: main_links
};

const Content = () => {
  const [focusedMainMenuKey, setFocusedMainMenuKey] = useState(key_main_account_information);
  const [focusedSubMenuKey, setFocusedSubMenuKey] = useState(key_sub_profile);
  
  return (
    <div>
      <div className="wrapperMainMenu">
        {
          Object.keys(mainMenuList).map((value, index) => {
            if (value === focusedMainMenuKey) {
              return (
                <FocusedMainMenu
                  icon={mainMenuList[value].icon}
                  name={mainMenuList[value].name}
                  onClick={() => setFocusedMainMenuKey(value)}
                />
              );
            } else {
              return (
                <MainMenu
                  icon={mainMenuList[value].icon}
                  name={mainMenuList[value].name}
                  onClick={() => setFocusedMainMenuKey(value)}
                />
              );
            }
          })
        }
      </div>
      <div className="wrapperSubMenu">
        {
          Object.keys(mainMenuList[focusedMainMenuKey].subMenuList).map((value, index) => {
            const subMenuList = mainMenuList[focusedMainMenuKey].subMenuList;
            if (value === focusedSubMenuKey) {
              return (
                <FocusedSubMenu
                  icon={subMenuList[value].icon}
                  name={subMenuList[value].name}
                  onClick={() => setFocusedSubMenuKey(value)}
                />
              );  
            } else {
              return (
                <SubMenu
                  icon={subMenuList[value].icon}
                  name={subMenuList[value].name}
                  onClick={() => setFocusedSubMenuKey(value)}
                />
              );  
            }
          })
        }
      </div>
      <div className="wrapperContent">
        {subMenuList[focusedSubMenuKey].content}
      </div>
    </div>
  )
}

export default Content;