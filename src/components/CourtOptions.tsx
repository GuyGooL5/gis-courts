import CourtsService from "$/services/CourtsService";
import { AccountBalanceOutlined as AccountBalance } from "@mui/icons-material";
import {
  FormControl,
  FormControlProps,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface CourtOptionsProps extends Omit<FormControlProps, "onSelect"> {
  onSelect: (courtType: string) => void;
}

const CourtOptions = ({ onSelect, ...props }: CourtOptionsProps) => {
  const [value, setValue] = useState<string>("הכל");
  const label = "סוג בית משפט";

  const handleSelect = (courtType: string) => {
    setValue(courtType);
    onSelect(courtType);
  };
  return (
    <FormControl {...props} dir="rtl">
      <InputLabel>{label}</InputLabel>

      <Select
        value={value}
        label={label}
        defaultValue="הכל"
        renderValue={(value) => (
          <ItemRender
            courtType={value}
            color={CourtsService.getTypeColor(value)}
          />
        )}
      >
        <MenuItem dir="rtl" value={"הכל"} onClick={() => handleSelect("הכל")}>
          <ItemRender courtType="הכל" color="inherit" />
        </MenuItem>
        {CourtsService.getCourtTypes().map((courtType) => (
          <MenuItem
            key={courtType}
            dir="rtl"
            value={courtType}
            onClick={() => handleSelect(courtType)}
          >
            <ItemRender
              courtType={courtType}
              color={CourtsService.getTypeColor(courtType)}
            />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default CourtOptions;

interface ItemRenderProps {
  courtType: string;
  color: string;
}
const ItemRender = ({ courtType, color }: ItemRenderProps) => (
  <Stack direction="row" alignItems="center" gap={1} color={color}>
    <AccountBalance color="inherit" />
    <Typography color="textPrimary">{courtType}</Typography>
  </Stack>
);
