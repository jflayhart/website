const styles = (props: any): any => ({
  display: 'flex',
  flexDirection: props.centerVertical ? 'column' : 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: props.centerVertical ? '100vh' : '100%',
})

const GridLayout = (props: any) =>
  <div style={styles(props)}>
    {props.children}
  </div>

export default GridLayout
