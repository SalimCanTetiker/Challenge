import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dad1bf'
    },
    add: {
        position: "absolute",
        marginTop: 40,
        width: width
    },
    search: {
        marginTop: 150,
        alignItems: "center"
    }
})

export default styles