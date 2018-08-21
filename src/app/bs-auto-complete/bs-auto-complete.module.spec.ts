import { BsAutoCompleteModule } from './bs-auto-complete.module';

describe('BsAutoCompleteModule', () => {
  let bsAutoCompleteModule: BsAutoCompleteModule;

  beforeEach(() => {
    bsAutoCompleteModule = new BsAutoCompleteModule();
  });

  it('should create an instance', () => {
    expect(bsAutoCompleteModule).toBeTruthy();
  });
});
