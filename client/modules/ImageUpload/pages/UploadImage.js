import React, {PropTypes, Component} from 'react';
import connect from 'react-redux';

import uploadImage from '../UploadActions'




class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
    console.log('image-', this.state.imagePreviewUrl);

    obj = {
      name: this.state.file.name,
      img:this.state.file.imagePreviewUrl
    }
    this.props.dispatch(uploadImage(obj));
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      

      <div className="previewComponent">
        <form onSubmit = {(e) => this.handleSubmit(e)}>
          <input className="fileInput" type="file" onChange={(e)=>this.handleImageChange(e)} />
          <button className="submitButton" type="submit" onClick={(e)=>this.handleSubmit(e)}>
            Upload Image</button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>        
    )
  }
}
  


export default connect(mapStateToProps)(UploadImage);