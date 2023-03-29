import Label from "@atoms/Label";
import React from "react";
import FilterOptionsProps from "./types";


const FilterOptions: React.FC<FilterOptionsProps> = ({
  types,
  currentFilter,
  htmlFor,
  content,
  formRegister,
  formHook,
}) => {
  return(
    <Label htmlFor={htmlFor}>
      {content}
      <select 
        id={htmlFor}
        defaultValue={currentFilter}
        {...formHook?.register(formRegister)}
      >
        {types.map((type,i) => <option key={i}>{type}</option>)}
      </select>
    </Label>
  );
}


export default FilterOptions;