import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "./Image";
import { deletePhoto, selectPhotos } from "./photoSlice";
import styles from "./photos.module.css";

export default function Photos() {
  const dispatch = useDispatch();
  const photos = useSelector(selectPhotos);

  return (
    <div className={styles.list}>
      {
        [...photos]
          .sort((a, b) => (b.index - a.index))
          .map((image, i) => 
            <Image
              image={image}
              key={image.id}
              onDelete={ () => dispatch(deletePhoto(image.id)) }
            />
          )
      }
    </div>
  );
};