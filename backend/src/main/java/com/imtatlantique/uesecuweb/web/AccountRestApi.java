package com.imtatlantique.uesecuweb.web;


import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import com.imtatlantique.uesecuweb.securite.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.imtatlantique.uesecuweb.entities.*;
import com.imtatlantique.uesecuweb.service.AccountService;

import org.springframework.util.StringUtils;

import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.multipart.MultipartFile;

import java.io.*;

@CrossOrigin(origins = "*")
@RestController
public class AccountRestApi {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private AccountService accountService;
    @Autowired
    private JwtUtils jwtUtils;


    @PostMapping("/signing")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        User userDetails = (User) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(), roles));
    }



    @PostMapping("/register")
    public Users registerUser(@RequestBody RegisterForm registerForm) {
        Users user = accountService.findUserByEmail(registerForm.getEmail());
        if (user != null) throw new RuntimeException("This email already exists");
        if (!registerForm.getPassword().equals(registerForm.getRepassword()))
            throw new RuntimeException("Passwords are not equivalent");
        try{
            registerForm.getNumberPhone();
        }catch (Exception e){
            throw new RuntimeException("The phone number should be numbers");
        }
        boolean isNumberPhone = registerForm.getNumberPhone().matches("(?:(?:\\+|00)33|0)\\s*[1-9](?:[\\s.-]*\\d{2}){4}");
        if(!isNumberPhone){
            throw new RuntimeException("The phone number should have 10 digits ");
        }
        Users newUser = new Users();
        newUser.setEmail(registerForm.getEmail());
        newUser.setPassword(registerForm.getPassword());
        newUser.setFirstName(registerForm.getFirstName());
        newUser.setLastName(registerForm.getLastName());
        newUser.setNumberPhone(registerForm.getNumberPhone());
        accountService.saveUser(newUser);
        accountService.addRoleToUser(newUser.getEmail(), "USER");
        return newUser;
    }

    @PostMapping(value ="/uploadIdentityCardFile", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity uploadIdentityCardFile(@RequestParam MultipartFile file) {
        IdentityCardFile identityCardFile = new IdentityCardFile();
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        //List<String> contentTypes = Arrays.asList("image/png", "image/jpeg","application/pdf");
        identityCardFile.setFileName(fileName);
        try {
            String UPLOADED_FOLDER = "/Users/air/Desktop/";
            byte[] bytes = file.getBytes();
            identityCardFile.setFile(bytes);
            Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
            Files.write(path, bytes);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok(fileName + " was successfully uploaded");
        }
        

}
