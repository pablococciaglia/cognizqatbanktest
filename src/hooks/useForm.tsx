import { ChangeEvent, useState } from "react";

export const useForm = <T extends Object>(initialState: T) => {
  const [form, setform] = useState(initialState);

  const handleInputChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;

    setform({
      ...form,
      [name]: value,
    });
  };

  return {
    form,
    handleInputChange,
  };
};
