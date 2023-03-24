import { Button } from "antd";
import { Link } from "react-router-dom";
import "./btns_styles.scss";

export const MainButton = ({ type, onClick }) => {
  return (
    <div className="main-btn-container">
      <Link
        className="main-btn-link"
        to={type === `Login` ? "/login" : "signup"}
      >
        <Button
          onClick={onClick}
          className={
            type === "Log out"
              ? "main-btn-link__btn logout_btn"
              : "main-btn-link__btn"
          }
        >
          <span>{type}</span>
        </Button>
      </Link>
    </div>
  );
};
