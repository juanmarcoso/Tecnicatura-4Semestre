from mi_clase import MiClase

# help(MiClase) # Muestra la documentacion de la clase
# help(MiClase.__init__) # Muestra la documentacion del metodo __init__
# help(MiClase.mi_metodo) # Muestra la documentacion del metodo mi_metodo

# print(MiClase.__doc__) # Imprime la documentacion de la clase
# print(MiClase.__init__.__doc__) # Imprime la documentacion del metodo __init__
# print(MiClase.mi_metodo.__doc__) # Imprime la documentacion del metodo mi_metodo
print(type(MiClase.mi_metodo.__doc__)) # Imprime el tipo de dato de la documentacion del metodo mi_metodo
print(type(MiClase.mi_metodo)) # Imprime el tipo de dato del metodo mi_metodo
