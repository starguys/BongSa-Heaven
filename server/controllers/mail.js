module.exports = {
  registerControl: async (req, res) => {
    return res.send("register ok!");
  },
  listControl: async (req, res) => {
    return res.send("info ok!");
  },
  deleteControl: async (req, res) => {
    return res.send("delete ok!");
  },
};
