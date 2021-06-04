import { View, ScrollView, Image } from '@tarojs/components'
import './recoProgram.scss'

export default function RecoDj(props) {
  const scrollStyle = {
    display: 'flex',
    height: '260rpx',
    margin: '5px 0'
  }

  return (
    <View className="recoDj">
      <View className="reco_title">推荐节目</View>
      <ScrollView scrollX enableFlex={true} style={scrollStyle}>
        {
          props.recoProgram.map((item, index) => 
            <View key={index} className="reco_item">
              <View className="item_img">
                <Image src={item.coverUrl} className="reco_img"/>
              </View>
              <View className="reco_name">{item.name}</View>
            </View>
          )
        }
      </ScrollView>
    </View>
  )
}