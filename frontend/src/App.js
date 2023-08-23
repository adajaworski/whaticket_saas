import React, { useState, useEffect } from "react";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";

import GlobalStyle from "./styles/global";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { ptBR } from "@material-ui/core/locale";

const App = () => {
	const [locale, setLocale] = useState();

  const theme = createTheme(
    {
      scrollbarStyles: {
        '&::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          boxShadow: 'inset 0 0 6px rgba(0, 0, 255, 0.5)',
          backgroundColor: '#32CD32',
        },
      },
      palette: {
        primary: { main: "#0000FF" },
        third: { main: "#32CD32" }
      },

      barraSuperior: {
        primary: { main: "linear-gradient(to right, #0000FF, #32CD32, #0000FF)" },
        secondary: { main: "#FFFFFF" },
      },

      barraLateral: {
        primary: { main: "#000000" },
      },

      icons: {
        primary: { main: "#32CD32" }
      },
      textColorMenu: {
        primary: { main: "#FFFFFF" },
        secondary: { main: "#32CD32" }
      
      },    },
    locale
  );

	useEffect(() => {
		const i18nlocale = localStorage.getItem("i18nextLng");
		const browserLocale =
			i18nlocale.substring(0, 2) + i18nlocale.substring(3, 5);

		if (browserLocale === "ptBR") {
			setLocale(ptBR);
		}
	}, []);

	return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Routes />
    </ThemeProvider>
  )
};

export default App;
