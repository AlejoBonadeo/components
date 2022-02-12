import {useState} from 'react';

const useForm = <T extends Object>(initForm: T) => {
  const [form, setForm] = useState<T>(initForm);
  const onChange = (value: string | boolean, key: keyof T) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  return {
    form,
    onChange,
  };
};

export default useForm;
