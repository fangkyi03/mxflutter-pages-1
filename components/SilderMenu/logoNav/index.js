import style from './index.less'
import React,{Component} from "react"
import {Menu, Icon,Dropdown} from 'antd'
import {connect} from 'dva'
// import request from "@/utils/request"
// import cookie from 'react-cookies'

// @connect(({menubtn})=>({...menubtn}))
export default class LogoNav extends Component{
  constructor(prop) {
    super(prop);
    this.state = {
      current: '',
      title:''
    }
  }
  componentDidMount(){
    this.props.dispatch({
      type:'menubtn/getAppList'
    })
  }

  changeApp=(e,item)=>{
    this.props.dispatch({
      type:'menubtn/changeApp',
      data:item
    })
  }
  renderDrop=()=>{
    const {appList}=this.props
    return(
      <Menu>
        {
          appList.map(item=>{
            return(
              <Menu.Item key={item.uacid}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.uappUrl}
                  onClick={(e)=>this.changeApp(e,item)}
                >{item.uappName}</a>
              </Menu.Item>
            )
          })
        }
      </Menu>
    )
  }

  render(){
    const {curAppName,collapsed}=this.props
    return(
      <div className={style.logoNav}>
        {
          collapsed?'':<div>{curAppName}</div>
        }
        {/* <div className={style.arrow}>
          <Dropdown overlay={this.renderDrop()}>
            <Icon type="down-circle-o" />
          </Dropdown>
        </div> */}
      </div>
    )
  }
}
