#include <stdio.h>
#include <string.h>

int main(){
    char *result[100];
    int i;
    for(i = 0; i < 100; i++){
        if(i % 3 == 0 && i % 5 == 0){
            printf("%d %s\n", i, "fizzbuzz");
            // result[i] = "fizzbuzz";
        } else if(i % 3 == 0){
            printf("%d %s\n", i, "fizz");
            // result[i] = "fizz";
        } else if(i % 5 == 0){
            printf("%d %s\n", i, "buzz");
            // result[i] = "buzz";
        }
    }
    // printf("%s", &result);
    return 0;
}


