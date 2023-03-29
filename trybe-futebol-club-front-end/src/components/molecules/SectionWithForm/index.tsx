import React, { useContext } from "react";
import { FormInfos } from "@atoms/Input/types";
import Section from "@atoms/Section";
import { SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import SectionWithFormProps from "./types";
import { AppContext } from "@context/index";
import AppContextType from "@context/types";
import Image from "@atoms/Image";
import { positiveLogo } from "@images/";


const SectionWithForm: React.FC<SectionWithFormProps> = ({
  className,
  children,
}) => {
  const formHook = useForm<FormInfos>();
  const { login } = useContext(AppContext) as AppContextType;
  const onSubmit: SubmitHandler<FormInfos> = async (data) => login(data)
  const childrenWithProps = React.Children.map(children,(child) => {
    if(React.isValidElement(child)) {
      return React
        .cloneElement<any & UseFormReturn<FormInfos>>(child, { formHook });
    }
    return child;
  });
  return(
    <Section className={className}>
      <Image src={ positiveLogo } alt="Trybe Futebol Clube Negative Logo"/>
      <form onSubmit={formHook.handleSubmit(onSubmit)}>
        {childrenWithProps}
      </form>
    </Section>
  );
}

export default SectionWithForm;