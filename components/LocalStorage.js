// utils/localStorage.js
export const saveTreeToLocalStorage = (tree) => {
    localStorage.setItem('treeData', JSON.stringify(tree));
  };
  
  export const loadTreeFromLocalStorage = () => {
    const treeData = localStorage.getItem('treeData');
    return treeData ? JSON.parse(treeData) : null;
  };
  