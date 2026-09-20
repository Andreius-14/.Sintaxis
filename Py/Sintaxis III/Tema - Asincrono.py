import asyncio


# EXAMPLE - 01
async def saludar():
    await asyncio.sleep(1)  # Simula una operación lenta
    print("¡Hola desde una corutina!")


asyncio.run(saludar())  # Ejecuta la corutina


# EXAMPLE - 02


async def tarea1():
    await asyncio.sleep(1)
    print("Tarea 1 terminada")


async def tarea2():
    await asyncio.sleep(2)
    print("Tarea 2 terminada")


async def main():
    await asyncio.gather(tarea1(), tarea2())  # Ejecuta ambas al mismo tiempo


asyncio.run(main())
