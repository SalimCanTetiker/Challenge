import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#d9d9d9",
        height: height * 0.1
    },
    view: {
        justifyContent: "center",
        margin: 8
    },
    text: {
        fontSize: 20
    },
    plus: {
        fontSize: 36
    },
})

export default styles