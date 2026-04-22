import { writeFileSync } from 'fs';
import { join } from 'path';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rahul Kumar — Full-Stack Developer</title>
  <link rel="stylesheet" href="/assets/styles-B7Rm7yNm.css">
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/assets/index-BprzmGwZ.js"></script>
</body>
</html>`;

try {
  writeFileSync(join(process.cwd(), 'dist', 'client', 'index.html'), html);
  console.log('✅ index.html generated successfully');
} catch (error) {
  console.error('❌ Error generating index.html:', error);
  process.exit(1);
}
