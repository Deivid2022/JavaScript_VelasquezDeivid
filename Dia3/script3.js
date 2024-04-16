/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val); // Valor del nodo
    this.left = (left === undefined ? null : left); // Referencia al hijo izquierdo
    this.right = (right === undefined ? null : right); // Referencia al hijo derecho
}

/**
 * Función para eliminar un nodo con la clave dada en un árbol binario de búsqueda (BST).
 * @param {TreeNode} root - Raíz del árbol
 * @param {number} key - Clave del nodo a eliminar
 * @return {TreeNode} - Raíz del árbol después de la eliminación (posiblemente actualizada)
 */
var deleteNode = function(root, key) {
    // Caso base: si el árbol está vacío, retornar null
    if (!root) return null;

    // Caso 1: si la clave a eliminar es menor que el valor del nodo actual,
    // buscar en el subárbol izquierdo
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    }
    // Caso 2: si la clave a eliminar es mayor que el valor del nodo actual,
    // buscar en el subárbol derecho
    else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    }
    // Caso 3: si la clave a eliminar es igual al valor del nodo actual
    else {
        // Caso 3.1: si el nodo a eliminar no tiene hijos o solo tiene un hijo
        if (!root.left) return root.right; // No tiene hijo izquierdo
        else if (!root.right) return root.left; // No tiene hijo derecho

        // Caso 3.2: si el nodo a eliminar tiene dos hijos
        // Encontrar el sucesor en orden (el nodo más pequeño en el subárbol derecho)
        root.val = minValueNode(root.right).val;

        // Eliminar el sucesor en orden
        root.right = deleteNode(root.right, root.val);
    }

    // Retornar el nodo raíz del árbol (posiblemente actualizado)
    return root;
};

// Función auxiliar para encontrar el nodo con el valor mínimo en un subárbol
var minValueNode = function(node) {
    let current = node;
    while (current.left) {
        current = current.left;
    }
    return current;
};

// Función auxiliar para imprimir el árbol en orden
var inorderTraversal = function(root) {
    const result = [];
    const traverse = function(node) {
        if (!node) return;
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    };
    traverse(root);
    return result;
};

// Ejemplo de uso
const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(7);

const keyToDelete = 3;
console.log("BST antes de eliminar el nodo con clave", keyToDelete, ": ", inorderTraversal(root).join(","));

deleteNode(root, keyToDelete);

console.log("BST después de eliminar el nodo con clave", keyToDelete, ": ", inorderTraversal(root).join(","));
