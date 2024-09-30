import React from 'react';
import {View} from 'react-native';
import CarDisplay from "@/src/components/molecules/carDisplay";

const Home = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <CarDisplay
                price={300}
                imageHeight={300}
                imageWidth={300} carName={"Bugatti"}
                description={"amazing new car"}
                rating={10}
            />
        </View>
    );
}

export default Home;

