import React from 'react';
import PhotoForm from './features/photos/PhotoForm';
import Photos from './features/photos/Photos';
import styles from "./features/photos/photos.module.css";

function App() {
  return (
    <div className={styles.container}>
      <PhotoForm />
      <Photos />
    </div>
  );
}

export default App;
