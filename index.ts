


import inquirer from "inquirer"
let userAns = await inquirer.prompt({
    type:"input",
    name:"words",
    message:"please enter your sentence:"
})

let wordCount = userAns.words.trim().split(" ").length


console.log(`your sentence has ${wordCount} words.`)