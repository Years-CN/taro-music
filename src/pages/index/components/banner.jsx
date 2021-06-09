import { View, Swiper, Image, SwiperItem } from '@tarojs/components'
import './banner.scss'

export default function Banner(props) {

  console.log(props.banner_list);
  if(!props.banner_list.extInfo) {
    return(<View></View>); 
  }
  return (
    <View className='banner'>
      <Swiper 
        className="swiper"
        autoplay={true}
        indicatorDots={true}
        circular={true}
      >
        {
          props.banner_list.extInfo.banners.map((item, index) => 
            <SwiperItem key={index} className="swiperItem">
              <View className="bannerItem">
                <Image src={item.pic}/>
                <View className={`typeTitle ${item.titleColor}`}>{item.typeTitle}</View>
              </View>
            </SwiperItem>
          )
        }
      </Swiper>
    </View>
  )
}