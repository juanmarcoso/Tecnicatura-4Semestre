
# help(str.join)
tupla_str = ('Hola', 'alumnos', 'Tecnicatura', 'Universitaria')
mensaje = ' '.join(tupla_str)
print(f'Mensaje: {mensaje}') # Hola alumnos Tecnicatura Universitaria

lista_cursos = ['Python', 'Java', 'Angular', 'Spring']
mensaje = ', '.join(lista_cursos)
print(f'Mensaje: {mensaje}') # Python, Java, Angular, Spring

cadena = 'HolaMundo'
mensaje = '.'.join(cadena)
print(f'Mensaje: {mensaje}') # H.o.l.a.M.u.n.d.o

diccionario = {'nombre': 'Juan', 'apellido': 'Pérez', 'edad': '30'}
llaves = '-'.join(diccionario.keys())
valores = '-'.join(diccionario.values())
print(f'Llaves: {llaves}, Type: {type(llaves)}') # nombre-apellido-edad
print(f'Valores: {valores}, Type: {type(valores)}') # Juan-Pérez-30