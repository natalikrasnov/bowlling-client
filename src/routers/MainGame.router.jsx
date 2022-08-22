import React, {useEffect} from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

const MainGameRouter = ({path, children}) => {
    const location = useLocation()
    const { userName } = location.state ? location.state :{}

    const navigate = useNavigate()

    useEffect(() => { 
        if (!userName) {
            alert("please enter your name to start this game")   
           return navigate(path)
        }
    }, [])

    return children ? children : <Outlet />
};

export default MainGameRouter;