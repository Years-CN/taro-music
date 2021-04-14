import { View, Image } from '@tarojs/components'



export default function Recommend(props) {
  return (
    <View style='width:90px;display:inline-block;margin-right:10px'>
      <Image src={props.picUrl} style='width: 90px;height: 90px;background: #fff;border-radius:5%'/>
      <View style='font-size:11px;overflow: hidden;text-overflow: ellipsis;
        display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;white-space:nomal'>
        {props.name}
      </View>
    </View>
  );
}