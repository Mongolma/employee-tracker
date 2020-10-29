class AddEmployee {
  constructor(firstname, lastname, role, manager) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.role = role;
  }
  getfirtsName() {
    return this.firstname;
  }
  getlastname() {
    return this.lastname;
  }
  getrole() {
    return this.role;
  }
  getRole() {
    return "Employee";
  }
}
module.exports = AddEmployee;
