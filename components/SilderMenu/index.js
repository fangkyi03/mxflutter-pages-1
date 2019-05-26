import './index.less';
import React, { Component } from 'react';
import { Layout, Icon, Spin, Transfer } from 'antd';
import { withRouter } from 'dva/router';
import SiderMenu from './renderMenu';
import LogoNav from './logoNav'
import { connect } from 'dva';
import api from '../../command/api';
// import {env} from '@/env'
// import request from '@/utils/request'

const { Sider } = Layout;

class SiderCustom extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      openKeys: [],
      selectedKeys: [],
      collapsed: false,
      firstHide: false,
      menuList:[]
    };
  }
  UNSAFE_componentWillMount() {
    const { history } = this.props;
    // history.listen(e => {
    //   const path = e.pathname.split('/').slice(1);
    //   // console.log()
    //   let openKeys = [], pathname = [];
    //   if (path.length >= 3) {
    //     openKeys = [`/${path[0]}`, `/${path[0]}/${path[1]}`]
    //     if (path[path.length - 1] === 'new' || path[path.length - 1] === 'detail' || path[path.length - 1] === 'agriculturalSubjectDetaile') {
    //       pathname = path.slice(0, path.length - 1);
    //       // console.log(pathname)
    //     } else {
    //       pathname = path.slice(0, 3);
    //     }
    //   } else {
    //     openKeys = [`/${path[0]}`]
    //     pathname = path.slice(0, 2);
    //   }
    //   // console.log(pathname)
    //   this.setState({
    //     openKeys: ["mainbody",'supervision',"/mainbody/supervision/patrolrecord"],
    //     selectedKeys: [`/mainbody/supervision/patrolrecord`]
    //   });
    // });
  }

  componentDidMount() {
    this.setState({
      menuList:require('./menu.json').data.menu
    })
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      firstHide: !this.state.collapsed
    });
  };

  //渲染菜单头部数据
  renderMenuHeader = () => {
    const { collapsed } = this.state
    return (
      <div>
        <div className="aside-btn">
          <a onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {/* 11111111111 */}
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
          </a>
        </div>
        <div className="logo">
          <LogoNav collapsed={collapsed} />
        </div>
      </div>
    );
  };

  onOpenChange = (e) => {
    this.setState({
      openKeys: e,
      firstHide: false
    });
  }

  onMenuClick = () =>{
    this.props.dispatch({type:"clearModel/clearAll"});
  }

  render() {
    const { menuLoading, maxMenu } = this.props;
    const { collapsed, openKeys, selectedKeys, firstHide, menuList } = this.state
    return (
      <Sider
        collapsible
        className={'aside-box'}
        trigger={null}
        width={230}
        theme={'dark'}
        // collapsedWidth={50】
        collapsed={collapsed}
      >
        {this.renderMenuHeader()}
        {
          menuLoading ?
            <div className={'menu-loading'}><Spin /></div> :
            <SiderMenu
              onClick={this.onMenuClick}
              onOpenChange={this.onOpenChange}
              // openKeys={firstHide ? null : openKeys}
              // selectedKeys={selectedKeys}
              menus={menuList}
              inlineIndent={18}
              theme="dark"
              mode="inline"
            />
        }
      </Sider>
    );
  }
}

export default connect(({ menubtn }) => ({ ...menubtn }))(SiderCustom);
