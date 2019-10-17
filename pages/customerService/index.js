// 客服服务
import React, { Component } from 'react'
import styles from './index.less'
import Header from '../../components/Header'
import apiTool from '../../command/apiTool'

export default class CustomerService extends Component {
 
  renderScan = () => {
    const data = [
        {
            'name':'扫一扫 关注公众号',
        },
        {
            'name':'手机 八鲜优选'
        }
    ]
    return (
        <div className={styles.qrCode}>
            <div className={styles.qr}>
                {
                    data.map((e)=>{
                        return (
                            <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:apiTool.getSize(50)}}>
                                <img 
                                  src={require('../../images/CustomerServer/qrCode.jpg')} 
                                  style={{width:apiTool.getSize(300),height:apiTool.getSize(284)}}
                                />
                                <div 
                                  style={{width:e.name.length > 8 && apiTool.getSize(234),fontSize:apiTool.getSize(28),marginTop:apiTool.getSize(36)}}
                                >
                                  {e.name}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
  }

  render() {
    return (
      <div className={styles.main}>
        <Header/>
        {this.renderScan()}
      </div>
    )
  }
}
