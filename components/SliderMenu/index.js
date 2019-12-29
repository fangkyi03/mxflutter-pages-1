import React, { Component } from 'react'
import createDva from '../../command/createDva';
import apiTool from '../../command/apiTool';
import { Menu } from 'antd';

@createDva(['sliderMenu'])
export default class SliderMenu extends Component {

    componentDidMount() {
        apiTool.send(this, [
            {
                url: '/admin/menu/userMenu',
                target: 'sliderMenu',
                appName:'bi',
                tranData: ({ data }) => {
                    return { menu: data.menu }
                }
            }
        ])
    }

    onItemDown = (item) => {
        apiTool.jumpRouter(item.permission)
    }

    renderMenu = (item) => {
        return (
            <Menu.Item
                key={item.permission}
                onClick={() => this.onItemDown(item)}
            >
                <span>{item.label}</span>
            </Menu.Item>
        )
    }

    renderMenuGroup = (item, i) => {
        return (
            <Menu.SubMenu
                key={item.permission}
                title={item.label}
            >
                {
                    item.children.map((e, i) => {
                        return this.renderMenu(e, i)
                    })
                }
            </Menu.SubMenu>
        )
    }

    onMenuSelect = (data) => {
        console.log('输出data', data)
    }

    getMenu = (routerName, menu) => {
        for (let i = 0; i < menu.length; i++) {
            if (menu[i].children.length > 0) {
                for (let l = 0; l < menu[i].children.length; l++) {
                    if (menu[i].children[l].permission.toLowerCase() == routerName.toLowerCase()) {
                        return [menu[i].permission, menu[i].children[l].permission];
                    }
                }
            }
        }
        return ''
    }

    render() {
        const { menu = [], router } = this.props
        if (menu.length == 0) return null
        const routerName = router.pathname.replace('/', '')
        return (
            <Menu
                theme="dark" mode="inline"
                defaultOpenKeys={[this.getMenu(routerName, menu)[0]]}
                defaultSelectedKeys={[this.getMenu(routerName, menu)[1]]}
                onSelect={this.onMenuSelect}
            >
                {
                    menu.map((e, i) => {
                        return e.children && e.children.length > 0 ? this.renderMenuGroup(e, i) : this.renderMenu(e, i)
                    })
                }
            </Menu>
        )
    }
}
