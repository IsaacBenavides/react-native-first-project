import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FloatingActionButton, ButtonStyle } from '../components/FloatingActionButton';

export const ContadorScreen = () => {

    const [Contador, setContador] = useState(10);


    const sumar = () => {

        setContador(Contador + 1);
    }

    const restar = () => {
        setContador(Contador - 1);
    }

    return (
        <View style={style.container}>

            <Text style={style.title}>Contador: {Contador} </Text>
            <FloatingActionButton title="-1" onPress={restar} />
            <FloatingActionButton title="+1" onPress={sumar} positioned={ButtonStyle.rigth} />

        </View>
    )
}

const style = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center"
    },
    title: { textAlign: "center", fontSize: 50 },

});
