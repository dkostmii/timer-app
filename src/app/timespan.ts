import { format } from './util'


export class TimeSpan {
  private d: number;

  private get diff() {
    return this.d;
  }

  private set diff(value: number) {
    this.d = value;
    if (this.d < 0) {
      this.d = TimeSpan.maxValue + this.diff;
    }
  }

  public static get milliSecondsInASecond() { return 1000; }
  public static get hoursInADay() { return 24; }
  public static get minutesInAHour() { return 60; }
  public static get secondsInAMinute() { return 60; }
  public static get maxDays() { return 99 };

  constructor(value?: number) {
    this.d = 0;

    if (typeof value === "undefined") this.diff = 0;
    else {
      this.diff = value;
    }
  }

  private static get maxValue(): number {
    return (
      TimeSpan.milliSecondsInASecond *
      TimeSpan.hoursInADay *
      TimeSpan.minutesInAHour *
      TimeSpan.secondsInAMinute *
      TimeSpan.maxDays
    );
  }

  public addSeconds(seconds: number) {
    this.diff += Math.floor(TimeSpan.milliSecondsInASecond * seconds);
  }

  public addMinutes(minutes: number) {
    this.addSeconds(Math.floor(TimeSpan.secondsInAMinute * minutes));
  }

  public addHours(hours: number) {
    this.addMinutes(Math.floor(TimeSpan.minutesInAHour * hours));
  }

  public addDays(days: number) {
    this.addHours(Math.floor(TimeSpan.hoursInADay * days));
  }

  private static toSeconds(diff: number) {
    return Math.abs(
      Math.floor(
        diff / TimeSpan.milliSecondsInASecond
      )
    );
  }

  private static toMinutes(diff: number) {
    return Math.abs(
      Math.floor(
        diff / (TimeSpan.milliSecondsInASecond * TimeSpan.secondsInAMinute)
      )
    );
  }

  private static toHours(diff: number) {
    return Math.abs(
      Math.floor(
        diff / (TimeSpan.milliSecondsInASecond * TimeSpan.secondsInAMinute * TimeSpan.minutesInAHour)
      )
    );
  }

  private static toDays(diff: number) {
    return Math.abs(
      Math.floor(
        diff / (TimeSpan.milliSecondsInASecond * TimeSpan.secondsInAMinute * TimeSpan.minutesInAHour * TimeSpan.hoursInADay)
      )
    );
  }

  get value() {
    return this.diff;
  }

  get seconds() {
    return TimeSpan.toSeconds(this.diff) % TimeSpan.secondsInAMinute;
  }

  get minutes() {
    return TimeSpan.toMinutes(this.diff) % TimeSpan.minutesInAHour
  }

  get hours() {
    return TimeSpan.toHours(this.diff) % TimeSpan.hoursInADay;
  }

  get days() {
    return TimeSpan.toDays(this.diff);
  }

  public compare(timeSpan: TimeSpan): number {
    return this.diff - timeSpan.diff;
  }

  public toString() {
    return `${format(this.days, 2)}:${format(this.hours, 2)}:${format(this.minutes, 2)}:${format(this.seconds, 2)}`
  }
}