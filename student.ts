import person from "./person.js";

class Student extends person {
  private _name: string;

  constructor() {
    super();
    this._name = "";
  }

  get() {
    return this._name;
  }

  set(value: string) {
    this._name = value;
  }
}
export default Student;