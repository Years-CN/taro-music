import { View, Text } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import "taro-ui/dist/style/components/tab-bar.scss";
import "taro-ui/dist/style/components/badge.scss";
import './tarBar.css'


export default function TabBar(props) {
  const data = {

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
      />
    </View>
  );
}