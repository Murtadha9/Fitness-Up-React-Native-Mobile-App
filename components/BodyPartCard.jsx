import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';



const BodyPartCard = ({item,index}) => {
    const router=useRouter()
  return (
    <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify().damping(3)}>
      <TouchableOpacity
      onPress={()=>router.push({pathname: '/Exercices' ,params:item})}
            style={{width:wp(44) ,height:wp(52)}}
            className='flex justify-end p-4 mb-4'
      >
        <Image 
            source={item.image} resizeMode='cover' style={{width:wp(44), height:wp(52)}}
            className='rounded-[35px] absolute'
         />
               
                <Text style={{fontSize:hp(2.3)}} className='text-white font-bold text-center tracking-wide'>{item.name}</Text>
               
        
      </TouchableOpacity>
    </Animated.View>
  )
}

export default BodyPartCard