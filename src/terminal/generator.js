import { execSync } from 'child_process';
import * as fs from 'fs-extra';
import * as path from 'path';

export function createDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`Directory created: ${dirPath}`);
    } else {
        console.log(`Directory already exists: ${dirPath}`);
    }
}

export function createFile(filePath, content = '') {
    fs.writeFileSync(filePath, content);
    console.log(`File created: ${filePath}`);
}

export function runCommand(command) {
    try {
        const output = execSync(command, { stdio: 'inherit' });
        console.log(`Command executed: ${command}`);
    } catch (error) {
        console.error(`Error executing command: ${command}`, error);
    }
}

export function getFilePath(fileName, dir) {
    return path.join(dir, fileName);
}
