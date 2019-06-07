import React from "react";
import LinkBar from "./LinkBar";

class UploadImage extends React.Component {
  state = {
    title: ""
  };
  handleOnChange = e => {
    this.setState({ title: e.target.value[0] });
  };
  render() {
    return (
      <div>
        <LinkBar />
        <form
          action="/upload"
          onSubmit={this.handleSubmit}
          enctype="multipart/form-data"
          required
        >
          <label className="input">
            <p>{this.state.imageTitle}</p>
            <input
              type="file"
              onChange={e => this.setState({ title: e.target.value })}
            />
          </label>

          <button className="upload" type="submit">
            Upload
          </button>
        </form>
      </div>
    );
  }
}
export default UploadImage;
