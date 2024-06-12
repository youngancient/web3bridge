// passwordGenerator.ts

export function generatePassword(length: number, useUppercase: boolean, useLowercase: boolean, useNumbers: boolean, useSpecialChars: boolean): string {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let allChars = '';
    if (useUppercase) allChars += uppercase;
    if (useLowercase) allChars += lowercase;
    if (useNumbers) allChars += numbers;
    if (useSpecialChars) allChars += specialChars;

    if (!allChars) throw new Error('No character sets selected');

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
}
