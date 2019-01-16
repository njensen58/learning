#include <stdio.h>
#include <string.h>
#include <stdlib.h>

// STRUCTS
typedef struct {
    char name[20];
    int hp;
    char loot[100];
    int loot_index;
} player;

typedef struct {
    char name[20];
    int hp;
    char loot[10];
} enemy;

typedef struct cur_enemy Enemy;


// GLOBAL VARS
player player1 = {{""}, 100, {}, 0};
void *current_enemy = NULL;


// FUNCTIONS
void game_loop();
void walk();
void generate_enemy();
void battle(enemy *cur_enemy);
int player_attack();
int weak_enemy_attack();
int med_enemy_attack();
int str_enemy_attack();
void end_game();
void battle_resolution(enemy *cur_enemy);

int main(){
    printf("Welcome to the RPG...\n  \tWhat is your name player?: \n\n\t");
    scanf("%s", player1.name);
    printf("\t\tThank you %s\n.", player1.name);

    game_loop();
    return 0;
}

// GAME LOOP FUNCTION
void game_loop(){
    while(player1.hp > 0){
        printf("\n\n\t\tControls: \n\t\t\tPress \'w\' to walk\n\t\t\tPress\'p\' to see your stats\n\n");
        printf("\n\tWhat would you like to do?\n");
        char choice[2];
        scanf("%s", choice);
        if(strcmp(choice, "w") == 0){
            printf("\n\n\tYou chose to walk!\n\n");
            walk();
        } else if(strcmp(choice, "p") == 0){
            char loot[200];
            for(int i = 0; i < strlen(player1.loot); i++){
                loot[i] = player1.loot[i];
            }
            printf("\n\n\n\tYour Stats:\n\t\tName: %s\n\t\tHealth: %d\n\t\tLoot: %s", player1.name, player1.hp, loot);
        }
    };
    end_game();
}


// WALK FUNCTION
void walk(){
    int random_chance = (rand() % 100);
    if(random_chance > 49){
        printf("\t\tBATTLE!!!!\n\n");
        generate_enemy();
    } else if(random_chance <= 49){
        printf("\t\tRANDOM SEQUENCE!!!!\n\n");
    }
}

// BATTLE FUNCTION
void generate_enemy(){
    int random_chance = (rand() % 100);
    enemy cur_enemy;
    if(random_chance < 25){
        strcpy(cur_enemy.name, "Troll");
        strcpy(cur_enemy.loot, "Gem");
        cur_enemy.hp =  20;
    } else if(random_chance >= 25 && random_chance < 50){
        strcpy(cur_enemy.name, "Demon");
        strcpy(cur_enemy.loot, "Fang");
        cur_enemy.hp = 35;
    } else if(random_chance >= 50 && random_chance < 75){
        strcpy(cur_enemy.name,"Imp");
        strcpy(cur_enemy.loot,"Gold");
        cur_enemy.hp = 10;
    } else if(random_chance >= 75 && random_chance < 100){
        strcpy(cur_enemy.name, "Dragon");
        strcpy(cur_enemy.loot, "Horn");
        cur_enemy.hp = 40;
    }

    printf("Name: %s,  Health: %d\n\n", cur_enemy.name, cur_enemy.hp);
    enemy *current_enemy = &cur_enemy;
    battle(current_enemy);
}

// BATTLE FUNCTION
void battle(enemy *current_enemy){
    while(current_enemy->hp > 0 && player1.hp > 0){
        int p_attack = player_attack();
        int weak_attack = weak_enemy_attack();
        
        if(weak_attack < 0){
            weak_attack = 3;
        }
        (*current_enemy).hp -= p_attack;
        player1.hp -= weak_attack;
        printf("\n\n\t\t%s hits %s for %d!!  What a hit!\n", player1.name, current_enemy->name, p_attack);
        printf("\n\t\t\t%s hits back for %d!!  Awh shit!\n", current_enemy->name, weak_attack);
    }
    if(current_enemy->hp < 0){
        battle_resolution(current_enemy);
    }
}


int player_attack(){
    int attack;
    attack = (rand() % 100) - 10;
    if(attack < 0)
        attack = 8;
    return attack;
}

int weak_enemy_attack(){
    int attack;
    attack = ((rand() % 100) - 45) + 2;
    if(attack < 0)
        attack = 3;
    return attack;
}

int med_enemy_attack(){
    int attack;
    attack = ((rand() % 100) - 30) + 3;
    if(attack < 0)
        attack = 4;
    return attack;
}

int str_enemy_attack(){
    int attack;
    attack = ((rand() % 100) - 25) + 4;
    if(attack < 0)
        attack = 5;
    return attack;
}

void battle_resolution(enemy *cur_enemy){
    printf("\n\n\tYou defeated the %s ", cur_enemy->name);
    strcpy(&player1.loot[player1.loot_index], cur_enemy->loot);
    player1.loot_index++;
}

void end_game(){
    printf("\n\n\n\t\tYou dead son...");
}
