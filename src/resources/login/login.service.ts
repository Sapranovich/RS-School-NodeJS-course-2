import bcrypt from 'bcrypt';
import { User, IUser } from "../users/user.model";

async function authUser(user: IUser) {
    const { login, password } = user;
    const targetUser = await User.findOne({login});
    if (targetUser &&  await bcrypt.compare(String(password), String(targetUser?.password))) {
        return targetUser;
    }
    return false;
}

export { authUser };