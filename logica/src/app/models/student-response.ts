import { Student } from "./student";

export interface StudentResponse {
    code: number;
    mensaje: string;
    data: Array<Student>;
}
