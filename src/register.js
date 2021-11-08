import React, { useEffect, useState } from 'react';

const api = 'https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/';

const Register = () => {
    return <>
    <form onSubmit={() => {
            //get info from inputs
            
            //send request to api
            //get back token, store in state
            
            //figure out how to get token to other files
            
    }}>
        <label> username: </label>
        <input type="text" name="username" required/>
        <label> password: </label>
        <input type="text" name="password" required/>
        <label> confirm password: </label>
        <input type="text" name="password2" required/>
        <input type="button" value="submit"/>
    </form>
    </>
}
export default Register;