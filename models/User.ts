import mongoose, { Document, Schema } from 'mongoose';

interface IUser {
    name: string;
    email: string;
    password: string;
}

type IUserType = IUser & Document

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
},
    { timestamps: true })

const User = mongoose.models.User || mongoose.model<IUserType>('User', UserSchema);

export const createUser = async (user: IUser): Promise<IUserType | null> => {
    try {
        const newUser = new User(user);
        await newUser.save();
        console.log(`User created: ${newUser._id}`);
        return newUser;
    } catch (err) {
        console.error(err.message);
        throw new Error(err.message);
    }
};

export default User;