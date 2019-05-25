import React, {Component} from 'react';
import {Badge, Icon, message, Tabs,Modal} from 'antd';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import './info.less';
// import Stomp from "stompjs"
import request from "../../../utils/request"
// import apiurl from "../../../apiurl"
import InfoList from './list';
const TabPane = Tabs.TabPane;
//  const sock = new SockJS('http://192.167.5.173:8103/simple');
// let stompClient = Stomp.over(sock);

@connect()
class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRead:0,
      current:1,
      pageSize:10,
      visible:false,
      //当前选择已读||未读消息
      listOne:[],
      //  [
      //   {
      //     id: 1,
      //     text: '农事机构现在正在进行施肥农事操作',
      //     link:{
      //       url:'list/listcount',
      //       data:{}
      //     },
      //     time:'',
      //     state:0
      //   },
      //   {
      //     id: 2,
      //     text: '你好吗',
      //     link:{
      //       url:'list/listcount',
      //       data:{}
      //     },
      //     time:'',
      //     state:1
      //   }
      // ],
      listTwo:[],
      listThr:[]
    }
  }

  componentDidMount() {
    //type read current 
    this.getListOne()
    this.getListTwo();
    let list=[],listname='';
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
    request(`/mc/mcMessage/page`,{
     current:1,size:10,"status":1
    }).then(res=>{
      if(res.code===200){
        let listOne=res.data.records
          this.setState({
            listOne:listOne,
           // current:current+1
          }) 
      }else {
        message.error(res.msg)
      }
    }).catch(err=>{})
    // return 
  }
  //可跳转的链接
  getListTwo=()=>{
    request(`/mc/mcMessage/selectUrl`,{
     current:1,size:10,"status":2
    }).then(res=>{
      if(res.code===200){
        let listTwo=res.data.records
          this.setState({
            listTwo:listTwo,
           // current:current+1
          }) 
      }else {
        message.error(res.msg)
      }
    }).catch(err=>{})
    // return 
  }
  //已读
  //未读数目为空时，补充已读
  getListConcatRead=(size)=>{
    this.setState({isRead:1,current:1})
    request(`/mc/mcMessageRecord/selectIsRead`,{
      //id:0
      // "is_read":1,current:1,pageSize:size
      "current":1,"size":10
    }).then(res=>{
      if(res.code===200){
        let listData=res.data.map(item=>{
          return {
            ...item,
            state:1
          }
        });
        // console.log(listData)
        return  listData;
      }else { 
        message.error(res.msg)
        return [];
      }
    }).catch(err=>{})
    return [];
  }
  // 某消息的点击事件
  infoClick=(val,witch)=>{
    let list=[],listname=''
    switch (witch) {
      case 1:
        list= this.state.listOne
        listname='listOne'
        break
      case 2:
        list= this.state.listTwo
        listname='listTwo'
        break
      case 3:
        list= this.state.listThr
        listname='listThr'
        break
      default:
        break
    }
    const ind=list.findIndex(item=>{
      return item.id===val.id
    })
    list[ind].state=1;
    console.log(list)
    this.setState({
      [listname]:list
    })
    request(`/mc/mcMessageRecord/updateIsRead`,{
      id:val.id,
      isRead:1
    }).then(res=>{
      console.log(res)
    }).catch(err=>{

    })
    if(val.link&&val.link.url){
      let url = val.link.url||'',stateUrl=val.link.data||{};
      // 准确路径
      this.hrefdDetailFun(url,stateUrl)
    }
  
  }
  // 跳转路由事件
  hrefdDetailFun=(url,stateUrl)=>{
    //监测任务详情
    if(/task\/detail$/.test(url)){
      sessionStorage.setItem('taskId',JSON.stringify({id:stateUrl.id, monitorProject:stateUrl.monitorProject}));
    }else if(/taskbatch\/new$/.test(url)){
      sessionStorage.setItem('tasksimple',JSON.stringify({tokenId:stateUrl.inspectionToken,see:1,
      sample:stateUrl.sample,url:url}));
    }else if(/list\/new$/.test(url)){
      //存疑 自己跳
      stateUrl={taskId:stateUrl.taskId,token:stateUrl.token,id:stateUrl.report,isCreate:!stateUrl.report};
    }else if(/patroltask\/patroldetail$/.test(url)){
      url=`${url}?id=${id}`
    }else if(/basemanagement\/new$/.test(url)){
      stateUrl = { isCreate: false, id: stateUrl.id }
    }else {
      console.log(url)
    }
    //  /basemanagement\/new$/.test('originbase/base/basemanagement/new')
    this.props.dispatch(routerRedux.replace({
      pathname:`/${url}`,
      state:stateUrl
    }))
  }
  //tab1页面
  renderInfo = () => {
    const {listOne} = this.state;
    return (
      <div className={'info-list'} id="parent-info">
        {
          listOne.length?
            <ul >
              {
                listOne.map((item, index) => (
                  <li
                    key={index}
                    onClick={()=>this.infoClick(item,1)}
                  >
                    <Badge status={item&&!item.state?"processing":'default'} text={item&&item.content?item.content:''} />
                  </li>
                ))
              }
            </ul> :
            <div className={'no-info-list'}>暂无消息</div>
        }
        {
          listOne.length===10?<div 
            className={'no-info-list'} 
            style={{cursor:'pointer'}}
            onClick={()=>{ 
              this.setState({visible:true})
            }}
          >加载更多</div>:''
        }
      </div>
    )
  }
  //tab 2 r.test(str)
  renderInfoTwo = () => {
    const {listTwo} = this.state;
    return (
      <div className={'info-list'}>
        {
          listTwo.length?
            <ul>
              {
                listTwo.map((item, index) => (
                  <li
                    key={index}
                    onClick={()=>this.infoClick(item,2)}
                  >
                    <Badge status={item&&!item.state?"processing":'default'} text={item&&item.content?item.content:''} />
                  </li>
                ))
              }
            </ul> :
            <div className={'no-info-list'}>暂无消息</div>
        }
      </div>
    )
  }
  //tab 3
  renderInfoThree = () => {
    const {listThr} = this.state;
    return (
      <div className={'info-list'}>
        {
          listThr.length?
            <ul>
              {
                listThr.map((item, index) => (
                  <li
                    key={index}
                    onClick={()=>this.infoClick(item,3)}
                  >
                    <Badge status={item&&!item.state?"processing":'default'} text={item&&item.content?item.content:''} />
                  </li>
                ))
              }
            </ul> :
            <div className={'no-info-list'}>暂无消息</div>
        }
      </div>
    )
  }
  //关闭弹窗
  handleOk=()=>{
    this.setState({visible:false})
  }
  // 列表弹窗加载
  renderInfoList=()=>{
    return(
      <Modal 
        maskClosable={false}
        className={'info-list-table'}
        title={'消息中心'}
        footer={null}
        style={{top: '12%',padding:0,minHeight:400}}
        width={1000}
        visible={true}
        onCancel={this.handleOk}
      >
        <InfoList />
      </Modal>  
    )
  }
  render() {
    return (
      <div className={'hd-info-box'}>
        <Tabs>
          <TabPane tab={<span><Icon type="bars"/></span>} key="1">
            {this.renderInfo()}
          </TabPane>
          <TabPane tab={<span><Icon type="team"/> </span>} key="2">
            {this.renderInfoTwo()}
          </TabPane>
          <TabPane tab={<span><Icon type="global"/></span>} key="3">
            {this.renderInfoThree()}
          </TabPane>
        </Tabs>
        {/* 消息中心列表跳转 */}
        {this.state.visible&&this.renderInfoList() }
        {/* <div style={{position:'absolute',bottom:10,textAlign:'center'}}>查看全部消息</div> */}
        <div className={'card-footer'}  onClick={()=>{this.setState({visible:true}) }} >
          查看全部消息
        </div>
      </div>
    );
  }
}

export default Info;
