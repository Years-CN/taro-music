import { View, Text, ScrollView, Video } from '@tarojs/components'
import './recoMv.scss'

export default function RecoMv(props) {
  const scrollStyle = {
    display: 'flex',
    height: '360rpx',
  }
  if(!props.mvUrl) {
    return(<View></View>); 
  }
  console.log(props.mvUrl,132);
  return (
    <View className="recoMv">
      <View className="reco_title">精选音乐视频</View>
      <ScrollView style={scrollStyle} scrollX enableFlex={true}>
        {
          props.mvUrl.map((item, index) => 
            <View key={index} className="reco_item">
              <Video
                src={item.url}
                controls={false}
                autoplay={false}
                poster={item.pic}
                initialTime='0'
                id='video'
                loop={false}
                muted={false}
                objectFit={"fill"}
              />
              <View className="item_name">{item.name}</View>
            </View>
          )
        }
      </ScrollView>
    </View>
  )
}