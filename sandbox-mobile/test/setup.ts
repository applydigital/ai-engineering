jest.mock('expo-image', () => {
  const React = require('react');
  const { Image } = require('react-native');

  return {
    Image: ({ source, ...props }: { source: number; [key: string]: unknown }) =>
      React.createElement(Image, { source, ...props }),
  };
});
