import fs from 'fs';
import path from 'path';

const files = [
  'types.js',
  'theme.js',
  'drawer.js',
  'gallery.js',
  'favorites.js',
  'slider.js',
  'reviews.js',
  'dashboard.js',
  'main.js'
];

let combined = '(() => {\n';

for (const file of files) {
  const filePath = path.join('dist', file);
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/^import\s+.*?from\s+['\"].*?['\"];?\s*$/gm, '');
  content = content.replace(/^export\s+\{.*?\};?\s*$/gm, '');
  content = content.replace(/^export\s+/gm, '');
  combined += `// --- ${file} ---\n${content}\n`;
}

combined += '})();\n';
fs.writeFileSync(path.join('dist', 'bundle.js'), combined);
console.log(`✓ Generated dist/bundle.js (${combined.length} bytes)`);

