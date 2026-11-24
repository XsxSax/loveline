// loveline: one line to make the judge fall in love with a machine.
// The program writes it to /output/entry.txt. Node 22, standard library only.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line =
  "Her old radio still hums the station she loved, and every evening at six it plays her song to an empty chair.";
writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), line);
