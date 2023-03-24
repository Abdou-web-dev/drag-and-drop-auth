import "animate.css";
import { Button, message } from "antd";
import { useEffect, useState } from "react";
import arrow_bottom from "../../assets/img/arrow_bottom.svg";
import arrow_top from "../../assets/img/arrow_top.svg";
import { Picture } from "../drag_drop/ImageToDrag";
import "./lists_styles.scss";

export function PictureList({ pictures }) {
  const [collapseIcon, setCollapseIcon] = useState(arrow_bottom);
  const [picsClass, setPicsClass] = useState("");

  const handleCollapseClick = () => {
    if (collapseIcon === arrow_top) {
      setCollapseIcon(arrow_bottom);
      setPicsClass("content_collapsed");
    }
    if (collapseIcon === arrow_bottom) {
      setCollapseIcon(arrow_top);
      setPicsClass(
        "content_not_collapsed animate__fadeInRight animate__animated"
      );
    }
  };

  useEffect(() => {
    if (collapseIcon === arrow_top) {
      message.info(
        `Scroll down and drop one of these images into the red box`,
        4
      ); //This is a prompt message for success, and it will disappear in 4 seconds
    }
  }, [collapseIcon]);

  return (
    <div className="picture-list-container">
      <div className="toggle-collapse-btn-wrapper">
        <Button onClick={handleCollapseClick} className="toggle-collapse-btn">
          <img width={`40px`} src={collapseIcon} alt="" />
        </Button>
      </div>

      <div className={`pictures-wrapper ${picsClass}`}>
        {pictures &&
          pictures?.map((picture) => {
            return (
              <div className="single-picture">
                <Picture url={picture.url} id={picture.id} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
