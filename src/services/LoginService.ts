export class AuthService {
    // Método para verificar credenciales de administrador y generar el JWT
    static async login(email: string, password: string): Promise<string | null> {
        // Buscar al admin por el email
        const admin: LoginInterface[] = admins.filter(u => u.email === email);
        if (admin.length === 0) {
            return null; // Admin no encontrado
        }

        // Comparar las contraseñas
        const validPassword = await bcrypt.compare(password, admin[0].password);
        if (!validPassword) {
            return null; // Contraseña incorrecta
        }

        // Generar el token
        const token = jwt.sign(
            { email: admin[0].email },
            process.env.TOKEN_SECRET as string,
            { expiresIn: '1h' } // El token expirará en 1 hora
        );

        return token;
    }
}