import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './contexts/ModalContext';
import { SearchProvider } from './contexts/SearchContext';
import { SnackbarProvider } from './contexts/SnackBarContext';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
	palette: {
		primary: {
			main: `${process.env.REACT_APP_PRIMARY_COLOR}`,
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					borderRadius: '8px',
					height: `${process.env.REACT_APP_BUTTON_RADIUS}`,
				},
			},
		},
		MuiStepper: {
			styleOverrides: {
				root: {
					'& .MuiStepLabel-root .Mui-completed': {
						fill: `${process.env.REACT_APP_SVG_FINISH_COLOR}`,
					},
				},
			},
		},
	},
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<SearchProvider>
					<SnackbarProvider>
						<ModalProvider>
							<App />
						</ModalProvider>
					</SnackbarProvider>
				</SearchProvider>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
