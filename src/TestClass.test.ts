import { TestClass } from './TestClass'

describe('TestClass', () => {
  it('should be true', () => {
    // GIVEN
    const testClass = new TestClass()

    // WHEN
    const answer = testClass.getAnswer()

    // THEN
    expect(answer).toBeFalsy()
  })
})
