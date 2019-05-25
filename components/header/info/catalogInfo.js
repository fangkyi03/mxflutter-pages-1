import React, {Component} from 'react';
import {Badge, Icon, message, Tabs,Modal} from 'antd';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import './info.less';
// import Stomp from "stompjs"
// import request from "../../../utils/request"
// import apiurl from "../../../apiurl"
// @connect()
class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRead:0,
      current:1,
      pageSize:10,
      visible:false,
      //当前选择已读||未读消息
      listOne:{},

    }
  }

  componentDidMount() {
    //type read current 
    this.getListOne()
  
    // stompClient.connect({login:'admin'},()=> {
    //   //监听
    //   stompClient.subscribe('/user/topic/greetings',(data)=>{
    //     data.state=0;
    //     // data.type //判断123 //unshift
    //     switch (data.type) {
    //       case 1:
    //         list= this.state.listOne
    //         listname='listOne'
    //         break
    //       case 2:
    //         list= this.state.listTwo
    //         listname='listTwo'
    //         break
    //       case 3:
    //         list= this.state.listThr
    //         listname='listThr'
    //         break
    //       default:
    //         break
    //     }
    //     list.unshift(data)
    //     this.setState({
    //       [listname]:list
    //     })
    //   })
    // })
  }
  //未读优先，已读殿后
  getListOne=()=>{
    // let data =this.state.listOne;
    // request(`/upms/basic/catalog/page`,{
    //  current:1,size:10,condition:{state:1}
    // }).then(res=>{
    //   if(res.code===200){
    //     let listOne=res.data
    //       this.setState({
    //         listOne:listOne,
    //        // current:1,
    //       }) 
    //   }else {
    //     message.error(res.msg)
    //   }
    // }).catch(err=>{})
    // return 
  }
  getMore = (current) =>{
    let data =this.state.listOne||{records:[]};
    // request(`/upms/basic/catalog/page`,{
    //     current:current||1,size:10,"status":1
    //    }).then(res=>{
    //      if(res.code===200){
    //        let listOne=res.data.records.concat(data.records)
    //          this.setState({
    //            listOne:{...res.data,records:listOne,},
    //           // current:current+1
    //          }) 
    //      }else {
    //        message.error(res.msg)
    //      }
    //    }).catch(err=>{})
  }
  
  //未读数目为空时，补充已读
  getListConcatRead=(size)=>{
    
  }
  // 某消息的点击事件
  infoClick=(val,witch)=>{
  
  }
  // 跳转路由事件
  hrefdDetailFun=(url,stateUrl)=>{

    //  /basemanagement\/new$/.test('originbase/base/basemanagement/new')
    this.props.dispatch(routerRedux.replace({
      pathname:`/${url}`,
      state:stateUrl
    }))
  }
  //tab1页面
  renderInfo = () => {
   const {listOne={}} = this.state;
   const {records=[],current,pages}=listOne;

    return (
      <div className={'info-list-cataList'} id="parent-info" >
        {
          records.length?
            <ul >
              {
                listOne.records.map((item, index) => (
                  <li
                    className={'info-list-catalog'}
                    key={index}
                    onClick={()=>this.infoClick(item,1)}
                  >
                   <span  className={'info-list-circle'} style={{marginRight:12}}>{index+1}</span>
                   <a href={item.file||""}  download = {item.fileName||"file"} target={"_blank"}>
                       
                        {item.title&&item.title.length>28?item.title.substring(0,26)+'...':item.title||""}
                    </a>
                    <span style={{float:'right'}}>
                        <a href={item.file||""} download = {item.fileName||'file'} target={"_blank"}>
                            下载
                        </a>
                    </span>
                   
                  </li>
                ))
              }
            </ul> :
            <div className={'no-info-list'}>暂无目录</div>
        }
        {
          pages>current?<div 
            className={'no-info-list'} 
            style={{cursor:'pointer'}}
            onClick={()=>this.getMore(current+1)}
          >加载更多</div>:''
        }
      </div>
    )
  }
 

  // 列表弹窗加载

  render() {
    return (
      <div className={'hd-info-box'} >
        {this.renderInfo()}
        {/* 消息中心列表跳转 */}
        {/* {this.state.visible&&this.renderInfoList() } */}
        {/* <div style={{position:'absolute',bottom:10,textAlign:'center'}}>查看全部消息</div> */}
        {/* <div className={'card-footer'}  onClick={()=>{this.setState({visible:true}) }} >
          查看全部消息
        </div> */}
      </div>
    );
  }
}

export default Info;
