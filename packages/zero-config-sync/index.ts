import writeFiles from "./writer";

const WS = require("ws");
const projecRoot = "D:\\hello";

const wss = new WS.Server({ port: 8080 });
wss.on("connection", ws => {
  ws.on("message", message => {
    const { type, payload } = JSON.parse(message);
    if (type === "writeFiles") {
      writeFiles(projecRoot, payload);
    }
  });
  // ws.send("something");
});

console.log("Running...");
