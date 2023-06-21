import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  {
    nome: "Aluno 1",
    t01A: "SS",
    t01P: "SS",
    p01: "SS",
    t02A: "SS",
    t02P: "SS",
    p02: "SS",
    t03A: "SS",
    t03P: "SS",
    p03: "SS",
    t04A: "SS",
    t04P: "SS",
    p04: "SS",
    t05A: "SS",
    t05P: "SS",
    p05: "SS",
  },
];

const GradesTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>T01A</TableCell>
            <TableCell>T01P</TableCell>
            <TableCell>P01</TableCell>
            <TableCell>T02A</TableCell>
            <TableCell>T02P</TableCell>
            <TableCell>P02</TableCell>
            <TableCell>T03A</TableCell>
            <TableCell>T03P</TableCell>
            <TableCell>P03</TableCell>
            <TableCell>T04A</TableCell>
            <TableCell>T04P</TableCell>
            <TableCell>P04</TableCell>
            <TableCell>T05A</TableCell>
            <TableCell>T05P</TableCell>
            <TableCell>P05</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.nome}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.t01A}</TableCell>
              <TableCell>{row.t01P}</TableCell>
              <TableCell>{row.p01}</TableCell>
              <TableCell>{row.t02A}</TableCell>
              <TableCell>{row.t02P}</TableCell>
              <TableCell>{row.p02}</TableCell>
              <TableCell>{row.t03A}</TableCell>
              <TableCell>{row.t03P}</TableCell>
              <TableCell>{row.p03}</TableCell>
              <TableCell>{row.t04A}</TableCell>
              <TableCell>{row.t04P}</TableCell>
              <TableCell>{row.p04}</TableCell>
              <TableCell>{row.t05A}</TableCell>
              <TableCell>{row.t05P}</TableCell>
              <TableCell>{row.p05}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GradesTable;
