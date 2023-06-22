'use client'

import { Property } from 'csstype'

function Tallies({
  number = 0,
  textColor,
  textSize,
  font,
  lineDecoration = 'line-through',
  lineStyle,
  lineColor,
  className,
}: {
  number: number
  textColor?: any
  textSize?: any
  font?: any
  lineDecoration?: Property.TextDecorationLine
  lineStyle?: Property.TextDecorationStyle
  lineColor?: Property.TextDecorationColor
  className?: string
}) {
  let fives = new Array(Math.floor(number / 5)).fill('')
  let ones = new Array(Math.floor(number % 5)).fill('|').join('')

  return (
    <>
      <div
        style={{ color: textColor, fontSize: textSize, fontFamily: font }}
        className={className}
      >
        {fives.map(({ index }) => (
          <>
            <span
              key={`tally-fives-${index}`}
              style={{
                textDecorationLine: lineDecoration,
                textDecorationStyle: lineStyle,
                textDecorationColor: lineColor,
              }}
            >
              ||||
            </span>{' '}
          </>
        ))}
        <span>{ones}</span>
      </div>
    </>
  )
}

export default Tallies
