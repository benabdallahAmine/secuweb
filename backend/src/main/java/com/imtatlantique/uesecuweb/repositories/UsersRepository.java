package com.imtatlantique.uesecuweb.repositories;


import com.imtatlantique.uesecuweb.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<Users, Long> {
    public Users findByEmail(String email);
}
