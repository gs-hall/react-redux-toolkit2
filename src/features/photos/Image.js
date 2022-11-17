import React from "react";
import Icon from "../../components/Icon";
import "./image.css";

export default function Image({ image, onDelete }) {
  return (
    <div className="image-container">
      <img src={ image.src } alt="preview" className="image" />
      <Icon icon="fa-times" className="close" onClick={ onDelete } />
    </div>
  );
}