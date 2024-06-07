
import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import React, { useRef, useEffect } from 'react'
import { sliderImage } from '../constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width: screenWidth } = Dimensions.get('window');

const ImageSlider = () => {


  const flatListRef = useRef(null);
  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % sliderImage.length;
      flatListRef.current?.scrollToIndex({
        index: currentIndex,
        animated: true,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <FlatList
      data={sliderImage}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View className='mr-2' style={{ width: screenWidth, height: hp(100) * 0.4 }}>
          <Image source={item} style={{ width: '90%', height: '90%' }} resizeMode="cover" className='rounded-xl ml-5' />
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      ref={flatListRef}
    />
  )
}

export default ImageSlider;
