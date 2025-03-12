import { FilterJokesPipe } from './filter-jokes.pipe';

describe('FilterJokesPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterJokesPipe();
    expect(pipe).toBeTruthy();
  });
});
