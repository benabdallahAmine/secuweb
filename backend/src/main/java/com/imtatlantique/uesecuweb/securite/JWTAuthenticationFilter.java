//package com.imtatlantique.uesecuweb.securite;
//
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.imtatlantique.uesecuweb.entities.Users;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.util.Date;
//
//public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
//
//
//    private AuthenticationManager authenticationManager;
//
//    public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
//        this.authenticationManager = authenticationManager;
//    }
//
//    @Override
//    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
//
//        Users user = null;
//        try {
//            user = new ObjectMapper().readValue(request.getInputStream(), Users.class);
//        } catch (IOException e) {
//            throw new RuntimeException(e);
//        }
//        return authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
//    }
//
//    @Override
//    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
//        User user = (User) authResult.getPrincipal();
//        String jwts = Jwts.builder().setSubject(user.getUsername())
//                .setExpiration(new Date(System.currentTimeMillis() + SecurityConstant.EXPIRATION_TIME))
//                .signWith(SignatureAlgorithm.HS512, SecurityConstant.SECRET)
//                .claim("roles", user.getAuthorities())
//                .compact();
//        response.addHeader(SecurityConstant.HEADER_STRING, SecurityConstant.TOKEN_PREFIX + jwts);
//        super.successfulAuthentication(request, response, chain, authResult);
//    }
//}
