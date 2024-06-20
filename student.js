import person from "./person.js";
class Student extends person {
    _name;
    constructor() {
        super();
        this._name = "";
    }
    get() {
        return this._name;
    }
    set(value) {
        this._name = value;
    }
}
export default Student;
