import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './store/store.ts'
import { store } from './store/store.ts'


createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
					<App />
			</PersistGate>
		</Provider>
	</StrictMode>,
)
