import { useState } from 'react';
import FormInput from '~components/Common/FormInput';
import { DogProfileType } from '~providers/DogProfileProvider';

type UpdateFieldType<T> = <K extends keyof T>(key: K, value: T[K]) => void;

interface WeightInputProps {
  weight: number | undefined;
  updateField: UpdateFieldType<DogProfileType>;
}

export const WeightInput = ({ weight, updateField }: WeightInputProps) => {
  const [displayWeight, setDisplayWeight] = useState(weight ? `${weight}kg` : '');

  const handleChangeWeight = (value: string) => {
    if (value === '') {
      updateField('weight', 0);
      setDisplayWeight('');
      return;
    }
    if (/^\d*\.?\d*$/.test(value)) {
      const formatted = value.includes('.') ? value.match(/^\d*\.?\d{0,2}/)![0] : value;
      updateField('weight', Number(formatted));
      setDisplayWeight(formatted);
    }
  };

  const handleFocusWeightInput = () => {
    if (weight) {
      setDisplayWeight(weight.toString());
    }
  };

  const handleBlurWeightInput = () => {
    if (weight) {
      setDisplayWeight(`${weight}kg`);
    }
  };
  return (
    <FormInput
      value={displayWeight}
      onChangeText={handleChangeWeight}
      placeholder="몸무게 입력"
      keyboardType="numeric"
      onFocus={handleFocusWeightInput}
      onBlur={handleBlurWeightInput}
    />
  );
};
