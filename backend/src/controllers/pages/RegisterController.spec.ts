import { PlatformTest } from "@tsed/common";
import { RegisterController } from "./RegisterController";

describe("RegisterController", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<RegisterController>(RegisterController);
    // const instance = PlatformTest.invoke<RegisterController>(RegisterController); // get fresh instance

    expect(instance).toBeInstanceOf(RegisterController);
  });
});
