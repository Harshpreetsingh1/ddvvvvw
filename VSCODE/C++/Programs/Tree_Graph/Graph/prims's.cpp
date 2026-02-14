
#include <iostream>
#include <vector>
#include <memory>
#include <string>

using namespace std;
constexpr int TABLE_SIZE = 10;

struct Employee {
    int key;
    string name;
    int age;
};
static std::vector<std::unique_ptr<Employee>> hashTable(TABLE_SIZE);

int hashKey(int key) {
    return key % TABLE_SIZE;
}

void insertEmployee(int key, const std::string& name, int age) {
    int index = hashKey(key);
    int i = 0;
    while (hashTable[(index + i) % TABLE_SIZE]) {
        ++i;
        if (i == TABLE_SIZE) {
            std::cout << "Hash table is full." << std::endl;
            return;
        }
    }
    index = (index + i) % TABLE_SIZE;
    hashTable[index] = std::make_unique<Employee>(Employee{key, name, age});
}

Employee* searchEmployee(int key) {
    int index = hashKey(key);
    int i = 0;
    while (hashTable[(index + i) % TABLE_SIZE]) {
        if (hashTable[(index + i) % TABLE_SIZE]->key == key) {
            return hashTable[(index + i) % TABLE_SIZE].get();
        }
        ++i;
        if (i == TABLE_SIZE) break;
    }
    return nullptr;
}

void removeEmployee(int key) {
    int index = hashKey(key);
    int i = 0;
    while (hashTable[(index + i) % TABLE_SIZE]) {
        if (hashTable[(index + i) % TABLE_SIZE]->key == key) {
            int removePos = (index + i) % TABLE_SIZE;
            hashTable[removePos].reset();
            int j = (removePos + 1) % TABLE_SIZE;
            while (hashTable[j]) {
                auto temp = move(hashTable[j]);
                hashTable[j].reset();
                insertEmployee(temp->key, temp->name, temp->age);
                j = (j + 1) % TABLE_SIZE;
            }
            return;
        }
        ++i;
        if (i == TABLE_SIZE) break;
    }
    cout << "Employee not found." << std::endl;
}

void display() {
    for (int i = 0; i < TABLE_SIZE; ++i) {
        if (hashTable[i]) {
            cout << "Index " << i << ": Key = " << hashTable[i]->key
                      << ", Name = " << hashTable[i]->name
                      << ", Age = " << hashTable[i]->age << '\n';
        } else {
            cout << "Index " << i << ": empty" << '\n';
        }
    }
}

int main() {
    insertEmployee(1234, "Harsh", 30);
    insertEmployee(2345, "Deepanshu", 25);
    insertEmployee(3456, "Dev", 35);

    display();

    Employee* emp = searchEmployee(2345);
    if (emp != nullptr) {
        cout << "Found: " << emp->name << ", Age: " << emp->age << '\n';
    } else {
        cout << "Employee not found." << '\n';
    }

    removeEmployee(2345);
    display();

    return 0;
}