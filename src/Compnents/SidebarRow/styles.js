const styles = (theme) => ({
    sidebarrow: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        cursor: 'pointer',
        width: '190px',
        height:'40px',
        backgroundColor: theme.palette.type === 'dark' ? '#212121' : '#FFF',
        '& h2': {
            flex: '1',
            fontSize: '14px',
            fontWeight: '500',
            color: theme.palette.type === 'dark' ? '#FFF' : 'rgb(3, 3, 3)',
            fontFamily: 'Roboto',
        },
        '&:hover': {
            backgroundColor: theme.palette.type === 'dark' ? '#383838' : 'rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
        }
    },
    sidebarrowIcon: {
        color: theme.palette.type === 'dark' ? '#909090' : '#606060',
        marginRight: '24px',
        fontSize: '24px',
    }
});

export default styles
