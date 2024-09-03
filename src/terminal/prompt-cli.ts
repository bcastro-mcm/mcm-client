import inquirer from "inquirer";
import { OptionTerminal } from "../utils/data-cli";


class _PromptUser {
    async promptUser() {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Seleccione una de las siguientes opciones',
                choices: [
                    OptionTerminal.angular,
                    OptionTerminal.ionic,
                    OptionTerminal.flutter,
                    OptionTerminal.otherCommand,
                    OptionTerminal.exit
                ]
            }
        ]);

        return answers.action;
    }

    async promptFolder(){
        const cloneAnswer = await inquirer.prompt([
            {
                type: 'input',
                name: 'destinationFolder',
                message: '> Enter the name of destination folder:',
            }
        ]);
        return cloneAnswer.destinationFolder;
    }
}


export const PromptUser = new _PromptUser()