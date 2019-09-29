export const tryParseJson = (str: string, returnOnFailure: boolean = false) => {
  try {
    const parsed = JSON.parse(str)
    if (typeof parsed !== 'object') return str
    return parsed
  } catch (e) {
    if (returnOnFailure) return str
    return null
  }
}
