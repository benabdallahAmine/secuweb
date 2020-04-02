package com.imtatlantique.uesecuweb.entities;

import javax.persistence.*;

@Entity
public class IdentityCardFile {
    @Id
    @GeneratedValue
    private Long id;
    @Column
    private String fileName;
    @Column
    @Lob
    private byte[] file;

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public byte[] getFile() {
        return file;
    }

    public void setFile(byte[] file) {
        this.file = file;
    }
}
