import { Component } from "react"
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
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
        <View>
          <View className='header'>
            <Image 
              src={``}
            />
          </View>
        </View>
        <TabBar current={this.state.current}/>
      </View>
    )
  }
}