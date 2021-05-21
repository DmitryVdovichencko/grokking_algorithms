import binary_search from "../src/binary_search";
describe("Test binary search algorithm", () => {
  test("search for item in sorted Array must return index or null", () => {
    const list = [1, 3, 5, 7, 9],
      item = 7,
      firstItem = list[0],
      nonExistItem = 2;
    expect(binary_search(list, item)).toBe(3);
    expect(binary_search(list, firstItem)).toBe(0);
    expect(binary_search(list, nonExistItem)).toBe(null);
  });
});
