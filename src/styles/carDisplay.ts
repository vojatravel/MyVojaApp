import {StyleSheet} from "react-native";

export const carDisplayStyles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 16,
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1e90ff',
        marginBottom: 8,
    },
    image: {
        marginBottom: 8,
        borderRadius: 8,
    },
    carName: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 4,
    },
    description: {
        fontSize: 16,
        color: '#696969',
        marginBottom: 8,
    },
    rating: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green',
        marginBottom: 12,
    },
    button: {
        backgroundColor: '#1e90ff',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
