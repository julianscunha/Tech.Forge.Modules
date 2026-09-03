import { describe, expect, it } from 'vitest'
import { formatBytes, formatPercent } from './format'

describe('formatBytes', () => {
  it('formats bytes without decimals', () => {
    expect(formatBytes(512)).toBe('512 B')
  })

  it('formats gigabytes with one decimal', () => {
    expect(formatBytes(8_467_652_608)).toBe('7.9 GB')
  })

  it('formats zero as 0 B', () => {
    expect(formatBytes(0)).toBe('0 B')
  })

  it('caps at TB for very large values', () => {
    expect(formatBytes(5 * 1024 ** 5)).toBe('5120.0 TB')
  })
})

describe('formatPercent', () => {
  it('rounds to the nearest integer', () => {
    expect(formatPercent(12.6)).toBe('13%')
    expect(formatPercent(12.4)).toBe('12%')
  })
})
