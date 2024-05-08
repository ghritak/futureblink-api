const initialNodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: {
      label: 'Email',
      content: 'This is email content',
    },
    type: 'email',
  },
  {
    id: '2',
    position: { x: 100, y: 200 },
    data: { label: 'Delay', content: 'Wait 4 days' },
    type: 'delay',
  },
  {
    id: '3',
    position: { x: 0, y: 400 },
    data: { label: 'Another Delay', content: 'Wait 0 day' },
    type: 'delay',
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
];

module.exports = { initialNodes, initialEdges };
