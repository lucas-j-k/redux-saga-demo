//Define a default theme with shared values, then a dark and light version.

const defaultThemeRules = {
    spacing_md: "1rem",
    spacing_sm: "0.5rem",
    spacing_xs: "0.25rem",
    spacing_lg: "2rem",
    spacing_xl: "4rem",
    font_md: "1rem",
    font_lg: "1.2rem",
    font_xl: "1.8rem",
    font_sm: "0.8rem",
    button_rounding: "0.25rem",
    typeface_main: "'Questrial', sans-serif",
    box_shadow: "1px 1px 6px 0px rgba(0,0,0,0.6)",
    black_overlay: "rgba(0,0,0,0.9)",
    letter_spacing: "0.1rem",
    white: 'aliceblue',
    black: 'black',
    button_bg: "darkslategray",
    button_color: "aliceblue",
    button_bg_hover: "steelblue"
}

const darkThemeRules = {
    primary_med: "slategray",
    primary_light: "lightgray",
    primary_dark: "darkslategray",
    default_text_color: "aliceblue",
    svg_bg_color: "#191c1c",
    svg_bg_image: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%23111616' fill-opacity='0.36' fill-rule='evenodd'/%3E%3C/svg%3E")`
}

const lightThemeRules = {
    primary_med: "lightgray",
    primary_light: "whitesmoke",
    primary_dark: "darkslategray",
    default_text_color: "darkslategray",
    svg_bg_color: "#d1d8db;",
    svg_bg_image: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%23e5edf0' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
}

export const darkTheme = {...defaultThemeRules, ...darkThemeRules};

export const lightTheme = {...defaultThemeRules, ...lightThemeRules};