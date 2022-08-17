import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';

const MainGameRouter = ({ component: Component, ...rest }) => {

    return (
        <Route
            { ...rest }
            element={(props) => (
                console.log("MainGameRouter props", props) &&
                !!props.name ?
                     <Navigate replace to='/welcome' />:
                    <element { ...props } />
            ) }
        />);
};

export default MainGameRouter;