import inquirer from "inquirer";
import { runCommand } from "./terminal/generator.js";
import { OptionTerminal } from "./utils/data-cli.js";
import { PromptUser } from "./terminal/prompt-cli.js";
import { cloneAndCopyRepo } from "./terminal/templates-base.js";

async function main() {
    let exit = false;

    while (!exit) {
        const action = await PromptUser.promptUser()

        switch (action) {
            case OptionTerminal.angular:
                const angularFolder = await PromptUser.promptFolder()
                await cloneAndCopyRepo('Angular', angularFolder)
                exit = true;
                break;

            case OptionTerminal.flutter:
                const flutterFolder = await PromptUser.promptFolder()
                await cloneAndCopyRepo('Flutter',flutterFolder)
                exit = true;
                break;

            case OptionTerminal.ionic:
                const ionicFolder = await PromptUser.promptFolder()
                await cloneAndCopyRepo('Ionic',ionicFolder)
                exit = true;
                break;

            case OptionTerminal.otherCommand:
                const commandAnswer = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'command',
                        message: '> Enter the terminal command to run:',
                    }
                ]);
                runCommand(commandAnswer.command);
                exit = true;
                break;

            case OptionTerminal.exit:
                exit = true;
                console.log('Exiting...');
                break;
        }

        if (exit) {
            exit = true;
            process.exit(0);
        }
    }
}

main()