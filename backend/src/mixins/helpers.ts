import * as bcrypt from 'bcrypt';

export const generateUniqueToken = async () => {
    const randomData = Math.random().toString();
    const hashRounds = 10;

    const hash = await bcrypt.hash(randomData, hashRounds);
    return hash;
};

export const isDefined = (value: any) => {
    return typeof value !== 'undefined' && value !== null;
}
