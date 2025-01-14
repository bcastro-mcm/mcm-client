import inquirer from "inquirer";
import { runCommand } from "./src/terminal/generator.js";
import { OptionTerminal } from "./src/utils/data-cli.js";
import { PromptUser } from "./src/terminal/prompt-cli.js";
import { cloneAndCopyRepo } from "./src/terminal/templates-base.js";

async function main() {

    let exit = false;

    console.log("--------------------------------------------");
    console.log("********************************************");
    console.log("*********** WELCOME TO MCM CLIENT **********");
    console.log("********************************************");
    console.log("--------------------------------------------");

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
                await cloneAndCopyRepo('Flutter', flutterFolder)
                exit = true;
                break;

            case OptionTerminal.ionic:
                const ionicFolder = await PromptUser.promptFolder()
                await cloneAndCopyRepo('Ionic', ionicFolder)
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
