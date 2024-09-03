import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

export function createDirectory(dirPath: string) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`Directory created: ${dirPath}`);
    } else {
        console.log(`Directory already exists: ${dirPath}`);
    }
}

export function createFile(filePath: string, content: string = '') {
    fs.writeFileSync(filePath, content);
    console.log(`File created: ${filePath}`);
}

export function runCommand(command: string) {
    try {
        const output = execSync(command, { stdio: 'inherit' });
        console.log(`Command executed: ${command}`);
    } catch (error) {
        console.error(`Error executing command: ${command}`, error);
    }
}

export function getFilePath(fileName: string, dir: string) {
    return path.join(dir, fileName);
}
