import { HapiAngular4Page } from './app.po';

describe('hapi-angular4 App', () => {
  let page: HapiAngular4Page;

  beforeEach(() => {
    page = new HapiAngular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
