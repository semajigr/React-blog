import { Color } from "ui/colors";

const CustomStyles = {
  control: () => ({
    width: "256px",
    display: "flex",
    background: Color.ExtraLight,
    borderRadius: "4px",
    padding: "10px",
    cursor: "pointer",
  }),

  indicatorSeparator: () => ({
    width: 0,
  }),
};

export { CustomStyles };
