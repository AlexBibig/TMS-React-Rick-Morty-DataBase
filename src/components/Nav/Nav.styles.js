import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
    Nav: {
        '& a:not(:last-child)': {
            marginRight: '10px',
        },
    }
});

export default styles;