import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = ({ back }) => {
    return (
        <TouchableOpacity onPress={back} style={styles.header}>
            <View style={styles.headerInner}>
                <Image
                    source={require('../assets/icons/back.png')}
                    style={styles.icon}
                />
                <Text style={styles.text}>Previous step</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        height: 65,
        width: '100%',
        backgroundColor: '#F8F9F9',
    },
    headerInner: {
        width: '100%',
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        tintColor: '#0164ff',
    },
    text: {
        fontSize: 16,
        fontWeight: '400',
        color: '##707B7C',
        textAlign: 'center',
        marginLeft: 15
    }
})