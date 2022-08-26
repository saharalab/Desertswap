import { faker } from "@faker-js/faker";

export type FakeDataGeneratorReturnsType ={
  hourly: { time: string; BUSD: string }[];
  weekly: { time: string; BUSD: string }[];
  monthly: { time: string; BUSD: string }[];
}

export function fakeDataGenerator(): FakeDataGeneratorReturnsType {
  function randomDate(start: any, end: any) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  function generateData(): { time: string; BUSD: string } {
    return {
      time: `${randomDate(
        new Date(2012, 0, 1),
        new Date()
      ).getHours()}:${randomDate(
        new Date(2012, 0, 1),
        new Date()
      ).getMinutes()} ${Math.random() >= 0.5 ? "AM" : "PM"} ${faker.date.month({
        abbr: true,
      })} ${randomDate(
        new Date(2012, 0, 1),
        new Date()
      ).getDay()} GMT${randomDate(
        new Date(2012, 0, 1),
        new Date()
      ).getTimezoneOffset()}`,
      BUSD: parseFloat(`${Math.random() * 100}`).toFixed(2),
    };
  }

  // Hourly Dump Data
  let hourly: { time: string; BUSD: string }[] = Array(20)
    .fill(1)
    .map((item: any, idx: number) => generateData());

  // Weekly Dump Data
  let weekly: { time: string; BUSD: string }[] = Array(20)
    .fill(1)
    .map((item: any, idx: number) => generateData());

  // Monthly Dump Data
  let monthly: { time: string; BUSD: string }[] = Array(20)
    .fill(1)
    .map((item: any, idx: number) => generateData());

  return { hourly, weekly, monthly };
}
