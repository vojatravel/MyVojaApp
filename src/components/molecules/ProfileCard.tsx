import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ProfileCard = ({ title, content, imagePath }: {title: string, content: string, imagePath: any}) => (
    <View style={styles.card}>
        <Image source={imagePath} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardContent}>{content}</Text>
    </View>
);

const ProfileGrid = () => {

    const profileData = [
        { title: 'Name', content: 'Joppe', imagePath: require('../../assets/images/joppe.jpg') },
        { title: 'Relationship', content: 'Married', imagePath: require('../../assets/images/ring.jpg') },
        { title: 'Hobbies', content: 'Coding', imagePath: require('../../assets/images/laptop.jpeg') },
        { title: 'Favorite Food', content: 'Sushi', imagePath: require('../../assets/images/pizza.jpg') },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.grid}>
                {profileData.map((item, index) => (
                    <ProfileCard key={index} title={item.title} content={item.content} imagePath={item.imagePath} />
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 10,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center'
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    card: {
        width: '48%',
        aspectRatio: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
    },
    cardImage: {
        width: 60,
        height: 60,
        borderRadius: 5,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardContent: {
        fontSize: 14,
        textAlign: 'center',
    }
});

export default ProfileGrid;
