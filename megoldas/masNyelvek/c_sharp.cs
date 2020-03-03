using System;

namespace Kocka
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Kérem adja meg a kocka egyik élének hosszát!");
            int a = Convert.ToInt32(Console.ReadLine());
            int Terulet = a * a;
            Console.WriteLine("A kocka alapterülete: " + Terulet);
            int Terfogat = a * a * a;
            Console.WriteLine("A kocka térfogata: " + Terfogat);
            Console.ReadKey();
        }
    }
}