import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { COLORS, constants, dummyData, FONTS, icons, SIZES } from '../constants';
import { MainLayout } from '../screens/MainLayout';
import { Search } from '../screens/Search/Search';


const Drawer = createDrawerNavigator();

// export const CustomDrawerItem = ({icon, label }) => {

// }

export const CustomDrawerContent = ({navigation}) => {
    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{
                flex: 1
            }}
        >
            <View style={{
                flex: 1,
                paddingHorizontal: SIZES.radius,
            }}>
                {/** Close */}
                <View style={{
                    alignItems: 'flex-start',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                        onPress={() => navigation.closeDrawer()}
                    >
                        <Image
                            source={icons.cross}
                            style={{
                                height: 35,
                                width: 35,
                                tintColor: COLORS.white
                            }}
                        />
                    </TouchableOpacity>
                </View>
                {/** profile */}
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    marginTop: SIZES.radius,
                    alignItems: 'center'
                }}
                onPress={() => navigation.navigate('Profile')}
                >
                    <Image
                        source={dummyData.myProfile?.profile_image}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: SIZES.radius
                        }}
                    />
                    <View style={{
                        marginLeft: SIZES.radius
                    }}>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}> Roberto Morgado</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}> View your profile</Text>
                    </View>
                </TouchableOpacity>
                {/** Drawer items */}
                <View style={{
                    flex: 1,
                    marginTop: SIZES.padding
                }}>
                    {/* <CustomDrawerItem
                        label={constants.screens.home}
                        icon={icons.home}
                    /> */}

                </View>

            </View>
        </DrawerContentScrollView>
    )
}

export const CustomDrawer = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.primary
        }}>
            <Drawer.Navigator
                screenOptions={{ 
                    headerShown: false,
                    drawerStyle: {
                        flex: 1,
                        width: '65%',
                        paddingRight: 20,
                        backgroundColor: 'transparent'
                    },
                    sceneContainerStyle: {
                        backgroundColor: 'transparent'
                    },
                    drawerType: "slide",
                    overlayColor: "transparent"  
                 }}                                            
                initialRouteName="MainLayout"
                drawerContent={ 
                        props => {
                            return (<CustomDrawerContent navigation={props.navigation} />)
                        }
                    }
            >
                <Drawer.Screen name='MainLayout'>
                    { props => <MainLayout {...props} /> }
                </Drawer.Screen>
                {/* <Drawer.Screen name="Search" component={Search} /> */}
            </Drawer.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({})
