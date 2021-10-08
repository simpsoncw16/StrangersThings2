import React, { useEffect, useState } from 'react';

const Register = () => {
    return <>
    <form onSubmit={() => {
            //let username = 3;
    }}>
        <label> username: </label>
        <input type="text" name="username" required/>
        <label> password: </label>
        <input type="text" name="password" required/>
        <label> confirm password: </label>
        <input type="text" name="password2" required/>
        <input type="button" value="Submit"/>
    </form>
    </>
}
export default Register;