import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#cdac9a',
        width: width * 0.8,
        padding: 10,
        margin: 18,
        backgroundColor: '#cdac9a'
    }
})

export default styles