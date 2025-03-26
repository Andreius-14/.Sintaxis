  // ==========================================
        // 1. WHILE TRADICIONAL (condición al inicio)
        // ==========================================
        int contador = 0;
        while (contador < 3) // Verifica primero
        {
            Console.WriteLine($"Iteración: {contador}");
            contador++;
        }

        // ==========================================
        // 2. DO-WHILE (condición al final)
        // ==========================================
        int numero;
        do // Ejecuta al menos una vez
        {
            Console.Write("Ingresa un número positivo: ");
            numero = int.Parse(Console.ReadLine());
        } while (numero <= 0);
        Console.WriteLine($"Correcto: {numero} > 0");

        // ==========================================
        // 3. WHILE INFINITO (con break)
        // ==========================================
        int i = 0;
        while (true) // Bucle "infinito" controlado
        {
            if (i >= 3) break; // Salida forzada
            Console.WriteLine($"i = {i}");
            i++;
        }

