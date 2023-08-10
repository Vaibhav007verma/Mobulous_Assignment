import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({text,next}) => {
    return (
        <TouchableOpacity onPress={next}  style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#0164ff',
        borderColor:'#0164ff',
        justifyContent:'center',
        alignItems:'center'
    },
    text : {
        fontSize: 14,
        fontWeight: '400',
        color: 'white',
        textAlign: 'center',
    }
})