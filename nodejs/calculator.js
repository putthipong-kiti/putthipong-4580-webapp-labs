import inquirer from "inquirer";

let add = (num1, num2) => {
    let result = 0;
    result = num1 + num2
    return result
}

let subtract = (num1, num2) => {
    let result = 0;
    result = num1 - num2
    return result
}

let selectOperator = {type:'input', name:'operator', message:'add | subtract'}

let args = process.argv.slice(2);
    if (!isNaN(args[0]) && !isNaN(args[1])) {
        inquirer.prompt(selectOperator).then(input => {
            switch (input.operator) {
                case "add":
                    let addResult = add(Number(args[0]), Number(args[1]));
                    console.log(`${args[0]} + ${args[1]} = ${addResult}`);
                    break;
                case "subtract":
                    let subtractResult = subtract(Number(args[0]), Number(args[1]));
                    console.log(`${args[0]} - ${args[1]} = ${subtractResult}`);
                    break;
                default:
                    console.log("Unknown operator")
                    break;
            }
        })
    } else {
        console.log("Please enter two numbers")
    }  