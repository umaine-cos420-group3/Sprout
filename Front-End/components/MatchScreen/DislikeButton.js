import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#f9524d",
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 40

    },
    buttonText: {
        fontSize: 35,
        color: "black"
    }
});

export default ({ disLikeFunction}) => (
    <TouchableOpacity style={styles.buttonContainer} onPress={disLikeFunction}>
        <Icon
            name='times'
            type='font-awesome'
            color='white'
            size = {50}
        />          
        </TouchableOpacity>
);
