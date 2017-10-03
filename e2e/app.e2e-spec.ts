import { QontoPage } from './app.po';

describe('qonto App', () => {
  let page: QontoPage;

  beforeEach(() => {
    page = new QontoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
