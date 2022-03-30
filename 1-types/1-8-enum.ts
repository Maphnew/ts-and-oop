{
  /**
   * Enum
   */
  // Javascript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY; // 0

  // TypeScript
  type DaysOfWeek =
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Tuesday);
  let day = Days.Friday;
  day = Days.Monday;
  day = 10; // 💩
  console.log(day);

  let dayOfWeek: DaysOfWeek = "Monday";
  dayOfWeek = "Friday";
  // dayOfWeek = 'somethigElse'; // not assignable
}
