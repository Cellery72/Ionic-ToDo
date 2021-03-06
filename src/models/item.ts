let counter = 1001;

export class Item {

  private _id: number;
  public title: string;
  public description: string;
  public completed: boolean;
  public _startString: string;

  // Default constructor will initialize a start string from the current time it's constructed.
  constructor(title: string, description: string, completed: boolean) {
    let creationTime = new Date();
    this.completed = completed;
    this.title = title;
    this.description = description;
    this._id = counter++;
    this._startString = "Started " + this.getMonthName(creationTime.getMonth()) + " " + this.getNth(creationTime.getDate()) + " " + creationTime.getFullYear() + " " + creationTime.toLocaleTimeString();
  }

  // Returns string of the month(name) given a number (0-11)
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
  // Returns string with appropriate 'st' 'nd' 'rd' 'th' etc. concatanated with number
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
  public getID(): number{
    return this._id;
  }
}
