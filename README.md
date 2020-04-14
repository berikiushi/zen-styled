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
