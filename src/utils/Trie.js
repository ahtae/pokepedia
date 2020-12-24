class TrieNode {
  constructor(value) {
    this.value = value;
    this.children = {};
    this.isTerminal = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode('');
  }

  insert(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const currentLetter = word[i];

      if (currentNode.children[currentLetter]) {
        currentNode = currentNode.children[currentLetter];
      } else {
        currentNode.children[currentLetter] = new TrieNode(currentLetter);
        currentNode = currentNode.children[currentLetter];
      }

      if (i === word.length - 1) {
        currentNode.isTerminal = true;
      }
    }
  }

  insertAll(words) {
    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i];

      this.insert(currentWord);
    }
  }

  autocomplete(fragment) {
    if (!fragment) {
      return;
    }

    const result = [];
    let currentNode = this.root;

    for (let i = 0; i < fragment.length; i++) {
      const character = fragment[i];

      if (!currentNode.children[character]) {
        break;
      }

      currentNode = currentNode.children[character];

      if (i === fragment.length - 1) {
        const queue = [];

        queue.push([currentNode, fragment]);

        while (queue.length) {
          const poppedElements = queue.shift();
          const [node, word] = poppedElements;

          if (node.isTerminal) {
            result.push(word);
          } else {
            for (const j in node.children) {
              const child = node.children[j];
              const childWord = word + child.value;

              queue.push([child, childWord]);
            }
          }
        }
      }
    }

    return result;
  }
}

export default Trie;
