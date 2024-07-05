import React, { useState, ChangeEvent } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Department {
  department: string;
  sub_departments: string[];
}

const departmentsData: Department[] = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

const Department: React.FC = () => {
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleAccordionChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setChecked((prevState) => {
      const newState = { ...prevState, [name]: checked };

      const department = departmentsData.find(
        (dept) => dept.department === name
      );
      if (department) {
        department.sub_departments.forEach((subDept) => {
          newState[subDept] = checked;
        });
      } else {
        departmentsData.forEach((dept) => {
          if (dept.sub_departments.includes(name)) {
            const allChecked = dept.sub_departments.every(
              (subDept) => newState[subDept]
            );
            newState[dept.department] = allChecked;
          }
        });
      }

      return newState;
    });
  };

  const renderSubDepartments = (subDepartments: string[]) => (
    <FormGroup>
      {subDepartments.map((subDepartment) => (
        <FormControlLabel
          key={subDepartment}
          control={
            <Checkbox
              checked={!!checked[subDepartment]}
              onChange={handleChange}
              name={subDepartment}
            />
          }
          label={subDepartment.replace("_", " ")}
        />
      ))}
    </FormGroup>
  );

  return (
    <div>
      {departmentsData.map(({ department, sub_departments }) => (
        <Accordion
          key={department}
          expanded={expanded === department}
          onChange={handleAccordionChange(department)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${department}-content`}
            id={`${department}-header`}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={!!checked[department]}
                  onChange={handleChange}
                  name={department}
                />
              }
              label={department.replace("_", " ")}
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
            />
          </AccordionSummary>
          <AccordionDetails>
            {renderSubDepartments(sub_departments)}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Department;
