import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
];

export const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    addPhotos: (state, action) => {
      const newPhotos = action.payload;
      newPhotos.forEach(photo => {
        state.push({ id: nanoid(), src: photo, index: state.length });
      });
    },
    deletePhoto: (state, action) => {
      const id = action.payload;
      return [...state].filter(photo => photo.id !== id);
    },
  }
});

export const { addPhotos, deletePhoto } = photoSlice.actions;

export const selectPhotos = (state) => state.photos;

export default photoSlice.reducer;
