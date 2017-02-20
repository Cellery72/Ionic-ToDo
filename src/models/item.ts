export class Item {

  public title: string;
  public description: string;
  public completed: boolean;
  public _startString: string;

  constructor(title: string, description: string, completed: boolean) {
    this.completed = completed;
    this.title = title;
    this.description = description;
    let creationTime = new Date();
    this._startString = "Started " + this.getMonthName(creationTime.getMonth()) + " " + this.getNth(creationTime.getDate()) + " " + creationTime.getFullYear() + " " + creationTime.toLocaleTimeString();
  }

  private getMonthName(month: number) {
    switch (month) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
    }
  }
  private getNth(dayNumber: number) {
    let j = dayNumber % 10,
      k = dayNumber % 100;
    if (j == 1 && k != 11) {
      return dayNumber + "st";
    }
    if (j == 2 && k != 12) {
      return dayNumber + "nd";
    }
    if (j == 3 && k != 13) {
      return dayNumber + "rd";
    }
    return dayNumber + "th";
  }
}
