import { test, expect } from 'vitest'

import { sum } from '../src/app.js'

test('sum', () => {
    expect(sum(1, 2)).toBe(3)
})