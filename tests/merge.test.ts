import merge from "../src/merge";

describe("merge function", () => {
  it("should merge two sorted arrays", () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    const expected = [1, 2, 3, 4, 5, 6];

    const result = merge(arr1, arr2);

    expect(result).toEqual(expected);
  });

  it("should handle empty arrays", () => {
    const arr1: number[] = [];
    const arr2 = [2, 4, 6];
    const expected = [2, 4, 6];

    const result = merge(arr1, arr2);

    expect(result).toEqual(expected);
  });
});
