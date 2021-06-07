import { View, ScrollView, Image } from '@tarojs/components'
import './recoProgram.scss'

export default function RecoDj(props) {
  const scrollStyle = {
    display: 'flex',
    height: '240rpx',
    margin: '5px 0'
  }
  if(!props.recoDj.creatives) {
    return(<View></View>); 
  }
  // console.log(props)
  return (
    <View className="recoDj">
      <View className="reco_title">{props.recoDj.uiElement.subTitle.title}</View>
      <ScrollView scrollX enableFlex={true} style={scrollStyle}>
        {
          props.recoDj.creatives.map((item, index) => 
            <View key={index} className="reco_item">
              <View className="item_img">
                <Image src={item.uiElement.image.imageUrl} className="reco_img"/>
              </View>
              <View className="reco_name">{item.uiElement.mainTitle.title}</View>
            </View>
          )
        }
      </ScrollView>
    </View>
  )
}