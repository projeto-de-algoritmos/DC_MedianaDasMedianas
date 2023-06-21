import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import getMedianOfMedians from "../medianOfMedians";

type Grade = "SS" | "MS" | "MM" | "MI" | "II" | "SR";

type Grades = {
  t01A: Grade;
  t01P: Grade;
  t02A: Grade;
  t02P: Grade;
  t03A: Grade;
  t03P: Grade;
  t04A: Grade;
  t04P: Grade;
  t05A: Grade;
  t05P: Grade;
};

type Row = {
  name: string;
  grades: Grades;
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

  console.log(gradesNumbers);

  const medianOfMedians = getMedianOfMedians(gradesNumbers, 4);

  return medianOfMedians;
};

const rows: Row[] = [
  {
    name: "Aluno 1",
    grades: {
      t01A: "SS",
      t01P: "SS",
      t02A: "SS",
      t02P: "SS",
      t03A: "SS",
      t03P: "SS",
      t04A: "II",
      t04P: "II",
      t05A: "II",
      t05P: "II",
    },
  },
  {
    name: "Aluno 2",
    grades: {
      t01A: "SS",
      t01P: "SS",
      t02A: "SS",
      t02P: "SS",
      t03A: "MS",
      t03P: "MS",
      t04A: "MS",
      t04P: "MS",
      t05A: "MS",
      t05P: "MS",
    },
  },
];

const GradesTable = () => {
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
              <TableCell>{getMedian(grades)}</TableCell>
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
