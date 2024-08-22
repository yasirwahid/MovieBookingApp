import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        paddingTop: 60
    },
    searchInput: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        marginBottom: 20,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    movieContainer: {
        flex: 1,
        marginBottom: 16,
        alignItems: 'center',
    },
    movieImage: {
        width: 150,
        height: 225,
        borderRadius: 12,
    },
    movieTitle: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default styles