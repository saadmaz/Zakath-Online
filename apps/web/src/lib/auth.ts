export interface AuthProvider {
  isAuthenticated(): Promise<boolean>;
}

export class StubAuthProvider implements AuthProvider {
  async isAuthenticated(): Promise<boolean> {
    return false;
  }
}
