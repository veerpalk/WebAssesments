"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const api_1 = __importDefault(require("./routes/api"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true
}));
app.use('/', express_1.default.static(path_1.default.join(__dirname, '/../public')));
app.use('/api', api_1.default);
app.listen(9000, () => console.log('Server started at localhost 9000'));
