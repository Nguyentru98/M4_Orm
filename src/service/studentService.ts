import { Students } from "../entity/studen";
import {AppDataSource} from "../data-source";

class studentservice {
    private studentRepository;
    constructor() {
        this.studentRepository = AppDataSource.getRepository(Students);
    }

    getAll = async () => {
        let students = await this.studentRepository.find();
        return students;
    }

    add = async (student) => {
        await this.studentRepository.save(student)
    }
}

export default new studentservice();
