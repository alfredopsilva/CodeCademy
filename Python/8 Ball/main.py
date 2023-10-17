import random
print("Welcome to Magic 8 Ball")
user = input("What is your name?")
question = input(f"Hello {user}, make a question for me.")

number = random.randint(1, 10)
answer = None

if number == 1:
    answer = "Yes - definitely"
elif number == 2:
    answer = "It is decidedly so"
elif number == 3:
    answer = "Without a doubt"
elif number == 4:
    answer = "Reply hazy, try again"
elif number == 5:
    answer = "Ask again later"
elif number == 6:
    answer = "Better not tell you now"
elif number == 7:
    answer = "My sources say no"
elif number == 8:
    answer = "Outlook not so good"
elif number == 9:
    answer = "Very doubtful"
else:
    answer = "Hey Dev, we have an error. Look to your conditions."


print(f"{user} asks: {question}\nMagic 8-Ball's answer:  {answer}.")