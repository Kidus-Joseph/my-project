import { View, Text, StatusBar, ScrollView, TouchableOpacity, Image, onPress } from 'react-native'
import React, {useEffect, useState} from 'react'
import {COLOURS, Items} from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


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
            <TouchableOpacity
                onPress={() => navigation.navigate('ProductInfo', {productID:data.id})}
                style={{
                    width: '48%',
                    marginVertical: 14,
                }}>
                <View 
                    style={{
                        width: '100%',
                        height: 100,
                        borderRadius: 10,
                        backgroundColor: COLOURS.backgroundLight,
                        position: 'relative',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 8,
                    }}>
                    {data.isOff ? (
                        <View
                            style={{
                                position: 'absolute',
                                width: '20%',
                                height: '24%',
                                backgroundColor: COLOURS.green,
                                top: 0,
                                left: 0,
                                borderTopLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text style={{
                                fontSize: 12,
                                color: COLOURS.white,
                                fontWeight: 'bold',
                                letterSpacing: 1,
                            }}>{data.offPercentage}%</Text>
                        </View>
                    ) : null}
                    <Image source={data.productImage} style={{
                        width: '80%', height: '80%', resizeMode: 'contain'}}/>
                </View>
                <Text 
                    style={{
                        fontSize: 12,
                        color: COLOURS.black,
                        fontWeight: "600",
                        marginBottom: 2,
                    }}> {data.productName}
                </Text>
                {data.category == 'jerseys' || 'shinguards' || 'balls' ? (
                    data.isAvailable ? (
                        <View 
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <FontAwesome name='circle' 
                                style={{
                                    fontSize: 12,
                                    marginRight: 6,
                                    color: COLOURS.green,
                                }}/>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: COLOURS.green,
                                }}>Available
                            </Text>
                        </View>
                    ) : (
                        <View 
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <FontAwesome name='circle' 
                                style={{
                                    fontSize: 12,
                                    marginRight: 6,
                                    color: COLOURS.red,
                                }}/>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: COLOURS.red,
                                }}> Unavailable
                            </Text>
                        </View>
                    ) 
                ): null}
                <Text> &#36; {data.productPrice} </Text>
            </TouchableOpacity>
        );
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
            <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
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
        <View 
            style={{
                padding: 16,
            }}>
            <View 
                style={{
                padding: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <View 
                    style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Text 
                        style={{
                        fontSize: 18,
                        color: COLOURS.black,
                        fontWeight: "500",
                        letterSpacing: 1,
                    }}>
                    Cleats
                    </Text>
                    <Text 
                        style={{
                        fontSize: 14,
                        color: COLOURS.black,
                        fontWeight: "400",
                        opacity: 0.5,
                        marginLeft: 10,
                    }}>
                    10
                    </Text>
                </View>
                    <Text 
                        style={{
                            fontSize: 14,
                            color: COLOURS.blue,
                            fontWeight: "400",
                        }}> 
                        See All
                    </Text>
                </View>
                <View 
                    style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    }}>
                {cleats.map((data) => {
                    return <CleatCard data={data} key={data.id}/>;
                })}
            </View>
        </View>

        <View 
            style={{
                padding: 16,
            }}>
            <View 
                style={{
                padding: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <View 
                    style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Text 
                        style={{
                        fontSize: 18,
                        color: COLOURS.black,
                        fontWeight: "500",
                        letterSpacing: 1,
                    }}>
                    Jerseys
                    </Text>
                    <Text 
                        style={{
                        fontSize: 14,
                        color: COLOURS.black,
                        fontWeight: "400",
                        opacity: 0.5,
                        marginLeft: 10,
                    }}>
                    10
                    </Text>
                </View>
                    <Text 
                        style={{
                            fontSize: 14,
                            color: COLOURS.blue,
                            fontWeight: "400",
                        }}> 
                        See All
                    </Text>
                </View>
                <View 
                    style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    }}>
                {jerseys.map((data) => {
                    return <CleatCard data={data} key={data.id}/>;
                })}
            </View>
        </View>

        <View 
            style={{
                padding: 16,
            }}>
            <View 
                style={{
                padding: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <View 
                    style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Text 
                        style={{
                        fontSize: 18,
                        color: COLOURS.black,
                        fontWeight: "500",
                        letterSpacing: 1,
                    }}>
                    Shinguards
                    </Text>
                    <Text 
                        style={{
                        fontSize: 14,
                        color: COLOURS.black,
                        fontWeight: "400",
                        opacity: 0.5,
                        marginLeft: 10,
                    }}>
                    10
                    </Text>
                </View>
                    <Text 
                        style={{
                            fontSize: 14,
                            color: COLOURS.blue,
                            fontWeight: "400",
                        }}> 
                        See All
                    </Text>
                </View>
                <View 
                    style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    }}>
                {shinguards.map((data) => {
                    return <CleatCard data={data} key={data.id}/>;
                })}
            </View>
        </View>

        <View 
            style={{
                padding: 16,
            }}>
            <View 
                style={{
                padding: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <View 
                    style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Text 
                        style={{
                        fontSize: 18,
                        color: COLOURS.black,
                        fontWeight: "500",
                        letterSpacing: 1,
                    }}>
                    Balls
                    </Text>
                    <Text 
                        style={{
                        fontSize: 14,
                        color: COLOURS.black,
                        fontWeight: "400",
                        opacity: 0.5,
                        marginLeft: 10,
                    }}>
                    10
                    </Text>
                </View>
                    <Text 
                        style={{
                            fontSize: 14,
                            color: COLOURS.blue,
                            fontWeight: "400",
                        }}> 
                        See All
                    </Text>
                </View>
                <View 
                    style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    }}>
                {balls.map((data) => {
                    return <CleatCard data={data} key={data.id}/>;
                })}
            </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home;