import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { Image } from 'expo-image';
import React from 'react'
import { useRouter } from 'expo-router'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const ExcerciseList = ({data}) => {
    const router=useRouter()
  return (
    <View>
       <FlatList
         data={data}
        numColumns={2}
         keyExtractor={(item)=>item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:60 ,paddingTop:20}}
        columnWrapperStyle={{justifyContent:'space-between'}}
        renderItem={({item, index})=> <ExerciseCard item={item} router={router} index={index}/>}
      />

    </View>
  )
}

export default ExcerciseList


const ExerciseCard=({item,index ,router})=>{
    return(
        <View>
            <TouchableOpacity onPress={()=>router.push({pathname:'/exerciesDetial', params:item})} className='flex py-3 space-y-2' >
                <View className='shadow bg-neutral-400 rounded-[25px]'>
                    <Image 
                        source={{uri:item.gifUrl}}
                        contentFit='cover'
                        style={{width:wp(44), height:wp(52)}}
                        className='rounded-[25px]'
                        />
                </View>
                <Text 
                style={{fontSize:hp(1.7)}}
                className='font-bold text-neutral-700 ml-1 tracking-wide'>
                    {item?.name?.length>20? item.name.slice(0,20)+'...':item.name}
                </Text>
            </TouchableOpacity>
        </View>
    )

}