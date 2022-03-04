const Users = require("../../../core/controllers/users.controller");

module.exports = async (req, res) => {
  try {
    // await faunaAPI.connect();
    const { id } = req.query;

    let { created_coupons } = await Users.get(id);

    // let indexResp = await faunaAPI.coupons_created_by_user.get(id);

    // Promise.all(indexResp.map((ref) => faunaAPI.coupons.getById(ref.id))).then(
    //   (response) => {
    return res.json(created_coupons);
    //   }
    // );
  } catch ({ name, message, description }) {
    return res.json({ name, message, description });
  }
};
