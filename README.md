# zen-styled

Style props inspired by Emmet css shortcuts and styled-system.

## Usage

```jsx
import styled from 'styled-components';
import { margin, padding, color, pseudo } from '@berikiushi/zen-styled';

const Box = styled.div`
  ${margin}
  ${padding}
  ${color}
  ${pseudo}
`;

export default Box;
```

Each style function create set of component props.

```jsx
<Box mb="16px" />
// margin-bottom: 16px;

<Box p="8px 16px" />
// padding: 8px 16px;

<Box c="#f49" />
// color: #f49;

<Box bgc="#f49" />
// background-color: #f49;

<Box _hover={{ backgroundColor: '#f49' }} />
// &:hover { background-color: #f49; }
```

## Abbreviations

```jsx
// layout
import { layout } from '@berikiushi/zen-styled';
```

| prop abbreviation | css property   |
| ----------------- | -------------- |
| d                 | display        |
| v                 | visibility     |
| fl                | float          |
| va                | vertical-align |
| ov                | overflow       |
| ovx               | overflow-x     |
| ovy               | overflow-y     |
| ovs               | overflow-style |

```jsx
// flexbox
import { flex } from '@berikiushi/zen-styled';
```

| prop abbreviation | css property    |
| ----------------- | --------------- |
| fxd               | flex-direction  |
| fxw               | flex-wrap       |
| jc                | justify-content |
| ali               | align-items     |
| alc               | align-content   |
| ord               | order           |
| fxg               | flex-grow       |
| fxsh              | flex-shrink     |
| fxb               | flex-basis      |
| als               | align-self      |

```jsx
// positioning
import { position } from '@berikiushi/zen-styled';
```

| prop abbreviation | css property |
| ----------------- | ------------ |
| pos               | position     |
| t                 | top          |
| r                 | right        |
| b                 | bottom       |
| l                 | left         |
| z                 | z-index      |

```jsx
// sizing
import { size } from '@berikiushi/zen-styled';
```

| prop abbreviation | css property |
| ----------------- | ------------ |
| bxz               | box-sizing   |
| w                 | width        |
| h                 | height       |
| maw               | max-width    |
| mah               | max-height   |
| miw               | min-width    |
| mih               | min-height   |

```jsx
// margins
import { margin } from '@berikiushi/zen-styled';
```

| prop abbreviation | css property  |
| ----------------- | ------------- |
| m                 | margin        |
| mt                | margin-top    |
| mr                | margin-right  |
| mb                | margin-bottom |
| ml                | margin-left   |

```jsx
// paddings
import { padding } from '@berikiushi/zen-styled';
```

| prop abbreviation | css property   |
| ----------------- | -------------- |
| p                 | padding        |
| pt                | padding-top    |
| pr                | padding-right  |
| pb                | padding-bottom |
| pl                | padding-left   |

```jsx
// colors
import { color } from '@berikiushi/zen-styled';
```

| prop abbreviation | css property     |
| ----------------- | ---------------- |
| c                 | color            |
| bgc               | background-color |
| op                | opacity          |

```jsx
// background
import { background } from '@berikiushi/zen-styled';
```

| prop abbreviation | css property          |
| ----------------- | --------------------- |
| bgi               | background-image      |
| bgp               | background-position   |
| bgpx              | background-position-x |
| bgpy              | background-position-y |
| bgr               | background-repeat     |
| bgsz              | background-size       |
| bga               | background-attachment |
| bgo               | background-origin     |

```jsx
// typography
import { font } from '@berikiushi/zen-styled';
```

| prop abbreviation | css property    |
| ----------------- | --------------- |
| ff                | font-family     |
| fz                | font-size       |
| fw                | font-weight     |
| fs                | font-style      |
| fv                | font-variant    |
| lh                | line-height     |
| lts               | letter-spacing  |
| ta                | text-align      |
| td                | text-decoration |
| ti                | text-indent     |
| tt                | text-transform  |
| tov               | text-overflow   |
| whs               | white-space     |
| wow               | word-wrap       |

```jsx
// borders
import { border } from '@berikiushi/zen-styled';
```

| prop abbreviation | css property  |
| ----------------- | ------------- |
| bd                | border        |
| bdw               | border-width  |
| bds               | border-style  |
| bdc               | border-color  |
| bt                | border-top    |
| br                | border-right  |
| bb                | border-bottom |
| bl                | border-left   |
| bdr               | border-radius |

```jsx
// shadows
import { shadow } from '@berikiushi/zen-styled';
```

| prop abbreviation | css property |
| ----------------- | ------------ |
| bxsh              | boxShadow    |
| tsh               | textShadow   |

```jsx
// list style
import { list } from '@berikiushi/zen-styled';
```

| prop abbreviation | css property        |
| ----------------- | ------------------- |
| lis               | list-style          |
| lisp              | list-style-position |
| list              | listStyle-type      |
| lisi              | listStyle-image     |

```jsx
// animations
import { animation } from '@berikiushi/zen-styled';
```

| prop abbreviation | css property              |
| ----------------- | ------------------------- |
| anim              | animation                 |
| animdel           | animation-delay           |
| animdir           | animation-direction       |
| animdur           | animation-duration        |
| animfm            | animation-fill-mode       |
| animic            | animation-iteration-count |
| animn             | animation-name            |
| animps            | animation-play-state      |
| animtf            | animation-timing-function |

```jsx
// transform
import { transform } from '@berikiushi/zen-styled';
```

| prop abbreviation | css property     |
| ----------------- | ---------------- |
| trf               | transform        |
| trfo              | transform-origin |
| trfs              | transform-style  |

```jsx
// transitions
import { transition } from '@berikiushi/zen-styled';
```

| prop abbreviation | css property               |
| ----------------- | -------------------------- |
| trs               | transition                 |
| trsde             | transition-delay           |
| trsdu             | transition-duration        |
| trsp              | transition-property        |
| trstf             | transition-timing-function |

```jsx
// columns
import { columns } from '@berikiushi/zen-styled';
```

| prop abbreviation | css property |
| ----------------- | ------------ |
| colm              | columns      |
| colmc             | column-count |
| colmf             | column-fill  |
| colmg             | column-gap   |
| colmr             | column-rule  |
| colms             | column-span  |
| colmw             | column-width |

```jsx
// interactions
import { interaction } from '@berikiushi/zen-styled';
```

| prop abbreviation | css property   |
| ----------------- | -------------- |
| cur               | cursor         |
| ol                | outline        |
| us                | user-select    |
| pi                | pointer-events |

```jsx
// pseudo classes/elements
import { pseudo } from '@berikiushi/zen-styled';
```

| prop abbreviation | css property         |
| ----------------- | -------------------- |
| \_hover           | :hover               |
| \_focus           | :focus               |
| \_active          | :active              |
| \_visited         | :visited             |
| \_disabled        | :disabled            |
| \_checked         | :checked             |
| \_empty           | :empty               |
| \_readOnly        | :read-only           |
| \_required        | :required            |
| \_first           | :first-of-type       |
| \_last            | :last-of-type        |
| \_notFirst        | :not(:first-of-type) |
| \_notLast         | :not(:last-of-type)  |
| \_even            | :nth-of-type(even)   |
| \_odd             | :nth-of-type(odd)    |
| \_before          | ::before             |
| \_after           | ::after              |
| \_firstLetter     | ::first-letter       |
| \_firstLine       | ::first-line         |
| \_selection       | ::selection          |
| \_placeholder     | ::placeholder        |
