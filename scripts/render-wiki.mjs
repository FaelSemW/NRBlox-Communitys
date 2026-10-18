import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'docs', 'wiki');
const escape = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
function inline(text) {
  return escape(text).replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m,label,href) => {
    if (!/^(https:\/\/|[A-Za-z0-9_-]+\.md$)/.test(href)) throw new Error(`Unsupported wiki URL: ${href}`);
    if (href.endsWith('.md') && !fs.existsSync(path.join(dir,href))) throw new Error(`Missing page: ${href}`);
    return `<a href="${href.replace(/\.md$/,'.html')}">${label}</a>`;
  });
}
for (const file of fs.readdirSync(dir).filter(x=>x.endsWith('.md'))) {
  const text = fs.readFileSync(path.join(dir,file),'utf8').replace(/^\uFEFF/,'');
  const title = text.match(/^# (.+)/m)?.[1] || 'NRBlox Community';
  const blocks = text.trim().split(/\r?\n\s*\r?\n/).map(block=>{
    if (/^#{1,3} /.test(block)) { const [,marks,value]=block.match(/^(#{1,3}) (.*)$/s); return `<h${marks.length}>${inline(value)}</h${marks.length}>`; }
    if (block.startsWith('- ')) return '<ul>'+block.split(/\r?\n/).map(line=>`<li>${inline(line.replace(/^- /,''))}</li>`).join('')+'</ul>';
    return `<p>${inline(block.replace(/\r?\n/g,' '))}</p>`;
  }).join('\n');
  const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'self'"><title>${escape(title)} · NRBlox</title><link rel="stylesheet" href="wiki.css"></head><body><header><a class="brand" href="Home.html">N / NRBlox Community</a><a href="https://discord.gg/M8j8JnQSCx">Discord ↗</a></header><main>${blocks}</main><footer>Documentação NRBlox Community · Disponível offline</footer></body></html>`;
  fs.writeFileSync(path.join(dir,file.replace(/\.md$/,'.html')),html);
}
console.log('Wiki HTML generated; local links validated.');
