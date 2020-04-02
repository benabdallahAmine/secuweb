package com.imtatlantique.uesecuweb.repositories;


import com.imtatlantique.uesecuweb.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {

    public Role findByRoleName(String roleName);

}
