const isProvider = require('./index');

test("Cek Provider Indonesia", () => {
  expect(isProvider("081127623233")).toBe("Telkomsel");
});
