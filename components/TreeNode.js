import React, { useState } from 'react';

const TreeNode = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <span onClick={() => setIsExpanded(!isExpanded)}>{title}</span>
      {isExpanded && children && (
        <div style={{ marginLeft: '20px' }}>
          {children.map((child, index) => (
            <TreeNode key={index} {...child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
