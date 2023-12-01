export type TMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type TAcademicSemesterName = 'Summer' | 'Autumn' | 'Fall';
export type TAcademicSemesterCode = '01' | '02' | '03';
export type TAcademicSemester = {
  id: string;
  year: string;
  name: TAcademicSemesterName;
  code: TAcademicSemesterCode;
  startMonth: TMonths;
  endMonth: TMonths;
};
export type TAcademicSemesterNameCodeMappers = {
  [key: string]: string;
};
