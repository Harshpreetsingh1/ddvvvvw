import java.util.Scanner;

public class Bike_Rental {
    private static int[] videoId = new int[100];
    private static String[] title = new String[100];
    private static String[] genre = new String[100];
    private static boolean[] isRented = new boolean[100];
    private static int count = 0;

    public static void addVideo(int id, String videoTitle, String videoGenre) {
        videoId[count] = id;
        title[count] = videoTitle;
        genre[count] = videoGenre;
        isRented[count] = false;
        count++;
        System.out.println("Video added successfully.");
    }

    
    public static void rentVideo(int id) {
        for (int i = 0; i < count; i++) {
            if (videoId[i] == id) {
                if (!isRented[i]) {
                    isRented[i] = true;
                    System.out.println("Video rented successfully.");
                } else {
                    System.out.println("Video is already rented.");
                }
                return;
            }
        }
        System.out.println("Video not found.");
    }

    public static void returnVideo(int id) {
        for (int i = 0; i < count; i++) {
            if (videoId[i] == id) {
                if (isRented[i]) {
                    isRented[i] = false;
                    System.out.println("Video returned successfully.");
                } else {
                    System.out.println("Video was not rented.");
                }
                return;
            }
        }
        System.out.println("Video not found.");
    }

    public static void removeVideo(int id) {
        for (int i = 0; i < count; i++) {
            if (videoId[i] == id) {
                for (int j = i; j < count - 1; j++) {
                    videoId[j] = videoId[j + 1];
                    title[j] = title[j + 1];
                    genre[j] = genre[j + 1];
                    isRented[j] = isRented[j + 1];
                }
                count--;
                System.out.println("Video removed successfully.");
                return;
            }
        }
        System.out.println("Video not found.");
    }

    public static void displayInventory() {
        if (count == 0) {
            System.out.println("No videos in inventory.");
            return;
        }
        System.out.println("Current Inventory:");
        for (int i = 0; i < count; i++) {
            System.out.println("ID: " + videoId[i] + ", Title: " + title[i] + ", Genre: " + genre[i] + ", Rented: " + (isRented[i] ? "Yes" : "No"));
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("\nVideo Rental Store Management System");
            System.out.println("1. Add Video");5
            System.out.println("2. Rent Video");
            System.out.println("3. Return Video");
            System.out.println("4. Remove Video");
            System.out.println("5. Display Inventory");
            System.out.println("6. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter Video ID: ");
                    int id = scanner.nextInt();
                    scanner.nextLine(); // Consume newline
                    System.out.print("Enter Video Title: ");
                    String videoTitle = scanner.nextLine();
                    System.out.print("Enter Video Genre: ");
                    String videoGenre = scanner.nextLine();
                    addVideo(id, videoTitle, videoGenre);
                    break;
                case 2:
                    System.out.print("Enter Video ID to Rent: ");
                    id = scanner.nextInt();
                    rentVideo(id);
                    break;
                case 3:
                    System.out.print("Enter Video ID to Return: ");
                    id = scanner.nextInt();
                    returnVideo(id);
                    break;
                case 4:
                    System.out.print("Enter Video ID to Remove: ");
                    id = scanner.nextInt();
                    removeVideo(id);
                    break;
                case 5:
                    displayInventory();
                    break;
                case 6:
                    System.out.println("Exiting... Goodbye!");
                    scanner.close();
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }
}