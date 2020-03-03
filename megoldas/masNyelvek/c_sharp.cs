using System;

namespace _05
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Kérem a számot!");
            int x = 0;
            x = Convert.ToInt32(Console.ReadLine());
            int eredmeny = x * x;
            Console.WriteLine("A szám négyzete: " + eredmeny);
            Console.ReadKey();
        }
    }
}