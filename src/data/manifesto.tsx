import {byPrefixAndName, type IconDefinition} from "@awesome.me/kit-c3a2403785/icons";

export const claim = "Pragmatisch, praktisch, grün";
export const heading = "Palantir verhindern";
export const intro =
  "\"Als Ministerpräsident werde ich alles dafür tun, Palantir durch eine 🇪🇺-Alternative zu ersetzen. BW hat die Unternehmen & die Köpfe dafür. Digitale Souveränität ist Sicherheit. Wer Europas Werte verteidigen will, muss US-Tech-Oligarchen begrenzen.\" (Cem Özdemir)";

export interface Position {
  name: string;
  description: string;
  icon: IconDefinition;
  link?: string;
}

export const positions: Position[] = [
  {
    name: "Unabhängig von US-Tech-Oligarchen",
    description:
      "Der Leiter von Palantir, Alex Karp, vertritt rechtsextreme Positionen. Wir wollen uns nicht von so jemandem abhängig machen.",
    icon: byPrefixAndName.far["flag-usa"],
  },
  {
    name: "Gegen Rasterfahndung",
    description:
      "\"Die Palantir-Rasterfahndung erfasst eine enorme Menge von Menschen. Zuvor getrennte Daten werden miteinander verknüpft, die für sehr unterschiedliche Zwecke vorgesehen waren. Schon allein deshalb darf die automatisierte Massenanalyse nicht zum Polizeialltag werden.\" (Constanze Kurz, Sprecherin des CCC)",
    icon: byPrefixAndName.far["binoculars"],
  },
  {
    name: "Palantir juristisch bekämpfen",
    description:
      "Die Gesellschaft für Freiheitsrechte hat in Bayern Verfassungsbeschwerde gegen das Data Mining eingereicht.",
    icon: byPrefixAndName.far["gavel"],
    link: "https://freiheitsrechte.org/themen/freiheit-im-digitalen/palantir-bayern"
  },
];
