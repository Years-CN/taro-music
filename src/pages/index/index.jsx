import { Component } from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'
import { AtDivider } from 'taro-ui'
import Recommend from './Recommend'
import TabBar from '../../components/TabBar/tabBar'


export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recommend_list: [{1:2}],
      num: 0
    }
  }

  componentWillMount () { }

  componentDidMount () {
    let self = this;
    Taro.request({
      url: 'http://musicapi.leanapp.cn/personalized?limit=6',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        self.setState({
          recommend_list: res.data.result,
        })
      }
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const scrollStyle = {
      display: 'flex',
      height: '130px',
      margin: '5px 0'
    }
    return (
      <View className='index'>
        <View className="header">
          <Text></Text>
        </View>
        <AtDivider/>
        <View className="recommend" style='margin:20px 10px;'>
          <Text>推荐歌单</Text>
          <ScrollView className='reco_list' style={scrollStyle} scrollX enableFlex='true'>
          {
            this.state.recommend_list.map(item => 
                <Recommend key={item.id} picUrl={item.picUrl} name={item.name}/>
            )
          }
          </ScrollView>
        </View>
        <TabBar/>
      </View>
    )
  }
}
