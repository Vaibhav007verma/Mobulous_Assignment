import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    Alert
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const back = () => {
        navigation.navigate('Onboarding');
    };
    const next = () => {

        if (name === '') {
            alert('Please enteryour name');
            return;
        }
        if (email === '') {
            alert('Please enter your email');
            return;
        }
        if (number === '') {
            alert('Please enter valid Number');
            return;
        }
        else {
            navigation.navigate('Login')
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header back={back} />
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={styles.contentContainer}>
                <KeyboardAvoidingView enabled>
                    <View style={styles.inner}>
                        <Image
                            source={require('../../assets/images/signup.jpg')}
                            style={styles.icon}
                        />
                        <Text style={styles.title}>Sign up with a phone</Text>
                        <TextInput
                            placeholder="Your full name"
                            style={styles.input}
                            keyboardType="number-pad"
                            onChangeText={name => setName(name)}
                            value={name}
                            returnKeyType="next"
                            blurOnSubmit={false}
                            maxLength={30}
                        />
                        <TextInput
                            placeholder="Your email "
                            style={styles.input}
                            keyboardType="number-pad"
                            onChangeText={email => setEmail(email)}
                            value={email}
                            returnKeyType="next"
                            blurOnSubmit={false}
                            maxLength={30}
                        />
                        <TextInput
                            placeholder="Your phone number"
                            style={[styles.input, { marginBottom: 25 }]}
                            keyboardType="number-pad"
                            onChangeText={mobile => setNumber(mobile)}
                            value={number}
                            returnKeyType="next"
                            blurOnSubmit={false}
                            maxLength={10}
                        />
                        <Button text="Sign up" next={next} />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    inner: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: '75%',
        alignItems: 'center',
        paddingVertical: 20,
    },

    icon: {
        width: '100%',
        height: '42%',
        resizeMode: 'contain',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#323232',
        marginVertical: 0,
    },
    subTitle: {
        fontSize: 14,
        fontWeight: '400',
        color: 'gray',
        textAlign: 'center',
    },
    input: {
        width: '100%',
        borderWidth: 0.5,
        marginTop: 25,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        height: 40,
        fontSize: 13,
        color: 'gray',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    }
});
