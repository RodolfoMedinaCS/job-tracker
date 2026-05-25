package com.rodolfo.jobtracker.Service;


import com.rodolfo.jobtracker.DTO.*;
import com.rodolfo.jobtracker.Entity.User;
import com.rodolfo.jobtracker.Repository.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder){

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    //get users profile info
    public UserProfileDTO getUserProfile() {
        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        User user = userRepository.findByEmail(email).orElseThrow();
        return new UserProfileDTO(user.getId(), user.getEmail(), user.getName());
    }



    //update users name and email
    public void updateNamAndEmail(UpdateNameAndEmailDTO updateNameAndEmailDTO) {
        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        User existingUser = userRepository.findByEmail(email).orElseThrow();
        if(updateNameAndEmailDTO.getEmail() != null && !updateNameAndEmailDTO.getEmail().isEmpty()){
            existingUser.setEmail(updateNameAndEmailDTO.getEmail());
        }
        if(updateNameAndEmailDTO.getName() !=  null && !updateNameAndEmailDTO.getName().isEmpty()){
            existingUser.setName(updateNameAndEmailDTO.getName());
        }
        userRepository.save(existingUser);
    }

    //update users password
    public void updatePassword( UpdatePasswordDTO updatePasswordDTO) {
        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();
        User existingUser = userRepository.findByEmail(email).orElseThrow();
        if(!passwordEncoder.matches(updatePasswordDTO.getCurrentPassword(), existingUser.getPassword())){
            throw new RuntimeException("Current password is incorrect");
        }

        existingUser.setPassword(passwordEncoder.encode(updatePasswordDTO.getNewPassword()));
        userRepository.save(existingUser);
    }

}
