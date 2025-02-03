import { Request, Response } from "express";
import Article from "../models/articleModel";

export const getArticles = async (req: Request, res: Response): Promise<void> => {
  try {
    const { tag, date } = req.query;
    let query: any = {};

    if (tag) query.tags = tag;
    if (date) query.publishedAt = { $gte: new Date(date as string) };

    const articles = await Article.find(query);
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar artigos", error });
  }
};

export const getArticleById = async (req: Request, res: Response): Promise<void> => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      res.status(404).json({ message: "Article not found" });
      return;
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: "Error when searching for articles", error });
  }
};

export const createArticle = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, content, tags } = req.body;
    const newArticle = new Article({ title, content, tags });
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(500).json({ message: "Error when searching for articles", error });
  }
};

export const updateArticle = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedArticle) {
      res.status(404).json({ message: "Article not found" });
      return;
    }
    res.json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: "Error when updating article", error });
  }
};

export const deleteArticle = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedArticle = await Article.findByIdAndDelete(req.params.id);
    if (!deletedArticle) {
      res.status(404).json({ message: "Article not found" });
      return;
    }
    res.json({ message: "Succesful article update" });
  } catch (error) {
    res.status(500).json({ message: "Error when deleting article", error });
  }
};
