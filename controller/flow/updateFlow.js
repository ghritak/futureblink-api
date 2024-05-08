const Flow = require('../../model/flow');

const updateFlow = async (req, res) => {
  try {
    const user_id = req.user_id;
    const { nodes, edges } = req.body;
    const data = await Flow.updateOne(
      { user_id: user_id },
      { $set: { nodes: nodes, edges: edges } }
    );

    if (data.matchedCount === 1)
      return res.status(200).json({ message: 'Updated succesfully.' });
    return res.status(400).json({ error: 'Could not update flow chart' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { updateFlow };
