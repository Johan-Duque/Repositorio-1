if 1 == 2: 
    tupla = ("johan","duque")
    tupla_2 = "johan","duque"
    tupla_3 = tuple(["johan","duque"])

    nombre, apellido = tupla_3

    print(f"Nombre: {nombre} | Apellido: {apellido}")

if 1 == 2:
    # Meotodo frozenset para meter un conjunto dentro de otro

    conjunto_1 = frozenset([1,2,3,4])
    conjunto_2 = {conjunto_1, 5,6}

    print(conjunto_2)

    # Verificando si hay un subconjunto o un superconjunto

    resultado_c1 = conjunto_1.issubset(conjunto_2)
    resultado_c2 = conjunto_1.issuperset(conjunto_1)

if 1 == 2: 
    # Una tupla puede ser clave de un diccionario

    diccionario_1 = {
        ("Nombre","Completo") : "Johan"
    }

    diccionario_2 = {
     frozenset(["N","P"]) : "Johan"
    }

    keys = diccionario_2.fromkeys("Nombre","Completo")

    # Forma de crear keys en un diccionario, y asignarles un valor por defecto
    valores_none = diccionario_1.fromkeys("ABCD","Valor fijo")

    print(valores_none)

if 1 == 2:
    # Ciclos for in [Para todos los elementos]

    lista1 = [1,2,3]
    lista2 = ["a","b","c"]

    for var1,var2 in zip(lista1,lista2):
        print(f"el valor[{var1}] es: {var2}")

    for var1 in range(5): # No funciona con las tuplas
        print(f"el valor es: {var1}")

    for var1 in enumerate(lista1):
        print(f"el valor[{var1[1]}]")

# Forma de iterar diccionarios: 

diccionario = {
    "nombre"   : "johan",
    "apellido" : "duque"
}

# Forma de iterar los keys de los diccionarios
for key in diccionario: 
    print(f"La key es: {key}")

# Forma de iterar con el valor de los keys de los diccionarios
print("")
for key in diccionario.items(): 
    print(f"La key es: [{key[0]}] y el valor es: [{key[1]}]")

# Forma de iterar con el [continue] y el [break]. --> ¡El else no funciona cuando se aplica un break!

print("")
lista = ["manzana","pera","banana","mora","durazno"]
for key in lista: 
    if key == "banana":
        continue
    print(f"La fruta es: {key}")
    if key == "durazno":
        break
else:
    print("bucle terminado")

# For en una linea de codigo:

numeros = [1,2,3,4,5]
numeros_sumados = [x+1 for x in numeros]
print(numeros_sumados)
