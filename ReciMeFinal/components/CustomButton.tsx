import { View, Pressable, Text, StyleSheet } from 'react-native';

type Props = {
    label: string;
    onPress?: () => void;
};

export default function CustomButton({ label, onPress }: Props) {
  return (
    <View style = {styles.buttonContainer} >
        <Pressable style = {styles.button} onPress = {onPress}>
        <Text style = {styles.buttonLabel }>{label}</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create ({
    buttonContainer: {
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
    },
    buttonLabel: {
        color: 'white',
        fontSize: 24,
    }
});