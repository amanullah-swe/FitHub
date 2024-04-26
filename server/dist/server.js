"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./db"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
dotenv_1.default.config();
const authRouter_1 = __importDefault(require("./routes/authRouter"));
const mealRouter_1 = __importDefault(require("./routes/mealRouter"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const dialyFitnessAndDietRoutes_1 = __importDefault(require("./routes/dialyFitnessAndDietRoutes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
(0, db_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
const corsOptions = {
    origin: [process.env.CROS_ORINGIN_ULR1, process.env.CROS_ORINGIN_ULR2, process.env.CROS_ORINGIN_ULR3],
    credentials: true,
    exposedHeaders: 'Authorization, Content-Type, X-Total-Count',
};
app.get('/', (req, res) => {
    res.send("<h1>Fithub backend</h1>");
});
// server static assests
app.use('/assets', express_1.default.static(path_1.default.join(__dirname, 'public/assets')));
app.use((0, cors_1.default)(corsOptions));
app.use('/api', authRouter_1.default);
app.use('/api', mealRouter_1.default);
app.use('/api', userRouter_1.default);
app.use('/api', dialyFitnessAndDietRoutes_1.default);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
