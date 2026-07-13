import { LegalPage } from './LegalPage';

export function Cookies() {
  return (
    <LegalPage
      title="Informace o cookies"
      intro="Přehled používání souborů cookies na webových stránkách T3servis s.r.o."
      blocks={[
        {
          heading: 'Co jsou cookies',
          paragraphs: [
            'Cookies jsou malé textové soubory, které se ukládají ve vašem prohlížeči při návštěvě webu. Slouží k zajištění správného fungování stránek.',
          ],
        },
        {
          heading: 'Jaké cookies používáme',
          paragraphs: [
            'Tento web ve své základní podobě používá pouze technicky nezbytné cookies. Pokud je zapojena mapa nebo další služby třetích stran, mohou využívat vlastní cookies dle svých podmínek.',
          ],
        },
        {
          heading: 'Správa cookies',
          paragraphs: [
            'Ukládání cookies můžete kdykoli omezit nebo zakázat v nastavení svého prohlížeče. Omezení cookies může ovlivnit funkčnost některých částí webu.',
          ],
        },
      ]}
    />
  );
}
