import {recipe, RecipeVariants} from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    backgroundColor: 'grey'
  },
  variants: {
    color: {
      blue: {
        backgroundColor: "blue"
      },
      green: {
        backgroundColor: 'green'
      }
    }
  }
})

export type ButtonVariants = RecipeVariants<typeof button>