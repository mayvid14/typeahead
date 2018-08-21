import { AmAutoCompleteModule } from './am-auto-complete.module';

describe('AmAutoCompleteModule', () => {
  let amAutoCompleteModule: AmAutoCompleteModule;

  beforeEach(() => {
    amAutoCompleteModule = new AmAutoCompleteModule();
  });

  it('should create an instance', () => {
    expect(amAutoCompleteModule).toBeTruthy();
  });
});
