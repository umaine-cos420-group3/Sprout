import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "lightgreen",
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

export default ({ likeFunction}) => (
    <TouchableOpacity style={styles.buttonContainer} onPress={likeFunction}>
        <Icon
            name='heart'
            type='font-awesome'
            color='white'
            size = {50}
        /> 
    </TouchableOpacity>
);