import { horizontalPathCheck } from "../pathChecks/horizontalCheck";
import { leftDiagonalCheck } from "../pathChecks/leftDiagonalCheck";
import { rightDiagonalCheck } from "../pathChecks/rightDiagonalCheck";
import { verticalPathCheck } from "../pathChecks/verticalCheck";
import { PieceColor } from "../validate";

export function validateQueenMove(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  boardState: string[][],
): boolean {
  const verticalCheck = verticalPathCheck(fromX, fromY, toX, toY, boardState);
  const horizontalCheck = horizontalPathCheck(fromX, fromY, toX, toY, boardState);
  const rightDiaCheck = rightDiagonalCheck(fromX, fromY, toX, toY, boardState);
  const leftDiaCheck = leftDiagonalCheck(fromX, fromY, toX, toY, boardState);
  return rightDiaCheck || leftDiaCheck || verticalCheck || horizontalCheck;
}
