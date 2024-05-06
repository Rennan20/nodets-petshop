import { Router } from "express";
import * as PageController from "../controllers/pageController";
import * as SearchController from "../controllers/searchController";
import * as AuthController from "../controllers/authController";

const router = Router();

router.get("/", PageController.home);
router.get("/dogs", PageController.dogs);
router.get("/cats", PageController.cats);
router.get("/fishes", PageController.fishes);

router.get("/search", SearchController.search);

router.get("/login", AuthController.showLoginPage);
router.post("/login", AuthController.login); // Rota para enviar o formulário de login
router.get("/logout", AuthController.logout); // Rota para realizar o logout

export default router;
