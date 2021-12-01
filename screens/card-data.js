import { ActionCodeOperation } from "@firebase/auth";
import React, { useState ,useContext} from "react";
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';
import { GlobalContext } from '../context/context';
export default function Card() {
    let [heartColor, setHeartColor] = useState('')
    let [cartcolor, setCartColor] = useState('')
    let [cartselected, setCartSelected] = useState(false)
    const { state, dispatch } = useContext(GlobalContext);
    // const [newSnack, setNewSnack] = useState('');







    let Products = [
        {
            name: 'Shirt',
            image: 'https://5.imimg.com/data5/IQ/CY/MY-42824871/stylish-party-wear-shirts-500x500.jpg',
            price: '$70',
            Discount: '20% off',
            isSelected:false
        },
        {
            name: 'Nike Shoes',
            image: 'https://static-buyma-jp.akamaized.net/imgdata/item/200216/0051500838/242615188/428.jpg',
            price: '$30',
            Discount: '10% off'
        },
        {
            name:'Jeans',
            image:'https://image.shutterstock.com/image-photo/brown-male-cargo-pants-trousers-260nw-1984233974.jpg',
            price:'$50',
            Discount:'20% off'
        },
        {
            name: 'Checkers Shirt',
            image: 'https://teestorez.com/wp-content/uploads/2019/12/Ralph-Lauren-Checkers-Shirt.jpg',
            price: '$70',
            Discount: '20% off'
        },
        {
            name: 'Cargo Shirt',
            image: 'https://i.pinimg.com/originals/8e/5d/e7/8e5de7203df2481355b1988eb21c36ab.jpg',
            price: '$40',
            Discount: '10% off'
        }
    ]
    


    // let AddToCart=()=>{
    //     let Product={
            
    //         name:name,
    //         price:price,
    //         Discount:Discount
    //     }
    //     console.log(Product)
    //     dispatch({ type: "UPDATE_SNACK", payload: Product });
    // }

    return (
        <ScrollView
            style={{ paddingBottom: 180, }}
        >

            {
                Products.map(({ name, image, price, Discount }) => {


                    return (
                        <View key={name}
                         style={{justifyContent:'center',alignItems:'center',padding:10}}
                         
                         >
                            <View 
                                style={{
                                    borderRadius: 10,

                                    width: 300,
                                    // height: 310,
                                    backgroundColor: "#fff",
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 1 },
                                    shadowOpacity: 0.8,
                                    shadowRadius: 2,
                                    elevation: 5
                                }}
                            >
                                <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                                    <Image style={{ width: 200, height: 250 }} source={{ uri: image }} />

                                </View>
                                <View style={{ position: 'absolute', paddingLeft: 240, paddingTop: 10, }}>
                                    <Text style={{ backgroundColor: '#900', color: "#fff", borderRadius: 5, width: 60, padding: 5 }}>{Discount}</Text>
                                </View>

                                <View style={{ position: 'absolute' }}>

                                    <Icon name="heart-outline" color={heartColor} style={{ fontSize: 30, padding: 10 }} onPress={()=>{
                                        // console.log("a")
                                        setHeartColor('#900')
                                    }} />

                                </View>




                                <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: 10 }}>

                                    <Icon name="cart-outline" color={cartcolor} style={{ fontSize: 30 }} onPress={()=>{
                                        let Product={
                                            name,
                                            image,
                                            price,
                                            Discount
                                        }
                                        dispatch({ type: "ADD_TO_CART", payload: Product });
                                        // console.log(Product)
                                    }} />

                                </View>

                                <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ paddingTop: 230, paddingLeft: 260, fontSize: 19 }}>{price}</Text>
                                </View>


                                <View style={{ position: 'absolute', paddingTop: 270 }}>

                                    <Text style={{ fontSize: 19, paddingLeft: 10, paddingTop: -20 }}>{name}</Text>

                                </View>
                            </View></View>
                    )

                })
            }

        </ScrollView>
    )
}















