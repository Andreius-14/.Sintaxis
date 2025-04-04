# Python program to illustrate isspace()
txt = ' '
print(txt.isspace()) #True

txt = '    '
print(txt.isspace()) #True

txt = '\n \t'
print(txt.isspace()) #True

txt = '\r\t\n'
print(txt.isspace()) #True

txt = 'Hola Mundo'
print("Hola Mundo :", txt.isspace())  #False
