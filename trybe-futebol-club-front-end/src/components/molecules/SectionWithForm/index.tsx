import { FormInfos } from "@atoms/Input/types";
import Section from "@atoms/Section";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import SectionWithFormProps from "./types";


const SectionWithForm: React.FC<SectionWithFormProps> = ({
  className,
  children,
}) => {
  const formHook = useForm<FormInfos>();
  const onSubmit: SubmitHandler<FormInfos> = async (data) => {
    console.log(data);
  }
  return(
    <Section className={className}>
      <form onSubmit={formHook.handleSubmit(onSubmit)}>
        {children}
      </form>
    </Section>
  );
}

export default SectionWithForm;