# IKT-projekt-blackjack
A weboldal a blackjack (huszonegy) játékkal foglalkozik.
A blackjack egy kártyajáték melyet 52 lapos francia kártyával játszanak dzsókerek nélkül.Célja, hogy a játékos lapjainak összértéke minnél jobban megközelítse a 21-et, de azt ne lépje túl!

----------------------------------------------Lapok értéke----------------------------------------------

- Ász: 1 vagy 11; a lap értékét az határozza meg, hogy a leosztás szempontjából melyik érték előnyösebb
- Király, Dáma, Bubi: 10
- Számozott lapok (2–10): a lapon szereplő értéket viselik
A lapok színének a játékban nincs jelentőssége!

A játékot legalább 2 játékos játsza, melynek egyike az osztó.Több játékos esetén minden játékos az osztó ellen játszanak.ű
Mi a játék elején kiválasztott mennyiségű játékossal dolgozunk majd.

---------------------------------------------A játék menete---------------------------------------------

- Tét: A játék a tét megadásásval kezdődik. A játékos által megadható minimum tétet a ház határozza meg (jelen esetben 10).
- Osztás: Az osztó a játékosnak oszt egy lapot, a színével felfelé, majd egyet saját magának is, szintén színével felfelé. Ezután ismét oszt a játékosoknak egy lapot a színével felfelé, valamint saját magának is, de ezt már színével lefelé. Ezt a lapot a játékos nem láthatja.
- Lapkérés: A játékos az osztást követően a következőket teheti:
	- Kérhet lapot (Hit)
	- Megállhat (Stand)
	- Megduplázhatja tétjét (Double/ Double down)
	- Azonos értékű lapok esetén Megfelezheti (Split) lapjait így a továbbiakban két leosztással játszik
	- Feladhatja a játékot (Surrender/Forefit)
- Miután a lapkérés véget ért minden játékos számára az osztó felfedi az eddig lefordított második lapját, majd magának kezd oszatni amég lapjai értéke el nem éri a 17-et (ez alatt nem állhat meg).
-Végeredmény:
	- Ha a játékos lapjainak összértéke közelebb van a 21-hez, mint az osztóé, akkor a játékos a tétet 2:1 arányban kapja meg.
	- Ha az osztó lapjainak összértéke közelebb van a 21-hez, mint a játékosé, akkor a játékos elvesztette a tétet.
	- Ha a játékos és az osztó lapjainak összértéke egyforma, akkor az állás döntetlen (Push), a megtett tétet visszakapja a játékos.
	- Ha a játékos lapjainak összértéke a játék során a 21-et meghaladja (Bust), akkor a játékos elvesztette a tétet, az osztó későbbi eredményétől függetlenül.
	- Ha az osztó lapjainak összértéke a játék során a 21-et meghaladja (Bust), akkor a játékos a tétet 2:1 arányban kapja meg.
	- Ha a játékos az első két lapjának összértéke pontosan 21 (Blackjack), és az osztó nem Blackjack-et ért el, akkor a játékos a megtett tétet 3:2 arányban kapja meg.
	
-----------------------------------Használandó kifejezések (események)----------------------------------

- Hit: Lapkérés. A játékos tetszőleges számú lapot kérhet, amég azok összértéke nem haladja meg a 21-et.

- Stand: Megállás. A játékos nem kér több lapot.

- Double: Amennyiben a játékos úgy dönt. hogy az első két lapja elég erős, hogy egy harmadik lappal megnyerje a játékot, akkor a Double bemondásával a tétet duplázza. A játékos a Double bemondása után már csak egy lapot kap, további lapot nem kérhet.

- Split: Ha a játékos első két lapja egy párt alkot (például 5–5 vagy Q–Q), akkor ezt kettéoszthatja, ezzel két „kezet” (hand) hoz létre, valamint mindkettőre azonos tétet tehet meg, azaz a tét duplázódik. Mindkét lapra külön leosztás szerint kérhet lapot.

