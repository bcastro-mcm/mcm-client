import { execSync } from 'child_process';
import * as fs from 'fs-extra';
import * as path from 'path';

export function getUrlGithub(type) {

    const urls = {
        "Angular": "https://github.com/bcastro-mcm/angular-template-admin-web.git",
        "Flutter": "",
        "Ionic": ""
    }

    return urls[type];
}

export async function cloneAndCopyRepo(type, destinationFolder) {

    const gitUrl = getUrlGithub(type)
    if( !gitUrl ) {
        console.log(`❌ Aún no esta disponible el template para el projecto de: ${type}`)
        return
    }

    const tempFolder = path.join(process.cwd(), 'temp_clone');

    try {
        // Clone the GitHub repository into a temporary folder
        console.log(`📝 Cloning repository from ${gitUrl}...`);
        execSync(`git clone ${gitUrl} ${tempFolder}`, { stdio: 'inherit' });

        // Ensure the destination folder exists
        fs.ensureDirSync(destinationFolder);

        // Copy the content of the cloned repo to the destination folder
        fs.copySync(tempFolder, destinationFolder);

        console.log(` ✅ Project initialized to ${destinationFolder}`);
    } catch (error) {
        console.error(' ⛔️ Error cloning repository or copying files:', error);
    } finally {
        // Remove the temporary folder
        fs.removeSync(tempFolder);
    }
}
