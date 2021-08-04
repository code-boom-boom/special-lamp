/**
 * App Info Theme
 */
import { createTheme } from '@material-ui/core/styles';
import AppConfig from '../../constants/AppConfig';

const theme = createTheme({
    palette: {
        primary: {
            main: AppConfig.themeColors.info
        },
        secondary: {
            main: AppConfig.themeColors.primary
        }
    }
});

export default theme;