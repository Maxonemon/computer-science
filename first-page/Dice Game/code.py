# memp
print("--- pierre ---")
print("--- papier ---")
print("--- Sciseaux ---")

# prompt the players

player1 = input("Player 1, give your choice: ")

print(" Close your ice" * 30)

player2 = input("Player 1, give your choice: ")

# who win ?

if player1 == "pierre":
    if player2 == "papier":
        print("player2 win")
    elif player2 == "sciseaux":
        print("player1 win")

elif player1 == "papier":
    if player2 == "pierre":
        print("player1 win")
    elif player2 == "sciseaux":
        print("player2 win")

elif player1 == "sciseaux":
    if player2 == "papier":
        print("player1 win")
    elif player2 == "pierre":
        print("player2 win")

else:
    print("Enter a valid value.")