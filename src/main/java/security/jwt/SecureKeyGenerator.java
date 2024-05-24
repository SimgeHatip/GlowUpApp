package security.jwt;

import java.security.SecureRandom;
import java.util.Base64;

public class SecureKeyGenerator {

    public static void main(String[] args) {
        SecureRandom secureRandom = new SecureRandom();
        byte[] key = new byte[64]; // 512 bits
        secureRandom.nextBytes(key);
        String encodedKey = Base64.getEncoder().encodeToString(key);
        System.out.println("Generated Key: " + encodedKey);
    }
}
