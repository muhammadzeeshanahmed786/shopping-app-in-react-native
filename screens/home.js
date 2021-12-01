

import  React,{useContext} from 'react';
import { Button, View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {data} from '../context/reducer' 
import Card from './card-data'
import {GlobalContext} from '../context/context'

let products = [
  {
    name: 'Shirts',
    pieces: '15 Pieces Left',
    image: 'https://i.pinimg.com/736x/d8/ed/a0/d8eda0e3e89770a4eb29f4323f2d6f42.jpg'
  },
  {
    name: 'T-Shirts',
    pieces: '9 Pieces Left',
    image: 'https://media.istockphoto.com/photos/front-of-men-cut-black-tshirt-isolated-on-white-background-picture-id1142212002?k=20&m=1142212002&s=612x612&w=0&h=KlgIb_GW0e6ZtIF5A4dxJ1n1KS19WV8Hpc8MpHkw6_o='
  },
  {
    name: 'Shoes',
    pieces: '10 Pieces Left',
    image: 'https://media.gettyimages.com/photos/elegant-black-leather-shoes-picture-id172417586?s=612x612'
  },
  {
    name: 'Suits',
    pieces: '12 Pieces Left',
    image: 'https://cdn4.vectorstock.com/i/1000x1000/65/48/wedding-mens-suit-tuxedo-vector-25566548.jpg'
  }

]

function HomeSec({ navigation }) {
  
  const {state,dispatch}= useContext(GlobalContext);
  console.log(state.cartItem,'data in state')
  return (
    <>
    
      <ScrollView horizontal={true} style={{ paddingVertical: 5 }}>
        {products.map((v, i) => {
          return (


            <View style={{
              padding: 5,
              height: 200

            }} key={i + v.name}>
              <View style={{
                backgroundColor: '#fff', borderRadius: 5, shadowOpacity: 1, width: 230, height: 120, padding: 10,

                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 5
              }}>
                <View >
                  <View>
                    <Text style={styles.timings}>{v.name}</Text>
                  </View>
                  <Text style={{ paddingTop: 16, paddingLeft: 15, fontSize: 24 }}>{v.pieces}</Text>
                </View>
                <View style={{ justifyContent: 'center', position: 'absolute', paddingLeft: 160, paddingTop: 20, justifyContent: 'center', alignItems: 'flex-end' }}>

                  <Image
                    source={{ uri: v.image }}
                    style={{ height: 50, width: 50 }}
                  />
                </View>
              </View>
            </View>
          )
        })}



      </ScrollView>
      <Card />
    </>





  );
}


const styles = StyleSheet.create({

  timings: {
    color: 'black',
    fontSize: 34,
    fontWeight: '600',

    paddingLeft: 30


  },


});






export default HomeSec