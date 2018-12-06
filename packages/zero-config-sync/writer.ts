import fs from "fs";
import { join } from "path";

export default function writeFiles(
  projectRoot: string,
  files: { [path: string]: string }
) {
  Object.keys(files).forEach(filePath => {
    const fullPath = join(projectRoot, filePath);
    const content = files[filePath];
    fs.writeFileSync(fullPath, content);
  });
}
