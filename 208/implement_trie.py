from typing import Dict, Optional, TypedDict


class Trie:
    def __init__(self):
        self.dict = {}

        
    def insert(self, word: str) -> None:
        cur = self.dict
        for w in word:
            if cur.get(w, None) is None:
                cur[w] = {}
            cur = cur[w]
        
        cur['is_word'] = True
        return None

    def search(self, word: str) -> bool:
        cur = self.dict
        for w in word:
            if cur.get(w, None) is None:
                return False
            cur = cur[w]
            
        return cur.get('is_word', False)

    def startsWith(self, prefix: str) -> bool:
        cur = self.dict
        for w in prefix:
            if cur.get(w, None) is None:
                return False
            cur = cur[w]
            
        return True


# Your Trie object will be instantiated and called as such:
obj = Trie()
obj.insert('apple')
obj.insert('app')
obj.insert('baa')
obj.insert('applekk')

print(obj.search('apple'))
print(obj.search('ap'))
print(obj.search('ba'))

obj.insert('ba')
print(obj.search('ba'))
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)