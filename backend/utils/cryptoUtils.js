import crypto from 'crypto';

const base62Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function base62Encode(buffer) {
    let num = BigInt('0x' + buffer.toString('hex'));
    let base62Str = '';
    while (num > 0) {
        base62Str = base62Chars[num % 62n] + base62Str;
        num = num / 62n;
    }
    return base62Str.padStart(6, '0').slice(-6);
}

export function generateShortUrl(url) {
    // Create a SHA-256 hash of the URL
    const sha256Hash = crypto.createHash('sha256').update(url).digest();
    
    // Take the first 6 bytes (48 bits) of the hash
    const truncatedHash = sha256Hash.slice(0, 6);
    
    // Encode the truncated hash in Base62
    return base62Encode(truncatedHash);
}

