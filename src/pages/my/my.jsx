import { Component } from "react"
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import TabBar from '../../components/TabBar/tabBar'


export default class My extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 2,
    }
  }

  componentWillMount() {
    Taro.setNavigationBarTitle({
      title: '我的'
    })
  }

  render() {
    return (
      <View>
        
        <TabBar current={this.state.current}/>
      </View>
    )
  }
}