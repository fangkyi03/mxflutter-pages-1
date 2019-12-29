import React, { Component } from 'react'
import { Button } from 'antd';
import styles from './index.less'
import apiTool from '../../command/apiTool';

export default class SearchRest extends Component {

  static defaultProps = {
    isShowMore:true,
    onSearch:()=>{},
    onReset:()=>{}
  }

  constructor(props) {
    super(props);
    this.state = {
      isMore:false
    }
  }
  
  onMoreDown = () =>{
    const {onMore,isMore} = this.props
    onMore && onMore(!isMore)
  }

  onSearch = ()=>{
    const {onSearch} = this.props
    onSearch && onSearch()
  }

  onReset = ()=>{
    const {onReset} = this.props
    onReset && onReset()
  }

  render() {
    const {isMore,isShowMore} = this.props
    return (
      <div className={styles.main}>
        <Button type={'primary'} onClick={this.onSearch}>查询</Button>
        <Button type={'default'} style={{marginLeft:apiTool.getSize(10)}} onClick={this.onReset} >重置</Button>
        {isShowMore && <div className={styles.more} style={{marginLeft:apiTool.getSize(10)}} onClick={this.onMoreDown}>{isMore?'收起':'展开更多'}</div>}
      </div>
    )
  }
}
