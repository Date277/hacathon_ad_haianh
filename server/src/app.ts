import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

import categoryRouter from "./routes/categoy.route";
import questionRouter from "./routes/question.route";
import answerRouter from "./routes/answer.route";

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//catelory
app.use("/api/v1/category", categoryRouter);
//question
app.use("/api/v1/question", questionRouter);
//answer
app.use("/api/v1/answer", answerRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
