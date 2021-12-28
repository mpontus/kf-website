import { FabricTheme } from '@centrifuge/fabric'
import altairDark from '@centrifuge/fabric/src/theme/altairDark'
import { baseTheme } from '@centrifuge/fabric/src/theme/tokens/baseTheme'
import { brandAltair } from '@centrifuge/fabric/src/theme/tokens/brandAltair'
import { modeDark } from '@centrifuge/fabric/src/theme/tokens/modeDark'
// }

const theme: FabricTheme = {
  ...baseTheme,
  colors: {
    brand: '#4FF527',
    ...modeDark.colors,
  },
  shadows: {
    ...baseTheme.shadows,
  },
}

export default theme
