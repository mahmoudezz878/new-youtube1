const styles = (theme) => ({
    sidebare: {
        width: '220px',
        backgroundColor: theme.palette.type === 'dark' ? '#212121' : '#FFF',
        '& hr': {
            height: '1px',
            border: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
        '& a': {
            textDecoration: 'none',
        }
    },
    hidesidebar: {
        display: 'none',
    }
})

export default styles
