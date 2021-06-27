import express from 'express';
import jwt from 'jsonwebtoken';
import { catchErrors } from '../../common/errorHandler';
import { authUser } from "./login.service";
import { SECRET_STRING } from '../../common/config';

export const router = express.Router();

router.route('/').post(catchErrors(async (req: express.Request, res: express.Response) => {
    const user = req.body;
    const targetUser = await authUser(user);
    if (targetUser) {
        const payload = { userId: targetUser.id, login: targetUser.login };
        const token = jwt.sign(payload, String(SECRET_STRING));
        return res.status(200).json({token});
    }
    return res.status(403).json('Forbidden');
}));