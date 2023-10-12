import bcrypt from 'bcrypt'; 
import jwt from 'jsonwebtoken'; // Pour la gestion des tokens JWT
import database from '../database';

const createUserResolver = {
  Mutation: {
    createUser: async (_: any, { username, password }: { username: string, password: string }) => {
        try {
            // Vérifier si l'utilisateur existe déjà avec le même nom d'utilisateur
            const { data: existingUser } = await database.from('Users').select('*').eq('username', username).single();

            if (existingUser) {
                throw new Error("Un utilisateur avec ce nom d'utilisateur existe déjà.");
            }

            // Hasher le mot de passe avec bcrypt
            const hashedPassword = await bcrypt.hash(password, 10);

            // Insérer le nouvel utilisateur dans la base de données avec le mot de passe hashé
            const { data: newUser } = await database.from('Users').insert({
                username,
                password: hashedPassword,
            }).single();

            // Créer un token JWT après la création du compte
            const token = jwt.sign({ userId: newUser.id }, 'votre_clé_secrète', {
                expiresIn: '1h', // Durée de validité du token
            });

            return { token, userId: newUser.id };
        } catch (error) {
            throw new Error("Erreur lors de la création du compte : " + (error as Error).message);
        }
    },
  },
};

export default createUserResolver;
