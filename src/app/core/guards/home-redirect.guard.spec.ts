import { HomeRedirectGuard } from './home-redirect.guard';

describe('HomeRedirect.Guard', () => {
    it('should create an instance', async () => {
        await expect(new HomeRedirectGuard()).toBeTruthy();
    });
});
