import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { auth, signInWithEmailAndPassword } from '../config/firebase'
import Icon from 'react-native-vector-icons/Ionicons';
import SignUP from './signup';
import HomeSec from './home'
import FavoriteCard from './favorite';
import ShowCard from './show-cart';

function MainScreen({ navigation }) {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [errMsg, setErrMsg] = useState('')


    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://thumbs.gfycat.com/CompleteShallowFlyingsquirrel-size_restricted.gif',
                }}
            />
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"

            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                secureTextEntry={true}

            />

            <TouchableOpacity onPress={async () => {
                try {
                    console.log({ email })
                    let { user } = await signInWithEmailAndPassword(auth, email, password);
                    console.log(user, "user")
                    if (user) {
                        alert('Login Successfully')
                        navigation.navigate('Home');

                        setEmail('');
                        setPassword('');
                    }
                } catch (err) {
                    setErrMsg(err.message);
                    setTimeout(() => {
                        setErrMsg('');
                    }, 5000)
                }
            }}>
                <Text
                    style={styles.button}
                >
                    <Icon name="enter-outline" style={{ fontSize: 20, padding: 20 }} />

                    Sign In
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>

                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Not have an account? Register.</Text>
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 250,
        margin: 12,
        borderWidth: 1.5,
        padding: 10,
        borderRadius: 15,
        fontSize: 20,
        color: 'black',
    },

    button: {
        height: 50,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderRadius: 15,

        fontSize: 20,
        color: 'black',
    },
    tinyLogo: {
        width: 350,
        height: 250,
        padding: 50
    },
    iconimage: {
        flexDirection: 'row', flexWrap: 'wrap'
    }

});





const Stack = createNativeStackNavigator();
function StackScreen({ navigation }) {
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={MainScreen}
                    options={{
                        title: 'Login',
                        headerStyle: {
                            backgroundColor: '#fff',
                        },
                        headerTintColor: 'black',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 20
                        },
                    }}
                />

                <Stack.Screen
                    name="Sign Up"
                    component={SignUP}
                    options={{
                        title: 'Sign Up',
                        headerStyle: {
                            backgroundColor: '#fff',
                        },
                        headerTintColor: 'black',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 20
                        },
                    }}
                />


                <Stack.Screen
                    name="Favorite"
                    component={FavoriteCard}
                    options={{
                        title: 'Favorite',
                        headerStyle: {
                            backgroundColor: '#fff',
                        },
                        headerTintColor: 'black',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 20
                        },
                    }}
                />
                <Stack.Screen
                    name="Card"
                    component={ShowCard}
                    options={{
                        title: 'Card',
                        headerStyle: {
                            backgroundColor: '#fff',
                        },
                        headerTintColor: 'black',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 20
                        },
                    }}
                />

                <Stack.Screen
                    name="Home"
                    component={HomeSec}
                    options={{
                        title: 'Home',
                        headerStyle: {
                            backgroundColor: '#fff',
                        },
                        headerTintColor: 'black',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 20
                        },
                        headerLeft: () => (
                            <Icon name="menu" style={{ color: '#900', fontSize: 30, padding: 10 }}
                                onPress={() => console.log("na")}
                            />

                        ),
                        headerRight: () => (
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

                                <Icon name="heart-outline" style={{ color: '#900', fontSize: 30, padding: 10 }}
                                    onPress={() => { navigation.navigate('Favorite') }} />

                                <Icon name="cart-outline" style={{ color: '#900', fontSize: 30, padding: 10 }}
                                    onPress={() => { navigation.navigate('Card') }}
                                />

                            </View>

                        )


                    }}
                />



            </Stack.Navigator>
        </NavigationContainer>
    );
}




export default StackScreen;


