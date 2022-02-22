import { Campaign } from '../src/campaign';
import { DurableObjectState } from '@miniflare/durable-objects';

const env = getMiniflareBindings();
const id = env.CAMPAIGN.newUniqueId();

describe('inactive campaign', () => {
  let storage: DurableObjectStorage;
  let campaign: Campaign;

  beforeAll(async () => {
    storage = await getMiniflareDurableObjectStorage(id);
  });

  beforeEach(() => {
    campaign = new Campaign(new DurableObjectState(id as any, storage as any), env);
  });

  test('constructs', () => {
    expect(campaign).toBeInstanceOf(Campaign);
  });
});