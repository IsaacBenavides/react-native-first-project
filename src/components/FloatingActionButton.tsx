import React from 'react'
import { TouchableOpacity, View, StyleSheet, Text, TouchableNativeFeedback, Platform, TouchableOpacityBase } from 'react-native';

interface props {
    title: string,
    onPress: () => void;
    positioned?: Object
}




export const FloatingActionButton = (props: props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                onPress={props.onPress}
                style={
                    [ButtonStyle.floatingActionButtonPositioned,
                    props.positioned ?? ButtonStyle.left]
                }>
                <View style={
                    ButtonStyle.floatingActionButton
                }>
                    <Text style={
                        ButtonStyle.floatingActionButtonText
                    }>
                        {props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    const android = () => {
        return (
            <View style={
                [ButtonStyle.floatingActionButtonPositioned,
                props.positioned ?? ButtonStyle.left]
            }>
                <TouchableNativeFeedback
                    onPress={props.onPress}
                    background={TouchableNativeFeedback.Ripple("#28425B", false, 30)}>
                    <View style={
                        ButtonStyle.floatingActionButton
                    }>
                        <Text style={
                            ButtonStyle.floatingActionButtonText
                        }>
                            {props.title}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return (Platform.OS === "ios") ? ios() : android();
}

export const ButtonStyle = StyleSheet.create(
    {
        floatingActionButtonText: {
            color: "white",
            fontSize: 30,
            alignSelf: "center",
            fontWeight: "bold"
        },
        floatingActionButtonPositioned: {
            position: "absolute",
            bottom: 15,
        },
        rigth: {
            right: 15,
        },
        left: {
            left: 15
        },

        floatingActionButton: {
            backgroundColor: "#5856D6",
            width: 60,
            height: 60,
            borderRadius: 60,
            justifyContent: "center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
        },
    }
);
