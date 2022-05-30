import { Router } from "express";
const basicRouter = Router();

basicRouter.get("/", (req, res) => {
  res.send("서버가 정상적으로 열렸습니다!");
});

basicRouter.get("/error", (req, res, next) => {
  throw new Error("에러 상황 테스트asd!");
});

export { basicRouter };
