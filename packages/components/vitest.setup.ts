import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers, { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

declare global {
  namespace jest {
    interface Matchers<R, T> extends TestingLibraryMatchers<T, R> {}
  }
}

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
