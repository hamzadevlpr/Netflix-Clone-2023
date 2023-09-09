import React from 'react'
import Videos from './Videos'
import MovieCards from './MovieCards'
import { useContext } from 'react';
import { Context } from '../../Context/UserContext';
import ErrorPage from '../../ErrorPage'

function Dashboard() {
    const { login } = useContext(Context);
    return (
        <>
            {login ?
                <>
                    <Videos />
                    <MovieCards />
                </> :
                <ErrorPage title="You Must be Logged in to access this page"/>
            }
        </>
    )
}

export default Dashboard