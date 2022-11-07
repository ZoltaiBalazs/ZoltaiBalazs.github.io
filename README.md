# IKT-projekt-blackjack
A veboldal a blackjack (magyarul huszonegy) játékkal foglalkozik.
A blackjack egy kártyajáték melyet 52 lapos francia kártyával játszanak dzsókerek nélkül.Célja, hogy a játékos lapjainak összértéke minnél jobban megközelítse a 21-et, de azt ne lépje túl!

Lapok értéke:
-Ász: 1 vagy 11; a lap értékét az határozza meg, hogy a leosztás szempontjából melyik érték előnyösebb
-Király, Dáma, Bubi: 10
-Számozott lapok (2–10): a lapon szereplő értéket viselik
A lapok színének a játékban nincs jelentőssége!

A játékot legalább (mi ezt az esetet reprodukáljuk majd) 2 játékos játsza, melynek egyike az osztó.Több játékos esetén a játékosok az osztó ellen játszanak.

A játék menete:
-Tét: A játék a tét megadásásval kezdődik. A játékos álzal megadható minimum tétet a ház határozza meg.
-Osztás: Az osztó a játékosnak oszt egy lapot, a színével felfelé, majd egyet saját magának is, szintén a 	színével felfelé. Ezután ismét oszt a játékosnak egy újabb lapot a színével felfelé, valamint saját magának is, de ezt már színével lefelé. Ezt a lapot a játékos nem láthatja.
-Lapkérés: A játékos az osztást követően a kiövetkezőket teheti:
	- Kérhet lapot (Hit)
	- Megállhat (Stand)
	- Megduplázhatja tétjét (Double/ Double down)
	- Azonos értékű lapok esetén Megfelezheti (Split) lapjait így a továbbiakban két leosztással játszik
	- Feladhatja (Surrender/Forefit)
	Amennyiben a játékos lapjainak összértéke lapkérés közben meghaladja a 21-et a játékos autómatikusan veszít (Bust).
	- Miután a lapkérés véget ért minden játékos számára az osztó felfedi az eddig lefordított második lapját, majd magának kezd oszatni amég lapjai értéke el nem éri a 17-et (ez alatt nem állhat meg).
-Végeredmény:
	- Ha a játékos lapjainak összértéke közelebb van a 21-hez, mint az osztóé, akkor a játékos a tétet 2:1 arányban kapja meg.
	- Ha az osztó lapjainak összértéke közelebb van a 21-hez, mint a játékosé, akkor a játékos elvesztette a tétet.
	- Ha a játékos és az osztó lapjainak összértéke egyforma, akkor az állás döntetlen (Push), a megtett tétet visszakapja a játékos.
	- Ha a játékos lapjainak összértéke a játék során a 21-et meghaladja (Bust), akkor a játékos elvesztette a tétet, az osztó későbbi eredményétől függetlenül.
	- Ha az osztó lapjainak összértéke a játék során a 21-et meghaladja (Bust), akkor a játékos a tétet 2:1 arányban kapja meg.
	- Ha a játékos az első két lapjának összértéke pontosan 21 (Blackjack), és az osztó nem Blackjack-et ért el, akkor a játékos a megtett tétet 3:2 arányban kapja meg.
	

Kifejezések (események):
- Hit: Lapkérés. A játékos tetszőleges számú lapot kérhet, amég azok összértéke nem haladja meg a 21-et.

- Stand: Megállás. A játékos nem kér több lapot.

- Double: Amennyiben a játékos úgy dönt. hogy az első két lapja elég erős, hogy egy harmadik lappal megnyerje a játékot, akkor a Double bemondásával a tétet duplázza. A játékos a Double bemondása után már csak egy lapot kap, további lapot nem kérhet.

- Split: Ha a játékos első két lapja egy párt alkot (például 5–5 vagy Q–Q), akkor ezt kettéoszthatja, ezzel két „kezet” (hand) hoz létre, valamint mindkettőre azonos tétet tehet meg, azaz a tét duplázódik. Mindkét lapra külön leosztás szerint kérhet lapot.

- Insurance: Ha az osztó színével felfelé látszó lapja Ász, akkor a játékos ezzel a bemondással „biztosítást” köthet. A tét legfeljebb az eredeti tét másfélszerese lehet. Ha az osztó másik kártyájának értéke 10 (10-es, Bubi, Dáma vagy Király), akkor a játékos a tétet 2:1 arányban kapja vissza. Ha az osztó másik kártyájának értéke a 10-estől eltérő, akkor az osztó nyer.

- Surrender: A játékos által, a játék feladására használt kifejezés. Ha a játékosnak csak az osztás utáni két lapja van még meg és úgy ítéli meg, hogy a játékot nem tudja megnyerni, akkor ezzel a bemondással feladhatja a játékot, és a tétje felét elveszti, a másik felét visszakapja.

- Bust: Ha a játékos lapjainak összértéke a 21-et meghaladja, akkor „besokall” és elveszíti a tétjét.
Push: Ha a játékos és az osztó lapjainak összértéke egyforma, akkor a Push kifejezés a használatos az eredmény közlésére. Ez alól kivétel a Blackjack és a több lapból álló 21 közötti különbség.

- Blackjack: Ha a játékos, vagy az osztó első két lapjának összértéke pontosan 21, akkor azt Blackjack-nek nevezzük. Ez csak úgy lehetséges, ha az egyik lap Ász, a másik lap értéke pedig 10 (Király, Dáma, Bubi, vagy 10-es).

A program felépítése (elképzelés):
A weboldal egypaklis (Single Deck)