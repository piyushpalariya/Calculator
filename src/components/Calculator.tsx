import {Text, View, TextInput, Keyboard} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';
import {useState} from 'react';
import {GlobalStyles} from './GlobalStylesheet';
import {useColorScheme} from 'react-native';
import {GlobalStylesDark} from './GlobalStylesheetDark';

function evaluateResult(equation) {
  return eval(equation);
}

function clearEquation(setEquation) {
  setEquation('');
}

export default function Calculator() {
  const [equation, setEquation] = useState('');

  const styles = useColorScheme() === 'dark' ? GlobalStylesDark : GlobalStyles;
  return (
    <View style={styles.container}>
      <View style={styles.equation}>
        <Text style={styles.inputText}>{equation}</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.row}>
          <CustomButton
            title="1"
            onPress={() => {
              setEquation(equation + '1');
            }}
          />
          <CustomButton
            title="2"
            onPress={() => {
              setEquation(equation + '2');
            }}
          />
          <CustomButton
            title="3"
            onPress={() => {
              setEquation(equation + '3');
            }}
          />
          <CustomButton
            title="delete"
            onPress={() => {
              setEquation(equation.slice(0, -1));
            }}
          />
        </View>
        <View style={styles.row}>
          <CustomButton
            title="4"
            onPress={() => {
              setEquation(equation + '4');
            }}
          />
          <CustomButton
            title="5"
            onPress={() => {
              setEquation(equation + '5');
            }}
          />
          <CustomButton
            title="6"
            onPress={() => {
              setEquation(equation + '6');
            }}
          />
          <CustomButton
            title="Clear"
            onPress={() => {
              clearEquation(setEquation);
            }}
          />
        </View>
        <View style={styles.row}>
          <CustomButton
            title="7"
            onPress={() => {
              setEquation(equation + '7');
            }}
          />
          <CustomButton
            title="8"
            onPress={() => {
              setEquation(equation + '8');
            }}
          />
          <CustomButton
            title="9"
            onPress={() => {
              setEquation(equation + '9');
            }}
          />
          <CustomButton
            title="="
            onPress={() => setEquation(evaluateResult(equation))}
          />
        </View>

        <View style={styles.row}>
          <CustomButton
            title="+"
            onPress={() => {
              setEquation(equation + '+');
            }}
          />
          <CustomButton
            title="/"
            onPress={() => {
              setEquation(equation + '/');
            }}
          />
          <CustomButton
            title="-"
            onPress={() => {
              setEquation(equation + '-');
            }}
          />
          <CustomButton
            title="*"
            onPress={() => {
              setEquation(equation + '*');
            }}
          />
        </View>
        <View style={styles.row}>
          <CustomButton
            title="."
            onPress={() => {
              setEquation(equation + '.');
            }}
          />
          <CustomButton
            title="0"
            onPress={() => {
              setEquation(equation + '0');
            }}
          />

          <CustomButton
            title="^"
            onPress={() => {
              setEquation(equation + '**');
            }}
          />
          <CustomButton
            title="√"
            onPress={() => {
              setEquation(equation + '**1/2');
            }}
          />
        </View>
        <View style={styles.row}>
          <CustomButton
            title="("
            onPress={() => {
              setEquation(equation + '(');
            }}
          />
          <CustomButton
            title=")"
            onPress={() => {
              setEquation(equation + ')');
            }}
          />
        </View>
      </View>
    </View>
  );
}
