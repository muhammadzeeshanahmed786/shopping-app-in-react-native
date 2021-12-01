import React ,{useContext}from "react";
import  { data } from '../context/reducer'
import {Text,View} from 'react-native'
import {GlobalContext} from '../context/context'



let data1=data
export default function ShowCard(){
    
    const {state,dispatch}= useContext(GlobalContext);
    console.log('data',state)
    return(
        <View>
            <Text>Cart</Text>

        </View>
    )
}