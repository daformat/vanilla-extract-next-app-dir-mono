import {
  defineProperties,
  createSprinkles
} from "@vanilla-extract/sprinkles";

export const spacing = {
  s1: '2px',
  s2: '4px',
  s3: '8px',
  s4: '12px',
  s5: '16px',
  s6: '24px',
  s7: '32px',
  s8: '40px',
  s9: '48px',
  s10: '64px',
} as const;

export const borderRadius = {
  xsmall: '2px',
  small: '4px',
  medium: '8px',
  large: '16px',
  full: '1000px',
} as const;

const lineHeight = {
  display: {
    small: '40px',
    medium: '48px',
  },
  heading: {
    small: '24px',
    medium: '28px',
    large: '32px',
  },
  label: {
    tag: '10px',
    caption: '12px',
    xsmall: '16px',
    small: '16px',
    medium: '16px',
    large: '20px',
    xlarge: '24px',
  },
  body: {
    xxsmall: '10px',
    xsmall: '12px',
    small: '16px',
    medium: '20px',
    large: '24px',
  },
} as const;

const fontSize = {
  body: {
    xxsmall: '8px',
    xsmall: '10px',
    small: '12px',
    medium: '14px',
    large: '16px',
  },
  heading: {
    small: '18px',
    medium: '20px',
    large: '24px',
  },
  display: {
    small: '32px',
    medium: '40px',
  },
  label: {
    tag: '10px',
    caption: '12px',
    xsmall: '12px',
    small: '14px',
    medium: '16px',
    large: '20px',
    xlarge: '24px',
  },
} as const;

export const breakpoints = {
  tablet: 740,
  desktop: 992,
  wide: 1200,
} as const;

export const mediaQueries = {
  mobile: {},
  tablet: {
    '@media': `screen and (min-width: ${breakpoints.tablet}px)`,
  },
  desktop: {
    '@media': `screen and (min-width: ${breakpoints.desktop}px)`,
  },
  wide: { '@media': `screen and (min-width: ${breakpoints.wide}px)` },
} as const;


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
    padding: spacing,
    margin: spacing,
    paddingTop: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    marginTop: spacing,
    marginBottom: spacing,
    marginLeft: spacing,
    marginRight: spacing,
    borderRadius: borderRadius,
    overflowY: ['hidden', 'visible', 'scroll', 'auto'],
    overflowX: ['hidden', 'visible', 'scroll', 'auto'],
    overflow: ['hidden', 'visible', 'scroll', 'auto'],
    textAlign: ['left', 'center', 'right', 'justify'],
  },
  shorthands: {
    paddingVertical: ['paddingTop', 'paddingBottom'],
    paddingHorizontal: ['paddingLeft', 'paddingRight'],
    marginVertical: ['marginTop', 'marginBottom'],
    marginHorizontal: ['marginLeft', 'marginRight'],
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

export const sprinkles = createSprinkles(colorProperties);