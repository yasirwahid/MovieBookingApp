import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    posterContainer: {
        height: 500,
        width: '100%'
    },
    movieImage: {
        width: '100%',
        height: '100%'
    },
    movieTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        color: "white"
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        color: "#000"
    },
    overview: {
        fontSize: 16,
        marginBottom: 20,
        color: "white",
        fontWeight: "600"
    },
    text: {
        fontSize: 16,
        color: "white",
    },
    imageOverlap: {
        position: 'absolute',
        height: "100%",
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    button: {
        backgroundColor: "#61C3F2",
        width: "60%",
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 20
    },
    buttonBorder: {
        width: "60%",
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#61C3F2"
    },
    btnText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "white"
    },
    body: {
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    genreContainer: {
        flexDirection: 'row',
        marginBottom: 20
    },
    genre: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
        backgroundColor: "#E26CA5",
        marginRight: 10
    },
    separator: {
        height: 0.5,
        width: '100%',
        backgroundColor: "#8F8F8F"
    }
});

export default styles