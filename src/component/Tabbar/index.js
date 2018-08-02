import { TabBar } from 'antd-mobile';
import React from 'react';

const navtgation = [
  {
    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
    title: 'life',
  },
  {
    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
    title: 'zhifubao',
  },
  {
    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
    title: 'frend',
  },
  {
    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
    title: 'my',
  },
];
export default class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'my',
      fullScreen: false,

    };
  }

  render() {
    return (
      <div>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="red"
          barTintColor="white"
          tabBarPosition="bottom"
        >
        {navtgation.map((item, index) => (
                <TabBar.Item
            title={item.title}
            key={item.title}
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: item.background,
            }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
            }}
            />
            }
            selected={this.state.selectedTab === item.title}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: item.title,
              });
            }}
            data-seed="logId"
          >
          </TabBar.Item>
        ))}
        </TabBar>
      </div>
    );
  }
}
