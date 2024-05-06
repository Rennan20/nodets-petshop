import { Request, Response } from "express";

export const showLoginPage = (req: Request, res: Response) => {
  res.render("pages/login");
};

// Função para lidar com o envio do formulário de login
export const login = (req: Request, res: Response) => {
  // Lógica de autenticação aqui
};

export const logout = (req: Request, res: Response) => {
  // Lógica para finalizar a sessão do usuário
  // Redirecionar para a página de login após o logout
  res.render("pages/login");
};
