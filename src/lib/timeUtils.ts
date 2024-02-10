export const convertUTCTimeToLocal = (timeToConvert: string) => {
  const [hours, minutes, seconds] = timeToConvert.split(':')
  const currentDateTime = new Date()
  currentDateTime.setUTCHours(parseInt(hours))
  currentDateTime.setUTCMinutes(parseInt(minutes))
  currentDateTime.setUTCSeconds(parseInt(seconds))
  return currentDateTime
}

export const getUTCTimeString = (tokeTime?: Date) => {
  const currentDateTime = tokeTime || new Date()
  const utcHours = currentDateTime.getUTCHours()
  const utcMinutes = currentDateTime.getUTCMinutes()
  const utcSeconds = currentDateTime.getUTCSeconds()
  return `${utcHours}:${utcMinutes}:${utcSeconds}`
}

export const getUTCDateString = (tokeTime?: Date) => {
  const currentDateTime = tokeTime || new Date()
  const dateParts = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).formatToParts(currentDateTime)
  return `${dateParts[4].value}-${dateParts[0].value}-${dateParts[2].value}`
}

export const getLastMidnightTime = () => {
  let today = new Date()
  today.setHours(0, 0, 0, 0)
  return today.getTime() / 1000
}
