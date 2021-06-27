import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { SECRET_STRING } from '../common/config';

function checkToken(req: Request, res: Response, next: NextFunction) {
    if (['/', '/login', '/doc'].includes(req.url)) return next();

    const authHeader = req.headers.authorization;
    if (authHeader !== undefined) {
        const [type, token] = authHeader.split(' ');
        if (type !== 'Bearer' || !token) {
            return res.status(401).send('Unauthorized');
        }
        jwt.verify(token, String(SECRET_STRING));
        return next();
    }
    return res.status(401).send('Unauthorized');
}

export { checkToken }