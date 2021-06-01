import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'
import http from '../../servers/http'
import { AtDivider } from 'taro-ui'
import Recommend from './components/Recommend'
import Ball from './components/ball'
import RecoMusic from './components/recoMusic'
import TabBar from '../../components/TabBar/tabBar'


export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recommend_list: [{1:2}],
      num: 0,
      current: 0,
      ballList: [],
      recoMusic: [],
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

    http.get('/homepage/dragon/ball').then(res => {
      this.setState({
        ballList: res.data
      })
    })

    http.get('/personalized/newsong?limit=12').then(res => {
      this.setState({
        recoMusic: res.result
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
        <Ball ballList={this.state.ballList}/>
        {/* <AtDivider/> */}
        <Recommend recommend_list={this.state.recommend_list}/>
        <RecoMusic music_list={this.state.recoMusic}/>
        <TabBar current={this.state.current}/>
      </View>
    )
  }
}
