declare module '*.svg' {
  const content: string
  export default content
}
declare module '@styled-system/css' {
  export default any
}
declare module '@rebass/preset' {
  import { RequiredTheme } from 'styled-system'
  declare const preset: RequiredTheme
  export default preset
}
