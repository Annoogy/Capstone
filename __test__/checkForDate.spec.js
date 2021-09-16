import { checkDate } from '../src/client/js/dateChecker'
describe("Date checker", () => {
    // test stuff
    
    test("it should be a valid Date", () => {
      // actual test
      expect(checkDate).toBeDefined();
    });
  });