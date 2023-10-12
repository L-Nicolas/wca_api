import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import database from '../database'

const createUserResolver = {
  Mutation: {
    createUser: async ({
      username,
      password,
    }: {
      username: string
      password: string
    }) => {
      // Vérifier d'abord si le nom d'utilisateur existe déjà
      const { data: existingUser } = await database
        .from('Users')
        .select('*')
        .eq('username', username)

      if (existingUser && existingUser.length > 0) {
        throw new Error("Un utilisateur avec ce nom d'utilisateur existe déjà.")
      }

      // Si le nom d'utilisateur n'existe pas, alors on peut créer l'utilisateur
      // Hasher le mot de passe (vous pouvez utiliser Bcrypt pour cela)
      const hashedPassword = await bcrypt.hash(password, 10)

      // Insérer le nouvel utilisateur dans la base de données
      const { data, error } = await database.from('Users').upsert([
        {
          username,
          password: hashedPassword,
        },
      ])

      if (error) {
        throw new Error("Échec de la création de l'utilisateur" + error.message)
      }

      return data[0]
    },
  },
}

export default createUserResolver
