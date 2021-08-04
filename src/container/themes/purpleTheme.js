/**
 * App Purple Theme
 */
import { createTheme } from '@material-ui/core/styles';
import AppConfig from '../../constants/AppConfig';

const theme = createTheme({
    palette: {
        primary: {
            main: AppConfig.themeColors.purple
        },
        secondary: {
            main: AppConfig.themeColors.primary
        }
    }
});

export default theme;