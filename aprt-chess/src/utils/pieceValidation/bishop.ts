import { PieceColor } from "../validate";
import { leftDiagonalCheck } from "../pathChecks/leftDiagonalCheck";
import { rightDiagonalCheck } from "../pathChecks/rightDiagonalCheck";

export function validateBishopMove(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  boardState: string[][],
): boolean {
  const rightDiaCheck = rightDiagonalCheck(fromX, fromY, toX, toY, boardState);
  const leftDiaCheck = leftDiagonalCheck(fromX, fromY, toX, toY, boardState);
  return rightDiaCheck || leftDiaCheck;
}
