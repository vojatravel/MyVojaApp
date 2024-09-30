import {Image, Text, TouchableOpacity, View} from "react-native";
import {carDisplayStyles as styles} from '../../styles/carDisplay'


const CarDisplay = ({
                        price, imageHeight, imageWidth, carName, description, rating
                    }: {
    price: number, imageHeight: number, imageWidth: number, carName: string, description: string, rating: number
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.price}>${price.toFixed(2)}</Text>
            <Image source={{uri: 'https://picsum.photos/200'}}
                   style={[styles.image, {height: imageHeight, width: imageWidth}]}
            />
            <Text style={styles.carName}>{carName}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.rating}>Rating: {rating}/10</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Add to cart</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CarDisplay;


