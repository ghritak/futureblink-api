const Flow = require('../../model/flow');

const getFlow = async (req, res) => {
  try {
    const user_id = req.user_id;
    const flowData = await Flow.findOne({ user_id: user_id });
    return res.status(200).json({ message: 'Success', flowData });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getFlow };
