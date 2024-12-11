import { Image, View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { RecipeInterface } from '@/utils/db'

type Props = {
    item: RecipeInterface;
    index: number;
    scrollX: SharedValue<number>
}

const { width } = Dimensions.get('screen');

export default function SliderItem({ item, index, scrollX }: Props) {
    const rnAnimatedStyle = useAnimatedStyle(() => {
        return{
            transform: [
                {
                    translateX: interpolate(
                        scrollX.value,
                        [(index-1) * width, index * width, (index+1) * width],
                        [-width*0.25, 0, width*0.25],
                        Extrapolation.CLAMP
                    ),
                },
                {
                    scale: interpolate(
                        scrollX.value,
                        [(index-1) * width, index * width, (index+1) * width],
                        [0.9, 1, 0.9],
                        Extrapolation.CLAMP
                    ),
                },
            ],
        };
    });
  return (
    <Animated.View style = {[styles.itemContainer, rnAnimatedStyle]}>
        <Image source = { require('@/assets/images/placeholder.jpg') } style = {styles.image}/>
        <LinearGradient colors = {['transparent', 'rgba(0,0,0,0.5)']} style = {styles.background}>
            <View>
                <Text style = {styles.title} >{item.title}</Text>
                <Text style = {styles.description} >{item.description}</Text>
            </View>
        </LinearGradient>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        width: width
    },
    background: {
        position: 'absolute',
        height: 425,
        width: 275,
        padding: 20,
        borderRadius: 20
    },
    image: {
        height: 425,
        width: 275,
        borderRadius: 20,
    },
    title: {
        color: 'white',
    },
    description: {
        color: 'white',
    }
})