import { Request, Response } from 'express';
import { User, UserRequest } from '../../types/user';
import { encrypt, idGenerate } from '../../utils';
import { createUser } from '../../services/database';

export default async function register(req: Request, res: Response) {
  try {
    const { password, ...rest }: UserRequest = req.body;
    const passwordEncrypt = encrypt.toEncrypt(password);
    const uid = idGenerate();
    const data: User = {
      ...rest,
      uid,
      password: passwordEncrypt,
    };
    await createUser(data);
    res.status(200).json({
      ok: true,
      msg: 'User created successfully',
    });
  } catch (error) {
    console.log('🚀 ~ file: userCreate.ts:22 ~ userCreate ~ error:', error);
    res.status(500).json({
      ok: false,
      error,
    });
  }
}
