import { GlobetrotterPage } from './app.po';

describe('globetrotter App', function() {
  let page: GlobetrotterPage;

  beforeEach(() => {
    page = new GlobetrotterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
