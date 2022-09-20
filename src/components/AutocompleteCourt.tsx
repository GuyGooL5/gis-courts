import { useMemo, useState } from "react";
import {
  Autocomplete,
  createFilterOptions,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";

import CourtsService, { Court } from "$/services/CourtsService";
import { Stack } from "@mui/system";
import { Place } from "@mui/icons-material";

interface AutocompleteCourtProps {
  onSelectCourt?: (court: Court) => void;
}

const AutocompleteCourt = ({ onSelectCourt }: AutocompleteCourtProps) => {
  const options = useMemo(() => CourtsService.getCourts(), []);

  const filterOptions = createFilterOptions({
    matchFrom: "any",
    stringify: ({ data }: Court) =>
      data.name + " " + data.address + " " + data.city,
  });

  return (
    <Autocomplete
      sx={{ width: 360 }}
      options={options}
      getOptionLabel={(option) => option.data.name}
      filterOptions={filterOptions}
      renderOption={(props, option) => (
        <RenderOption {...props} option={option} />
      )}
      onChange={(e, value) => value && onSelectCourt?.(value)}
      renderInput={(params) => (
        <TextField dir="rtl" {...params} label="בחר בית משפט" />
      )}
    />
  );
};
export default AutocompleteCourt;

const RenderOption = ({
  option: { data },
  ...props
}: { option: Court } & React.HTMLAttributes<HTMLLIElement>) => {
  const removeLastPart = (delimiter: string) => (str: string) => {
    const split = str.split(delimiter);
    if (split.length > 1) {
      split.pop();
      return split.join(delimiter);
    }
    return str;
  };

  return (
    <ListItem {...props} dir="rtl">
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={1}
        textAlign="start"
      >
        <Place htmlColor="#3f51b5" />
        <div>
          <Typography variant="body1">
            {removeLastPart(" - ")(data.name)}
          </Typography>
          <Typography variant="body2">{data.city}</Typography>
        </div>
      </Stack>
    </ListItem>
  );
};
