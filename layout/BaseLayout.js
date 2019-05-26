import React, { Component } from 'react';
import './BaseLayout.less';
import { Layout } from 'antd';
import {
  withRouter, Route, Redirect, Switch,
} from 'dva/router';
import SilderMenu from '../components/SilderMenu';
// import { getRouterData } from '../common/router';
import Head from '../components/header/header';
// import Reset from './reset'
// import api from '../command/api'
// import request from '@/utils/request'

const { Header, Content } = Layout;

class BaseLayout extends Component {
  constructor(){
    super();
    this.state = {
      modalResetShow:false
    }
  }

  componentDidMount(){
    // request(`/admin/user/info`, {
    
    // }).then(res => {
    //   if (res.code === 200) {
    //     let userInfo = res.data.uumUser||{}
    //      if(userInfo.salt === 0||userInfo.salt === '0'){
    //       this.setState({
    //         modalResetShow:true
    //       })
    //     }
    //   } else {
    //     message.info(res.msg||res.message||'')
    //   }
    // })
    // .catch(() => {
    // })
  }

  render() {
    // const routerData = getRouterData(this.props.app);
    return (
      <Layout style={{ height: '100%' }}>
        <SilderMenu />
        <Layout style={{ overflow: 'hidden' }}>
          <Header className="header-box">
            <Head/>
          </Header>
          <Content className="content-box">
            {this.props.children}
          </Content>
        </Layout>
        {/* {this.state.modalResetShow?<Reset  onClose={()=>{this.setState({modalResetShow:false})}} />:''} */}
      </Layout>
    );
  }
}

export default BaseLayout
