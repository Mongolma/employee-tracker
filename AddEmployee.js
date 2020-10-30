class AddEmployee {
  constructor(first_name, last_name, role, manager) {
    this.first_name = first_name;
    this.last_name = last_name;
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
