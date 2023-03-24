import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import img1 from "../../assets/img/to_drag/img1.jpg";
import img10 from "../../assets/img/to_drag/img10.jpg";
import img2 from "../../assets/img/to_drag/img2.jpg";
import img3 from "../../assets/img/to_drag/img3.jpeg";
import img4 from "../../assets/img/to_drag/img4.jpg";
import img5 from "../../assets/img/to_drag/img5.jpg";
import img6 from "../../assets/img/to_drag/img6.jpg";
import img7 from "../../assets/img/to_drag/img7.jpg";
import img8 from "../../assets/img/to_drag/img8.jpg";
import img9 from "../../assets/img/to_drag/img9.webp";
import { CustomDivider } from "../dividers/CustomDivider";
import { PictureList } from "../lists/PictureList";
import { CustomSpinner } from "../spinners/CustomSpinner";
import { UploadAndDisplayImage } from "../UploadAndDisplayImage";
import "./drag_styles.scss";
import { Picture } from "./ImageToDrag.js";

const pictures_array = [
  {
    id: 1,
    url: img1,
  },
  {
    id: 2,
    url: img2,
  },
  {
    id: 3,
    url: img3,
  },
  {
    id: 4,
    url: img4,
  },
  {
    id: 5,
    url: img5,
  },
  {
    id: 6,
    url: img6,
  },
  {
    id: 7,
    url: img7,
  },
  {
    id: 8,
    url: img8,
  },

  {
    id: 9,
    url: img9,
  },
  ,
  {
    id: 10,
    url: img10,
  },
];

export function DragDrop() {
  const [board, setBoard] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [pictures, setPictures] = useState(pictures_array);

  // const uploadedImages = [];
  // uploadedImages?.unshift(selectedImage);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = pictures.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };

  useEffect(() => {
    //at first render of the component, setPictures to be null, in order to display the Spinner, and then , fill this array with pictures_array data
    setPictures(null);
    setTimeout(() => {
      setPictures(pictures_array);
    }, 1000);
  }, []);

  if (pictures && pictures?.length) {
    return (
      <>
        <div className="drag-and-drop-container">
          <div className="pictures-list">
            <PictureList {...{ pictures }} />
          </div>

          <CustomDivider />

          <div
            className="board-wrapper"
            ref={drop}
            style={{ border: "1px solid red" }}
          >
            {board.map((boardPicture) => {
              return (
                <Picture
                  {...{ boardPicture }}
                  url={boardPicture.url}
                  id={boardPicture.id}
                />
              );
            })}
          </div>

          <CustomDivider />

          <div className="upload-wrapper">
            <UploadAndDisplayImage {...{ selectedImage, setSelectedImage }} />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <CustomSpinner />
      </div>
    );
  }
}
