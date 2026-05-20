package com.rodolfo.jobtracker.DTO;

public class UserProfileDTO {

    private Long id;
    private String email;
    private String name;

    public UserProfileDTO(Long id, String email, String name){
        this.id = id;
        this.email = email;
        this.name = name;
    }

    public Long getId(){
        return id;
    }
    public String getEmail(){
        return email;
    }
    public String getName(){return name;}
}
