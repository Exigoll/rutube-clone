import { TextareaHTMLAttributes } from "react";
import { IFieldProps } from "@/services/ui/field/field.interface";

type TypeInputPropsField = TextareaHTMLAttributes<HTMLInputElement> & IFieldProps

export interface ITextArea extends TypeInputPropsField {
};
