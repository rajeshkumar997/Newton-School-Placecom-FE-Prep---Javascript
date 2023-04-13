function findTax(salary) {
    try {
        if (salary < 0) {
            throw new ValidationError("Salary not valid");
        }
        let tax = 0;
        switch (true) {
            case salary > 1500000:
                tax = salary * 0.3;
                break;
            case salary > 1000000:
                tax = salary * 0.2;
                break;
            case salary > 500000:
                tax = salary * 0.1;
                break;
            default:
                tax = 0;
        }
        return tax;
    } catch (error) {
        return error.message;
    }
}
