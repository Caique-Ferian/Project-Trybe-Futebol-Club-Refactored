import { UseFormReturn } from 'react-hook-form';


export interface PropsInput {
  type:string;
  id:string;
  className:string;
  placeholder:string;
  formHook?: UseFormReturn<FormInfos,object>;
  formRegister: keyof FormInfos;
} 

export interface FormInfos {
  email:string;
  password:string;
  filter: string;
}