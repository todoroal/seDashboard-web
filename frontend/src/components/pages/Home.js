import React, { useContext, useEffect } from 'react'

import AuthContext from '../../context/auth/authContext';

 const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(()=>{
        if(localStorage.token){
            authContext.loadUser();
        }

        //eslint-disable-next-line
    }, []);
    return (
        <div>
            <h1>Welcome </h1>
            <iframe src="https://open.spotify.com/embed/album/78HQtfS1qAaooNV2L5Iu6A?theme=0" width="100%" height="200" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

            
        </div>
    )
}

export default Home