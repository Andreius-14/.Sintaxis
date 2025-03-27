using System;

namespace create_global_variable
{
    public class GLOBAL
    {
        public static string name;
        public static String Name { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            GLOBAL.Name = "Delft Stack";
            Console.WriteLine(GLOBAL.Name);
        }
    }
}
