const { syncDB } = require("../../tasks/sync-db");

describe("Pueba de sync-db", () => {
  test("debe ejectuar el proceso dos veces", () => {
    const times = syncDB();
    console.log("se llamo", times);
    expect(times).toBe(1);
  });
});
