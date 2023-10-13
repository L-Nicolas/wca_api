import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import database from '../database';

const loginResolver = {
  Mutation: {
    login: async ({ username, password }: { username: string, password: string }) => {
      const { data: users } = await database.from('Users').select('*').eq('username', username);

      if (users && users.length === 0) {
        throw new Error('Nom d\'utilisateur incorrect.');
      }

      
      const user = users![0];

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        throw new Error('Mot de passe incorrect.');
      }

      const token = jwt.sign({ userId: user.id }, 'votre_secret_jwt'); // Remplacez 'votre_secret_jwt' par une clé secrète réelle

      return { token, user };
    },
  },
};

export default loginResolver;
