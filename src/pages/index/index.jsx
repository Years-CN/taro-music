import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'
import http from '../../servers/http'
import { AtDivider } from 'taro-ui'
import Recommend from './Recommend'
import Ball from './ball'
import TabBar from '../../components/TabBar/tabBar'


export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recommend_list: [{1:2}],
      num: 0,
      current: 0,
    }
  }

  componentWillMount () { }

  componentDidMount () {
    let self = this;
    http.get('/personalized?limit=6').then(res => {
      self.setState({
        recommend_list: res.result,
      })
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View className="header">
          <Text></Text>
        </View>
        <Ball />
        <AtDivider/>
        <Recommend recommend_list={this.state.recommend_list}/>
        <TabBar current={this.state.current}/>
      </View>
    )
  }
}
