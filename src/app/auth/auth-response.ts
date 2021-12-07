export interface AuthResponse {
    user: {
        first: number,
        name: string,
        email: string,
        access_token: string,
        expires_in: number
    }
}
