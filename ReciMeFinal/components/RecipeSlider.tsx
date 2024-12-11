import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSQLiteContext } from 'expo-sqlite';
import { getAllRecipes, RecipeInterface } from '@/utils/db';
import SliderItem from './SliderItem';

type Props = {
  itemList: RecipeInterface[]
}

export default function Slider( {itemList} : Props ) {
  const scrollX = useSharedValue(0);
  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    }
  })
    // const db = useSQLiteContext();
    // const [recipes, setRecipes] =useState<RecipeInterface[]>([]);

    // useEffect(() => {
    //     async function setup() {
    //       const result = await getAllRecipes(db);
    //       setRecipes(result);
    //     }
    //     setup();
    //   }, []);

  return (
    <SafeAreaView>
      <Animated.FlatList 
        data = {itemList} 
        renderItem = {({ item, index}) => ( 
          <SliderItem item = {item} index = {index} scrollX = {scrollX} /> 
        )} 
        horizontal
        showsHorizontalScrollIndicator = {false} 
        pagingEnabled
        onScroll = {onScrollHandler}
      />
    </SafeAreaView>
  )
}