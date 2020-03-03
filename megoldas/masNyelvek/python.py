oldalHossza = input("Kérem a kocka oldalának a hosszát: ");
oldalHossza = int(oldalHossza); 
oldalHossza = abs(oldalHossza);

alapTerulet = pow(oldalHossza, 2);
terfogat = pow(oldalHossza, 3);

print("A kocka alapterülete:", alapTerulet);
print("A kocka térfogata:",terfogat);