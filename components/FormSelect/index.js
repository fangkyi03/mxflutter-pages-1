import React, { Component } from 'react'
import styles from './index.less'
import apiTool from '../../command/apiTool'

export default class FormSelect extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
          isShowModal:false,
          modalList:[]
      }
  }
  
  renderModal = () => {
    const {modalList} = this.state
    return (
        <div className={styles.modal}>
            <div style={{maxHeight:apiTool.getSize(400),overflow:'scroll',borderRadius:apiTool.getSize(10)}}>
                {modalList.map((e) => {
                    return (
                        <div className={styles.modalListItem}>
                            {e.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
  }


  setModalType = (item) => {
    this.setState({
        isShowModal:true,
        modalList:item
    })
  }

  render() {
    const {data } = this.props
    const {isShowModal} = this.state
    return (
      <div className={styles.main}>
            <div
                onClick={() => this.setModalType(data.typeData)}
                className={styles.codeView}
            >
                <div style={{ fontSize: apiTool.getSize(28), color: '#999999' }}>{'请输入' + data.name}</div>
                <img src={require('../../images/Index/cardRightIcon.png')} style={{ width: apiTool.getSize(24), height: apiTool.getSize(24) }} />
            </div>
            {/* 显示弹出选择页面 */}
            {isShowModal && this.renderModal()}
      </div>
    )
  }
}
