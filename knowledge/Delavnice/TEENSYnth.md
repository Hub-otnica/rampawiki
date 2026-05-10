---
vrsta: delavnica
status: osnutek
podrocje:
  - programiranje
  - zvok
  - elektronika
  - naredi-sam
tezavnost: 3
avtorji:
  - Tara Pattenden
viri:
  - ../Viri/PDF/TEENSYnth-ENG-web.pdf
  - ../Viri/Prepisano/TEENSYnth-ENG-web.md
oznake:
  - delavnica
  - teensy
  - zvok
  - programiranje
  - senzorji
cssclasses:
  - kb-note
  - note-delavnica
---

# TEENSYnth

## Kratek opis

TEENSYnth je delavnica, v kateri iz ploščice Teensy, breadboarda, avdio izhoda in sadežev nastane preprost zvočni instrument. Udeleženci skozi sestavljanje vezja in prilagajanje kode spoznajo osnove mikrokrmilnikov, kapacitivnega dotika in sinteze zvoka.

## Cilji

- namestiti in uporabiti Arduino IDE ter Teensyduino
- razumeti osnovno delovanje mikrokrmilnika Teensy in breadboarda
- izdelati interaktiven zvočni instrument z uporabo kapacitivnega dotika

## Za koga je primerna

- za udeležence z osnovnim interesom za zvok, elektroniko in kodo
- za skupine, ki želijo povezati programiranje z otipljivim zvočnim rezultatom
- za delavnice, kjer je dobrodošlo samostojno eksperimentiranje in ponavljanje vaj

## Potrebna oprema in materiali

- Teensy 3.2 s pini
- breadboard
- [[Povezovalne žičke]]
- dodatna žica dolžine približno 15 do 20 cm
- [[Avdio vtičnica]]
- slušalke ali zvočnik
- USB podatkovni kabel
- računalnik z nameščenim Arduino IDE
- kos sadja
- po želji 2 potenciometra 10K LIN
- po želji LDR

## Potek delavnice

Labbook je zastavljen kot zaporedje vaj:

1. namestitev programske opreme in test ploščice
2. izdelava prvega zvoka s sadjem
3. branje vhodov in razumevanje kode
4. dodajanje več sadežev oziroma več tonov
5. upravljanje višine tona s potenciometrom ali LDR-jem

## Potek

### Uvod

Labbook najprej uvede Teensy kot [[Mikrokrmilnik|mikrokrmilnik]], predstavi breadboard ter razloži kapacitivni dotik kot način zaznavanja prevodnih materialov, med katere spada tudi sadje.

### Glavni del

Jedro delavnice združuje sestavljanje vezja na breadboardu, povezovanje sadja na vhodne pine, nalaganje primerov kode in postopno prilagajanje parametrov zvoka.

### Koraki izvedbe

1. Na računalnik namestimo Arduino IDE in Teensyduino.
2. Teensy povežemo z računalnikom ter naložimo testni program za utripanje [[LED]].
3. Teensy namestimo na breadboard in pripravimo napajanje ter maso.
4. Sadje povežemo na kapacitivni vhod in avdio izhod na DAC pin.
5. Naložimo osnovno kodo za predvajanje zvoka ob dotiku.
6. Spreminjamo prag zaznavanja in osnovne parametre valovne oblike.
7. Dodamo drugo ali tretje sadje za dodatne tone.
8. Po želji vezje razširimo s [[Potenciometer|potenciometrom]] ali LDR-jem za nadzor frekvence.

### Zaključek

Rezultat je igriv zvočni instrument, ki poveže kodo, elektroniko in telesni stik v neposredno zvočno izkušnjo.

## Pomembne opombe

- pri namestitvi programske opreme je pomembna pravilna izbira Teensy ploščice in vrat
- potreben je podatkovni USB-kabel, ne zgolj polnilni
- pri kapacitivnem dotiku je lahko treba prag prilagoditi glede na material, vlago in posameznega uporabnika

## Ključni koncepti

- [[Mikrokrmilnik]]
- [[Frekvenca zvoka]]
- kapacitivni dotik
- sinteza zvoka

## Povezane metode

- [[Učenje z izdelovanjem]]
- [[Iterativno prototipiranje]]
- [[Raziskovanje skozi zvok]]

## Povezano

- [[Povezovalne žičke]]
- [[Potenciometer]]
- [[Avdio vtičnica]]
- [[Prototipna ploščica]]

## Avtorji in reference

- Tara Pattenden

## Umetniške reference

- Tara Pattenden / Phantom Chips

## Viri

- [TEENSYnth-ENG-web.pdf](/home/dinozaver/Vajblounge/knowledge/Viri/PDF/TEENSYnth-ENG-web.pdf)
- [TEENSYnth-ENG-web.md](/home/dinozaver/Vajblounge/knowledge/Viri/Prepisano/TEENSYnth-ENG-web.md)
