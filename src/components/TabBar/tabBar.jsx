import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'
import "taro-ui/dist/style/components/tab-bar.scss";
import "taro-ui/dist/style/components/badge.scss";
import './tarBar.css'


export default function TabBar(props) {

  function switchTab(value) {
    switch(value) {
      case 0:
        Taro.reLaunch({
          url: '/pages/index/index'
        })
        break;
      case 2:
        Taro.reLaunch({
          url: '/pages/my/my'
        })
        break;
      default:
        break;
    }
  }

  return (
    <View className='tabBar'>
      <AtTabBar
        fixed
        tabList={[
          { title: '发现' },
          { title: '榜单' },
          { title: '我的' },
          { title: '云村' },
          { title: '电台' },
        ]}
        onClick={switchTab.bind(this)}
        current={props.current}
      />
    </View>
  );
}