# IKT-projekt-blackjack
A weboldal a blackjack (huszonegy) játékkal foglalkozik.
A blackjack egy kártyajáték melyet 52 lapos francia kártyával játszanak dzsókerek nélkül.Célja, hogy a játékos lapjainak összértéke minnél jobban megközelítse a 21-et, de azt ne lépje túl!

Lapok értéke:
- Ász: 1 vagy 11; a lap értékét az határozza meg, hogy a leosztás szempontjából melyik érték előnyösebb
- Király, Dáma, Bubi: 10
- Számozott lapok (2–10): a lapon szereplő értéket viselik
A lapok színének a játékban nincs jelentőssége!

A játékot legalább 2 játékos játsza, melynek egyike az osztó.Több játékos esetén minden játékos az osztó ellen játszanak.ű
Mi a játék elején kiválasztott mennyiségű játékossal dolgozunk majd.

A játék menete:
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
	

Használandó kifejezések (események):
- Hit: Lapkérés. A játékos tetszőleges számú lapot kérhet, amég azok összértéke nem haladja meg a 21-et.

- Stand: Megállás. A játékos nem kér több lapot.

- Double: Amennyiben a játékos úgy dönt. hogy az első két lapja elég erős, hogy egy harmadik lappal megnyerje a játékot, akkor a Double bemondásával a tétet duplázza. A játékos a Double bemondása után már csak egy lapot kap, további lapot nem kérhet.

- Split: Ha a játékos első két lapja egy párt alkot (például 5–5 vagy Q–Q), akkor ezt kettéoszthatja, ezzel két „kezet” (hand) hoz létre, valamint mindkettőre azonos tétet tehet meg, azaz a tét duplázódik. Mindkét lapra külön leosztás szerint kérhet lapot.

- Insurance: Ha az osztó színével felfelé látszó lapja Ász, akkor a játékos ezzel a bemondással „biztosítást” köthet. A tét legfeljebb az eredeti tét másfélszerese lehet. Ha az osztó másik kártyájának értéke 10 (10-es, Bubi, Dáma vagy Király), akkor a játékos a tétet 2:1 arányban kapja vissza. Ha az osztó másik kártyájának értéke a 10-estől eltérő, a játékos elveszti a biztosításként behelyezett tétet.

- Surrender: A játékos által, a játék feladására használt kifejezés. Ha a játékosnak csak az osztás utáni két lapja van még meg és úgy ítéli meg, hogy a játékot nem tudja megnyerni, akkor ezzel a bemondással feladhatja a játékot, és a tétje felét elveszti, a másik felét visszakapja.

- Bust: Ha a játékos lapjainak összértéke a 21-et meghaladja, akkor „besokall” és elveszíti a tétjét.
- Push: Ha a játékos és az osztó lapjainak összértéke egyforma, akkor a Push kifejezés a használatos az eredmény közlésére. Ez alól kivétel a Blackjack és a több lapból álló 21 közötti különbség.

- Blackjack: Ha a játékos, vagy az osztó első két lapjának összértéke pontosan 21, akkor azt Blackjack-nek nevezzük. Ez csak úgy lehetséges, ha az egyik lap Ász, a másik lap értéke pedig 10 (Király, Dáma, Bubi, vagy 10-es).

A program felépítése (elképzelés):
- A weboldal egypaklis (Single Deck) blackjack-et fog reprodukálni, több játékossal.
-  Tétrakás: Input mezőben bekérjük a tétet, majd tároljuk (minden játékosnak külön).
- A leosztásnál random sorrendben feltöltött random sorsolt  kártyát égetjük (Splice) majd az ezután az égetett kártya indexére került kártyát osztjuk a játékosnak.
- Az első két lap osztását követően a játékos 5 lehetőségét (Hit, Stand, Double Down, Split, Surrender) közül csak 2 elérhető minden esetben (Hit, Stand), 3 leosztáshoz (hand) kötött (Double Down ill. Surrender - csak az eldő két lapnál, Split - csak két ugyanolyan értékű lapnál).
- Hit: Ismételjük az osztási folyamatot
- Double Down: Egyszer ismételjük a leosztást miután a játékos tétjét duplájára emeltük.
- Stand: Tovább haladunk a következő játékosra (egy játékos esetén az osztóra).
- Split: Megfelezzük a játékos lapjait 2 külön leosztásként kezeljük, de ugyanahhoz a játékoshoz tartoznak.
- Surrender: A játékos feladaja, lapjait visszavesszük, tétje felét elvesszük, felét visszaadjuk.
- Insurance: A játékos tétje max másfélszeresét helyezheti be, amennyiben az osztónak blackjack-je van a játékos az behelyezett biztosítást 2:1 arányban kapja vissza, eredeti tétje elveszik.
- A játékos(ok) köre után az osztó egy egyszerű függvény alapján működik. Amennyiben van még játékban maradt játékos az osztó:
	1: Felfedi lefordított lapját
	2: Osztani kezd magának amég el nem éri a 17-et vagy túl nem lépi a 21-et
	3: 17-nél vagy afelett megáll
- Eredmény:
	- 1: Amennyiben az osztó nyer (látsd a Végeredmény résznél) a játékos(ok) elvesztik tétjeiket.
	- 2: Amennyiben az osztó veszít (látsd a Végeredmény résznél) a játékos(ok) tétje kétszeresét kapja vissza.
	- 3: Amennyiben a játékos és az osztó lapjainak összértéke megegyezik a játékos visszakapja behelyezett tétjét.
	- 4: Amennyiben a játékos(ok) blackjack-el nyernek a tétjük háromszorosát kapják visza.
- A játék megismétlését a játékos dönti el.
