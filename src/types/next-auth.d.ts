/* eslint-disable no-unused-vars */
import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      payload: {
        id: string;
        name: string;
        email: string;
        profileImage: string;
        phoneNumber: string;
        date_of_birth: string;
        roles: string;
        isActive: boolean;
        access_token: string;
        refresh_token: string;
      };
      fetchedCart: boolean;
    };
  }
}
