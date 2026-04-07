import { act, renderHook } from '@testing-library/react-native';
import { useBidding } from './useBidding';

describe('useBidding', () => {
  it('initializes current bid and min bid', () => {
    const { result } = renderHook(() => useBidding(100));

    expect(result.current.currentBid).toBe(100);
    expect(result.current.minBid).toBe(101);
  });

  it('updates current bid when a higher bid is submitted', () => {
    const { result } = renderHook(() => useBidding(100));

    act(() => {
      result.current.submitBid(120);
    });

    expect(result.current.currentBid).toBe(120);
    expect(result.current.minBid).toBe(121);
  });

  it('ignores bid that is not higher than current bid', () => {
    const { result } = renderHook(() => useBidding(100));

    act(() => {
      result.current.submitBid(80);
    });

    expect(result.current.currentBid).toBe(100);
    expect(result.current.minBid).toBe(101);
  });
});
