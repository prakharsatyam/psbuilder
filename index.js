#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

program
  .command('create <project-name>')
  .description('Create a new project')
  .action(async (projectName) => {
    const { databaseUrl, databaseName } = await inquirer.prompt([
      {
        type: 'input',
        name: 'databaseUrl',
        message: 'Enter your database URL:',
        validate: (input) => input ? true : 'Database URL is required',
      },
      {
        type: 'input',
        name: 'databaseName',
        message: 'Enter your database name:',
        validate: (input) => input ? true : 'Database name is required',
      }
    ]);

    const template = 'JavaScript'; 
    await createProject(projectName, template, databaseUrl, databaseName);
  });

program.parse(process.argv);

async function createProject(projectName, template, databaseUrl, databaseName) {
  const projectPath = path.join(process.cwd(), projectName);
  const templatePath = path.join(__dirname, 'templates'); 

  if (fs.existsSync(projectPath)) {
    console.error('Error: Project folder already exists');
    return;
  }

  await fs.ensureDir(projectPath);

  await fs.copy(templatePath, projectPath);

  const configFilePath = path.join(projectPath, 'config.json');
  await fs.writeJson(configFilePath, { databaseUrl, databaseName });

  console.log(`Project ${projectName} created.`);
  console.log(`Configuration saved in ${configFilePath}`);
}
