const { getNewUser, mapObjectToArray } = require("./utils");

describe("MapObjectToArray()", () => {
  test("maps values to array using callback", async () => {
    const result = mapObjectToArray({ age: 30, height: 65 }, (k, v) => {
      return v + 10;
    });
    expect(result).toEqual([40, 75]);
  });

  test("callback gets called", () => {
    const mockCallback = jest.fn(); // jest keyword gets injected without imports since we're running this in jest space
    const result = mapObjectToArray({ age: 30, height: 65 }, mockCallback);
    expect(mockCallback.mock.calls.length).toBe(2);
  });
});

describe("getnewUser", () => {
  test("it gets user", async () => {
    const user = await getNewUser(1);
    expect(user).toBeTruthy();
    expect(user.id).toBe(1);
  });
  test("no user found", async () => {
    expect.assertions(1); // i require 1 expect assertion to be run
    try {
      const user = await getNewUser(2);
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });
});
