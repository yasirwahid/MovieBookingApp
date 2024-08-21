import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    itemContainer: {
        marginBottom: 10
    },
    movieImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    movieTitle: {
        textAlign: 'center',
        marginTop: 8,
        fontSize: 22,
        fontWeight: 'bold',
        position: 'absolute',
        color: "white",
        bottom: 10,
        left: 20
    },
});

export default styles