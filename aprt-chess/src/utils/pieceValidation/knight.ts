import { PieceColor } from "../validate";
import { calcDist, calcSlope } from "../mathFunctions";

export function validateKnightMove(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
): boolean {
  const slope = Math.abs(calcSlope(fromX, fromY, toX, toY));
  const distance = Math.floor(calcDist(fromX, fromY, toX, toY));

  if ((slope === 0.5 || slope === 2) && distance === 2) {
    return true;
  } else return false;
}
