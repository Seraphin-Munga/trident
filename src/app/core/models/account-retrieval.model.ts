import { RoleModel } from './role.model';

export class AccountRetrievalModel {
    public studentNumber: number;
    public identityNumber: number;
    public fullName: string;
    public emailAddress: string;
    public grade: number;
    public gender: string;
    public teacher: number;
    public role: RoleModel;
}
