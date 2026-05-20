package com.rodolfo.jobtracker.Controller;



import com.rodolfo.jobtracker.authDTOS.AuthenticationRequest;
import com.rodolfo.jobtracker.authDTOS.AuthenticationResponse;
import com.rodolfo.jobtracker.Service.AuthenticationService;
import com.rodolfo.jobtracker.authDTOS.RegisterRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class AuthenticationController {

    private final AuthenticationService service;

    public AuthenticationController(AuthenticationService service){
        this.service = service;
    }

    @PostMapping("/api/v1/auth/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request){
        return ResponseEntity.ok(service.register(request));
    }


    @PostMapping("/api/v1/auth/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticateRequest(@RequestBody AuthenticationRequest request){
        return ResponseEntity.ok(service.authenticate(request));
    }
}
