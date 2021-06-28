import { View } from '@tarojs/components'
import './songList.scss'
import { AtIcon } from 'taro-ui'

export default function SongList(props) {

  let nameList = props.list.map((item) => {
      let i = item.ar.reduce((pre, cur) => {
          return {name: pre.name + '/' + cur.name};
      },[{name:''}]);
      return i = i.name.slice(i.name.indexOf('/') + 1) + ' - ' + item.name;  
    }
  )

  return (
    <View className="song_list">
      <View className="play_all">
        <View className='play_icon'>
          <AtIcon value='play' size='20' color='gary'></AtIcon>
        </View>
        <View className='title'>播放全部</View>
      </View>
      {
        // props.list.length === 0 ? '' :
        props.list.map((item, index) => 
          <View key={index} className="song">
            <View className="song_index">{index+1}</View>
            <View className="song_info">
              <View className="song_name">{item.name}</View>
              <View className="ar">{nameList[index]}</View>
              
            </View>
            <View className="icon">
              <AtIcon  value='play' size='20' color='gary'></AtIcon>
            </View>
          </View>
        )
      }
    </View>
  )
}