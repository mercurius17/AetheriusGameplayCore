import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ConfigLoader } from '../src/config/loader.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const result = await new ConfigLoader(root).load();
console.log(JSON.stringify({ status: result.status, configVersion: result.configVersion, errors: result.errors }, null, 2));
process.exit(result.errors.length ? 1 : 0);
