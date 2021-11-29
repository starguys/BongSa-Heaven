module.exports = {
  registerControl: async (req, res) => {
    return res.send("register ok!");
  },
  listControl: async (req, res) => {
    return res.send("info ok!");
  },
  editControl: async (req, res) => {
    return res.send("edit ok!");
  },
  deleteControl: async (req, res) => {
    return res.send("delete ok!");
  },
};
