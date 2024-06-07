import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';



const BodyPartCard = ({item,index}) => {
    const router=useRouter()
  return (
    <View>
      <TouchableOpacity
      onPress={()=>router.push({pathname: '/Exercices' ,params:item})}
            style={{width:wp(44) ,height:wp(52)}}
            className='flex justify-end p-4 mb-4'
      >
        <Image 
            source={item.image} resizeMode='cover' style={{width:wp(44), height:wp(52)}}
            className='rounded-[35px] absolute'
         />
               <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0,0.9)']}
                style={{width:wp(44), height:hp(10)}}
                start={{x:0.5,y:0}}
                end={{x:0.5 ,y:1}}
                className='flex absolute bottom-0 rounded-b-[35px]'
                />
                <Text style={{fontSize:hp(2.3)}} className='text-white font-bold text-center tracking-wide'>{item.name}</Text>
               
        
      </TouchableOpacity>
    </View>
  )
}

export default BodyPartCard