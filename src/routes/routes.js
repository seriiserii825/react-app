import { createBrowserRouter } from 'react-router-dom';
import Root from './root';
import ErrorPage from '../pages/error-page';
import ContactPage from '../pages/contact-page';
import HooksPage from '../pages/hooks-page';
import Todos from '../components/todos/Todos';
import CounterPage from '../pages/page-counter';
import PageReducer from '../pages/PageReducer';
import GoodsPage from '../pages/GoodsPage';
import BirthdayReminderPage from '../pages/BirthdayReminderPage';
import HomePage from '../pages/HomePage';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/contacts',
				element: <ContactPage />,
			},
			{
				path: '/counter',
				element: <CounterPage />,
			},
			{
				path: '/hooks',
				element: <HooksPage />,
			},
			{
				path: '/reducer',
				element: <PageReducer />,
			},
			{
				path: '/goods',
				element: <GoodsPage />,
			},
			{
				path: '/todos',
				element: <Todos />,
			},
			{
				path: '/birthday-reminder',
				element: <BirthdayReminderPage />,
			},
		],
	},
]);

export default routes;
