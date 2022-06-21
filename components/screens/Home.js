import { View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import {COLOURS, Items} from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Home = ({navigation}) => {

    const [cleats, setCleats] = useState([]);
    const [jerseys, setJerseys] = useState([]);
    const [shinguards, setShinGuards] = useState([]);
    const [balls, setBalls] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDataFromDB();
        });

        return unsubscribe;
    }, [navigation]);

    //get data from DB

    const getDataFromDB = () => {
        let cleatsList = [];
        let jerseysList = [];
        let shinguardsList = [];
        let ballsList = [];

        for (let index = 0; index < Items.length; index++) {
            if (Items[index].category == "cleats"){
                cleatsList.push(Items[index]);
            } else if (Items[index].category == "jerseys"){
                jerseysList.push(Items[index]);
            } else if (Items[index].category == "shinguards"){
                shinguardsList.push(Items[index]);
            } else if (Items[index].category == "balls"){
                ballsList.push(Items[index]);
            }
            
        }
        
        setCleats(cleatsList);
        setJerseys(jerseysList);
        setShinGuards(shinguardsList);
        setBalls(ballsList);
    };

    //create a product reusable card

    const CleatCard = ({data}) => {
        return(
            <TouchableOpacity>
                <View>
                    {
                        data.isOff ? (
                            <View>
                                <Text>{data.offPercentage}</Text>
                            </View>
                        ) : null}
                    <Image source={data.productImage}/>
                </View>
            </TouchableOpacity>
        )
    };

  return (
    <View style = {{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
    }}>
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content"/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16
        }}>
            <TouchableOpacity>
                <Entypo name="shopping-bag" style={{
                    fontSize: 18,
                    color:COLOURS.backgroundMedium,
                    borderRadius:10,
                    backgroundColor:COLOURS.backgroundLight}}></Entypo>
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialCommunityIcons name="cart" style={{
                    fontSize: 18,
                    color:COLOURS.backgroundMedium,
                    borderRadius:10,
                    borderWidth: 1,
                    borderColor:COLOURS.backgroundLight,}} />
            </TouchableOpacity>
        </View>
        <View style={{
            marginBottom: 10,
            padding: 16,
        }}>
            <Text style={{
                fontSize: 26,
                color: COLOURS.black,
                fontWeight: "500",
                letterSpacing: 1,
                marginBottom: 10,
            }}>
                Kidus Joseph Soccer Store
            </Text>
            <Text style={{
                fontSize: 14,
                color: COLOURS.black,
                fontWeight: "400",
                letterSpacing: 1,
                lineHeight: 24,
            }}>
                Soccer store on Rustaveli Ave 57.
                {'\n'}This store offers cleats, jerseys, shin guards, and balls
            </Text>
        </View>
        <View style={{
            padding: 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Text style={{
                    fontSize: 18,
                    color: COLOURS.black,
                    fontWeight: "500",
                    letterSpacing: 1,
                }}>Cleats</Text>
                <Text style={{
                    fontSize: 14,
                    color: COLOURS.black,
                    fontWeight: "400",
                    opacity: 0.5,
                    marginLeft: 10,
                }}>10</Text>
            </View>
            <Text style={{
                fontSize: 14,
                color: COLOURS.blue,
                fontWeight: "400",
            }}> See All</Text>
        </View>
        <View>
            {
                cleats.map((data) => {
                    return <CleatCard data={data} key={data.id}/>
                })
            }
        </View>
      </ScrollView>
    </View>
  )
}

export default Home;