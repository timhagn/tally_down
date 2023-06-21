function Tallies({
  number = 0,
  textColor,
  textSize,
  font,
  lineStyle,
  lineColor,
}: {
  number: number
  textColor?: any
  textSize?: any
  font?: any
  lineStyle?: any
  lineColor?: any
}) {
  let fives = new Array(Math.floor(number / 5)).fill('|||| ').join('')
  let ones = new Array(Math.floor(number % 5)).fill('|').join('')

  return (
    <>
      <div style={{ color: textColor, fontSize: textSize, fontFamily: font }}>
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
