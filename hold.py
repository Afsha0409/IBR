n1=input("Enter username:")
n2=input("Enter email-ID:")
n3=input("Enter password:")

if(len(n1)<=25):
    if(len(n2)<=25):
        if(len(n3)<=8 and n3=="@"):
            print("You Successfully SignedUp")
            