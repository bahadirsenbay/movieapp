import React, { useState } from 'react';
import { useCookies } from 'react-cookie'
import Logo from '../img/logo.png'
import Data from '../user.json'
import { Button, Grid, InputAdornment, TextField } from '@material-ui/core'
import { AccountCircle, LockRounded } from '@material-ui/icons';
import '../css/NavBar.css'


const Login = () => {

    const [cookie, setCookie, removeCookie] = useCookies()

    const [loginForm, setloginForm] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        if (loginForm.email === Data.email && loginForm.password === Data.password) {
            setCookie('token', 'ahadir')
            setloginForm({
                email: "",
                password: ""
            })
        } else {
            setloginForm({
                email: "",
                password: ""
            })
        }
    }

    return (
        <Grid container style={{ minHeight: "100vh" }}>
            <Grid item xs={12} sm={6}>
                <img src="https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_960_720.jpg" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="brand" />
            </Grid>
            <Grid container xs={12}
                sm={6}
                alignItems="center"
                direction="column"
                justify="space-between"
                style={{ padding: 10 }}>
                <div />
                <div style={{ display: "flex", flexDirection: "column", maxWidth: 400, minWidth: 300 }}>
                    <Grid container justify="center">
                        <img src={Logo} alt="logo" width={150} />
                    </Grid>
                    <TextField
                        label="Kullanıcı adı"
                        margin="normal"
                        onChange={(e) => setloginForm({ ...loginForm, email: e.target.value})}
                        value={loginForm.email}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        label="Şifre"
                        type="password"
                        margin="normal"
                        onChange={(e) => setloginForm({ ...loginForm, password: e.target.value}) }
                        value={loginForm.password}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockRounded/>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <div style={{ height: 20 }} />
                    <Button onClick={handleSubmit} color="primary" variant="contained">
                        Giriş yap
                    </Button>
                    <div style={{ height: 20 }} />
                    <Button>Kayıt ol</Button>
                </div>
                <Grid container justify="center" spacing={2}>
                    <Grid item>
                        <Button color="primary">Ana Sayfaya dön</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined">Şifreni mi unuttun?</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Login;