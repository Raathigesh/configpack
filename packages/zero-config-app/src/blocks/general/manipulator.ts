const Babel = require("@babel/standalone");
import { Highlight } from "../../app";

interface Options {
  entryPath: string;
  setHighlights: (hightlights: Highlight[]) => void;
}

function lolizer(opa: any, { entryPath, setHighlights }: Options) {
  return {
    visitor: {
      Property(path: any) {
        if (path.node.key.name === "entry") {
          path.node.value.value = entryPath;
          setHighlights([path.node.loc]);
        }
      }
    }
  };
}
Babel.registerPlugin("lolizer", lolizer);

export default function General(
  code: any,
  { entryPath, setHighlights }: Options
) {
  return Babel.transform(code, {
    plugins: [
      [
        "lolizer",
        {
          entryPath,
          setHighlights
        }
      ]
    ]
  }).code;
}

export function getHighlight() {}
