import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { GlobalStyles } from './GlobalStylesheet';
import { GlobalStylesDark } from './GlobalStylesheetDark';
import { useColorScheme } from 'react-native';

export default function CustomButton({ title,onPress}) {
  const styles = useColorScheme() === 'dark' ? GlobalStylesDark : GlobalStyles;
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
