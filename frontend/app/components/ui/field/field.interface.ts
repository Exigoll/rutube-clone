import React from "react";
import { FieldError } from "react-hook-form";

export interface IFieldProps {
  error?: FieldError;
}

type TypeInputPropsField = React.InputHTMLAttributes<HTMLInputElement> &
  IFieldProps;

export interface IField extends TypeInputPropsField {}
