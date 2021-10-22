import { enc, AES, lib, SHA512 } from "crypto-js";

export function encrypt(graphqlString) {
    const secretKey = lib.WordArray.random(256).toString();
    const encryptedData = AES.encrypt(graphqlString, secretKey).toString() + '.' + secretKey;
    return encryptedData;
}

export function decrypt(data) {
    const [graphqlString, secretKey] = data.split('.');
    const bytes = AES.decrypt(graphqlString, secretKey);
    return bytes.toString(enc.Utf8);
}

export function hash(text) {
    return SHA512(text).toString();
}