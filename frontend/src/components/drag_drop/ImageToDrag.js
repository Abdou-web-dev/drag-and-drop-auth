import { Button } from "antd";
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import trash from "../../assets/img/trash.svg";
import "./drag_styles.scss";

export function Picture({ id, url, boardPicture }) {
  const [hideDraggedImage, setHideDraggedImage] = useState(false);
  const [picClass, setPicClass] = useState("");

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  function handleHover() {
    setPicClass("apply_border");
  }
  function handleLeave() {
    setPicClass("");
  }

  if (hideDraggedImage === false) {
    return (
      <div className="dragged-image-container">
        <img
          ref={drag}
          src={url}
          width={boardPicture ? "180px" : "150px"}
          height={boardPicture ? "180px" : "150px"}
          style={{ border: isDragging ? "5px solid pink" : "0px" }}
          className={picClass}
        />
        <>
          {boardPicture && (
            <Button
              className="dragged-image-trash-btn"
              onClick={() => setHideDraggedImage(true)}
              onMouseOver={handleHover}
              onMouseLeave={handleLeave}
            >
              <img width={`35px`} src={trash} alt="" />
            </Button>
          )}
        </>
      </div>
    );
  } else {
    return null;
  }
}
