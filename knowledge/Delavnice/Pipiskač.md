---
vrsta: delavnica
status: osnutek
podrocje:
  - nosljiva tehnologija
  - e-tekstil
  - elektronika
  - programiranje
tezavnost: 4
starost: "9+"
avtorji:
  - Eva Pondrk
  - Sanja Hrvaćanin
  - Gregor Krpič
viri:
  - ../Viri/PDF/Pipiskač_print.pdf
oznake:
  - delavnica
  - e_tekstil
  - nosljiva_tehnologija
  - drza
  - senzorji
cssclasses:
  - kb-note
  - note-delavnica
---

# Pipiskač

## Kratek opis

Pipiskač je delavnica izdelave nosljivega pripomočka za opozarjanje na nepravilno držo. Udeleženci skozi sestavo vezja, spajkanje, šivanje in nalaganje kode izdelajo e-tekstilni objekt, ki s piskanjem opozori, kdaj se telo oddalji od izbranega položaja pravilne drže.

## Cilji

- spoznati osnove [[Nosljiva tehnologija|nosljive tehnologije]] in e-tekstila
- razumeti vlogo žiroskopa in osnovne povezave z mikrokontrolerjem
- izdelati preprost tekstilni nosilec za elektronsko vezje
- naložiti kodo in umeriti napravo za zaznavanje drže

## Za koga je primerna

- za udeležence, ki jih zanimajo elektronika, tekstil in interaktivni objekti
- za delavnice, kjer želimo povezati mehke materiale z osnovami programiranja
- za skupine z nekaj potrpežljivosti za natančno spajkanje, šivanje in sestavo

## Potrebna oprema in materiali

- LilyPad
- žiroskop MPU6050 s konektorjem
- [[Piezo piskač]]
- LiPo baterija 3,5 V
- elastika
- neopren
- navaden sukanec
- prevodni sukanec
- 6 žic
- cin
- ježek
- šivanka z večjim ušesom
- navadna šivanka
- škarje
- [[Spajkalnik]]
- orodje za lupljenje žic ali olfa nož
- računalnik z Arduino IDE
- kabel za nalaganje kode

## Potek

### Uvod

Labbook delavnico odpre z vprašanjem, kaj je [[Nosljiva tehnologija|nosljiva tehnologija]], in jo poveže z zgodovino e-tekstila, umetniškimi referencami ter z razlago vestibularnega organa in delovanja žiroskopa.

### Glavni del

Udeleženci najprej pripravijo in zaspajkajo elektronsko vezje z [[Piezo piskač|piskačem]] in žiroskopom, nato na LilyPad naložijo kodo ter sestavijo še tekstilni nosilec, ki vezje namesti med lopatice.

### Koraki izvedbe

1. Pripravimo šest žic in jih na obeh straneh olupimo približno 0,5 cm.
2. Na [[Piezo piskač|piskač]] prispajkamo dve žici in pazimo na orientacijo plusa in minusa.
3. Na žiroskop najprej pritrdimo konektor, nato nanj prispajkamo žice za pine VCC, GND, SLC in SDA.
4. Druge konce žic povežemo z LilyPadom: piskač na pin 9 in GND, žiroskop pa na plus, minus, pin 3 in pin 2.
5. Prek Arduino IDE na LilyPad naložimo kodo in preverimo, ali naprava ob spremembi kota začne piskati.
6. Elastiko zašijemo v prekrižano obliko osmice in jo pomerimo na hrbtu.
7. Vezje prišijemo na elipsast kos neoprena in pazimo na pravilno orientacijo žiroskopa.
8. Povezave na LilyPadu dodatno utrdimo s prevodnim sukancem.
9. Neopren prišijemo na elastiko tako, da bo vezje nameščeno med lopaticama.
10. Baterijo pritrdimo na neopren z ježkom, napravo nadenemo in poiščemo kot, pri katerem piskanje preneha.

### Zaključek

Nastane nosljiv pripomoček, ki povezuje telo, senzoriko, tekstil in kodo. Delavnica dobro pokaže, kako se lahko elektronski sistem prevede v mehko, vsakdanji rabi prilagojeno obliko.

## Pomembne opombe

- pri priklopu žiroskopa je pomembna pravilna orientacija pinov
- kabel v konektor LilyPada vstavimo previdno in nežno
- položaj žiroskopa na neoprenu vpliva na pravilno delovanje zaznave
- pred končno uporabo je treba napravo na telesu preizkusiti in po potrebi ponovno umeriti

## Ključni koncepti

- [[Nosljiva tehnologija]]
- [[Mikrokrmilnik]]
- [[Senzor]]
- [[Spajkanje]]
- drža telesa

## Povezane metode

- [[Učenje z izdelovanjem]]
- [[Praktično prototipiranje]]
- [[Iterativno prototipiranje]]

## Povezano

- [[Spajkalnik]]
- [[Piezo piskač]]
- [[Mikrokrmilni modul]]
- [[Povezovalne žičke]]

## Avtorji in reference

- Eva Pondrk
- Sanja Hrvaćanin
- [[Gregor Krpič]]

## Umetniške reference

- Hug Shirt

## Viri

- [Pipiskač_print.pdf](/home/dinozaver/Vajblounge/Rampastran2/knowledge/Viri/PDF/Pipiskač_print.pdf)
