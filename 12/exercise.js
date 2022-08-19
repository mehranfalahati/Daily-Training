// Given the following data definition, which queries return the second largest salary? Note that it is possible that some employees have the same salary.

// TABLE emp
//         id INTEGER PRIMARY KEY
//         name VARCHAR2(30) NOT NULL
//         salary NUMBER

// If we have employees A, B, and C whose salaries are $100, $80, and $100 respectively, note that the second highest salary is $80 although there are two employees with a higher salary.

// a) SELECT DISTINCT salary FROM emp ORDER BY salary DESC OFFSET 1 LIMIT 1;
// b) SELECT MAX(salary) FROM emp WHERE salary < (SELECT MAX(salary) FROM emp);
// c) SELECT salary FROM (SELECT DISTINCT salary FROM emp ORDER BY salary DESC LIMIT 2) AS emp ORDER BY salary LIMIT 1;
// d) SELECT DISTINCT salary FROM (SELECT salary FROM emp ORDER BY salary DESC LIMIT 2) AS emp ORDER BY salary LIMIT 1;
// e) SELECT salary FROM emp ORDER BY salary DESC OFFSET 1 LIMIT 1;