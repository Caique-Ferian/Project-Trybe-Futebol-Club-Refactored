import Section from "@atoms/Section";
import React from "react";
import SectionWithTableProps from "./types";


const SectionWithTable: React.FC<SectionWithTableProps> = ({
  sectionClassName,
  tableClassName,
  headers,
  classNames,
}:SectionWithTableProps) => {
  return(
    <Section className={sectionClassName}>
      <table className={tableClassName}>
        <thead>
          <tr>
            {headers.map((header,i) =><th key={i}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {classNames.map((e,i) => (
            <tr key={i}><td className={e}>{e}</td> </tr>))}
        </tbody>
      </table>
    </Section>
  );
}

export default SectionWithTable;