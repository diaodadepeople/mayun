import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Popover, NavBar, Icon } from 'antd-mobile';
import creatHistory from 'history/createHashHistory';

const history = creatHistory();
const Item = Popover.Item;

class Header extends Component {
  state = {
    visible: false,
    selected: '',
  };
  onSelect = (opt) => {
    // console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };

  render() {
    return (<div>
      <NavBar
        mode="light"
        icon={<Icon type="left" onClick = {() => history.goBack()}/>}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={
          <Popover mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={this.state.visible}
            overlay={[
              (<Link to = '/home'><Item key="4" value="首页" data-seed="logId"><span className="iconfont icon-shouye"></span>首页</Item></Link>),
              (<Link to = '/detail'><Item key="5" value="分类搜索" style={{ whiteSpace: 'nowrap' }}><span className="iconfont icon-search"></span>分类搜索</Item></Link>),
              (<Link to = '/user'><Item key="6" value="我的文轩"><span className="iconfont icon-profile" style={{ marginRight: 5 }}>我的文轩</span></Item></Link>),
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [-10, 0],
            }}
            onVisibleChange={this.handleVisibleChange}
            onSelect={this.onSelect}
          >
            <div style={{
              height: '100%',
              padding: '0 15px',
              marginRight: '-15px',
              display: 'flex',
              alignItems: 'center',
            }}
            >
              <Icon type="ellipsis" />
            </div>
          </Popover>
        }
      >
        详情页
      </NavBar>
    </div>);
  }
}

export default Header
