
import { UseFormReturn } from 'react-hook-form';
import { FormInfos } from '@atoms/Input/types';

export default interface FilterOptionsProps {
  types: string[];
  currentFilter: string;
  htmlFor: string;
  content: string;
  formHook?: UseFormReturn<FormInfos,object>;
  formRegister: keyof FormInfos;
  
}
