// import { render, screen } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useList } from "./useList";

test("useCounter Hook", () => {
  const { result } = renderHook(() => useList([1, 2, 3]));

  act(() => {
    result.current[1].push(4);
  });

  expect(result.current[0]).toEqual([1, 2, 3, 4]);

  act(() => {
    result.current[1].push(5);
  });

  expect(result.current[0]).toEqual([1, 2, 3, 4, 5]);

  act(() => {
    result.current[1].pop();
  });

  expect(result.current[0]).toEqual([1, 2, 3, 4]);

  act(() => {
    result.current[1].pop();
  });

  expect(result.current[0]).toEqual([1, 2, 3]);

  act(() => {
    result.current[1].clear();
  });

  expect(result.current[0]).toEqual([]);

  act(() => {
    result.current[1].reset();
  });

  expect(result.current[0]).toEqual([1, 2, 3]);

  act(() => {
    result.current[1].map((x: any) => x * 3);
  });

  expect(result.current[0]).toEqual([3, 6, 9]);

  act(() => {
    result.current[1].map((x: any) => x + 1);
  });

  expect(result.current[0]).toEqual([4, 7, 10]);
});

test("useList hook", function () {});
