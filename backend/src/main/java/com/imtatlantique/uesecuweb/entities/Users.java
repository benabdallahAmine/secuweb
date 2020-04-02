package com.imtatlantique.uesecuweb.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
public class Users {
    @Id @GeneratedValue
    private Long id;
    @Column(unique = true)
    private String email;
    private String firstName;
    private String lastName;
    private int numberPhone;
    private String password;
    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<Role> roles = new ArrayList<>();
    @OneToOne
    private IdentityCardFile identityCardFile;
    @OneToOne
    private MonthlyIncomeFile monthlyIncomeFile;
    @OneToOne
    private TaxDeclarationFile taxDeclarationFile;

    public Users() {
    }

    public IdentityCardFile getIdentityCardFile() {
        return identityCardFile;
    }

    public void setIdentityCardFile(IdentityCardFile identityCardFile) {
        this.identityCardFile = identityCardFile;
    }

    public MonthlyIncomeFile getMonthlyIncomeFile() {
        return monthlyIncomeFile;
    }

    public void setMonthlyIncomeFile(MonthlyIncomeFile monthlyIncomeFile) {
        this.monthlyIncomeFile = monthlyIncomeFile;
    }

    public TaxDeclarationFile getTaxDeclarationFile() {
        return taxDeclarationFile;
    }

    public void setTaxDeclarationFile(TaxDeclarationFile taxDeclarationFile) {
        this.taxDeclarationFile = taxDeclarationFile;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getNumberPhone() {
        return numberPhone;
    }

    public void setNumberPhone(int numberPhone) {
        this.numberPhone = numberPhone;
    }

    @JsonIgnore
    public String getPassword() {
        return password;
    }

    @JsonSetter
    public void setPassword(String password) {
        this.password = password;
    }

    public Collection<Role> getRoles() {
        return roles;
    }

    public void setRoles(Collection<Role> roles) {
        this.roles = roles;
    }
}
