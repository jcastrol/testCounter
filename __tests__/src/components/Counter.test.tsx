import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Counter from '../../../src/components/Counter';


describe('Counter Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Counter />);
    expect(getByText('0')).toBeTruthy(); // Verifica que se muestre el valor inicial
    expect(getByText('Incrementar')).toBeTruthy(); // Verifica que el botón "Incrementar" esté presente
    expect(getByText('Decrementar')).toBeTruthy(); // Verifica que el botón "Decrementar" esté presente
  });

  it('increments the counter when "Incrementar" is pressed', () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText('Incrementar');

    fireEvent.press(incrementButton); // Simula el clic en el botón "Incrementar"

    expect(getByText('1')).toBeTruthy(); // Verifica que el valor ahora sea 1
  });

  it('decrements the counter when "Decrementar" is pressed', () => {
    const { getByText } = render(<Counter />);
    const decrementButton = getByText('Decrementar');

    fireEvent.press(decrementButton); // Simula el clic en el botón "Decrementar"

    expect(getByText('-1')).toBeTruthy(); // Verifica que el valor ahora sea -1
  });
});