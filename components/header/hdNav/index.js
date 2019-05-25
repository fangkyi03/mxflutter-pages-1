import './index.less'
import React, {Component} from 'react';
import {Tabs, Icon} from 'antd';
import {withRouter} from 'dva/router';
// import request from "@/utils/request"
import {connect} from 'dva';

const TabPane = Tabs.TabPane;

@connect(({menubtn})=>({...menubtn}))
class HeadNav extends Component {
  componentDidMount(){

  }
  showMenu=(val)=>{
    // console.log(val)
    const {dispatch}=this.props
    dispatch({
      type:'menubtn/showFourMenu',
      val
    })
    dispatch({
      type:'menubtn/fourCurMenu',
      data:val
    })
  }
  render() {
    const {menuList,maxMenu,fourCurMenu}=this.props
    return (
      <div>
        <Tabs
          onChange={this.showMenu}
          activeKey={fourCurMenu}
          tabBarGutter={0}
          // style={{maxWidth:'60%'}}
        >
          {
            maxMenu>3?menuList.map((item) => {
              return (
                <TabPane
                  key={item.permission}
                  tab={
                    <span>
                      <Icon type={item.icon} />{item.label}
                    </span>
                  }
                />
              )
            }):null
          }
        </Tabs >
      </div>
    );
  }
}

export default withRouter(HeadNav);
