import React from "react";
import axios from "axios";

class uploadAction extends React.Component {
  state = {
    imageTitle: "Browse For Files",
    file: "",
    uploadedFile: {}
  };
  handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", this.state.file);

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      const { imageTitle, filePath } = res.data;
      this.setState({ uploadedFile: { imageTitle, filePath } });
    } catch (err) {
     
        console.log(err.response.data.msg);
     
    }
  };
  handleOnchange = event => {
    this.setState({
      imageTitle: event.target.files[0].name,
      file: event.target.files[0]
    });
  };
  render() {
    return (
      <form
        action="/upload"
        onSubmit={this.handleSubmit}
        enctype="multipart/form-data"
        required
      >
        <br />

        <label class="input">
          <p>{this.state.imageTitle}</p>
          <input type="file" onChange={this.handleOnchange} />
        </label>

        <button className="upload" type="submit">
          Upload
        </button>
      </form>
    );
  }
}
export default uploadAction;
