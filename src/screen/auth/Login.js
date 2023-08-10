import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    const [number, setNumber] = useState(null);
    const back = () => {
        navigation.navigate('Onboarding');
    };
    const next = () => {

        if (number === null) {
            alert('Please enter valid Number');
            return;
        }
        else {
            navigation.navigate('Home')
        }
    }
    const next1 = () => {

        if (number === null) {
            alert('Please enter valid Number');
            return;
        }
        else {
            navigation.navigate('Signup')

        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header back={back} />
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={styles.containerContent}>
                <KeyboardAvoidingView enabled>
                    <View style={styles.inner}>
                        <Image
                            source={require('../../assets/images/login1.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.title}>Sign in with a phone</Text>
                        <TextInput
                            placeholder="Your phone number"
                            style={styles.input}
                            keyboardType="number-pad"
                            onChangeText={mobile => setNumber(mobile)}
                            value={number}
                            returnKeyType="next"
                            blurOnSubmit={false}
                            maxLength={10}
                        />
                        <Button text="Log in" next={next} />
                        <View style={styles.primaryButton}>
                            <Button text="Sign in" next={next1} />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    containerContent: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    primaryButton: { marginTop: 20, width: "100%" },
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
    circle: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    icon: {
        width: '100%',
        height: '45%',
        resizeMode: 'contain',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#323232',
        marginVertical: 20,
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
        marginVertical: 25,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        height: 40,
        fontSize: 13,
        color: 'gray',
    },
});
