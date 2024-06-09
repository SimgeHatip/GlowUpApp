export interface User {
    id: string;
    name: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    isVerified: boolean;
    roles: any[];
    skinType: any;
    isAcneProne: boolean;
    isSpotProne: boolean;
    avatarUrl: string;
}
