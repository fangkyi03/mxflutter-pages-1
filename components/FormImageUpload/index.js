import React, { Component } from "react";
import { Upload, Icon, message } from "antd";
import styles from "./index.less";
import cookie from "react-cookies";
export default class FormImageUpload extends Component {
  onChange = data => {
    const { onChange } = this.props;
    data.fileList.forEach(e => {
      if (e.status == "done") {
        e.thumbUrl = e.response.data.urlid;
      }
    });
    onChange(data.fileList);
  };

  beforeUpload = file => {
    //  const isJpgOrPng = file.type === 'image/jpeg';
    // if (!isJpgOrPng) {
    //     message.error('只能上传JPG');
    // }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("图片大小超过2M");
    }
    return isLt2M;
  };

  render() {
    const { value = [], data, disable } = this.props;
    const maxNum = data.props && data.props.maxNum ? data.props.maxNum : 5;
    const uploadButton = (
      <div>
        <Icon type={"plus"} />
        <div className="ant-upload-text">点击上传</div>
      </div>
    );
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={true}
        action="/api/admin/qiniuManager/file"
        beforeUpload={this.beforeUpload}
        onChange={this.onChange}
        className={styles.main}
        fileList={value || []}
        disabled={disable}
        name={"myfile"}
        headers={{
          Authorization: `${cookie.load("tokenType")} ${cookie.load("token")}`,
          "X-Application-name": "credit"
        }}
        {...data.props}
      >
        {(!value || value.length < maxNum) && uploadButton}
      </Upload>
    );
  }
}
