import { GEM_COLORS } from "../data/constants";
export const GEM_ORDER = [
  "blue",
  "white",
  "green",
  "black",
  "red",
  "gold",
  "pearl",
];

export const playerInventory = (currentInventory, clickedColor) => {
  if (clickedColor === GEM_COLORS.NONE) {
    return currentInventory;
  }

  const gemIndex = GEM_ORDER.indexOf(clickedColor);
  if (gemIndex === -1) {
    return currentInventory;
  }

  const updatedInventory = [...currentInventory];
  updatedInventory[gemIndex] += 1;

  return updatedInventory;
};

//write a function to check for the amount of gems to be no more than 10
