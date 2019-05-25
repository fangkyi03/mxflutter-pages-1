import React, { Component } from 'react'
import { Upload, Icon ,message} from 'antd'
import cookie from 'react-cookies'
// import { env } from "@/env";
import api from '../../../command/api';


// let { hostname } = window.location;
// hostname = hostname.split(".")[0];

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif';
    if (!isJPG) {
        message.error('请上传一张正确格式的图像');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('对不起，图像大小不得超过 2MB!');
    }
    return isJPG && isLt2M;
}

export default class UploadImages extends Component {

    constructor(props){
        super(props)
    }
    state = {
        loading: false,
        isUpload:false
    };

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            let url = info.fileList[info.fileList.length - 1].response.data[0].url
            let uuid = this.props.account
            this.props.upImages(url,uuid)
            getBase64(info.file.originFileObj, imageUrl => this.setState({
                isUpload:true,
                imageUrl,
                loading: false,
            }));
        }
    }

    componentDidMount(){
        
    }


    render() {
        let imageUrl = this.props.headImage;
        if(this.state.isUpload){
            imageUrl = this.state.imageUrl
        }else{
            imageUrl = this.props.headImage
        }
        return (
            <Upload
                headers={{
                    Authorization: `${cookie.load("tokenType")} ${cookie.load(
                    "token"
                    )}`,
                    // "X-Application-name": env ? "supe" : hostname
                }}
                name="myfile"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action={"/api/upms/company/upyun/uploadFileAndImg"}
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
            >
                <div className={'peopleImg'} style={{ backgroundImage: `url(${imageUrl})` }} onClick={this.addHeadImage}></div>
            </Upload>
        )
    }
}
