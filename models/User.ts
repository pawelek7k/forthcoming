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
})

const User = mongoose.model<IUserType>('User', UserSchema)

export const createUser = async (user: IUser) => {
    const newUser = new User(user);
    await newUser.save();
    console.log(newUser._id);
}