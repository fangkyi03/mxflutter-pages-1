import React,{Component}  from 'react';
// import GlobalBorder from '@/components/GlobalBorder';
import {Table,Icon,Badge,message} from 'antd';
import {connect} from 'dva';
import AuthBtn from '@/components/authBtn';
// import Stomp from "stompjs"
import request from "@/utils/request"
// import cookie from 'react-cookies'
import './list.less';
import { moment } from 'moment';
// const sock = new SockJS('http://192.167.5.173:8103/simple');
// let stompClient = Stomp.over(sock);
const urlReg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
class InfoList extends Component{
    constructor(props){
      super(props);
      this.state={
        selectedRows:[],
        isShow:false,
        data:[],
        current:1,
        total:0,
        value:{}   
      };
      this.columns=[
        {
          title:"ID",
          dataIndex:"id",
          width:120,
          align:'center',
          fixed:'left'
        },
        {
          title:'消息类型',
          dataIndex:'status',
          align:'center',
          render:(text)=>{
            return(
              <span>
                {parseInt(text,10)===1?`普通消息`:'调转详情'}
              </span>  
            )
          }

        },
        {
          title:'文本',
          dataIndex:'content',
          align:'center',
          render:(text,record)=>{  
            let urlRegArr =  text.match(urlReg);
            console.log(urlRegArr)
            if( urlRegArr&&urlRegArr[0]){
              return(
                <a href={`${urlRegArr[0]}`} target={'_blank'}>
                  {text&&text.length>=200?`${text.substring(0,198)}...`:text}
                </a>
              )  
            }else{
              return(
                <span>
                  {text&&text.length>=200?`${text.substring(0,198)}...`:text}
                </span>
              ) 
            }
            
          }
        },
        {
          title:'消息日期',
          dataIndex:'createDate',
          render:(text)=>{ 
            return(
              <span>
                {text?moment(text).format('YYYY-MM-DD HH:mm:ss'):''}
              </span>
            ) 
          }
        },
        {
          title:'状态',
          dataIndex:'state',
          align:'center',
          width:120,
          render:(text)=>{ 
            return(
              <span>
                <Badge status={text?'default':'processing'} text={text?'已读':'未读'} />
              </span>
            ) 
          }
        },
        {
          title: '操作',
          dataIndex: 'operation',
          width:120,
          align:'center',
          fixed:'right',
          render: (text, record) =>(
            <div className={'table-opt-btns'}>
              <AuthBtn authname="patrol_record_eye">
                <Icon type={'eye-o'} onClick={(e)=>this.handleDtailClick(e,record)} title={'查看'} />
              </AuthBtn>
            </div>  
          )
        }
      ]
    };
    componentDidMount(){
      // 列表数据请求
      this.getListOne();
      let list=[];
      // 监听
      // stompClient.connect({login:'admin'},()=> {
      //   //监听
      //   stompClient.subscribe('/user/topic/greetings',(data)=>{
      //     // console.log(data)
      //     data.state=0;
      //     this.state.current=1?list.unshift(data).slice(0,10):console.log(this.state.current);
      //     //加在首页第一条
      //     this.setState({
      //       data:list,
      //       total:this.state.total+1
      //     })
      //   })
      // })
    }
    // 初始数据加载
    getListOne=(current)=>{
      // let data =this.state.listOne;
      request(`/mc/mcMessage/list`,{
        "current":current||1,"size":10
      }).then(res=>{
        if(res.code===200){
          let listOne=res.data.records.map(item=>{
            return {
              ...item,
              state:0
            }
          });
          this.setState({
            data:listOne,
            current:res.data.current||1,
            total:res.data.total||0
          })
        }
      }).catch(err=>{
        console.error(err)
      })
    }
    // 点击查看消息
    handleDtailClick=(e,record)=>{
      // 未读标记为已读
      //再有借口后 标记此id为已读
      let {data} = this.state;
      const ind=data.findIndex(item=>{
        return item.id=== record.id;
      });
      // let infoUrl = record.content.match(urlReg);
     // console.log(infoUrl[0])
      request(`/mc/mcMessageRecord/updateIsRead`,{
        id:record.id,
        isRead:1
      }).then(res=>{
        // console.log(res)
        if(res.code === 200){
          data[ind].state=1;
          this.setState({
            data
          },()=>{
            //跳转
            if( record&& record.appRouter){
              let url =  record.appRouter||'',stateUrl= record.data||{};
              // 准确路径跳转函数
              this.hrefdDetailFun(url,stateUrl);
            }else{
              message.info("该消息已标记为已读")
            }
          });
        }
      }).catch(err=>{
        console.error(err)
      })
    
      
      
    }
    //判断跳转详情页面
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
    // 分页
    onPageClick=(page)=>{
      this.getListOne(page);
      
    }
    // 列表
    renderTable(){
      let {data=[],current=1,total=0}=this.state;
      return(
        <Table
          size={'small'}
          rowKey={'id'}
          columns={this.columns}
          scroll={{x:1300}}
          dataSource={data}
          pagination={{
           current:current,
           total:total,
           pageSize:10,
           onChange:this.onPageClick,
            showTotal:(total)=>`总共${total}个项目`
          }}
        />
      )
    }
    render(){
      return(
        <div className="main-box" style={{minWidth:1000}}>
          <div className={"main-content"}>
            {/* 渲染表格 */}
            {this.renderTable()}
          </div>
          {/* 详情 */}
          {/* {this.state.isShow&&this.renderMap()} */}
        </div>
      )
    }
}
export default connect()(InfoList);
