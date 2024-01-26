// components/TreeNode.js
import React from 'react';

const TreeNode = ({ node, addChild, removeNode }) => {
  return (
    <div>
      <div>{node.content}</div>
      {node.type === 'container' && (
        <button onClick={() => addChild(node.id)}>Add Child</button>
      )}
      <button onClick={() => removeNode(node.id)}>Remove</button>
      {node.children && node.children.map(childNode => (
        <TreeNode key={childNode.id} node={childNode} addChild={addChild} removeNode={removeNode} />
      ))}
    </div>
  );
};

export default TreeNode;
