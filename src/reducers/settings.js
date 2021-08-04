// app config
import AppConfig from "../constants/AppConfig";

/**
 * Initial app settings
 */
const INIT_STATE = {
    navCollapsed: AppConfig.navCollapsed,
    darkMode: AppConfig.darkMode,
    boxLayout: AppConfig.boxLayout,
    rtlLayout: AppConfig.rtlLayout,
    miniSidebar: AppConfig.miniSidebar,
    searchFormOpen: false, // search form by default false
    startUserTour: false,
    isDarkSidenav: AppConfig.isDarkSidenav,
    themes: [
        {
            id: 1,
            name: 'primary'
        },
        {
            id: 2,
            name: 'secondary'
        },
        {
            id: 3,
            name: 'warning'
        },
        {
            id: 4,
            name: 'info'
        },
        {
            id: 5,
            name: 'danger'
        },
        {
            id: 6,
            name: 'success'
        }
    ],
    activeTheme: {
        id: 1,
        name: 'primary'
    },
    // sidebar background image
    sidebarBackgroundImages: [
        require('../assets/img/sidebar-1.jpg'),
        require('../assets/img/sidebar-2.jpg'),
        require('../assets/img/sidebar-3.jpg'),
        require('../assets/img/sidebar-4.jpg'),
    ],
    enableSidebarBackgroundImage: AppConfig.enableSidebarBackgroundImage, // default enable sidebar background
    selectedSidebarImage: AppConfig.sidebarImage, // default sidebar background image
    locale: AppConfig.locale,
    languages: [
        {
            languageId: 'english',
            locale: 'en',
            name: 'English',
            icon: 'en',
        },
        {
            languageId: 'chinese',
            locale: 'zh',
            name: 'Chinese',
            icon: 'zh',
        },
        {
            languageId: 'russian',
            locale: 'ru',
            name: 'Russian',
            icon: 'ru',
        },
        {
            languageId: 'hebrew',
            locale: 'he',
            name: 'Hebrew',
            icon: 'he',
        },
        {
            languageId: 'french',
            locale: 'fr',
            name: 'French',
            icon: 'fr',
        },
        {
            languageId: 'saudi-arabia',
            locale: 'ar',
            name: 'Arabic',
            icon: 'ar',
        },
        {
            languageId: 'german',
            locale: 'de',
            name: 'German',
            icon: 'de',
        },
        {
            languageId: 'spanish',
            locale: 'es',
            name: 'Spanish',
            icon: 'es',
        },
        {
            languageId: 'japanese',
            locale: 'ja',
            name: 'Japanese',
            icon: 'ja',
        },
        {
            languageId: 'korean',
            locale: 'ko',
            name: 'Korean',
            icon: 'ko',
        },
        {
            languageId: 'italian',
            locale: 'it',
            name: 'Italian',
            icon: 'it',
        },
        {
            languageId: 'hungarian',
            locale: 'hu',
            name: 'Hungarian',
            icon: 'hu',
        }
    ],
    agencyLayoutBgColors: [
        {
            id: 1,
            class: 'bg-grdnt-violet',
            active: true
        },
        {
            id: 2,
            class: 'bg-grdnt-youtube'
        },
        {
            id: 3,
            class: 'bg-grdnt-primary-danger',
        },
        {
            id: 4,
            class: 'bg-grdnt-purple-danger'
        },
        {
            id: 5,
            class: 'bg-grdnt-purple-dark'
        }
    ]
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        default:
            return { ...state };
    }
}