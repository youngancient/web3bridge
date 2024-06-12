
import { generatePassword } from "./src/passwordgen";

const password = generatePassword(12,true,true,true, true);
console.log(password);