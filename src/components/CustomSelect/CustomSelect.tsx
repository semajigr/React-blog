import Select from "react-select";

export const CustomSelect = () => {
  const options = [
    { value: "", label: "Title (A-Z)" },
    { value: "", label: "Title (Z-A)" },
  ];
  return <Select options={options} />;
};
