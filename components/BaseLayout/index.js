import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
const { Sider,Content } = Layout;
import Router from 'next/router'
import styles from './index.less'
import Header from '../Header';
import SliderMenu from '../SliderMenu';

export default class BaseLayout extends Component {

    renderLeftMenu = () => {
        const data = [
            {
                name: '园区概括',
                children: [
                    {
                        name: '园区简绍',
                        router: 'index1'
                    },
                    {
                        name: '产业分布',
                        router: 'index'
                    },
                    {
                        name: '登录',
                        router: 'login'
                    }
                ]
            },
            {
                name: '安防监控',
                children: [
                    {
                        name: '园区安防',
                        router: 'parkSafety'
                    },
                    {
                        name: '数字农业',
                        router: 'index'
                    }
                ]
            },
            {
                name: '公共服务',
                children: [
                    {
                        name: '采销管理',
                        router: 'PurchasingManagement'
                    },
                    {
                        name: '供应管理',
                        router: 'SupplyManagement'
                    },
                    {
                        name: '农业金融',
                        router: 'AgriculturalFinance'
                    },
                    {
                        name: '用工信息',
                        router: 'EmploymentInformation'
                    },
                    {
                        name: '农机作业计划',
                        router: 'AgriculturalMachinery'
                    },
                    {
                        name: '农机服务机构',
                        router: 'AgriculturalMachineryServices'
                    },
                    {
                        name: '政策解读',
                        router: 'PolicyInterpretation'
                    },
                    {
                        name: '行情管理',
                        router: 'MarketManagement'
                    }
                ]
            },
            {
                name: '农监大数据',
                children: [
                    {
                        name: '农产品安全监测',
                        router: 'SafetyMonitoringAgriculturalProducts'
                    },
                    {
                        name: '投入品使用记录',
                        router: 'InputRecord'
                    },
                    {
                        name: '病虫害预警',
                        router: 'PestWarning'
                    },
                    {
                        name: '溯源码合格证打印',
                        router: 'CertificatePrinting'
                    },
                    {
                        name: '溯源码合格证访问',
                        router: 'CertificateVisit'
                    },
                    {
                        name: '主体信息',
                        router: 'MainInformation',
                    },
                    {
                        name: '主体审核',
                        router: 'MainBodyRecord',
                    },
                    {
                        name: '主体备案',
                        router: 'MainBodyAudit'
                    }
                ]
            },
            {
                name: '巡更巡查',
                children: [
                    {
                        name: '巡查任务',
                        router: 'PatrolMission'
                    },
                    {
                        name: "巡查记录",
                        router: 'PatrolRecords '
                    }
                ]
            },
            {
                name: '环境监测管理',
                children: [
                    {
                        name: '土壤实时监测',
                        router: 'SoilMonitoring',
                    },
                    {
                        name: '土壤检测警报',
                        router: 'SoilMonitoringAlert',
                    },
                    {
                        name: '土壤采样检测',
                        router: 'SoilSamplingCheck',
                    },
                    {
                        name: '水污染实时监测',
                        router: 'WaterMonitoring',
                    },
                    {
                        name: '水污染监测警报',
                        router: 'WaterMonitoringAlert',
                    },
                    {
                        name: '空气实时监测',
                        router: 'AirMonitoring',
                    },
                    {
                        name: '监测站',
                        router: 'MonitorStation',
                    },
                    {
                        name: '节点',
                        router: 'EnvironmenteNode',
                    },
                    {
                        name: '传感器',
                        router: 'EnvironmentSensor',
                    }
                ]
            }
        ]
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {
                    data.map((e, i) => {
                        return e.children && e.children.length > 0 ? this.renderMenuGroup(e, i) : this.renderMenu(e, i)
                    })
                }
            </Menu>
        )
    }

    renderLogo = () => {
        return (
            <div className={styles.logo}>
                慈溪园区数字云系统
            </div>
        )
    }

    render() {
        return (
            <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
                <Sider
                    className={styles.slider}
                >
                    {this.renderLogo()}
                    <SliderMenu {...this.props}/>
                </Sider>
                <Layout>
                    <Content style={{overflow:'hidden'}}>
                        <Header />
                        <div className={styles.content}>
                            {this.props.children}
                        </div>
                    </Content>
                </Layout>
            </div>
        )
    }
}
