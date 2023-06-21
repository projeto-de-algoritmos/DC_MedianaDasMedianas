import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import getMedianOfMedians from "../medianOfMedians";
import { Grades, Row } from "../types";

const getGradeString = (grade: number) => {
  if (grade > 8.9) {
    return "SS";
  } else if (grade > 6.9) {
    return "MS";
  } else if (grade > 4.9) {
    return "MM";
  } else if (grade > 2.9) {
    return "MI";
  } else if (grade > 0) {
    return "II";
  } else {
    return "SR";
  }
};

const getGradeNumber = (grade: string) => {
  switch (grade) {
    case "SS":
      return 10;
    case "MS":
      return 8.9;
    case "MM":
      return 6.9;
    case "MI":
      return 4.9;
    case "II":
      return 2.9;
    case "SR":
      return 0;
    default:
      return 0;
  }
};

const getMedian = (grades: Grades) => {
  const gradesArray = Object.values(grades);
  const gradesNumbers = gradesArray.map((grade) => getGradeNumber(grade));

  const median = getMedianOfMedians(gradesNumbers, 4);
  const medianString = getGradeString(median);

  return `${medianString} (${median})`;
};

type GradesTableProps = {
  rows: Row[];
};

const GradesTable = ({ rows }: GradesTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>
              <strong>Mediana</strong>
            </TableCell>
            <TableCell>T01A</TableCell>
            <TableCell>T01P</TableCell>
            <TableCell>T02A</TableCell>
            <TableCell>T02P</TableCell>
            <TableCell>T03A</TableCell>
            <TableCell>T03P</TableCell>
            <TableCell>T04A</TableCell>
            <TableCell>T04P</TableCell>
            <TableCell>T05A</TableCell>
            <TableCell>T05P</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map(({ name, grades }) => (
            <TableRow key={name}>
              <TableCell>{name}</TableCell>
              <TableCell>
                <strong>{getMedian(grades)}</strong>
              </TableCell>
              <TableCell>{grades.t01A}</TableCell>
              <TableCell>{grades.t01P}</TableCell>
              <TableCell>{grades.t02A}</TableCell>
              <TableCell>{grades.t02P}</TableCell>
              <TableCell>{grades.t03A}</TableCell>
              <TableCell>{grades.t03P}</TableCell>
              <TableCell>{grades.t04A}</TableCell>
              <TableCell>{grades.t04P}</TableCell>
              <TableCell>{grades.t05A}</TableCell>
              <TableCell>{grades.t05P}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GradesTable;
