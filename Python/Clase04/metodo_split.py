
# help(str.split)

cursos = 'Python Java Angular Spring'
lista_cursos = cursos.split() # Por defecto separa por espacios
print(f'Lista cursos: {lista_cursos}, Type: {type(lista_cursos)}') # ['Python', 'Java', 'Angular', 'Spring'], Type: <class 'list'>
print(f'Cantidad de elementos: {len(lista_cursos)}') # Cantidad de elementos: 4

cursos_separados_coma = 'Python,Java,Angular,Spring'
lista_cursos = cursos_separados_coma.split() 
print(f'Lista cursos: {lista_cursos}, Type: {type(lista_cursos)}')
print(f'Cantidad de elementos: {len(lista_cursos)}') # ['Python,Java,Angular,Spring'], Cantidad de elementos: 1
lista_cursos = cursos_separados_coma.split(',')
print(f'Lista cursos: {lista_cursos}') # ['Python,Java,Angular,Spring']
print(f'Cantidad de elementos: {len(lista_cursos)}') # Cantidad de elementos: 4

lista_cursos = cursos_separados_coma.split(',', 2) # Maximo 2 separaciones
print(f'Lista cursos: {lista_cursos}') # ['Python', 'Java', 'Angular,Spring']
print(f'Cantidad de elementos: {len(lista_cursos)}') # Cantidad de elementos: 3

