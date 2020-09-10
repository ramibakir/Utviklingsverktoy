# Oppgave 4

- Antall bilder på forsiden
  - const bilder = document.images
  - console.log(bilder)
  - HTMLCollection(4) [img, img, img, img]
- Lastetid med og uten cache
  - Uten cache:
    - DOMContentLoaded: 620ms
    - Load: 1.24s
  * Med cache:
    - DOMContentLoaded: 1.03s
    - Load: 1.95s
- Audit
  - Performance: 95
  * Accessibility: 84
  * Best Practices: 92
  * SEO: 90
- Antall eksterne requests
  - 42 requests
- Hva er "Content-Type" i response header på https://www.hiof.no/tjenester/
  - Indikerer hva slags type det returnerte innholdet faktisk er.
  - hiof.no sin type er html
- Hva er "Cache-Control" i request header på https://www.hiof.no/tjenester/
  - Cache-Control på hiof.no er **no-cache**, som vil si at responsen kan lagres av hvilken som helst cache, selv om repsonsen ikke kan caches. Den lagrede responsen må derimot **alltid** valideres med original serveren før den kan brukes.
- Hvilken protokoll bruker den siden?
  - https
