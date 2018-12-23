import { getScripts } from "./package-json.service";

test("should return the scripts fragment", () => {
  expect(
    getScripts([
      {
        scripts: {
          start: "yarn start"
        }
      },
      {
        scripts: {
          watch: "yarn watch"
        }
      }
    ])
  ).toMatchInlineSnapshot(
    `"{\\"start\\":\\"yarn start\\",\\"watch\\":\\"yarn watch\\"}"`
  );
});
