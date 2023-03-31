import Section from "@atoms/Section";
import React from "react";
import SectionWithTableProps from "./types";


const SectionWithTable: React.FC<SectionWithTableProps> = ({
  sectionClassName,
  tableClassName,
  headersClassNames,
  headers,
  classNames,
}:SectionWithTableProps) => {
  return(
    <Section className={sectionClassName}>
      <table className={tableClassName}>
        <thead>
          <tr>
            {headers.map((header,i) =>(
              <th
              key={i}
              className={headersClassNames[i]}
            >
              {header}
            </th>))}
          </tr>
        </thead>
        <tbody>
          {headers.map((_,i) => (
            <tr key={i}>{classNames.map((e,i) => (
            <td className={e}>{e.includes("versus") ? "X" :i}</td>
            ))}</tr>))}
        </tbody>
      </table>
    </Section>
  );
}

export default SectionWithTable;