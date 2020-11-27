import fetch from 'node-fetch';
import { auth } from '../firebase';

export default (email: string, password: string): Promise<any> => {
  return auth.createUserWithEmailAndPassword(email, password).then(() => {
    return {
      error: false
    }
  }).catch((m) => {
    return {
      error: true,
      message: m
    }
  });
}