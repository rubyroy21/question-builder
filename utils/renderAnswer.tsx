import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export const questionType = {
  text: "text",
  radio: "radio",
};

export function renderAnswer(qb: any) {
  switch (qb.type) {
    case questionType.text:
      return (
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "60ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Answer" variant="outlined" />
        </Box>
      );
    case questionType.radio:
      return (
        <div>
          {qb.options.map((qb: any) => (
            <>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue=""
                  name="radio-buttons-group"
                  key={qb.id}
                >
                  <FormControlLabel value={qb} control={<Radio />} label={qb} />
                </RadioGroup>
              </FormControl>
            </>
          ))}
        </div>
      );
    default:
      return <input type="text" />;
  }
}
