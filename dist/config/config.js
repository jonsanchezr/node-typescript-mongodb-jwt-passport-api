"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jwtSecret: process.env.JWT_SECRET || 'somesecrettoken',
    DB: {
        HOST: process.env.MONGODB_HOST || 'mongodb://localhost/jwttutorial',
        USER: process.env.MONGODB_USER || '',
        PASS: process.env.MONGODB_PASS || ''
    }
};
