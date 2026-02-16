#include <stdio.h>

#include <stdlib.h>

#include <unistd.h>

#include <sys/wait.h>



 

int main() {

    pid_t pid;

 

    printf("Before fork: Parent process ID is %d\n", getpid());

 

  
    pid = fork();

 

    if (pid < 0) {

     

        perror("Fork failed");

        exit(1);

    } else if (pid == 0) {

    
        printf("This is the child process.\n");

        printf("Child process ID is %d\n", getpid());

        printf("Child's parent process ID is %d\n", getppid());

        close(1); 

        exit(0);   

    } else {

      
        printf("This is the parent process.\n");

        printf("Parent process ID is %d\n", getpid());

        printf("Waiting for child process to complete...\n");

        wait(NULL); 

        printf("Child process finished.\n");

    }

 

    return 0;

}

 