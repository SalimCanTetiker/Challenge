import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        margin: 10,
        padding: 10,
        width: width * 0.4,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 16,
        fontWeight: "bold"
    }
})

export default styles