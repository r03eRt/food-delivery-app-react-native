import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import React, { useState } from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import { COLORS, constants, dummyData, FONTS, icons, SIZES } from '../constants';
import { MainLayout } from '../screens/MainLayout';
import { Search } from '../screens/Search/Search';


const Drawer = createDrawerNavigator();

export const CustomDrawerItem = ({icon, label }) => {
    return(
        <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: 40,
            marginBottom: SIZES.base,
            paddingLeft: SIZES.radius,
            borderRadius: SIZES.base
        }}>
            <Image source={icon} style={{width: 20, height: 20, tintColor: COLORS.white }}/>
            <Text style={{
                marginLeft: 15,
                color: COLORS.white,
                ...FONTS.h3
            }}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

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
                    <CustomDrawerItem label={constants.screens.home} icon={icons.home} />
                    <CustomDrawerItem label={constants.screens.my_wallet} icon={icons.wallet} />
                    <CustomDrawerItem label={constants.screens.notification} icon={icons.notification} />
                    <CustomDrawerItem label={constants.screens.favourite} icon={icons.favourite} />
                    {/** Line DIvider */}
                    <View style={{
                        height: 1,
                        backgroundColor: COLORS.lightGray1,
                        marginVertical: SIZES.radius,
                        marginLeft: SIZES.radius,
                        backgroundColor: COLORS.lightGray1
                    }}>                    
                    </View>
                    <CustomDrawerItem label="Track your order" icon={icons.location} />
                    <CustomDrawerItem label="Coupons" icon={icons.coupon} />
                    <CustomDrawerItem label="Settings" icon={icons.setting} />
                    <CustomDrawerItem label="Invite a friend" icon={icons.profile} />
                    <CustomDrawerItem label="help center" icon={icons.help} />
                    <View style={{
                        marginBottom: SIZES.padding
                    }}>
                        <CustomDrawerItem label="Logout" icon={icons.logout} />
                    </View>

                </View>

            </View>
        </DrawerContentScrollView>
    )
}

export const CustomDrawer = () => {

    const [progress, setProgress] = useState(new Animated.Value(0));

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
                            setTimeout(() => {
                                setProgress(props.progress);
                            }, 0)
                            
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
