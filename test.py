# # Open the file for writing
# with open("./file.txt", "w") as f:
#     # Write the string "helllllll" to the file
#     f.write("helllllll")

# # Open the file for reading
# with open("./file.txt", "r") as f:
#     cont=f.read()
#     print(cont)
#     # Iterate over each line in the file
#     for item in cont:
#         # Print each line to the console
#         print(item)

# # No need to explicitly close the file when using with statement
f=open("./file.txt","w")
L=["1\n","2\n","34\n"]
f.writelines(L)
f.close()

f=open("./file.txt","r")
for i in f:
    print(i)
    
f.close()