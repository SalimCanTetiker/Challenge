import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window")
const styles = StyleSheet.create({
    search: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#e0bcb8',
        backgroundColor: '#e0bcb8',
        height: height * 0.07,
        width: width * 0.7
    }
})

export default styles