export const alignProps = ['order', 'justifyContent', 'alignItems', 'alignSelf', 'alignContent']
export const sizeProps = ['width', 'minWidth', 'maxWidth', 'height', 'minHeight', 'maxHeight']
export const flexProps = ['flex', 'flexGrow', 'flexShrink', 'flexBasis']
export const boxProps = [...alignProps, ...sizeProps]
export const layoutProps = [...boxProps, ...flexProps, 'column', 'row', 'wrap', 'inline', 'center', 'fit']

export const paddingProps = ['padding', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom']
export const marginProps = ['margin', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom']
export const borderProps = ['border', 'borderWidth', 'borderColor', 'borderStyle', 'borderLeft', 'borderRight', 'borderTop', 'borderBottom']
export const positionProps = ['top', 'left', 'bottom', 'right']
export const overflowProps = ['overflow', 'overflowX', 'overflowY', 'textOverflow', 'whiteSpace']

export const containerProps = ['boxSizing', ...paddingProps, ...marginProps, ...borderProps, ...positionProps, ...overflowProps]
export const borderShortcutProps = ['borderTop', 'borderWidth', 'borderRight', 'borderLeft']
