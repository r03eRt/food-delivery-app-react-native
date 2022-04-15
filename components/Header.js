import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { FONTS } from '../constants';

export const Header = ({ title, containerStyle, leftComponent, rightComponent }) => {
    return (
        <View style={{
            flexDirection: 'row',
            ...containerStyle,

        }}>
            {/** Left */}
            {leftComponent}

            {/** Title */}
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ ...FONTS.h3 }}> { title }</Text>
            </View>

            {/** Right */}
            {rightComponent}
        </View>
    );
}

const styles = StyleSheet.create({})