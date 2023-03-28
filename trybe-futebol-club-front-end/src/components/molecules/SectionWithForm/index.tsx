import React, { useContext } from "react";
import { FormInfos } from "@atoms/Input/types";
import Section from "@atoms/Section";
import { SubmitHandler, useForm } from "react-hook-form";
import SectionWithFormProps from "./types";
import { AppContext } from "@context/index";
import AppContextType from "@context/types";


const SectionWithForm: React.FC<SectionWithFormProps> = ({
  className,
  children,
}) => {
  const formHook = useForm<FormInfos>();
  const { setUser } = useContext(AppContext) as AppContextType;
  const onSubmit: SubmitHandler<FormInfos> = async (data) => {
    setUser(data);
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