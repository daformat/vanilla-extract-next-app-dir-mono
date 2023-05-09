import {recipe} from "@vanilla-extract/recipes";

export const recipeCss = recipe({
  base: {backgroundColor: 'red'},
  variants: {color: {blue: {backgroundColor: "blue"}, green: {backgroundColor: 'green'}}}
})