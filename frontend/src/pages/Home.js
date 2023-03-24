import { Link } from "react-router-dom";
import "../assets/img/login.svg";
import loginIcon from "../assets/img/login.svg";
import plus from "../assets/img/plus.svg";
import { Box } from "../components/boxes/Box.js";
import { MainButton } from "../components/buttons/MainButton.js";
import { Icon } from "../components/icons/Icon.js";
import { useAuthContext } from "../hooks/useAuthContext";

import "./pages_styles.scss";

function Home() {
  const { user } = useAuthContext();
  if (!user) {
    return (
      <div className="home-container">
        <div className="home-login-btn-wrapper">
          <Box>
            <Icon width="60px" height="60px" iconPath={loginIcon}></Icon>
            <MainButton type={`Login`} />
          </Box>
        </div>
        <div className="home-signup-btn-wrapper">
          <Box>
            <Icon iconPath={plus} width="60px" height="60px"></Icon>
            <MainButton type={`Sign up`} />
          </Box>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Link to={"/drag-drop"}>
          <MainButton type={`Drag and drop files...`} />
        </Link>
      </div>
    );
  }
}

export default Home;
