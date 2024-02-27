import Fuse from 'fuse.js';
import items from '../items.json'; // Adjust the path as needed

const baseItems = ['Water', 'Fire', 'Wind', 'Earth'];
const fuse = new Fuse(Object.keys(items), { includeScore: true });

// A helper function to perform the "recursive" search iteratively
function iterativeFindBaseItemsTree(itemName) {
  // Initialize a stack with the initial item
  let stack = [{ itemName, path: [] }];
  let result = {};

  while (stack.length > 0) {
    let { itemName, path } = stack.pop();
    let currentItem;

    if (baseItems.includes(itemName)) {
      currentItem = { name: itemName, children: [] };
    } else {
      const item = items[itemName] || fuse.search(itemName)[0]?.item;
      if (!item) {
        currentItem = { name: itemName, children: [] };
      } else {
        currentItem = { name: itemName, children: [] };
        if (item.first !== 'None') {
          stack.push({ itemName: item.first, path: [...path, 'children', 0] });
        }
        if (item.second !== 'None') {
          stack.push({ itemName: item.second, path: [...path, 'children', 1] });
        }
      }
    }

    if (path.length === 0) {
      result = currentItem;
    } else {
      let parent = result;
      for (let i = 0; i < path.length - 1; i++) {
        parent = parent[path[i]];
      }
      parent[path[path.length - 1]] = currentItem;
    }
  }

  return result;
}

export const findBaseItemsTree = (itemName) => {
  return iterativeFindBaseItemsTree(itemName);
};
