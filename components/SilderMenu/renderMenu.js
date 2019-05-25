import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
// import { getRouterArr } from '../../common/router';

const renderMenuItem = ({
  label, icon, permission, isLeaf, parentId, ...props
}) => (
  <Menu.Item
    key={permission}
    {...props}
  >
    <Link to={permission}>
      {icon && <Icon type={icon} />}
      <span className="nav-text">{label}</span>
    </Link>
  </Menu.Item>
);


const renderSubMenu = ({
  label, icon, permission, children, isLeaf, parentId, ...props
}) => (
  <Menu.SubMenu
    key={permission}
    // title={title}
    title={(
      <span>
        {icon && <Icon type={icon} />}
        <span>{label}</span>
      </span>
)}
    {...props}
  >
    {
      children && children.map(
        item => (item.children && item.children.length
          ? renderSubMenu(item) : renderMenuItem(item)),
      )
    }
    {/* {children.map(item => renderMenuItem(item))} */}
  </Menu.SubMenu>
);

export default ({ menus, ...props }) => (
  <Menu {...props}>
    {
      menus && menus.map(
        item => (item.children && item.children.length
          ? renderSubMenu(item) : renderMenuItem(item)),
      )
    }
    {/* {
      menus.map((item,ind) => (
        <Menu.SubMenu
          key={ind}
          title={
            <span>
              {item.icon && <Icon type={item.icon}/>}
              <span>{item.title}</span>
            </span>
          }>
          {
            item.sub&&item.sub.map((e, index) => (
              <Menu.Item
                key={`${ind}-${index}`}>
                <Link to={e.link}>
                  {e.icon && <Icon type={e.icon} />}
                  <span className="nav-text">{e.title}</span>
                </Link>
              </Menu.Item>
            ))
          }
          </Menu.SubMenu>
        )
      )
    } */}
  </Menu>
);
