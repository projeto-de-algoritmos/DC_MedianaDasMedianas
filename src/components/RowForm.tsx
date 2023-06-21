import { useCallback, useState } from "react";
import { Grade, Row } from "../types";
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Add } from "@mui/icons-material";

interface GradeSelectProps {
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent) => void;
}

const GradeSelect = ({ label, value, onChange }: GradeSelectProps) => {
  return (
    <FormControl
      fullWidth
      sx={{
        mr: 1,
      }}
    >
      <InputLabel>{label}</InputLabel>

      <Select value={value} label={label} onChange={onChange}>
        <MenuItem value="SS">SS</MenuItem>
        <MenuItem value="MS">MS</MenuItem>
        <MenuItem value="MM">MM</MenuItem>
        <MenuItem value="MI">MI</MenuItem>
        <MenuItem value="II">II</MenuItem>
        <MenuItem value="SR">SR</MenuItem>
      </Select>
    </FormControl>
  );
};

interface RowFormProps {
  addRow: (row: Row) => void;
}

const RowForm = ({ addRow }: RowFormProps) => {
  const [name, setName] = useState("");
  const [t01A, setT01A] = useState<Grade>("SS");
  const [t01P, setT01P] = useState<Grade>("SS");
  const [t02A, setT02A] = useState<Grade>("SS");
  const [t02P, setT02P] = useState<Grade>("SS");
  const [t03A, setT03A] = useState<Grade>("SS");
  const [t03P, setT03P] = useState<Grade>("SS");
  const [t04A, setT04A] = useState<Grade>("SS");
  const [t04P, setT04P] = useState<Grade>("SS");
  const [t05A, setT05A] = useState<Grade>("SS");
  const [t05P, setT05P] = useState<Grade>("SS");

  const handleButtonClick = useCallback(() => {
    if (name === "") {
      return;
    }

    addRow({
      name,
      grades: {
        t01A,
        t01P,
        t02A,
        t02P,
        t03A,
        t03P,
        t04A,
        t04P,
        t05A,
        t05P,
      },
    });
  }, [
    name,
    t01A,
    t01P,
    t02A,
    t02P,
    t03A,
    t03P,
    t04A,
    t04P,
    t05A,
    t05P,
    addRow,
  ]);

  return (
    <>
      <TextField
        label="Nome"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <Box mt={2} display="flex" flexDirection="row" alignItems="center">
        <GradeSelect
          label="T01A"
          value={t01A}
          onChange={(event) => setT01A(event.target.value as Grade)}
        />

        <GradeSelect
          label="T01P"
          value={t01P}
          onChange={(event) => setT01P(event.target.value as Grade)}
        />

        <GradeSelect
          label="T02A"
          value={t02A}
          onChange={(event) => setT02A(event.target.value as Grade)}
        />

        <GradeSelect
          label="T02P"
          value={t02P}
          onChange={(event) => setT02P(event.target.value as Grade)}
        />

        <GradeSelect
          label="T03A"
          value={t03A}
          onChange={(event) => setT03A(event.target.value as Grade)}
        />

        <GradeSelect
          label="T03P"
          value={t03P}
          onChange={(event) => setT03P(event.target.value as Grade)}
        />

        <GradeSelect
          label="T04A"
          value={t04A}
          onChange={(event) => setT04A(event.target.value as Grade)}
        />

        <GradeSelect
          label="T04P"
          value={t04P}
          onChange={(event) => setT04P(event.target.value as Grade)}
        />

        <GradeSelect
          label="T05A"
          value={t05A}
          onChange={(event) => setT05A(event.target.value as Grade)}
        />

        <GradeSelect
          label="T05P"
          value={t05P}
          onChange={(event) => setT05P(event.target.value as Grade)}
        />

        <Box>
          <IconButton onClick={handleButtonClick}>
            <Add fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default RowForm;
