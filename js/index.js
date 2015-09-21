(function () {
    // https://goo.gl/nTZZeR  
    function Person(id, name, age, department, salary) {
        this.id = id;
        this.age = age;
        this.name = name;
        this.department = department;
        this.salary = salary;


        this.grow = function () {
            this.age++;
        };
    }

    function Employees() {
        this.employees = [];
        var that = this;


        this.convertJsonArrayToEmployee = function (employeeArray) {
            return new Person(employeeArray["id"], employeeArray["name"], employeeArray["age"],
                employeeArray["department"], employeeArray["salary"]);
        };

        this.bringEmployeesFromJson = function () {

            jQuery.ajax({
                url: "employees.json"
            }).done(function (data) {
                console.log(data);
                for (var key in data["employees"]) {
                    var employee = that.convertJsonArrayToEmployee(data["employees"][key]);
                    that.employees.push(employee);
                    that.updateTableWithAnEmployee(employee);
                }
                console.log(that.employees);
            });
        };

        this.updateTableWithAnEmployee = function (employee) {

            var getCell = function (value) {
                return "<td>" + value + "</td>";
            };

            var row = "<tr>";
            row += getCell(employee.id);
            row += getCell(employee.name);
            row += getCell(employee.age);
            row += getCell(employee.department);
            row += getCell(employee.salary);

            row += "</tr>";
            $("#content").find("tbody").append(row);
        };
    }

    var employees = new Employees();
    employees.bringEmployeesFromJson();


}());