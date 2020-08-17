import models from '../models';
import {hashPassword, jwtToken} from "../utils";

const { User } = models;

const  auth = {
    async signUp(req, res, next) {
        const {name, email, password} = req.body;
        const hash = hashPassword(password);
        const user = await User.create({name, email, password: hash });
        const token = jwtToken.createToken(user);
        return res.status(201).send({token, user});
    }
}