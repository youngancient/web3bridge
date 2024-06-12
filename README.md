# Random Password Generator

## Description

This project is a Random Password Generator script written in TypeScript. It generates random passwords of a specified length and strength, containing a mix of uppercase letters, lowercase letters, numbers, and special characters. The project also includes test cases using the Jest framework to validate the script logic.

## Features

- Generates a password of specified length.
- Includes options to use uppercase letters, lowercase letters, numbers, and special characters.
- Ensures the generated password meets the specified criteria.
- Throws an error if no character sets are selected.

## Setup

1. Clone the repository.
2. Install dependencies:
    ```sh
    npm install
    ```

## Usage

To generate a password, call the `generatePassword` function with the desired parameters:

```typescript
import { generatePassword } from './passwordGen';

const password = generatePassword(12, true, true, true, true);
console.log(password);  // Example output: 'A1b@C3d#E4f%G5'
