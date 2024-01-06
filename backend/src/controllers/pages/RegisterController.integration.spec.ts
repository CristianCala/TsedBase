import { PlatformTest } from "@tsed/common";
import SuperTest from "supertest";
import { RegisterController } from "./RegisterController";
import { Server } from "../../Server";

describe("RegisterController", () => {
  let request: SuperTest.SuperTest<SuperTest.Test>;

  beforeEach(PlatformTest.bootstrap(Server, {
    mount: {
      "/": [RegisterController]
    }
  }));
  beforeEach(() => {
    request = SuperTest(PlatformTest.callback());
  });

  afterEach(PlatformTest.reset);

  it("should call GET /register", async () => {
     const response = await request.get("/register").expect(200);

     expect(response.text).toEqual("hello");
  });
});
