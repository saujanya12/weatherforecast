import { AppBar, Paper, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
    return (
        <Paper>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' > HEADING </Typography>

                </Toolbar>
            </AppBar>
        </Paper>
    )
}

export default Header