const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const srcDir = path.join(__dirname, 'src');
const outDir = path.join(__dirname, 'dist');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log('Compilando arquivos JSX da pasta src/ para dist/...\n');

fs.readdirSync(srcDir).forEach(file => {
  if (file.endsWith('.jsx')) {
    const filePath = path.join(srcDir, file);
    const code = fs.readFileSync(filePath, 'utf-8');
    
    // Transforma o JSX em JS normal compatível com os navegadores
    const result = babel.transformSync(code, {
      presets: ['@babel/preset-react'],
      filename: file
    });

    const outFilePath = path.join(outDir, file.replace('.jsx', '.js'));
    fs.writeFileSync(outFilePath, result.code);
    console.log(`[OK] ${file} -> dist/${file.replace('.jsx', '.js')}`);
  }
});

console.log('\nCompilação concluída com sucesso!');
