import {
  defineProperties,
  createSprinkles
} from '@vanilla-extract/sprinkles';

const colors = {
  none: 'transparent',
  warning: 'orange',
  error: 'red',
};

const colorProperties = defineProperties({properties: {color: colors}})

export const sprinkles = createSprinkles(colorProperties)