import React from 'react';
import {View} from 'react-native';
import ProfileCard from "@/src/components/ProfileCard";

const Profile = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ProfileCard/>
        </View>
    );
}


export default Profile;
