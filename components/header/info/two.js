import React, {Component} from 'react';
import {Badge, Icon, Tabs/*,notification*/} from 'antd';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import './info.less';
// import Stomp from "stompjs"
import request from "../../../utils/request"
import apiurl from "../../../apiurl"

const TabPane = Tabs.TabPane;
// const socket=io('http://192.167.5.173:8103/simple')
// const sock = new SockJS('http://192.167.5.173:8103/simple');
// let stompClient = Stomp.over(sock);

@connect()
class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOne: [
        {
          id: 1,
          text: '农事机构现在正在进行施肥农事操作',
          link:{
            url:'list/listcount',
            data:{}
          },
          time:'',
          state:0
        },
        {
          id: 2,
          text: '你好吗',
          link:{
            url:'list/listcount',
            data:{}
          },
          time:'',
          state:1
        }
      ],
      listTwo:[]
    }
  }

  componentDidMount() {
    // stompClient.connect({login:'admin'},(frame)=> {
    //   // console.log(frame)
    //   stompClient.subscribe('/user/topic/greetings',(data)=>{
    //     console.log(data)
    //     this.setState({
    //       // listOne
    //     })
    //   })
    // })
  }

  getListOne=()=>{
    request(`${apiurl.list}rbChart/getRate`,{
      isRed
    }).then(res=>{
      if(res.code===200){
        chart.changeData(res.data)
      }else {
        // message.error(res.msg)
      }
    }).catch(err=>{})
  }

  infoClick=(val)=>{
    // const {listOne} = this.state;
    // const ind=listOne.findIndex(item=>{
    //   return item.id===val.id
    // })
    // listOne[ind].state=1
    // this.setState({
    //   listOne
    // })
    // this.props.dispatch(routerRedux.replace({
    //   pathname:`/${val.link.url}`,
    //   state:val.link.data
    // }))
  }
  /*//滚动加载
  onScroll = (e) => {
    // let {current,query} =this.state;
    let offsetTop = document.getElementById('child-info').scrollTop;
    let parentH = document.getElementById('parent-info').offsetHeight;
    let childH = document.getElementById('child-info').scrollHeight;
    let {data} = this.state;
    /!*if (offsetTop + parentH - childH >= -10) {
      data = data.concat(data.slice(0, 6));
      // console.log(data)
      this.setState({data: data})
    }*!/
  }*/
  //tab2页面
  renderInfoTwo = () => {
    const {listOne} = this.state;
    return (
      <div className={'info-list'} id="parent-info">
        <ul>
          {
            listOne.map((item, index) => (
              <li
                key={index}
                onClick={()=>this.infoClick(item)}
              >
                <Badge status={item.state===0?"processing":'default'} text={item.text} />
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
  //tab 2
  // renderInfoTwo = () => {
  //   return (
  //     <div>
  //       <div className={'no-info-list'}>暂无消息</div>
  //     </div>
  //   )
  // }

  

  render() {
    return (
      <div className={'hd-info-box'}>
       
        {this.renderInfoTwo()}
        
      </div>
    );
  }
}

export default Info;
