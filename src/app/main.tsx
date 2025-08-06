import { createRoot } from 'react-dom/client';
import './index.css';
import ThemeProvider from '../providers/theme-provider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../routes';
import CreateCharacterPage from '../routes/photo/create-character';
import PhotoHomePage from '../routes/photo';
import PersonalizationPage from '../routes/photo/personalization';
import UpgradePage from '../routes/photo/upgrade';
import FormatPage from '../routes/photo/upgrade/format';
import ImprovePhotoPage from '../routes/photo/upgrade/improve';
import DeleteObjectPage from '../routes/photo/upgrade/delete-object';
import ChangeObjectPage from '../routes/photo/upgrade/change-object';
import ProfilePage from '../routes/profile';
import BalancePage from '../routes/balance';
import HelpPage from '../routes/help';

export const ROUTES = {
	home: '/',

	photo_home: '/photo',
	photo_create_character: '/photo/create_character',
	profile: '/profile',
	balance: '/balance',
	help: '/help',

	photo_personalization: '/photo/personalization',
	photo_upgrade: '/photo/upgrade',
	photo_format: '/photo/upgrade/format',
	photo_improve: '/photo/upgrade/improve',
	photo_delete_object: '/photo/upgrade/delete_object',
	photo_change_object: '/photo/upgrade/change_object',
};

const router = createBrowserRouter(
	[
		{
			path: ROUTES.home,
			element: <HomePage />,
		},
		{
			path: ROUTES.photo_home,
			element: <PhotoHomePage />,
		},
		{
			path: ROUTES.photo_create_character,
			element: <CreateCharacterPage />,
		},
		{
			path: ROUTES.photo_personalization,
			element: <PersonalizationPage />,
		},
		{
			path: ROUTES.photo_upgrade,
			element: <UpgradePage />,
		},
		{
			path: ROUTES.photo_format,
			element: <FormatPage />,
		},
		{
			path: ROUTES.photo_improve,
			element: <ImprovePhotoPage />,
		},
		{
			path: ROUTES.photo_delete_object,
			element: <DeleteObjectPage />,
		},
		{
			path: ROUTES.photo_change_object,
			element: <ChangeObjectPage />,
		},
		{
			path: ROUTES.profile,
			element: <ProfilePage />,
		},
		{
			path: ROUTES.balance,
			element: <BalancePage />,
		},
		{
			path: ROUTES.help,
			element: <HelpPage />,
		},
	],
	{ future: { v7_fetcherPersist: true, v7_normalizeFormMethod: true, v7_partialHydration: true, v7_relativeSplatPath: true, v7_skipActionErrorRevalidation: true } }
);

createRoot(document.getElementById('root')!).render(
	<ThemeProvider>
		<RouterProvider router={router} />
	</ThemeProvider>
);
