# Oficina Logica 5 Klysm

# 1. Pense em um código em Python com duas funções. Uma função para calcular
# a área de um quadrado e outra função para calcular a área de um retângulo.

# 2. Escreva o código no ambiente de programação em python, salve em um arquivo
# chamado “figuras_geometricas.py” e execute o programa.

# 3. Envie o arquivo  “figuras_geometricas.py” como resposta desta atividade.


# Define as funcoes
def square_area(side):
    return side**2

def rectangle_area(base, height):
    return base*height


print('Programa de calculo da area do quadrado.')
# Inicializa a variavel lado do quadrado
side = float(input('Digite o valor do lado do quadrado: '))
# Exibe a area do quadrado
print(f'Area do quadrado: {square_area(side)}.')

print('Programa de calculo da area do quadrado.')
# Inicializa as variaveis do retangulo
base = float(input('Digite da base do lado do retangulo: '))
height = float(input('Digite da altura do lado do retangulo: '))
# Exibe a area do retangulo
print(f'Area do retangulo: {rectangle_area(base, height)}.')
