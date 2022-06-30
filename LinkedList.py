class Node(object):
    
    # Constructor
    def __init__(self, data):
        self.data = data
        self.next = None
    # getter and setter for data 
    def get_data(self):
        return self.data
    
    def get_next(self):
        return self.next
    
    def set_data(self, new_data):
        self.data = new_data
        
    def set_next(self, new_next):
        self.next = new_next
        
class MyLinkedList(object):
    
    def __init__(self, head=None):
        self.head = head
        self.count = 0  # number of nodes in the list
    
    def get_count(self):
        return self.count
    
    def insert(self, data):
        new_node = Node(data)
        new_node.set_next(self.head)
        self.head = new_node
        self.count += 1
    
    def find(self, data):
        current = self.head
        while current != None:
            if current.get_data() == data:
                return current
            current = current.get_next()
        return None
    
    def remove(self, data):
        current = self.head
        previous = None
        while current != None:
            if current.get_data() == data:
                if previous == None:
                    self.head = current.get_next()
                else:
                    previous.set_next(current.get_next())
                self.count -= 1
                return True # data found and removed
            previous = current
            current = current.get_next()
        return False # data not found
    
# Prints the list
myList = MyLinkedList()
myList.insert(1)
myList.insert(2)
myList.insert(3)
myList.insert(4)
myList.remove(3)
print( str(myList.get_count()) + " nodes in the list")
print(myList.find(1).get_data())
print(myList.remove(4))