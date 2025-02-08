import { Request, Response } from "express";
import Publisher from "../models/publisherModel";

export const getPublishers = async (req: Request, res: Response): Promise<void> => {
  try {
    const publishers = await Publisher.find();
    res.status(200).json(publishers);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar artigos", error });
  }
};

export const getPublisherById = async (req: Request, res: Response): Promise<void> => {
  try {
    const publisher = await Publisher.findById(req.params.id);
    if (!publisher) {
      res.status(404).json({ message: "Publisher not found" });
      return;
    }
    res.json(publisher);
  } catch (error) {
    res.status(500).json({ message: "Error when searching for publishers", error });
  }
};

export const createPublisher = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, phoneNumber, cpf, dateOfBirth, address, ratings } = req.body;
    const newPublisher = new Publisher({ name, email, phoneNumber, cpf, dateOfBirth, address, ratings });
    await newPublisher.save();
    res.status(201).json(newPublisher);
  } catch (error) {
    res.status(500).json({ message: "Error when creating for publishers", error });
  }
};

export const updatePublisher = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedPublisher = await Publisher.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPublisher) {
      res.status(404).json({ message: "Publisher not found" });
      return;
    }
    res.json(updatedPublisher);
  } catch (error) {
    res.status(500).json({ message: "Error when updating publisher", error });
  }
};

export const deletePublisher = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedPublisher = await Publisher.findByIdAndDelete(req.params.id);
    if (!deletedPublisher) {
      res.status(404).json({ message: "Publisher not found" });
      return;
    }
    res.json({ message: "Succesful publisher delete" });
  } catch (error) {
    res.status(500).json({ message: "Error when deleting publisher", error });
  }
};
