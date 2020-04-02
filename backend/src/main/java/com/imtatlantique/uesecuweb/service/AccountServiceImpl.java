package com.imtatlantique.uesecuweb.service;


import com.imtatlantique.uesecuweb.entities.Role;
import com.imtatlantique.uesecuweb.entities.Users;
import com.imtatlantique.uesecuweb.repositories.RoleRepository;
import com.imtatlantique.uesecuweb.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AccountServiceImpl implements AccountService {

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private UsersRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public Users saveUser(Users user) {
        String hashPW = bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(hashPW);
        return userRepository.save(user);
    }

    @Override
    public Role saveRole(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public void addRoleToUser(String userName, String roleName) {
        Role role = null;
        if(roleName.equals("USER")){
            role = addRoleUserToUser();
        }else if (roleName.equals("ADMIN")){
            role = addRoleAdminToUser();
        }
        Users user = userRepository.findByEmail(userName);
        user.getRoles().add(role);
    }

    private Role addRoleUserToUser(){
        Role role = new Role();
        role.setRoleName("USER");
        Role roleUser = roleRepository.save(role);
        return roleUser;
    }

    private Role addRoleAdminToUser(){
        Role role = new Role();
        role.setRoleName("ADMIN");
        Role roleAdmin = roleRepository.save(role);
        return roleAdmin;
    }

    @Override
    public Users findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
