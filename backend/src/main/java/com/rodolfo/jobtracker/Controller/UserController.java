package com.rodolfo.jobtracker.Controller;

import com.rodolfo.jobtracker.DTO.*;
import com.rodolfo.jobtracker.Service.UserService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    //get profile info
    @GetMapping("/api/v1/users/profile")
    public UserProfileDTO getUserProfile(){
        return userService.getUserProfile();
    }

    //update users name
    @PatchMapping("/api/v1/users/name")
    public void updateName(@RequestBody UpdateNameDTO updateNameDTO){
        userService.updateName(updateNameDTO);
    }

    //update users email
    @PatchMapping("/api/v1/users/email")
    public void updateEmail(@RequestBody UpdateEmailDTO updateEmailDTO){
        userService.updateEmail(updateEmailDTO);
    }

    //update users password
    @PatchMapping("/api/v1/users/password")
    public void updatePassword( @RequestBody UpdatePasswordDTO updatePasswordDTO){
        userService.updatePassword(updatePasswordDTO);
    }





}
