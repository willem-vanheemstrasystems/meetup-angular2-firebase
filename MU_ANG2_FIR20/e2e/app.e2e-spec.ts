import { MUANG2FIR20Page } from './app.po';

describe('mu-ang2-fir20 App', function() {
  let page: MUANG2FIR20Page;

  beforeEach(() => {
    page = new MUANG2FIR20Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
