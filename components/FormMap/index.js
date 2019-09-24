// 表单地图组件
import React, { Component } from 'react'
import { Input, Button, message, Alert } from 'antd';
import FormModal from '../FormModal';
import apiTool from '../../command/apiTool';

export default class FormMap extends Component {

  constructor(props) {
      super(props);
      this.state = {
          isShowModal:false
      }
      this.map = null
      this.lnglat = []
  }
  
  
  renderModal = () =>{
    return (
        <div id={'FormMap'} style={{width:'100%',height:apiTool.getSize(500)}} />
    )
  }

  initMap = () => {
      const {value} = this.props
      var satellite = new AMap.TileLayer.Satellite();
      var roadNet = new AMap.TileLayer.RoadNet();
      this.map = new AMap.Map('FormMap', {
          zoom: 13,//级别
          center: [121.449738, 30.240086],
          layers: [
              satellite,
              roadNet
          ]
      });
      if (value && value.split(',').length == 2) {
          this.map.clearMap()
          var marker = new AMap.Marker({
              position: value.split(',')//位置
          })
          this.lnglat = value.split(',')
          this.map.add(marker);//添加到地图
      }
      this.map.on('click',(data)=>{
          this.map.clearMap()
          const {lnglat} = data
          var marker = new AMap.Marker({
              position: [lnglat.lng, lnglat.lat]//位置
          })
          this.lnglat = [lnglat.lng, lnglat.lat]
          this.map.add(marker);//添加到地图
      })
  }

  onOpenMap = () =>{
    this.setState({ isShowModal: true }, () => {
        setTimeout(() => {
            this.initMap()
        })
    })
  }

  onCancel = () =>{
    this.setState({isShowModal:false})
  }

  onOk = () =>{
    const {onChange} = this.props
    this.setState({isShowModal:false},()=>{
        onChange(this.lnglat.toString())
    })
  }

  render() {
    const { isShowModal } = this.state
    const {value,onChange, disable} = this.props
    return (
        <div style={{display:'flex',alignItems:'center'}}>
            <Input placeholder={'请选择坐标'} disabled={disable} value={value} onChange={(value) =>onChange(value.currentTarget.value)}/>
            <Button disabled={disable} onClick={this.onOpenMap}>打开地图</Button>
            <FormModal
                view={this.renderModal}
                isShowModal={isShowModal}
                title={'选择地图坐标'}
                width={800}
                onCancel={this.onCancel}
                onOk={this.onOk}
            />
        </div>
    )
  }
}
