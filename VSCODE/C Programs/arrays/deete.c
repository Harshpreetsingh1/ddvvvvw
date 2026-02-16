#include <stdio.h>

int main() {
    int arr[100], n, i, pos, element;

    // Input the size of the array
    printf("Enter the number of elements in the array: ");
    scanf("%d", &n);

    // Input the elements of the array
    printf("Enter the elements of the array:\n");
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Input the element to be deleted
    printf("Enter the element to be deleted: ");
    scanf("%d", &element);

    // Find the position of the element to be deleted
    pos = -1; // Initialize position to -1 (not found)
    for (i = 0; i < n; i++) {
        if (arr[i] == element) {
            pos = i; // Element found
            break;
        }
    }

    // If the element is found, delete it
    if (pos != -1) {
        for (i = pos; i < n - 1; i++) {
            arr[i] = arr[i + 1]; // Shift elements to the left
        }
        n--; // Reduce the size of the array
        printf("Element %d deleted successfully.\n", element);
    } else {
        printf("Element %d not found in the array.\n", element);
    }

    // Display the updated array
    printf("Updated array:\n");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    return 0;
}