import { View, Text, ScrollView, Video } from '@tarojs/components'
import './recoMv.scss'

export default function RecoMv(props) {
  const scrollStyle = {
    display: 'flex',

  }
  if(!props.mvUrl.extInfo) {
    return(<View></View>); 
  }
  console.log(props.mvUrl);
  return (
    <View className="recoMv">
      <ScrollView style={scrollStyle} scrollX enableFlex={true}>
        {
          props.mvUrl.extInfo.map((item, index) => 
            <View key={index}>
              <Video
                style="width:120px;height:150px;margin:10px;border-radius:8px"
                src={item.resource.shareUrl}
                controls={false}
                autoplay={false}
                poster={item.pic}
                initialTime='0'
                id='video'
                loop={false}
                muted={false}
              />
              <View>{item.name}</View>
            </View>
          )
        }
      </ScrollView>
    </View>
  )
}