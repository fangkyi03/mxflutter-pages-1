import React, { Component } from 'react';
import { Spin } from 'antd';

class LoadingComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShow: this.props.isShow
		};
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.isShow === false && this.state.isShow === true) {
			this.setState({ isShow: nextProps.isShow });
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !nextState.isShow;
	}

	/**
	 * 渲染正常视图
	 *
	 * @memberof LoadingComponent
	 */
	renderNormalComponent = () => {
		return (
			<div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
				<Spin tip="页面加载中..."/>
			</div>
		);
	}

  render() {
  	const {isShow} = this.state;
	const { renderComponent,renderView, style,fetchData} = this.props;
	const renderViewComponent = renderView || renderComponent
	return isShow ? this.renderNormalComponent() : renderViewComponent()
  }
}

export default LoadingComponent;
