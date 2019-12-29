import React, { PureComponent } from "react";
import { Modal, Button } from "antd";
import apiTool from "../../command/apiTool";
import FormView from "../FormView";
import formStore from "../../utils/formStore";
export default class FormModal extends PureComponent {
  clear = () => {
    const { isClear = true } = this.props;
    console.log('shuchu isClear', isClear)
    if (isClear) {
      apiTool.clearForm(this, this.getModelName());
    }
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isShowModal) {
      // this.clear()
    }
  }

  onCancel = () => {
    const { onCancel } = this.props;
    if (this.getModelName()) {
      apiTool.toggleModal(this, this.getModelName(), false);
      onCancel && onCancel();
      this.clear();
    } else {
      onCancel && onCancel();
    }
  };

  handleOk = () => {
    const { handleOk, onOk } = this.props;
    const onNewOk = onOk || handleOk;
    if (this.getModelName()) {
      formStore.sumbit(this.getModelName(), data => {
        onNewOk && onNewOk(data, this.props);
        if (!data.error) {
          apiTool.toggleModal(this, this.getModelName(), false);
        }
      });
    } else {
      onNewOk && onNewOk();
    }
  };

  getModelName = () => {
    return this.props.modelList && this.props.modelList[0];
  };

  getColSize = () => {
    const { colSize } = this.props;
    return typeof colSize == "function" ? colSize(this.props) : colSize || null;
  };

  renderFooter = () => {
    const { hiddenFooter } = this.props;
    if (hiddenFooter) {
      return null;
    } else {
      return [
        <Button key="back" onClick={this.onCancel}>
          取消
        </Button>,
        <Button key="submit" type="primary" onClick={this.handleOk}>
          确定
        </Button>
      ];
    }
  };

  render() {
    const { isShowModal, title, data, style, view, width, height } = this.props;
    if (!isShowModal) return null;
    console.log('输出props',this.props)
    return (
      <Modal
        onCancel={this.onCancel}
        onOk={this.handleOk}
        visible={isShowModal}
        title={title}
        okText={"确定"}
        footer={this.renderFooter()}
        cancelText={"取消"}
        maskClosable={false}
        width={width}
        height={height}
        style={style}
      >
        {!view
          ? data && (
              <FormView {...this.props} colSize={this.getColSize()} key={1} />
            )
          : view(this.props)}
      </Modal>
    );
  }
}
