"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const studen_1 = require("../entity/studen");
const data_source_1 = require("../data-source");
class studentservice {
    constructor() {
        this.getAll = async () => {
            let students = await this.studentRepository.find();
            return students;
        };
        this.add = async (student) => {
            await this.studentRepository.save(student);
        };
        this.studentRepository = data_source_1.AppDataSource.getRepository(studen_1.Students);
    }
}
exports.default = new studentservice();
//# sourceMappingURL=studentService.js.map