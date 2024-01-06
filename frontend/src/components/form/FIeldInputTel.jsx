import React from "react";

import PhoneInput from "react-phone-number-input";
import { useField } from "formik";

import FieldWrapper from "../FieldWrapper";

const FIeldInputTel = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  return (
    <FieldWrapper label={label} meta={meta} {...props}>
      <PhoneInput
        {...props}
        {...field}
        value={field.value}
        defaultCountry="NO"
        onChange={(value) => {
          helpers.setValue(value);
        }}
      />
    </FieldWrapper>
  );
};

export default FIeldInputTel;
