export type Grade = "SS" | "MS" | "MM" | "MI" | "II" | "SR";

export type Grades = {
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

export type Row = {
  name: string;
  grades: Grades;
};
