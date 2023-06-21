'use client'

import { Property } from 'csstype'
import TextDecorationStyle = Property.TextDecorationStyle

function Tallies({
  number = 0,
  textColor,
  textSize,
  font,
  lineStyle,
  lineColor,
  className,
}: {
  number: number
  textColor?: any
  textSize?: any
  font?: any
  lineStyle?: TextDecorationStyle
  lineColor?: any
  className?: string
}) {
  let fives = new Array(Math.floor(number / 5)).fill('|||| ').join(' ')
  let ones = new Array(Math.floor(number % 5)).fill('|').join('')

  // TODO: split up fives
  return (
    <>
      <div
        style={{ color: textColor, fontSize: textSize, fontFamily: font }}
        className={className}
      >
        <span
          style={{
            textDecorationLine: 'line-through',
            textDecorationStyle: lineStyle,
            textDecorationColor: lineColor,
          }}
        >
          {fives}
        </span>
        <span>{ones}</span>
      </div>
    </>
  )
}

export default Tallies
