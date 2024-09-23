import inquirer from "inquirer";
var questions = [
    { type:'input', name:'username', message:'Username:'},
    { type:'password', name:'password', message:'Password   :'}
]
inquirer.prompt(questions).then(answer => {
    console.log(`Hi ${answer.username}!`)
})