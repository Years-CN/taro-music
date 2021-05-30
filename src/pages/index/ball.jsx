import { View, Image, Text, ScrollView } from '@tarojs/components'

export default function Ball(props) {
  const scrollStyle = {
    display: 'flex',
    height: '80px',
    margin: '5px 0'
  }

  return (
    <View style="margin:0 5px">
      <ScrollView style={scrollStyle} scrollX enableFlex='true'>
      { 
        props.ballList.map((item, index) =>
          <View key={index} style="text-align:center;">
            <View style="background:red;border-radius:50%;margin:0 10px;display:flex">
              <Image src={item.iconUrl} style="width:50px;height:50px;"/>
            </View>
            <Text style="font-size:0.8rem;">{ item.name }</Text>
          </View>
        )
      }
      </ScrollView>
    </View>
  );
}