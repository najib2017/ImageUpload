import callApi from '../../util/apiCaller';



export function imageUpdateStatus(res) {
	return {
    type: IMG_UPLOAD_STATUS,
   	data,
  };
} 

export function uploadImage(obj) {
	console.log("data", data);
	return (dispatch) => {
    	return callApi('imageupload', 'post', {
      	  name:obj.name,
      	  img:obj.img
    	}).then(res => dispatch(imageUpdateStatus(res)));
  	};
}