- Insurance: Ha az osztó színével felfelé látszó lapja Ász, akkor a játékos ezzel a bemondással „biztosítást” köthet. A tét legfeljebb az eredeti tét másfélszerese lehet. Ha az osztó másik kártyájának értéke 10 (10-es, Bubi, Dáma vagy Király), akkor a játékos a tétet 2:1 arányban kapja vissza. Ha az osztó másik kártyájának értéke a 10-estől eltérő, a játékos elveszti a biztosításként behelyezett tétet.

- Surrender: A játékos által, a játék feladására használt kifejezés. Ha a játékosnak csak az osztás utáni két lapja van még meg és úgy ítéli meg, hogy a játékot nem tudja megnyerni, akkor ezzel a bemondással feladhatja a játékot, és a tétje felét elveszti, a másik felét visszakapja.

- Bust: Ha a játékos lapjainak összértéke a 21-et meghaladja, akkor „besokall” és elveszíti a tétjét.
- Push: Ha a játékos és az osztó lapjainak összértéke egyforma, akkor a Push kifejezés a használatos az eredmény közlésére. Ez alól kivétel a Blackjack és a több lapból álló 21 közötti különbség.

- Blackjack: Ha a játékos, vagy az osztó első két lapjának összértéke pontosan 21, akkor azt Blackjack-nek nevezzük. Ez csak úgy lehetséges, ha az egyik lap Ász, a másik lap értéke pedig 10 (Király, Dáma, Bubi, vagy 10-es).

------------------------------------------A program felépítése------------------------------------------

Elsődleges cél: Egy leosztás reprodukálása (a játékosok a játékm elején megadott tétjük egészével játszanak, a játék csak akkor ismétlődik, ha azt teljesen újraindítját ("Reset" gomb))

Fejlesztési lehetőség: Több leosztás reprodukálása (A játékosok a hjték elején megadott tétjükböl minden leosztás előtt új tétet raknak. A játékot az "új leosztás" gombbal ismételjük)


- A játék kezdete:
	- Játékosszám bekérése:
		- Egy input mezővel bekérjük a játékosok számát a felhasználótól. A "player_num" változó felveszi az input mezőben megadott értéket
	- Játékosok tétjeinek bekérése, külön külön eltárolása
	- A "strat" gomb megnyomása lefuttatja a "startblackjack()" függvényt, ami:
		- Létrehozza a paklit
		- A létrehozott paklin belüli elemeket megkeveri
		- Létrehozza a játékosok (array)
		- Megjeleníti a játékosokat
		- Elvégzi az első leosztást
- Lapkérés:
	- Függvénnyel eldöntjük, hogy a játékos két lapja egyenértékű-e, amennyiben igen megjelenítjük a "split" opciót (gomb)
	- A játék folytatásának módja a játékoson múlik (melyik gombot nyomja meg):
		- "hit" gomb megnyomása: Lefut a "hitMe()" függvény: A pakli utolsó elemét "deck.pop"-al kiveszi, hozzáadja a játékos leosztásához ill. ellenőrzi ("check()"), hogy a játékos nem lépte-e túl a 21-et. A folyamat addig ismétlődik amég a játékos nem lépi túl a 21-et vagy nem nyom rá a "stand" gobra.
		- "stand" gomb megnyomása: Lefut a "stay()" Nem végzünk semmilyen változtatást.
		- "double down" gomb megnyomása: Lefuttat egy duplázó függvényt ami megduplázza a játékos tétjét, ezután lefut a "check()" ami ellenőrzi, hogy a játékos nem lépte-e túl a 21-et.
		- "surrender" gomb megnyomása: Lefut a "stay()" ill. a játékos megjelenítését kiszürkítjük.
		- "split" gomb megnyomása: Lefut egy felező függvény ami a játékos leosztását két különálló "hand array"-re osztja.
	- Amennyiben a játékos túllépi a 21-et a "check()" kiírja, hogy az adott játékos vesztett majd lefuttatja a "stay()"
	- Amennyiben a játékos nem lépi túl a 21-et lefuttatja a "stay()"
- Osztó:
	- Addig futtatja a "hit()" amég el nem éri a 17-et vagy meg nem haladja a 21-et. Minden leosztás után lefut a "check()"
	- 17-nél vagy felette megáll, lefut az "end()" ami a játékosok és az osztó pontjai alapján kiértékeli a játékot, kiírja a győztest.
	
	

