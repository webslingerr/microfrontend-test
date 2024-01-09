import { ChakraProvider, createStandaloneToast } from '@chakra-ui/react';
import './scss/index.scss';
import theme from './theme';
import queryClient from './services/queryClient';
import { QueryClientProvider } from 'react-query';
import PreloaderProvider from './providers/PreloaderProvider';
import Page from './Page';
const { ToastContainer, toast } = createStandaloneToast();

function App() {
	return (
		<>
			<div className="App">
				<PreloaderProvider />
				<ChakraProvider theme={theme}>
					<QueryClientProvider client={queryClient}>
						<Page />
					</QueryClientProvider>
				</ChakraProvider>
			</div>
			<ToastContainer />
		</>
	);
}

export const standaloneToast = toast;

export default App;
