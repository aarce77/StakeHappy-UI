import { StakHappyPage } from './app.po';

describe('stak-happy App', () => {
  let page: StakHappyPage;

  beforeEach(() => {
    page = new StakHappyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
