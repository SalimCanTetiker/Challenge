import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dad1bf',
    },
    viewContainer: {
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
    input: {
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#e0bcb8', 
        padding: 10,
        marginTop: 40
    },
    button: {
        alignItems: "center",
        marginTop: 40
    },
    modal: {
        flex: 1,
        backgroundColor: '#dad1bf',
    }
})

export default styles