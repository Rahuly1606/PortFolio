import { execSync } from 'child_process';
import fs from 'fs';

console.log('Installing all dependencies including devDependencies...');
execSync('npm install', { stdio: 'inherit' });

console.log('Building the application...');
execSync('npx vite build', { stdio: 'inherit' });

console.log('Build completed successfully!'); 