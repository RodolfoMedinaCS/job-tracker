package com.rodolfo.jobtracker.authDTOS;

public class AuthenticationRequest {

    public AuthenticationRequest(String email, String password){
        this.email = email;
        this.password = password;
    }

    String email;
    String password;

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }
}
