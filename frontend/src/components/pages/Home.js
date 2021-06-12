import React, { useContext, useEffect, Fragment } from 'react'
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import GridLayout from 'react-grid-layout';

import AuthContext from '../../context/auth/authContext';
import DashboardContext from '../../context/dashboard/dashboardContext';
import { compareSync } from 'bcryptjs';

 const Home = () => {
    const authContext = useContext(AuthContext);
    const dashboardContext = useContext(DashboardContext);

    const {isAuthenticated, user} = authContext
    const {layout, updateDash,loadDash, id} = dashboardContext;


    useEffect(()=>{
      if(localStorage.token){
          authContext.loadUser();
          loadDash();
      }


      //eslint-disable-next-line
  }, []);

    const onLayoutChange = (newLay) =>{
          loadDash();
      if(user != null){
          updateDash(id, newLay);
          loadDash();
      }
    }

  

     //const layouts = getLayoutsFromSomewhere();
    return (
    <Fragment>
      <GridLayout className="layout" layout={layout} cols={12}  onLayoutChange={onLayoutChange} rowHeight={150} heigth={500} width={1200} >
        <div key="weatherLarge">a</div>
        <div key="weatherSmall">b</div>
      </GridLayout>
    </Fragment>
    )
}

export default Home