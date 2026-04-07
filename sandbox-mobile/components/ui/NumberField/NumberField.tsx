import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface NumberFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
}

export const NumberField = ({
  label,
  value,
  onChangeText,
  placeholder,
  error,
}: NumberFieldProps) => (
  <View style={styles.container}>
    {label ? <Text style={styles.label}>{label}</Text> : null}
    <TextInput
      style={[styles.input, error ? styles.inputError : null]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="rgba(0, 0, 0, 0.75)"
      keyboardType="numeric"
    />
    <View style={styles.errorContainer}>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    gap: 4,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
  },
  input: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderWidth: 1,
    borderColor: 'rgba(209, 213, 219, 0.4)',
    borderRadius: 8,
    color: '#111827',
  },
  inputError: {
    borderColor: 'rgba(239, 68, 68, 0.6)',
  },
  errorContainer: {
    minHeight: 20,
  },
  error: {
    fontSize: 13,
    color: '#dc2626',
    fontWeight: '500',
  },
});
