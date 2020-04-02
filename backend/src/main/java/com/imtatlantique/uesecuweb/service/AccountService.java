package com.imtatlantique.uesecuweb.service;


import com.imtatlantique.uesecuweb.entities.Role;
import com.imtatlantique.uesecuweb.entities.Users;

public interface AccountService {

    public Users saveUser(Users user);
    public Role saveRole(Role role);
    public void addRoleToUser(String userName, String roleName);
    public Users findUserByEmail(String email);
}
