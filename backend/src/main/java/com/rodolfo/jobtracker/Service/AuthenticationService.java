package com.rodolfo.jobtracker.Service;


import com.rodolfo.jobtracker.authDTOS.AuthenticationRequest;
import com.rodolfo.jobtracker.authDTOS.AuthenticationResponse;
import com.rodolfo.jobtracker.authDTOS.RegisterRequest;
import com.rodolfo.jobtracker.Repository.UserRepository;
import com.rodolfo.jobtracker.Entity.User;
import com.rodolfo.jobtracker.config.JwtService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(UserRepository userRepository,
                                 PasswordEncoder passwordEncoder,
                                 JwtService jwtService,
                                 AuthenticationManager authenticationManager){

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }


    public AuthenticationResponse register(RegisterRequest request) {
        User user = new User(
                request.getName(),
                request.getEmail(),
                passwordEncoder.encode(request.getPassword())
        );
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return new AuthenticationResponse(jwtToken);
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        System.out.println(">>> authenticated called with email: " + request.getEmail());
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        System.out.println(">>> authentication Passed");
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow();
        System.out.println(">>> user found: " + user.getEmail());
        System.out.println(">>> stored password : " + user.getPassword());

        var jwtToken = jwtService.generateToken(user);
        System.out.println(">>> token generated: " + jwtToken);
        return new AuthenticationResponse(jwtToken);
    }
}
