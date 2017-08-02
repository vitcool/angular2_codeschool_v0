import { AngularCodeschoolPage } from './app.po';

describe('angular-codeschool App', () => {
  let page: AngularCodeschoolPage;

  beforeEach(() => {
    page = new AngularCodeschoolPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
