import { act, renderHook } from '@testing-library/react-native';
import { useArtworkTimer } from './useArtworkTimer';

describe('useArtworkTimer', () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  it('initializes at 60 seconds', () => {
    const { result } = renderHook(() => useArtworkTimer(jest.fn()));
    expect(result.current.timeRemaining).toBe(60);
  });

  it('decrements by 1 each second', () => {
    const { result } = renderHook(() => useArtworkTimer(jest.fn()));

    act(() => { jest.advanceTimersByTime(1000); });
    expect(result.current.timeRemaining).toBe(59);

    act(() => { jest.advanceTimersByTime(4000); });
    expect(result.current.timeRemaining).toBe(55);
  });

  it('reset restores timeRemaining to 60', () => {
    const { result } = renderHook(() => useArtworkTimer(jest.fn()));

    act(() => { jest.advanceTimersByTime(10000); });
    expect(result.current.timeRemaining).toBe(50);

    act(() => { result.current.reset(); });
    expect(result.current.timeRemaining).toBe(60);
  });

  it('calls onRotate and resets to 60 after 60 seconds', () => {
    const onRotate = jest.fn();
    const { result } = renderHook(() => useArtworkTimer(onRotate));

    act(() => { jest.advanceTimersByTime(60000); });

    expect(onRotate).toHaveBeenCalledTimes(1);
    expect(result.current.timeRemaining).toBe(60);
  });

  it('does not call onRotate before 60 seconds elapse', () => {
    const onRotate = jest.fn();
    renderHook(() => useArtworkTimer(onRotate));

    act(() => { jest.advanceTimersByTime(59000); });
    expect(onRotate).not.toHaveBeenCalled();
  });
});
