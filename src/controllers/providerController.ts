import { Request, Response } from 'express';
import Provider from '../models/providerModel';

export const getProviders = async (req: Request, res: Response): Promise<void> => {
  try {
    const providers = await Provider.find();
    res.status(200).json(providers);
  } catch (error) {
    res.status(500).json({ message: "Error when searching for providers", error });
  }
};

export const getProviderById = async (req: Request, res: Response): Promise<void> => {
  try {
    const provider = await Provider.findById(req.params.id);
    if (!provider) {
      res.status(404).json({ message: "Provider not found" });
      return;
    }
    res.json(provider);
  } catch (error) {
    res.status(500).json({ message: "Error when searching for providers", error });
  }
};

export const createProvider = async (req: Request, res: Response) => {
  try {
    const { name, email, phoneNumber, password, cpf, dateOfBirth, address, skills } = req.body;
    const newProvider = new Provider({ name, email, phoneNumber, password, cpf, dateOfBirth, address, skills });
    await newProvider.save();
    res.status(201).json(newProvider);
  } catch (error) {
    res.status(500).json({ message: 'Error creating provider', error });
  }
};

export const updateProvider = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedProvider = await Provider.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProvider) {
      res.status(404).json({ message: "Provider not found" });
      return;
    }
    res.json(updatedProvider);
  } catch (error) {
    res.status(500).json({ message: "Error when updating provider", error });
  }
};

export const deleteProvider = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedProvider = await Provider.findByIdAndDelete(req.params.id);
    if (!deletedProvider) {
      res.status(404).json({ message: "Provider not found" });
      return;
    }
    res.json({ message: "Succesful provider delete" });
  } catch (error) {
    res.status(500).json({ message: "Error when deleting provider", error });
  }
};
