import { CreateAdminDto } from './create-admin.dto';
declare const UpdateAdminDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateAdminDto>>;
export declare class UpdateAdminDto extends UpdateAdminDto_base {
    firstName?: string;
    lastNameName?: string;
    email?: string;
    password?: string;
    role?: string;
}
export {};
