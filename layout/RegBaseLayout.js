import React, { Component } from 'react';
import styles from './RegBaseLayout.less'
import { Layout } from 'antd';
import { getRegRouter } from "../common/router";
import { withRouter, Route, Redirect, Switch } from 'dva/router';
const { Header, Content, Footer } = Layout;

let { hostname } = window.location;
const urlName = hostname.indexOf("ztesa") != -1 ? "ztesa.com.cn:7801":"nongqibang.com:7801"


class RegBaseLayout extends Component {

	renderLeftText = () => {
		return (
			<div className={styles.headerLeft}>
				欢迎来到宁波市农产品质量安全服务平台，请/
            <a href={'/#/login'}>登录</a>
			</div>
		)
	}

	renderRightText = () => {
		const data = [
			{
				name: '首页',
				url: `http://${urlName}/`
			},
			{
				name: '新闻资讯',
				url: `http://${urlName}/news/`
			},
			{
				name: '政策解读',
				url: `http://${urlName}/policy/`
			},
			{
				name: '溯源查询',
				url: `http://${urlName}/search.html`
			},
			{
				name: '企业名录',
				url: `http://${urlName}/company/`
			},
			{
				name: '投诉举报',
				url: `http://${urlName}/tipoff.html`
			},
			{
				name: '农技培训',
				url: `http://${urlName}/train/`
			}
		]
		return (
			<div className={styles.headerRight}>
				{
					data.map((e, index) => {
						return (
							<a href={e.url} target={'_blank'} key={index}>{e.name}</a>
						)
					})
				}
			</div>
		)
	}
	
	renderHeader = () => {
		return (
			<div className={styles.headerMain}>
				{this.renderLeftText()}
				{this.renderRightText()}
			</div>
		)
	}

	renderFootView = () => {
		return (
			<div className={styles.footView}>
				{/* {this.renderFootViewReg()} */}
				{this.renderFootBlack()}
			</div>
		)
	}

	renderFootViewReg = () => {
		const data = [
			{
				name: '监管用户登录',
				url: '/'
			},
			{
				name: '企业用户登录',
				url: '/'
			},
			{
				name: '企业用户注册',
				url: '/'
			}
		]
		return (
			<div className={styles.footReg}>
				{
					data.map((e, index) => {
						return (
							<a href={e.url} target={'_black'} key={index}>{e.name}</a>
						)
					})
				}
			</div>
		)
	}

	renderFootBlack = () => {
		return (
			<div className={styles.footBlack}>
				<div>
					技术支持：浙江中兴慧农信息科技有限公司
				</div>
			</div>
		)
	}

	render() {
		return (
        <Layout>
            <Header style={{ background: 'white' }}>
                {this.renderHeader()}
            </Header>
            <Content className={styles.main}>	
				{this.props.children}
				<div style={{height:50}}/>
				<div className={styles.fixFootView}>
					{this.renderFootView()}
				</div>
            </Content>
        </Layout>
		);
	}
}

export default withRouter(RegBaseLayout);
