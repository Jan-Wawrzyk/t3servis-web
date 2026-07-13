import { LegalPage } from './LegalPage';

export function Privacy() {
  return (
    <LegalPage
      title="Ochrana osobních údajů"
      intro="Zásady zpracování osobních údajů společnosti T3servis s.r.o. v souladu s nařízením GDPR (EU) 2016/679."
      blocks={[
        {
          heading: 'Správce údajů',
          paragraphs: [
            'Správcem osobních údajů je společnost T3servis s.r.o. Kontaktovat nás můžete e-mailem nebo telefonicky prostřednictvím údajů uvedených v sekci Kontakt.',
          ],
        },
        {
          heading: 'Jaké údaje zpracováváme',
          paragraphs: [
            'Zpracováváme pouze údaje, které nám dobrovolně poskytnete prostřednictvím poptávkového formuláře nebo při komunikaci – zejména jméno, e-mail, telefon, lokalitu realizace a obsah zprávy.',
          ],
        },
        {
          heading: 'Účel a doba zpracování',
          paragraphs: [
            'Údaje zpracováváme výhradně za účelem vyřízení vaší poptávky a následné komunikace. Údaje uchováváme po dobu nezbytně nutnou k tomuto účelu.',
          ],
        },
        {
          heading: 'Vaše práva',
          paragraphs: [
            'Máte právo na přístup ke svým údajům, jejich opravu nebo výmaz, omezení zpracování a právo vznést námitku. Se svými požadavky se na nás můžete kdykoli obrátit.',
          ],
        },
      ]}
    />
  );
}
