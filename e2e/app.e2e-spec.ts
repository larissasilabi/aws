import { AwsPage } from './app.po';

describe('aws App', function() {
  let page: AwsPage;

  beforeEach(() => {
    page = new AwsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
