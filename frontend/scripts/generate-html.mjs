import { writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const assetsDir = join(process.cwd(), 'dist', 'client', 'assets');
const files = readdirSync(assetsDir);

const cssFile = files.find(f => f.endsWith('.css'));
const jsFile = files.find(f => f.endsWith('.js'));

if (!cssFile || !jsFile) {
  console.error('❌ Could not find CSS or JS files');
  console.error('Available files:', files);
  process.exit(1);
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rahul Kumar — Full-Stack Developer</title>
  <meta name="description" content="Portfolio of Rahul Kumar — Full-Stack Developer crafting elegant, scalable products with React, Node, AI and cloud.">
  <link rel="stylesheet" href="/assets/${cssFile}">
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/assets/${jsFile}"></script>
</body>
</html>`;

try {
  writeFileSync(join(process.cwd(), 'dist', 'client', 'index.html'), html);
  console.log('✅ index.html generated successfully');
  console.log('   CSS:', cssFile);
  console.log('   JS:', jsFile);
} catch (error) {
  console.error('❌ Error generating index.html:', error);
  process.exit(1);
}
