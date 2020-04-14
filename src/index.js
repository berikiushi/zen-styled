import { css } from 'styled-components';

export const create = (args = {}) => {
  const result = {};
  Object.keys(args).forEach(key => {
    const values = args[key];
    result[values] = props => () => props[key];
  });
  return result;
};

export const createPseudo = props => {
  let result = {};
  for (let prop in props) {
    result = { ...result, ...{ [prop]: props[prop] } };
  }
  return result;
};

export const layout = create({
  d: 'display',
  v: 'visibility',
  fl: 'float',
  va: 'verticalAlign',
  ov: 'overflow',
  ovx: 'overflowX',
  ovy: 'overflowY',
  ovs: 'overflowStyle',
});

export const flex = create({
  fxd: 'flexDirection',
  fxw: 'flexWrap',
  jc: 'justifyContent',
  ali: 'alignItems',
  alc: 'alignContent',
  ord: 'order',
  fxg: 'flexGrow',
  fxsh: 'flexShrink',
  fxb: 'flexBasis',
  als: 'alignSelf',
});

export const position = create({
  pos: 'position',
  t: 'top',
  r: 'right',
  b: 'bottom',
  l: 'left',
  z: 'zIndex',
});

export const size = create({
  bxz: 'boxSizing',
  w: 'width',
  h: 'height',
  maw: 'maxWidth',
  mah: 'maxHeight',
  miw: 'minWidth',
  mih: 'minHeight',
});

export const margin = create({
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
});

export const padding = create({
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
});

export const color = create({
  c: 'color',
  bgc: 'backgroundColor',
  op: 'opacity',
});

export const background = create({
  bgi: 'backgroundImage',
  bgp: 'backgroundPosition',
  bgpx: 'backgroundPositionX',
  bgpy: 'backgroundPositionY',
  bgr: 'backgroundRepeat',
  bgsz: 'backgroundSize',
  bga: 'backgroundAttachment',
  bgo: 'backgroundOrigin',
});

export const font = create({
  ff: 'fontFamily',
  fz: 'fontSize',
  fw: 'fontWeight',
  fs: 'fontStyle',
  fv: 'fontVariant',
  lh: 'lineHeight',
  lts: 'letterSpacing',
  ta: 'textAlign',
  td: 'textDecoration',
  ti: 'textIndent',
  tt: 'textTransform',
  tov: 'textOverflow',
  whs: 'whiteSpace',
  wow: 'wordWrap',
});

export const border = create({
  bd: 'border',
  bdw: 'borderWidth',
  bds: 'borderStyle',
  bdc: 'borderColor',
  bt: 'borderTop',
  br: 'borderRight',
  bb: 'borderBottom',
  bl: 'borderLeft',
  bdr: 'borderRadius',
});

export const shadow = create({
  bxsh: 'boxShadow',
  tsh: 'textShadow',
});

export const list = create({
  lis: 'listStyle',
  lisp: 'listStylePosition',
  list: 'listStyleType',
  lisi: 'listStyleImage',
});

export const animation = create({
  anim: 'animation',
  animdel: 'animationDelay',
  animdir: 'animationDirection',
  animdur: 'animationDuration',
  animfm: 'animationFillMode',
  animic: 'animationIterationCount',
  animn: 'animationName',
  animps: 'animationPlayState',
  animtf: 'animationTimingFunction',
});

export const transform = create({
  trf: 'transform',
  trfo: 'transformOrigin',
  trfs: 'transformStyle',
});

export const transition = create({
  trs: 'transition',
  trsde: 'transitionDelay',
  trsdu: 'transitionDuration',
  trsp: 'transitionProperty',
  trstf: 'transitionTimingFunction',
});

export const columns = create({
  colm: 'columns',
  colmc: 'columnCount',
  colmf: 'columnFill',
  colmg: 'columnGap',
  colmr: 'columnRule',
  colms: 'columnSpan',
  colmw: 'columnWidth',
});

export const interaction = create({
  cur: 'cursor',
  ol: 'outline',
  us: 'userSelect',
  pi: 'pointerEvents',
});

export const pseudo = p =>
  css({
    '&:hover': createPseudo(p._hover),
    '&:focus': createPseudo(p._focus),
    '&:active': createPseudo(p._active),
    '&:visited': createPseudo(p._visited),
    '&:disabled': createPseudo(p._disabled),
    '&:checked': createPseudo(p._checked),
    '&:empty': createPseudo(p._empty),
    '&:read-only': createPseudo(p._readOnly),
    '&:required': createPseudo(p._required),
    '&:first-of-type': createPseudo(p._first),
    '&:last-of-type': createPseudo(p._last),
    '&:not(:first-of-type)': createPseudo(p._notFirst),
    '&:not(:last-of-type)': createPseudo(p._notLast),
    '&:nth-of-type(even)': createPseudo(p._even),
    '&:nth-of-type(odd)': createPseudo(p._odd),
    '&::before': createPseudo(p._before),
    '&::after': createPseudo(p._after),
    '&::first-letter': createPseudo(p._firstLetter),
    '&::first-line': createPseudo(p._firstLine),
    '&::selection': createPseudo(p._selection),
    '&::placeholder': createPseudo(p._placeholder),
  });
