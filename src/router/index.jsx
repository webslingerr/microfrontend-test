import Page from '../Page';
import { observer } from 'mobx-react-lite';
import { Navigate, Route, Routes } from 'react-router-dom';

const Router = () => {

	return <Routes>
		<Route path='/' element={<Page />} />
		<Route path='*' element={<Navigate to="/" />} />
	</Routes>

};

export default observer(Router);
