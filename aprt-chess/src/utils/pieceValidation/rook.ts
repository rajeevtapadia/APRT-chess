import { PieceColor } from "../validate";
import { horizontalPathCheck } from "../pathChecks/horizontalCheck";
import { verticalPathCheck } from "../pathChecks/verticalCheck";

export function validateRookMove(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  boardState: string[][],
): boolean {
  if (
    verticalPathCheck(fromX, fromY, toX, toY, boardState) ||
    horizontalPathCheck(fromX, fromY, toX, toY, boardState)
  ) {
    return true;
  } else {
    return false;
  }
}
