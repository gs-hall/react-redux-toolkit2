import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { loadFile } from "./loadFile";
import { addPhotos } from "./photoSlice";
import styles from "./photos.module.css";

export default function PhotoForm() {
  const dispatch = useDispatch();

  const inputFileRef = useRef();

  const handleUploadClick = (e) => {
    inputFileRef.current.click();
  };
  
  const handleFileUpload = async (e) => {
    const files = [...e.target.files];
    const images = await Promise.all(files.map(o => loadFile(o)));
    dispatch(addPhotos(images));
  }

  return (
    <div className={styles.upload} onClick={handleUploadClick}>
      <span>Пожалуйста, выберите фото для профиля (одно или несколько)</span>
      <input
        type="file"
        className={styles.upload}
        ref={inputFileRef}
        onChange={handleFileUpload}
        accept="image/*"
        multiple
        />
    </div>
  );
};