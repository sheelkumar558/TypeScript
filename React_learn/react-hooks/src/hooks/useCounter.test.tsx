// import { render, screen } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "./useCounter";

test("useCounter Hook", () => {
  const { result } = renderHook(() => useCounter(0));

  act(() => {
    result.current.inc();
  });

  expect(result.current.value).toBe(1);

  act(() => {
    result.current.inc(4);
  });

  expect(result.current.value).toBe(5);

  act(() => {
    result.current.dec();
  });

  expect(result.current.value).toBe(4);

  act(() => {
    result.current.dec(4);
  });

  expect(result.current.value).toBe(0);

  act(() => {
    result.current.set(100);
  });

  expect(result.current.value).toBe(100);
});

test("useList hook", function () {});
