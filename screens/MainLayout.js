import React, { useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    FlatList
} from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, WithTiming, withTiming } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../components/Header';
import { FONTS, SIZES, icons, constants, dummyData, COLORS } from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import { setSelectedTab } from '../stores/tab/tabActions';
//import { TabButton } from '../components/TabButton';


export const TabButton = ({ label, icon, isFocused, onPress, outerContainerStyle, innerContainerStyle }) => {
    return (
        <TouchableWithoutFeedback
            onPress={ onPress }
        >
            <Animated.View style={[ 
            {
                flex: 1, 
                alignItems: 'center', 
                justifyContent: 'center' 
            },
            outerContainerStyle
            ]}>
                <Animated.View style={[
                { 
                    flexDirection: 'row',
                    width: '80%',
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 25 
                },
                innerContainerStyle
                ]}>
                    <Image
                        source={ icon }
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: isFocused ? COLORS.white : COLORS.gray
                        }}
                    />

                    {
                        isFocused && (
                            <Text
                                numberOfLines={ 1 }
                                style={{
                                    marginLeft: SIZES.base,
                                    color: COLORS.white,
                                    ...FONTS.h3
                                }}
                            >
                                { label }
                            </Text>
                        )
                    }
                </Animated.View>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}



export const MainLayout = ({ navigation }) => {
    
    const dispatch = useDispatch();   
    const selectedTab = useSelector(state => state.tab.selectedTab);

    // Reanimated Shared Value
    const homeTabFlex = useSharedValue(1);
    const homeTabColor = useSharedValue(COLORS.white);
    const searchTabFlex = useSharedValue(1);
    const searchTabColor = useSharedValue(COLORS.white);
    const cartTabFlex = useSharedValue(1);
    const cartTabColor = useSharedValue(COLORS.white);
    const favouriteTabFlex = useSharedValue(1);
    const favouriteTabColor = useSharedValue(COLORS.white);
    const notificationTabFlex = useSharedValue(1);
    const notificationTabColor = useSharedValue(COLORS.white);

    // Reanimated Animated Style
    const homeFlexStyle = useAnimatedStyle(() => {
        return {
            flex: homeTabFlex.value
        }
    });

    const homeColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: homeTabColor.value
        }
    })

    const searchFlexStyle = useAnimatedStyle(() => {
        return {
            flex: searchTabFlex.value
        }
    });

    const searchColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: searchTabColor.value
        }
    })

    const cartFlexStyle = useAnimatedStyle(() => {
        return {
            flex: cartTabFlex.value
        }
    });

    const cartColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: cartTabColor.value
        }
    })

    const favouriteFlexStyle = useAnimatedStyle(() => {
        return {
            flex: favouriteTabFlex.value
        }
    });

    const favouriteColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: favouriteTabColor.value
        }
    })

    const notificationFlexStyle = useAnimatedStyle(() => {
        return {
            flex: notificationTabFlex.value
        }
    });

    const notificationColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: notificationTabColor.value
        }
    })


    useEffect(() => {
            dispatch(setSelectedTab('home'));
    }, []);

    useEffect(() => {
        if(selectedTab === constants.screens.home) {
            homeTabFlex.value = withTiming(4, { duration: 500});
            homeTabColor.value = withTiming(COLORS.primary, { duration: 500});
        } else {
            homeTabFlex.value = withTiming(1, { duration: 500});
            homeTabColor.value = withTiming(COLORS.white, { duration: 500});        
        }

        if(selectedTab === constants.screens.search) {
            searchTabFlex.value = withTiming(4, { duration: 500});
            searchTabColor.value = withTiming(COLORS.primary, { duration: 500});
        } else {
            searchTabFlex.value = withTiming(1, { duration: 500});
            searchTabColor.value = withTiming(COLORS.white, { duration: 500});        
        }

        if(selectedTab === constants.screens.cart) {
            cartTabFlex.value = withTiming(4, { duration: 500});
            cartTabColor.value = withTiming(COLORS.primary, { duration: 500});
        } else {
            cartTabFlex.value = withTiming(1, { duration: 500});
            cartTabColor.value = withTiming(COLORS.white, { duration: 500});        
        }

        if(selectedTab === constants.screens.favourite) {
            favouriteTabFlex.value = withTiming(4, { duration: 500});
            favouriteTabColor.value = withTiming(COLORS.primary, { duration: 500});
        } else {
            favouriteTabFlex.value = withTiming(1, { duration: 500});
            favouriteTabColor.value = withTiming(COLORS.white, { duration: 500});        
        }

        if(selectedTab === constants.screens.notification) {
            notificationTabFlex.value = withTiming(4, { duration: 500});
            notificationTabColor.value = withTiming(COLORS.primary, { duration: 500});
        } else {
            notificationTabFlex.value = withTiming(1, { duration: 500});
            notificationTabColor.value = withTiming(COLORS.white, { duration: 500});        
        }
    }, [selectedTab]);



    
    return (
        <Animated.View
            style={{
                flex: 1,                
                backgroundColor: COLORS.white
            }}
        >
            {/** Header */}
            <Header containerStyle={{
                height: 50,
                paddingHorizontal: SIZES.padding,
                marginTop: 40,
                alignItems: 'center'
            }}
            title={ selectedTab.toUpperCase() }
            leftComponent={
                <TouchableOpacity style={{
                    width: 40,
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: COLORS.gray2,
                    borderRadius: SIZES.radius
                }}
                onPress={() => navigation.openDrawer()}
                >
                    <Image source={icons.menu} />
                </TouchableOpacity>
            }

            rightComponent={
                <TouchableOpacity
                    style={{
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >                    
                    <Image 
                        source={dummyData?.myProfile?.profile_image}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: SIZES.radius
                        }}
                        />
                </TouchableOpacity>
            }
            ></Header>

            {/** Content */}
            <View style={{ flex: 1 }}>

                <Text style={{
                ...FONTS.h3
                }}>MainLayout</Text>
            </View>

            {/** Footer */}
            <View style={{
                height: 100,
                justifyContent: 'flex-end',
            }}>                
                {/** Tabs */}
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    paddingHorizontal: SIZES.radius,
                    paddingBottom: 10,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: COLORS.white
                }}>
                    <TabButton
                        label={constants.screens.home}
                        icon={icons.home}
                        outerContainerStyle={homeFlexStyle}
                        innerContainerStyle={homeColorStyle}
                        isFocused={selectedTab === constants.screens.home}
                        onPress={() => dispatch(setSelectedTab(constants.screens.home)) }     
                    />
                    <TabButton
                        label={constants.screens.search}
                        icon={icons.search}
                        outerContainerStyle={searchFlexStyle}
                        innerContainerStyle={searchColorStyle}
                        isFocused={selectedTab === constants.screens.search}
                        onPress={() => dispatch(setSelectedTab(constants.screens.search)) }     
                    />
                    <TabButton
                        label={constants.screens.cart}
                        icon={icons.cart}
                        outerContainerStyle={cartFlexStyle}
                        innerContainerStyle={cartColorStyle}
                        isFocused={selectedTab === constants.screens.cart}
                        onPress={() => dispatch(setSelectedTab(constants.screens.cart)) }     
                    />
                    <TabButton
                        label={constants.screens.favourite}
                        icon={icons.favourite}
                        outerContainerStyle={favouriteFlexStyle}
                        innerContainerStyle={favouriteColorStyle}
                        isFocused={selectedTab === constants.screens.favourite}
                        onPress={() => dispatch(setSelectedTab(constants.screens.favourite)) }     
                    />
                    <TabButton
                        label={constants.screens.notification}
                        icon={icons.notification}
                        outerContainerStyle={notificationFlexStyle}
                        innerContainerStyle={notificationColorStyle}
                        isFocused={selectedTab === constants.screens.notification}
                        onPress={() => dispatch(setSelectedTab(constants.screens.notification)) }     
                    />
                </View>

            </View>
        </Animated.View>
    )
}
