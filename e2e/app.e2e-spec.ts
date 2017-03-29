import { MISHAPage } from './app.po';

describe('misha App', () => {
  let page: MISHAPage;

  beforeEach(() => {
    page = new MISHAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
