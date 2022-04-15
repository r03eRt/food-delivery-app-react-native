import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { COLORS, icons } from '../constants';

export const TabButton = ({ label, icon, isFocused, onPress }) => {
    return (
        <TouchableWithoutFeedback
            onPress={ onPress }
        >
            <Animated.View style={{ 
                flex: 1, 
                alignItems: 'center', 
                justifyContent: 'center' 
            }}>
                <Animated.View style={{ 
                    flexDirection: 'row',
                    width: '80%',
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 25 
                }}>
                    <Image
                        source={ icon }
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray
                        }}
                    />
                </Animated.View>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({})
