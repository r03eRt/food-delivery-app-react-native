import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { FONTS, SIZES } from '../constants';

export const MainLayout = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text style={{
               ...FONTS.h3
            }}>MainLayout2</Text>
        </View>
    )
}
