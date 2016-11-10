import { MyMaterialDesignAppPage } from './app.po';

describe('my-material-design-app App', function() {
  let page: MyMaterialDesignAppPage;

  beforeEach(() => {
    page = new MyMaterialDesignAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
