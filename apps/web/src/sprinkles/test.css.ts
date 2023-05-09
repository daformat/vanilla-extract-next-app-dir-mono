import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { mediaQueries, spacing } from "@/sprinkles/constants";

const testProperties = defineProperties({
  conditions: mediaQueries,
  defaultCondition: "mobile",
  responsiveArray: ["mobile", "tablet", "desktop"],
  properties: {
    padding: spacing,
    margin: spacing,
    paddingTop: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    marginTop: spacing,
    marginBottom: spacing,
    marginLeft: spacing,
    marginRight: spacing
  }
});

export const testSprinkles = createSprinkles(testProperties)