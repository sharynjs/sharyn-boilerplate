// @flow

const globalStyles = ({ palette }: Object) => ({
  '@global': {
    html: {
      height: '100%',
      background: '#f2f2f2',
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      boxSizing: 'border-box',
    },
    '*, *:before, *:after': { boxSizing: 'inherit' },
    body: { height: '100%', margin: 0 },
    '#app': { height: '100%', display: 'flex', flexDirection: 'column' },
    a: { color: palette.primary.main, textDecoration: 'none' },
  },
})

export default globalStyles
