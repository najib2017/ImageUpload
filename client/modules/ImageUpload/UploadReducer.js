import { IMG_UPLOAD_STATUS } from './UploadAction';

// Initial State
const initialState = { data: [] };


const ImgReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMG_UPLOAD_STATUS :
      return {
        data: [action.data],
      };

    

    default:
      return state;
  }
};

// Export Reducer
export default ImgReducer;