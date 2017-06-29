import React from 'react';
import { Route } from 'react-router-dom';

import  * as Links  from '../../routes';

import SeasonList from './season_list/seasonList.jsx';
import AddSeasonForm from './forms/addSeasonForm.jsx';

const SeasonRoutes = props => (
	<div>
		<Route exact path={Links.SEASON_LIST} component={SeasonList} />
		<Route path = {Links.SEASON_ADD_FORM} component={AddSeasonForm}/>
	</div>	
);

export default SeasonRoutes;

