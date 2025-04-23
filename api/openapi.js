import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.resolve('./', 'openapi.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(fileContent);
}
