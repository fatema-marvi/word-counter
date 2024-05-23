import inquirer from "inquirer";

const answer = await inquirer.prompt(
    [
    {
     name:"sentence",
     type:"input",
     message:"Enter your text"
    }
]
)
const words = answer.sentence.trim().split(" ")
console.log(words);
console.log(`your text word count is ${words.length}`);