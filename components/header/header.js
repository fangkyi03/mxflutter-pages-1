import "./header.less";
import React, { Component } from "react";
import {
  Menu,
  Dropdown,
  Icon,
  Avatar,
  Modal /*,notification*/,
  // Badge,
  // Popover,
  Form,
  // Input,
  // Button,
} from "antd";
import { connect } from "dva";
import cookie from "react-cookies";
import { routerRedux, Link } from "dva/router";
// import request from "../../utils/request";
// import requestBack from "../../utils/backLogin";
import HeadNav from "./hdNav";
// import apiurl from "../../apiurl";
// import { domain, domainLogin } from "../../env";
 import CatalogInfo from "./info/catalogInfo";
import api from "../../command/api";
import Reset from "./modalReset";
// import  {getLogin} from '../../utils/utils';
const confirm = Modal.confirm;
const FormItem = Form.Item;
// @connect(({userinfo})=>({...userinfo}))
class Head extends Component {
  static defaultProps = {
    leftTitle: ""
  };

  constructor(props) {
    super(props);
    console.log('输出header')
    this.state = {
      userInfo: {},
      infoShow: false,
      modalResetShow:false,
      editModal: false
    };
  }

  loginOut = () => {
    const loginType = cookie.load('loginType')||0;
    const token=cookie.load('token')||0;
    // console.log(loginType)
    if(token){
      confirm({
        title: "确定要退出吗?",
        onOk: () => {
          requestBack("/auth/authentication/removeToken", {
            accesstoken: cookie.load("token")
          }).then(e => {
            if (e.code == 200) {
              cookie.remove("token", { domain: domain });
              cookie.remove("tokenType", { domain: domain });
              // cookie.remove("loginType", { domain: domain });
              cookie.remove("user", { domain: domain });
              this.props.dispatch({ type: "clearModel/clearAll" });
              // window.location.href = "http://ztesa.com.cn/";
              // console.log(domainLogin)
               getLogin(loginType,this)
            
              // message.success("退出成功");
            } else {
              // message.error("退出失败");
            }
         });
        }
      });
    }else{
      this.props.dispatch({ type: "clearModel/clearAll" });
      getLogin(loginType,this)
      // message.success("退出成功");
    }
   
  };

  resetPassword = () =>{
    this.setState({
      modalResetShow:true,
 
    })
  }
  renderDrop = () => {
    return (
      <Menu>
        
        <Menu.Item>
          <a onClick={this.resetPassword}>修改密码</a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={this.loginOut}>退出登录</a>
        </Menu.Item>
      </Menu>
    );
  };

  componentDidMount(){
    // api.send(this,[
    //   api.UumUserController_ADMIN('userinfo').infoUsingPOST()({
    //     tranData:({data})=>{
    //       return {uumUser:data.uumUser,loginType:cookie.load('loginType')||0}
    //     },
    //   })
    // ])
  }

  showInfoWin = e => {
    this.setState({
      infoShow: !this.state.infoShow
    });
  };

  renderTitle = () => {
    const { leftTitle } = this.props;
    return <div className={"headerLeftTitle"}>{leftTitle}</div>;
  };

  homeClick = () => {
    //17833334444 局长号码
    api.send(this, [
      api.UumUserController_ADMIN("regulationModal").infoUsingPOST({})({
        tranData: res => {
          if (res.data.uumUser.mobile === "17833334444") {
            this.props.dispatch(routerRedux.replace("/NewMain"));
          } else {
            this.props.dispatch(routerRedux.replace("/indexHome"));
          }
        },
        onError: () => {}
      })
    ]);
  };

  content = () =>{
    const {infoShow } = this.state;
    return(
      <div>
      {infoShow&&<CatalogInfo   />}
    </div>
    )
  }


  render() {
    const { userInfo, infoShow, editModal } = this.state;
    const { leftTitle,uumUser = {},loginType } = this.props;
    // console.log('userinfo',this.props)
    return (
      <div className={"header"} style={{ paddingLeft: leftTitle ? 0 : 0 }}>
        {leftTitle && this.renderTitle()}
        <div className={"hd-left"}>
          {/* <HeadNav /> */}
          {/* 宁波市智慧农业云平台 */}
        </div>
        <div className={"hd-right"}>
          {
            !loginType&&<div className={"header-icon"}>
              <a onClick={this.homeClick}>
                <Icon type="home" />
              </a>
            </div>
          }
          {/* {
            !loginType&&<div className={"header-icon"}>
            <Icon type="desktop" />
            </div>
          }
          {
            !loginType&&<div className={"header-icon"}>
              <Icon type="search" />
             
            </div>
           }
            {
              !loginType&&<div className={"header-icon info-window-btn"}>
              <Badge count={0} overflowCount={99} onClick={this.showInfoWin}>
                <Icon type="bell" />
              </Badge>
              </div>
            } */}
            {/* 消息推送窗口 */}
            {/* {infoShow&&<Info />} */}
            {/* <div onMouseOut={()=>{ this.setState({ infoShow: false})}}> */}
            <div 
            onMouseEnter={()=>{
              //console.log('划入')
                this.setState({ infoShow: true})
              }}
              onMouseLeave={()=>{ 
               this.setState({ infoShow: false})
                // console.log('划出')
              }}
            >
            {
              !loginType&&<div className={"header-icon info-window-btn"}>
              {/* <Popover placement="bottom" title={'目录'} content={this.content()} trigger="click"> */}
              <span onClick={this.showInfoWin}>
                <Icon type="file" title={'目录'} />
              </span>
              {/* </Popover> */}
              </div>
            } 
            {infoShow&&<CatalogInfo   />}
            </div>
          
            {/* </div> */}
           
          <div className={"header-icon"}>
            <div className={"user-info-box"}>
              <Dropdown overlay={this.renderDrop()} placement={"topCenter"}>
                {/* <Avatar size="small" icon="user" /> */}
                <span style={{ cursor: "pointer" }}>
                  {/* <Avatar size="small" src={ uumUser && uumUser.headPortrait} /> */}
                  {/* {console.log('this.props.dataHeader',this.props)} */}
                  <span className={"user-name"}>
                    {uumUser && uumUser.uname}
                  </span>
                </span>
              </Dropdown>
            </div>
          </div>
        </div>
         {this.state.modalResetShow?<Reset resetId={this.state.resetId} onClose={()=>{this.setState({modalResetShow:false})}} />:''}
      </div>
    )
  }
}

const HeadForm = Form.create()(Head);

export default Head;
