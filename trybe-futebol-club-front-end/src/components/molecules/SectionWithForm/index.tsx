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
  classNameForm,
  children,
  hasImage,
}) => {
  const formHook = useForm<FormInfos>();
  const { login, setCurrentLBFilter,
    setCurrentMatchesFilter } = useContext(AppContext) as AppContextType;
  const onSubmit: SubmitHandler<FormInfos> = async (data) => {
    if(data.email) login(data);
    if(data.filterLb) setCurrentLBFilter(data.filterLb);
    if(data.filterMatches) setCurrentMatchesFilter(data.filterMatches);
  }
  const childrenWithProps = React.Children.map(children,(child) => {
    if(React.isValidElement(child)) {
      return React
        .cloneElement<any & UseFormReturn<FormInfos>>(child, { formHook });
    }
    return child;
  });
  return(
    <Section className={className}>
      {hasImage && (
        <Image src={ positiveLogo } alt="Trybe Futebol Clube Negative Logo"/>
      )}
      <form className={classNameForm} onSubmit={formHook.handleSubmit(onSubmit)}>
        {childrenWithProps}
      </form>
    </Section>
  );
}

export default SectionWithForm;