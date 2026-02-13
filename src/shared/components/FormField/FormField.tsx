import type { ComponentProps } from "react";
import { Field, FieldLabel, FieldError } from "~/shared/ui/field";
import { Input } from "~/shared/ui/input";

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  error?: string;
  inputProps: ComponentProps<"input">;
}

export const FormField = ({
  label,
  name,
  type,
  placeholder,
  error,
  inputProps,
  ...props
}: FormFieldProps) => {
  return (
    <Field {...props}>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        {...inputProps}
      />
      {error && <FieldError>{error}</FieldError>}
    </Field>
  );
};
