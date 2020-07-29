import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
  Nav: {
    backgroundColor: 'red',
    '& a': {
      marginRight: '10px',
    },
  },
});

export default styles;
