/**
 * This code is extracted from here https://www.joshwcomeau.com/react/dark-mode/
 * I deleted the parts I'm not using though, since I just want the user theme.
 */
import React from 'react'

type Props = {
  children: React.ReactNode
}

export const ThemeContext = React.createContext<
  | {
      colorMode: string
      setColorMode: (value: 'light' | 'dark') => void
    }
  | undefined
>(undefined)

function getInitialColorMode() {
  const persistedColorPreference = window.localStorage.getItem('color-mode')
  const hasPersistedPreference = typeof persistedColorPreference === 'string'

  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const hasMediaQueryPreference = typeof mql.matches === 'boolean'

  if (hasPersistedPreference) {
    return persistedColorPreference
  }

  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light'
  }
  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return 'light'
}

export const ThemeProvider = ({ children }: Props) => {
  const [colorMode, rawSetColorMode] = React.useState(getInitialColorMode())

  const setColorMode = (value: 'dark' | 'light') => {
    rawSetColorMode(value)
    // Persist it on update
    window.localStorage.setItem('color-mode', value)
  }

  React.useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const toggle = (e: MediaQueryListEvent) => {
      if (e.matches) {
        rawSetColorMode('dark')
      } else {
        rawSetColorMode('light')
      }
    }
    mql.addEventListener('change', toggle)
    return () => mql.removeEventListener('change', toggle)
  }, [])

  return <ThemeContext.Provider value={{ colorMode, setColorMode }}>{children}</ThemeContext.Provider>
}
