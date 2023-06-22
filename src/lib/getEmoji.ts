export function getEmoji(
  numberOfTokes: number,
  pastNumberOfTokes: number = 0
): string {
  switch (true) {
    case numberOfTokes > pastNumberOfTokes * 2:
      return '☠️'
    case numberOfTokes > pastNumberOfTokes:
      return '🤬'
    case numberOfTokes === pastNumberOfTokes:
      return '🥺'
    case numberOfTokes > Math.round(pastNumberOfTokes / 2) - 2 &&
      numberOfTokes < Math.round(pastNumberOfTokes / 2) + 2:
      return '🤔'
    case numberOfTokes < pastNumberOfTokes:
    default:
      return '🙂'
  }
}
