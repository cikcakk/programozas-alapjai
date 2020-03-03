kisebb = int(input("Kérem az első számot! "))  
nagyobb = int(input("Kérem a második számot! "))
szam = int(input("Kérem a harmadik számot! "))

# az int függvény használata fontos, mivel az input string-nek értelmezi a bevitt adatot - típuskonverzió :)
#  gyengén típusos javascript-el ellentétben a python erősen típusos nyelv 

if kisebb > nagyobb:
    csere = kisebb
    kisebb = nagyobb
    nagyobb = csere

if szam > nagyobb:
    print("A szám a legnagyobb")
    
elif szam < kisebb: 
    print("A szám a legkisebb")

else: 
    print("A szám a kettő között van")