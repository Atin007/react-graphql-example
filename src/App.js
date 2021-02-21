import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { JOBS_API } from './constants';
import Home from './pages/Home';

const client = new ApolloClient({
	uri: JOBS_API,
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<Home />
			</div>
		</ApolloProvider>
	);
}

export default App;
