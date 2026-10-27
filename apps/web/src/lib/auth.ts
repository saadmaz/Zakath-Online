/**
 * Auth is stubbed behind this interface so the real provider can be chosen later
 * without touching pages. The stub never returns a session.
 */

export interface Session {
  user: {
    id: string;
    email: string;
  };
}

export interface AuthProvider {
  getSession(): Promise<Session | null>;
}

const stubAuthProvider: AuthProvider = {
  async getSession() {
    return null;
  },
};

export const auth: AuthProvider = stubAuthProvider;
