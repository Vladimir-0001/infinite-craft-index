import React from 'react';

const TreeNode = ({ node }) => {
  return (
    <div style={{ position: 'relative', marginLeft: '20px' }}>
      {/* Node Content */}
      <div style={{ position: 'relative', padding: '5px 0' }}>
        {/* Horizontal line to the node, only if it has a parent */}
        {node.name !== 'Your Root Node Name' && ( // Replace 'Your Root Node Name' with the actual root node's name or another condition to identify root nodes
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '-20px',
              width: '20px',
              borderTop: '2px solid gray',
            }}
          ></div>
        )}
        <div>{node.name}</div>
      </div>

      {/* Children */}
      {node.children.length > 0 && (
        <div style={{ borderLeft: '2px solid gray' }}>
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
