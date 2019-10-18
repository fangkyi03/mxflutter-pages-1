import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ListView } from "antd-mobile";
import apiTool from "../../command/apiTool";
import styles from './index.less'

function MyBody(props) {
  return (
    <div
      className="am-list-body my-body"
      style={{ backgroundColor: "rgb(241, 241, 241)", border: "none" }}
    >
      {props.children}
    </div>
  );
}

export default class ListPage extends React.Component {
  static defaultProps = {
    image: require("../../images/Component/ListView/icon41.png"), // 空白页图片
    text: "您目前还没有任何抵用券哦~", // 空白页提示
    data: [ ],
    topHeight: 55,
    onRefresh: () => { },
    renderItem: () => (
      <div
        style={{
          height: "100px",
          backgroundColor: "yellow",
          marginTop: "20px"
        }}
      />
    )
  };

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.state = {
      dataSource,
      isLoading: true,
      height: 100,
      data: this.props.data || [],
      pageIndex: 0
    };

    this.onEndReached = apiTool.debounce(this.onEndReached)
  }

  componentDidMount() {
    const { data } = this.state
    let hei
    if (!data || data.length === 0) {
      hei = '100vh'
    } else {
      console.log('window.innerHeight', document.documentElement.clientHeight)
    }


    setTimeout(() => {
      const { data } = this.state;
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data),
        isLoading: false,
        height: hei
      });
    }, 100);
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  componentWillReceiveProps(nextProps) {
    if (nextProps.data && nextProps.data !== this.state.data) {
      let isEnd = false;
      if (nextProps.data.length === this.state.data.length) {
        // 如果进来的数据数量 和 原来的数据数量一样 就说明没有下一页数据了
        isEnd = true;
      }
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.data),
        isLoading: false,
        data:nextProps.data,
        isEnd
      });
    }
  }

  onEndReached = event => {
    // if (!this.state.isLoading && this.state.isEnd) {
    if (this.state.isEnd) {
      return;
    }
    let { pageIndex } = this.state
    pageIndex = pageIndex + 1
    this.setState({ isLoading: true, pageIndex: pageIndex });
    this.props.onRefresh(pageIndex+1);
  };

  renderFooter = () => {
    const { isLoading, isEnd, data,size } = this.state;
    const num = size || 10
    if ((data.length % num !== 0) || isEnd) {
      // 如果 数据不能被 10 或者传进来的size 整除 或者 isEnd=true 就说明数据已经没有了
      return (
        <div
          style={{
            padding: 20,
            textAlign: "center",
            fontSize: apiTool.getSize(24)
          }}
        >
          没有数据了...
        </div>
      );
    } else {
      if (isLoading) {
        return (
          <div
            style={{
              padding: 20,
              textAlign: "center",
              fontSize: apiTool.getSize(24)
            }}
          >
            loading...
          </div>
        );
      } else {
        return (
          <div
            style={{
              padding: 20,
              textAlign: "center",
              fontSize: apiTool.getSize(24)
            }}
          >
            下一页
          </div>
        );
      }
    }
  };

  renderEmpty = () => {
    const { image, text } = this.props
    return (
      <div style={{ textAlign: "center" }}>
        <img
          style={{
            width: apiTool.getSize(460),
            height: apiTool.getSize(387),
            marginTop: apiTool.getSize(178)
          }}
          src={image}
        />
        <div
          style={{
            fontSize: apiTool.getSize(26),
            color: "#B5B5B5",
            textAlign: "center",
            marginTop: apiTool.getSize(84)
          }}
        >
          {text}
        </div>
      </div>
    );
  };

  render() {
    const { topHeight, renderEmpty, hiddenEmpty = false } = this.props;
    const { data } = this.state
    if (!data || data.length === 0 && !hiddenEmpty) {
      return (renderEmpty || this.renderEmpty)()
    }
    return (
      <div className={styles.main}>
        <ListView
          ref={el => (this.lv = el)}
          className={styles.listView}
          dataSource={this.state.dataSource}
          renderFooter={this.renderFooter}
          renderBodyComponent={() => <MyBody />}
          renderRow={(rowData, sectionID, rowID) =>
            this.props.renderItem(rowData, sectionID, rowID)
          }
          style={{
            height:'100%',
          }}
          pageSize={4}
          scrollRenderAheadDistance={500}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={10}
        />
      </div>
    );
  }
}
