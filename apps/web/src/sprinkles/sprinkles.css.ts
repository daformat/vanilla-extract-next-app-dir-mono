import {
  defineProperties,
  createSprinkles
} from "@vanilla-extract/sprinkles";
import { borderRadius, mediaQueries, spacing } from "@/sprinkles/constants";

const responsiveProperties = defineProperties({
  conditions: mediaQueries,
  defaultCondition: 'mobile',
  responsiveArray: ['mobile', 'tablet', 'desktop'],
  properties: {
    display: ['none', 'flex', 'block', 'inline', 'inline-block'],
    flexDirection: ['row', 'column', 'column-reverse', 'row-reverse'],
    flex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    flexWrap: ['wrap', 'nowrap', 'wrap-reverse'],
    flexGrow: [0, 1],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    alignSelf: [
      'auto',
      'stretch',
      'center',
      'flex-start',
      'flex-end',
      'baseline',
      'initial',
      'inherit',
    ],

    gap: spacing,
    borderRadius: borderRadius,
  },
});

const colors = {
  none: "transparent",
  warning: "orange",
  error: "red",
};

const colorProperties = defineProperties({
  properties: {
    color: colors,
    backgroundColor: colors,
    borderColor: colors,
    outlineColor: colors,
    textDecorationColor: colors,
    textEmphasisColor: colors
  }
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);