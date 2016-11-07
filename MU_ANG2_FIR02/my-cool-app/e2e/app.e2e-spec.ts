import { MyCoolAppPage } from './app.po';

describe('my-cool-app App', function() {
  let page: MyCoolAppPage;

  beforeEach(() => {
    page = new MyCoolAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
