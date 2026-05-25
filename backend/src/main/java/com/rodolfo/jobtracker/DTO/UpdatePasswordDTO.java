package com.rodolfo.jobtracker.DTO;

public class UpdatePasswordDTO {

    private String newPassword;
    private String currentPassword;

    public String getNewPassword(){
        return newPassword;
    }
    public String getCurrentPassword(){return currentPassword;}

    public void setPassword(String password) {
        this.newPassword = password;
    }
    public void setCurrentPassword(String currentPassword){this.currentPassword = currentPassword;}
}
