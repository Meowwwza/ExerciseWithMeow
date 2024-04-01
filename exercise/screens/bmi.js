import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BMI = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100;
    const calculatedBmi = weightInKg / (heightInM * heightInM);
    setBmi(calculatedBmi.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <TextInput
        placeholder="Weight (kg)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Height (cm)"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Calculate BMI" onPress={calculateBMI} />
      {bmi && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Your BMI: {bmi}</Text>
          <Text style={styles.resultDescription}>
            Interpretation: {interpretBMI(bmi)}
          </Text>
        </View>
      )}
    </View>
  );
};

const interpretBMI = (bmi) => {
  if (bmi < 18.5) {
    return 'Underweight (น้ำหนักน้อยกว่ามาตรฐาน)';
  } else if (bmi < 22.9) {
    return 'Normal weight (น้ำหนักปกติ)';
  } else if (bmi < 24.9) {
    return 'Overweight level 1 (อ้วนระดับ 1)';
  } else if (bmi < 29.9) {
    return 'Overweight level 2 (อ้วนระดับ 2)';
  }
  else {
    return 'Obese (อ้วนมาก)';
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  title: {
    fontSize: 35,
    fontWeight: '800',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#CBF1F5',
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultDescription: {
    fontSize: 16,
  },
});

export default BMI;
