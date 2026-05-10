---
vrsta: delavnica
status: osnutek
podrocje:
  - zvok
  - elektronika
  - prostor
  - programiranje
tezavnost: 2
viri:
  - ../Viri/ppt/sonar-predstavitev.pptx
oznake:
  - delavnica
  - sonar
  - eholokacija
  - zvok
  - arduino
cssclasses:
  - kb-note
  - note-delavnica
---

# Sonar

## Kratek opis

Sonar je delavnica o zaznavanju prostora z zvokom. Združuje pogovor o eholokaciji, telesno simulacijo odboja zvoka v prostoru ter preprosto sestavo Arduino sistema z buzzerjem in sonar senzorjem, ki pretvarja razdaljo v zvočni odziv.

## Cilji

- razumeti osnovni princip delovanja aktivnega in pasivnega sonarnega sistema
- povezati pojem eholokacije z zaznavanjem prostora pri živalih in napravah
- sestaviti preprosto vezje z Arduino ploščico, buzzerjem in sonar senzorjem
- raziskati, kako se razdalja lahko prevede v zvok

## Za koga je primerna

- za začetnike, ki jih zanimajo zvok, prostor in senzorika
- za skupine, kjer želimo povezati gibanje po prostoru z osnovami elektronike
- za delavnice, ki dobro delujejo kot uvod v interaktivne zvočne sisteme

## Potrebna oprema in materiali

- [[Arduino]]
- sonar senzor
- [[Piezo piskač]]
- [[Povezovalne žičke]]
- računalnik z Arduino IDE
- prostor za gibalno simulacijo odboja zvoka

## Potek

### Uvod

Predstavitev odpre vprašanje, kaj je prostor in kako ga zaznavamo. Nato predstavi sonar kot tehniko za navigacijo, določanje položaja in merjenje razdalje ter ga poveže z eholokacijo pri živalih.

### Glavni del

Delavnica poteka v dveh delih. Prvi del je gibalna simulacija, v kateri udeleženci s telesi uprizarjajo širjenje in odboj zvočnih valov v prostoru. Drugi del je sestava preprostega vezja z Arduino ploščico, buzzerjem in sonar senzorjem.

### Koraki izvedbe

1. Skupaj odpremo temo prostora, orientacije in zaznavanja okolice brez pogleda.
2. Predstavimo osnovno razliko med pasivnim in aktivnim sonarjem.
3. Pogovor povežemo z eholokacijo pri živalih in z uporabo sonarjev v pomorstvu, znanosti in drugih okoljih.
4. V prostoru izvedemo igro, v kateri en udeleženec predstavlja sonar, ostali pa zvočne valove, ki se odbijajo od ovir.
5. Na [[Arduino]] povežemo [[Piezo piskač]]: plus na pin 11 in minus na GND.
6. Na Arduino povežemo sonar senzor: VCC na 5 V, GND na GND, Trig na pin 9 in Echo na pin 10.
7. V program naložimo kodo, ki meri čas med oddanim in vrnjenim signalom ter iz razdalje izračuna zvočni odziv.
8. Z različnimi razdaljami do ovire preizkušamo, kako se spreminja piskanje sistema.

### Zaključek

Delavnica sklene razmislek o tem, kako lahko prostor poslušamo. Udeleženci dobijo osnovno izkušnjo z razdaljnim senzorjem in hkrati bolj telesno razumevanje, kako deluje odboj zvoka.

## Pomembne opombe

- razdalja pri aktivnem sonarju temelji na času poti zvoka do ovire in nazaj
- hitrost zvoka ni enaka v zraku in vodi, zato je kontekst merjenja pomemben
- pri povezovanju komponent moramo dosledno slediti pravilnim pinom
- predstavitev omenja kodo, vendar jo je smiselno pred delavnico posebej pripraviti in preizkusiti

## Ključni koncepti

- eholokacija
- sonar
- [[Frekvenca zvoka]]
- [[Senzor]]
- [[Zvočni eksperimenti]]

## Povezane metode

- [[Eksperimentalno učenje]]
- [[Raziskovanje skozi zvok]]
- [[Učenje z izdelovanjem]]

## Povezano

- [[Arduino]]
- [[Piezo piskač]]
- [[Povezovalne žičke]]
- [[Senzor]]

## Umetniške reference

- Marnix de Nijs
- Run Motherfucker Run

## Viri

- [sonar-predstavitev.pptx](/home/dinozaver/Vajblounge/Rampastran2/knowledge/Viri/ppt/sonar-predstavitev.pptx)
