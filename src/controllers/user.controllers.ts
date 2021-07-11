import { Request, Response } from 'express';
import User, { IUser } from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config/config';

function createToken(user: IUser) {
    return jwt.sign({id: user.id, email: user.email}, config.jwtSecret, {
        expiresIn:86400
    });
}

export const signup = async (req: Request, res: Response): Promise<Response> => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            message: 'Please, send your email and password'
        });
    }

    const user = await User.findOne({email: req.body.email});
    if (user) {
        return res.status(400).json({
            message: 'The user already exists'
        });
    }

    const newUser = new User(req.body);
    await newUser.save();

    return res.status(201).json(newUser);
}

export const signin = async (req: Request, res: Response) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            message: 'Please, send your email and password'
        });
    }

    const user = await User.findOne({email: req.body.email});
    if (!user) {
        return res.status(400).json({
            message: 'The user does not exists'
        });
    }

    const isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
        return res.status(200).json({token: createToken(user)});
    }

    return res.status(400).json({message: 'The email or password are incorrect'});
}