import { View, Image, Text, ScrollView } from '@tarojs/components'
import "./ball.scss"

export default function Ball(props) {
  const scrollStyle = {
    display: 'flex',
    height: '80px',
    margin: '5px 0 1px 0'
  }

  return (
    <View className="ball">
      <ScrollView style={scrollStyle} scrollX enableFlex='true'>
      { 
        props.ballList.map((item, index) =>
          <View className="ball_list" key={index}>
            <View className="ball_item">
              <Image className="ball_img" src={item.iconUrl} />
            </View>
            <Text className="ball_name">{ item.name }</Text>
          </View>
        )
      }
      </ScrollView>
    </View>
  );
}