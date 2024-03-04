import UserRepository from "../repository/userRepository.js";

const userRepository = new UserRepository();
// User CRUD routes
export const handlegetallusers = async (req, res) => {
  const users = await userRepository.getAll();
  res.json(users);
};

export const handlegetuserbyid = async (req, res) => {
  const user = await userRepository.getById(req.params.id);
  res.json(user);
};

export const handleregisteruser = async (req, res) => {
  if (userRepository.validate(req.body)) {
    res.json({
      status: "error",
      message: "name cannot be admin",
    });
    return;
  }
  const user = await userRepository.create(req.body);
  res.json(user);
};

export const handleupdateuser = async (req, res) => {
  const user = await userRepository.update(req.params.id, req.body);
  res.json(user);
};

export const handledeleteuser = async (req, res) => {
  await userRepository.delete(req.params.id);
  res.sendStatus(204); // No content
};
