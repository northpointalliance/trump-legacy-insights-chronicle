import React from 'react';
import Header from '@/components/Header';
import SEO from '@/components/SEO';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const PUBLISHED = '2026-09-09';
const UPDATED = '2026-09-09';

interface KeyFigure {
  value: string;
  label: string;
}

const keyFigures: KeyFigure[] = [
  { value: '427–1', label: 'House vote to pass the Epstein Files Transparency Act (Nov. 18, 2025)' },
  { value: '30 days', label: 'Statutory deadline the law gave the Attorney General — expired Dec. 19, 2025' },
  { value: '~3.5M', label: 'Pages DOJ says it published before declaring compliance on Jan. 30, 2026' },
  { value: '~6M', label: 'Documents House Oversight Democrats say the department actually holds' },
  { value: '~200,000', label: 'Pages redacted or withheld under privileges the statute never lists' },
  { value: '106 / 218', label: 'Signatures on the discharge petition for the enforcement bill, as of Sept. 4, 2026' },
];

interface Related {
  to: string;
  label: string;
}

interface Section {
  id: string;
  question: string;
  answer: string;
  details: string[];
  related?: Related[];
}

const sections: Section[] = [
  {
    id: 'what-he-signed',
    question: 'What did Trump actually sign on November 19, 2025?',
    answer:
      'Trump signed the Epstein Files Transparency Act into law as Public Law 119-38 on November 19, 2025. The House had passed it 427–1 the day before and the Senate cleared it by unanimous consent hours before it reached his desk. The law ordered the Attorney General to publish essentially the entire Justice Department Epstein file within 30 days.',
    details: [
      'The signature was a reversal, not an initiative. For months Trump had described the release campaign as a Democratic "hoax" and pressed House Republicans to stay off Rep. Thomas Massie\'s discharge petition. He switched positions on November 16, 2025, once the petition reached the 218 signatures needed to force a floor vote and passage became unavoidable.',
      'Speaker Mike Johnson, who had fought the measure, said on November 18 that he was "deeply disappointed in this outcome" and that the bill "needed amendments." Rep. Clay Higgins of Louisiana cast the only no vote in the entire House. Trump did not appear on camera to sign; he announced it that evening on Truth Social.',
    ],
  },
  {
    id: 'what-the-law-requires',
    question: 'What exactly does the Epstein Files Transparency Act require?',
    answer:
      'Section 2 requires the Attorney General to make publicly available, in searchable and downloadable format, all unclassified records, documents, communications, and investigative materials the Justice Department holds relating to Jeffrey Epstein and Ghislaine Maxwell. Section 3 requires a follow-up report to the House and Senate Judiciary Committees within 15 days of completing that release.',
    details: [
      'The statute is deliberately narrow about what can be held back. Section 2(c) sets out a closed list of permitted withholdings — victim identifying information, material that would jeopardize an active federal investigation, properly classified national security material, and depictions of child sexual abuse. Section 2(c)(2) requires a written justification for each redaction.',
      'Section 2(b)(1) goes further and bars withholding anything "on the basis of embarrassment, reputational harm, or political sensitivity," expressly including for government officials, public figures, and foreign dignitaries. The Section 3 report must list every government official and politically exposed person named in the materials, with no redactions permitted on that list.',
    ],
  },
  {
    id: 'the-deadline',
    question: 'Did the Justice Department meet the December 19, 2025 deadline?',
    answer:
      'No. The department began publishing on the deadline day and simultaneously announced it would not finish on time. Deputy Attorney General Todd Blanche told Fox News on December 19 that completing the release could take "a couple of weeks."',
    details: [
      'Productions went out on December 19, 20, 22, and 23, 2025, and then stopped. By January 5, 2026 — more than two weeks past the statutory deadline — the department had posted roughly 12,285 documents comprising about 125,575 pages, while conceding in court filings that more than two million documents remained under review. That worked out to well under one percent of the file.',
      'None of those productions was accompanied by the privilege log the statute requires. Attorney General Pam Bondi\'s cover letter said only that "a privilege log will be produced in due course." The department attributed the delay to the scale of victim-protection redactions, noting it had identified more than 1,000 Epstein victims.',
    ],
  },
  {
    id: 'how-much-released',
    question: 'How much of the Epstein file has actually been released?',
    answer:
      'The Justice Department declared its obligations complete on January 30, 2026 after publishing roughly 3.5 million pages in total. House Oversight Democrats put the department\'s actual holdings at about six million documents, which would leave close to half of the file unpublished.',
    details: [
      'The January 30 tranche added more than three million pages, over 2,000 videos, and 180,000 images. Schumer\'s Senate resolution states that the department announced 3,000,000 pages — half of the 6,000,000 it acknowledged collecting — yet published fewer than 2,700,000, falling materially short of even its own stated production.',
      'Nothing new has been published since. On the House floor on August 31, 2026, Massie said "it\'s been a year since the president signed the Epstein Files Transparency Act, and the government continues to withhold over three million files." As of this writing that leaves more than seven months without a single additional production.',
    ],
  },
  {
    id: 'redactions',
    question: 'Why do critics say the redactions themselves break the law?',
    answer:
      'Because the department leaned on deliberative-process, attorney work-product, and attorney-client privilege to hold material back — and none of those privileges appears anywhere in the statute\'s exhaustive list of permitted withholdings. Roughly 200,000 pages were redacted or withheld on that basis.',
    details: [
      'The department also declined to review its foreign-language Epstein materials at all, telling the court it "was not practicable for a first-level reviewer to determine the responsiveness of a foreign-language document," and cited unspecified technical file problems for other gaps. Judge Emmet Sullivan later found that the Attorney General had effectively conceded the merits of an Administrative Procedure Act challenge by declining to answer it.',
      'Survivors\' advocates argue the redactions were applied backwards. Schumer\'s resolution alleges the released material "improperly disclosed Epstein survivor information, while in other instances, withholding or redacting information concerning Epstein co-conspirators and enablers" — the precise inversion of what Congress wrote into Sections 2(b) and 2(c).',
    ],
  },
  {
    id: 'senate-block',
    question: 'What happened when Senate Democrats asked Republicans to enforce their own law?',
    answer:
      'Senate Republican leadership objected. On February 5, 2026, Minority Leader Chuck Schumer sought unanimous consent to pass S. Res. 597, directing the Senate to sue the administration over its non-compliance. Majority Whip John Barrasso blocked it on the floor.',
    details: [
      'The resolution, cosponsored by 15 Democrats, would have directed Majority Leader John Thune to initiate or intervene in civil actions in the name of the Senate to seek relief for the department\'s "failure to act in a manner consistent" with Public Law 119-38. It was the most serious enforcement lever available to the chamber.',
      '"The question before Senate Republicans today is simple," Schumer said. "Will they enforce the law that they helped to pass or object and help keep the Epstein files hidden?" Barrasso called the request "another reckless political stunt designed to distract Americans from Democrats\' dangerous plan to shut down the Department of Homeland Security," and objected. The same chamber had passed the underlying act by unanimous consent eleven weeks earlier.',
    ],
  },
  {
    id: 'engelmayer',
    question: 'Why couldn\'t a federal judge simply order the department to comply?',
    answer:
      'The first attempt failed on jurisdiction. On January 21, 2026, Judge Paul Engelmayer denied a request from Massie and Rep. Ro Khanna to appoint a special master or independent monitor over the release, because they had filed it inside the effectively closed criminal case of United States v. Ghislaine Maxwell.',
    details: [
      'Engelmayer wrote that the pair had raised "legitimate concerns" but that a criminal docket gave the court no charter to supervise compliance with "a civil records-disclosure statute," and that "no provision of the EFTA vests this Court with that authority." He added that amici curiae cannot inject new issues no party has raised.',
      'The denial was without prejudice to filing a separate lawsuit, and the judge pointedly noted that the representatives were "at liberty to pursue oversight of DOJ via the tools available to Congress." Those tools — subpoenas, contempt, litigation authority — sit with the Republican majorities that had just declined to use them.',
    ],
  },
  {
    id: 'phang-ruling',
    question: 'What did Judge Emmet Sullivan rule in Phang v. Blanche?',
    answer:
      'On June 25, 2026, Sullivan granted a preliminary injunction to journalist Katie Phang, finding she had standing to sue and was likely to win on the merits. He ordered the Attorney General to unredact or produce a specific set of records by July 2, 2026, or show cause why he could not.',
    details: [
      'Phang filed in the District of Columbia on April 27, 2026 under the Administrative Procedure Act. Sullivan held that FOIA was not an adequate alternative remedy — the Epstein Act is a fundamentally different disclosure law — and that her inability to obtain information Congress had ordered published was a cognizable informational injury.',
      'The order named eight emails whose sender and recipient names were to be unredacted, two department documents with potential co-conspirator names, and four sets of the underlying handwritten FBI interview notes behind published FD-302 reports. It also directed the department to begin reviewing foreign-language materials and to publish the redaction log the statute requires in the Federal Register.',
    ],
  },
  {
    id: 'contempt',
    question: 'Did the Justice Department comply with that injunction?',
    answer:
      'No. It responded with assertions rather than documentation, drew a written rebuke, faced an open contempt motion at an August 13, 2026 hearing, and then appealed the injunction to the D.C. Circuit.',
    details: [
      '"The Defendant\'s assertions do not comply with the Court\'s Order, which requires documentation to support the assertions," Sullivan wrote on August 6, 2026. At the hearing a week later he pressed a department lawyer on why handwritten FBI interview notes were missing from millions of published pages and why foreign-language records still had not been reviewed.',
      '"The public has a right to know what the hell is going on in this case. The victims have a right to know. The court has a right to know," Sullivan said. "The law is still in full force and effect." He noted he is "probably the only judge in this Circuit who has held Justice Department attorneys in civil contempt" and had "no desire to go down that road again."',
      'On August 24, 2026 the department filed a protective notice of appeal, conceding in the filing that whether the June 25 order is even appealable is "inconclusive." The D.C. Circuit docketed it the next day as No. 26-5299.',
    ],
  },
  {
    id: 'federal-register',
    question: 'What did the department\'s August 2026 Federal Register filing actually contain?',
    answer:
      'A report, not records. Associate Attorney General Stanley Woodward signed the Section 3 report on August 21, 2026, and the department published it in the Federal Register on August 27 — more than eight months after the release deadline and roughly six months after the department itself declared the release complete.',
    details: [
      'Section 3 gives the Attorney General 15 days from completion of the release to file that report. By the department\'s own January 30 compliance announcement, it was due in mid-February. The filing lists categories of records released and withheld, a four-paragraph summary of redactions with legal bases, and the list of officials and politically exposed persons the statute demands.',
      'The report states that no records were withheld "on the basis of embarrassment, reputational harm, or political sensitivity," and that the only withheld category was material where permitted Section 2(c) withholdings and privileged material were "not segregable." No new investigative records accompanied it. Publishing the report is what the department has characterized as completing its statutory obligations.',
    ],
  },
  {
    id: 'house-oversight',
    question: 'How have House Republicans handled oversight of the release?',
    answer:
      'Leadership has resisted it; a handful of rank-and-file Republicans have not. The Oversight Committee subpoenaed Attorney General Bondi on March 4, 2026 by a 24–19 vote, and it only carried because five Republicans crossed over to join every Democrat present.',
    details: [
      'Rep. Nancy Mace brought the motion. Reps. Lauren Boebert, Tim Burchett, Michael Cloud, and Scott Perry voted for it. Chairman James Comer opposed, saying Bondi had offered individual briefings at the department instead; Mace objected that briefings would not be under oath and pushed for a videotaped, transcribed deposition to be released publicly.',
      'The committee issued the subpoena on March 17 for an April 14 deposition. Committee Democrats noted Bondi had already failed to comply with a bipartisan Oversight subpoena issued in August 2025 for the complete unredacted files, having turned over roughly 30,000 documents, most of them already public.',
    ],
    related: [
      { to: '/congressional-departures', label: 'Congressional turnover during the first term' },
    ],
  },
  {
    id: 'efta-two',
    question: 'What is the Epstein Files Transparency Act II?',
    answer:
      'H.R. 9694, introduced on July 15, 2026, would let state attorneys general, Epstein\'s victims, and members of Congress sue the Attorney General directly for withholding records. Massie leads it with Reps. Ro Khanna and Teresa Leger Fernández; Sens. Jeff Merkley and Ben Ray Luján lead the Senate companion.',
    details: [
      'The bill creates a private right of action against the Attorney General for unlawfully withholding, redacting, delaying, concealing, removing, or failing to publish Epstein-related records. It gives victims a right to obtain unredacted records about themselves, and exposes department and FBI officials to penalties for concealing, falsifying, or misrepresenting files.',
      'Critically, it explicitly prohibits invoking common-law privileges — including deliberative process — to evade disclosure, closing the gap the department drove roughly 200,000 pages through. It also answers the problem Engelmayer identified in January: the original act created a duty but named no one with standing to enforce it.',
    ],
  },
  {
    id: 'who-is-blocking',
    question: 'Who is blocking the follow-up bill?',
    answer:
      'The same leadership dynamic that fought the original. The Judiciary Committee did not take H.R. 9694 up, so Massie filed a discharge petition on August 31, 2026 — and Speaker Johnson promptly cancelled two of the House\'s three remaining September workweeks.',
    details: [
      'Massie called the schedule change an "attempt to stymie our latest Epstein bill." Johnson has brushed the suggestion off. A discharge petition is the only mechanism that brings a bill to the floor over a Speaker\'s objection, and it is the same maneuver that produced the law Trump signed in the first place.',
      'As of September 4, 2026 the petition had 106 signatures: 104 Democrats plus Massie and Mace. It needs 218. With the House at 218–214 and one independent, Massie says he needs four Republicans in total — himself, Mace, and two more. Boebert, who signed the 2025 petition, has not signed this one, and her office did not respond to Roll Call\'s request for comment.',
    ],
  },
  {
    id: 'harder-second-time',
    question: 'Why is it harder to find Republican signatures the second time?',
    answer:
      'Because the first time carried a visible cost. Marjorie Taylor Greene, one of the four Republicans who signed the 2025 petition, has said the decision broke her relationship with Trump and contributed to her resignation from the House.',
    details: [
      'Greene left Congress in January 2026, removing a signature Massie cannot replace. Other Republicans have reframed the issue as already settled. Asked whether he would sign, Rep. Andy Barr said, "I think I\'ve already voted for the release of the Epstein files. I\'m not interested in grandstanding."',
      'TIME reported that although nearly every congressional Republican voted for the original act, some have since said they no longer consider the release a priority. Massie\'s own read on the arithmetic is blunt: the math is "exactly the same as it was a year ago." What changed is not the vote count but the appetite for paying for it.',
    ],
    related: [
      { to: '/trump-insults', label: 'Trump\'s documented attacks on Republican critics' },
    ],
  },
  {
    id: 'officials',
    question: 'What happened to the officials who ran the release?',
    answer:
      'Neither was sanctioned for the department\'s handling of the law. Trump fired Bondi on April 2, 2026 amid the Epstein fallout, and Blanche — who directed the release as deputy attorney general — replaced her and was confirmed as Attorney General on August 8, 2026.',
    details: [
      'Trump\'s Truth Social post praised Bondi and gave no reason, saying she would transition "to a much needed and important new job in the private sector." Reporting tied the firing to her handling of the Epstein files and to the department\'s failure to prosecute enough of his political opponents. Mace said Bondi "handled the Epstein Files in a terrible manner."',
      'Blanche was confirmed 50–49, with Susan Collins and Lisa Murkowski the only Republicans opposed — five days before Sullivan\'s contempt hearing, and while he was the named defendant in Phang v. Blanche in his official capacity. His handling of the Epstein files ran directly through his confirmation fight.',
    ],
    related: [{ to: '/', label: 'Cabinet firings and turnover tracker' }],
  },
  {
    id: 'pattern',
    question: 'How does this fit the broader second-term pattern?',
    answer:
      'It is the clearest case so far of a statute being neutralized in execution rather than repealed. Congress passed the law nearly unanimously, the President signed it, and the operative question a year later is whether anyone has standing to make the executive branch obey it.',
    details: [
      'The mechanics rhyme with other threads this site tracks: rapid turnover among the officials responsible, a congressional majority that declines to use its own oversight levers, and enforcement displaced into federal courts that keep finding they lack a clean statutory hook. The result is a law with a deadline, a mandate, and no enforcer.',
      'It also inverts the usual partisan geometry. The two people pushing hardest to enforce the statute are a libertarian Republican from Kentucky and a progressive Democrat from California, while the objections come from the whip\'s desk and the Speaker\'s calendar rather than from the floor.',
    ],
    related: [
      { to: '/first-presidency', label: 'The 2017–2021 presidency in review' },
      { to: '/business-controversies', label: 'Business history and legal controversies' },
    ],
  },
  {
    id: 'what-next',
    question: 'What happens next?',
    answer:
      'Three tracks are live simultaneously: the department\'s appeal at the D.C. Circuit, the unresolved contempt question before Judge Sullivan, and the discharge petition in the House. None of them is likely to resolve before the November 2026 midterms.',
    details: [
      'Massie is explicit that he is playing for the calendar. "I\'m confident this bill is going to pass because if we don\'t have three Republicans before the midterms, I think we will after in the lame-duck session," he said. "And I also think that if the Democrats take the majority, that they will get to 218."',
      'Khanna points to what he calls "the retirement caucus" — departing members with less to lose from crossing leadership. Briefing in Phang v. Blanche has continued into September 2026. For now, a law that passed 427–1 and cleared the Senate without a single objection is being enforced by one journalist, one district judge, and a petition two Republican signatures short.',
    ],
  },
];

interface TimelineEntry {
  date: string;
  event: string;
  actor: string;
}

const timeline: TimelineEntry[] = [
  { date: 'Nov. 12, 2025', event: 'Massie\'s discharge petition reaches 218 signatures, forcing a House vote. Four Republicans sign.', actor: 'House' },
  { date: 'Nov. 16, 2025', event: 'Trump reverses months of opposition and tells House Republicans to vote for release.', actor: 'White House' },
  { date: 'Nov. 18, 2025', event: 'House passes the Epstein Files Transparency Act 427–1. Speaker Johnson says he is "deeply disappointed."', actor: 'House' },
  { date: 'Nov. 19, 2025', event: 'Senate clears the bill by unanimous consent; Trump signs it as Public Law 119-38.', actor: 'Congress / White House' },
  { date: 'Dec. 19, 2025', event: 'Statutory deadline. DOJ begins publishing and says it will not finish on time.', actor: 'DOJ' },
  { date: 'Jan. 21, 2026', event: 'Judge Engelmayer denies Massie and Khanna a special master, citing lack of jurisdiction.', actor: 'S.D.N.Y.' },
  { date: 'Jan. 30, 2026', event: 'DOJ publishes 3M+ additional pages and declares its obligations complete. No further productions follow.', actor: 'DOJ' },
  { date: 'Feb. 5, 2026', event: 'Sen. Barrasso blocks S. Res. 597, which would have authorized the Senate to sue over non-compliance.', actor: 'Senate GOP' },
  { date: 'Mar. 4, 2026', event: 'House Oversight votes 24–19 to subpoena AG Bondi; five Republicans join all Democrats over the chairman\'s objection.', actor: 'House Oversight' },
  { date: 'Apr. 2, 2026', event: 'Trump fires Bondi amid Epstein fallout. Blanche becomes acting Attorney General.', actor: 'White House' },
  { date: 'Apr. 27, 2026', event: 'Journalist Katie Phang sues the Attorney General in federal court in Washington.', actor: 'D.D.C.' },
  { date: 'Jun. 25, 2026', event: 'Judge Sullivan grants a preliminary injunction ordering specific unredactions by July 2.', actor: 'D.D.C.' },
  { date: 'Jul. 15, 2026', event: 'Massie, Khanna, and Leger Fernández introduce the Epstein Files Transparency Act II (H.R. 9694).', actor: 'House' },
  { date: 'Aug. 8, 2026', event: 'Senate confirms Blanche as Attorney General, 50–49.', actor: 'Senate' },
  { date: 'Aug. 13, 2026', event: 'Sullivan warns of contempt: "The public has a right to know what the hell is going on."', actor: 'D.D.C.' },
  { date: 'Aug. 24, 2026', event: 'DOJ files a protective notice of appeal of the injunction to the D.C. Circuit.', actor: 'DOJ' },
  { date: 'Aug. 27, 2026', event: 'DOJ publishes its Section 3 report in the Federal Register — a report, not records.', actor: 'DOJ' },
  { date: 'Aug. 31, 2026', event: 'Massie files a discharge petition on H.R. 9694.', actor: 'House' },
  { date: 'Sep. 3, 2026', event: 'Speaker Johnson cancels two of three remaining September workweeks. Massie calls it an attempt to "stymie" the bill.', actor: 'House GOP' },
  { date: 'Sep. 4, 2026', event: 'Petition stands at 106 signatures — 104 Democrats, plus Massie and Mace.', actor: 'House' },
];

interface Source {
  label: string;
  url: string;
}

const sources: Source[] = [
  { label: 'Public Law 119-38, the Epstein Files Transparency Act — full text (Congress.gov)', url: 'https://www.congress.gov/119/plaws/publ38/PLAW-119publ38.htm' },
  { label: 'Epstein Files Transparency Act — legislative history (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Epstein_Files_Transparency_Act' },
  { label: 'DOJ: "Department of Justice Publishes 3.5 Million Responsive Pages in Compliance with the Epstein Files Transparency Act" (Jan. 30, 2026)', url: 'https://www.justice.gov/opa/pr/department-justice-publishes-35-million-responsive-pages-compliance-epstein-files' },
  { label: 'DOJ Report Under Public Law 119-38, Federal Register (Aug. 27, 2026)', url: 'https://www.govinfo.gov/content/pkg/FR-2026-08-27/pdf/2026-17533.pdf' },
  { label: 'NBC: Fraction of DOJ records released after Epstein files deadline', url: 'https://www.nbcboston.com/news/national-international/epstein-files-justice-department-deadline-fraction-of-records-released/3880084/' },
  { label: 'TIME: What\'s Going on With the Epstein Files?', url: 'https://time.com/7355932/epstein-files-release-doj-independent-monitor-house-investigation/' },
  { label: 'Opinion & Order, United States v. Maxwell (S.D.N.Y., Jan. 21, 2026) — Judge Engelmayer', url: 'https://www.nysd.uscourts.gov/sites/default/files/2026-01/Maxwell%2020cr330%20-%20Opinion%20&%20Order%201.21.26.pdf' },
  { label: 'Roll Call: Judge denies lawmaker request for compliance on Epstein files law (Jan. 21, 2026)', url: 'https://rollcall.com/2026/01/21/judge-denies-lawmaker-request-for-compliance-on-epstein-files-law/' },
  { label: 'Congressional Record, S. Res. 597 unanimous consent request (Feb. 5, 2026)', url: 'https://www.govinfo.gov/content/pkg/CREC-2026-02-05/html/CREC-2026-02-05-pt1-PgS501-2.htm' },
  { label: 'S. Res. 597 — full text (Congress.gov)', url: 'https://www.congress.gov/bill/119th-congress/senate-resolution/597/text' },
  { label: 'Roll Call: Senate GOP blocks push for legal action over Epstein law (Feb. 5, 2026)', url: 'https://rollcall.com/2026/02/05/senate-gop-blocks-push-for-legal-action-over-epstein-law/' },
  { label: 'The Hill: Senate GOP whip blocks lawsuit against DOJ over release of Epstein files', url: 'https://thehill.com/homenews/senate/5724576-epstein-files-lawsuit-senate-schumer-barrasso/' },
  { label: 'CBS News: House Oversight Committee votes to subpoena Attorney General Pam Bondi (Mar. 4, 2026)', url: 'https://www.cbsnews.com/news/pam-bondi-subpoena-jeffrey-epstein-house-oversight-committee/' },
  { label: 'The Hill: House Oversight panel subpoenas Pam Bondi over Epstein files', url: 'https://thehill.com/homenews/house/5767681-pam-bondi-subpoena-epstein-files-oversight/' },
  { label: 'CNN: Trump fires Pam Bondi as attorney general (Apr. 2, 2026)', url: 'https://www.cnn.com/2026/04/02/politics/pam-bondi-role-trump' },
  { label: 'Memorandum Opinion, Phang v. Blanche (D.D.C.) — Judge Emmet Sullivan', url: 'https://www.courthousenews.com/wp-content/uploads/2026/08/emmet-sullivan-doj-concedes-violation-Epstein-transparency-act-opinion.pdf' },
  { label: 'Docket, Phang v. Blanche, No. 1:26-cv-01417 (D.D.C.)', url: 'https://www.pacermonitor.com/public/case/64339399/PHANG_v_BLANCHE' },
  { label: 'Defendant\'s Notice of Appeal, Phang v. Blanche (Aug. 24, 2026)', url: 'https://storage.courtlistener.com/recap/gov.uscourts.dcd.291779/gov.uscourts.dcd.291779.35.0.pdf' },
  { label: 'CNN: Epstein judge — "The public has a right to know what the hell is going on" (Aug. 13, 2026)', url: 'https://www.cnn.com/2026/08/13/politics/epstein-judge-hearing-justice-department-contempt-warning' },
  { label: 'All Rise News: Judge raises specter of contempt in Epstein files case', url: 'https://www.allrisenews.com/p/judge-sullivan-contempt-phang-blanche' },
  { label: 'AP: Senate confirms Blanche as attorney general in an overnight vote (Aug. 8, 2026)', url: 'https://apnews.com/article/senate-blanche-attorney-general-justice-department-fcb4157d45d7b13a05de4d2b0f4f92e2' },
  { label: 'H.R. 9694, Epstein Files Transparency Act II — full text (Congress.gov)', url: 'https://www.congress.gov/bill/119th-congress/house-bill/9694/text/ih' },
  { label: 'Rep. Massie: Massie, Khanna, Leger Fernández, Merkley, Luján introduce the Epstein Files Transparency Act II', url: 'https://massie.house.gov/news/documentsingle.aspx?DocumentID=395849' },
  { label: 'Washington Times: Massie launches discharge petition on bill to enforce release of missing Epstein files (Aug. 31, 2026)', url: 'https://www.washingtontimes.com/news/2026/aug/31/thomas-massie-launches-discharge-petition-bill-enforce-release/' },
  { label: 'Roll Call: Second Epstein petition looks for Republican support (Sept. 3, 2026)', url: 'https://rollcall.com/2026/09/03/second-epstein-petition-looks-for-republican-support/' },
  { label: 'Newsweek: 106 lawmakers sign petition to make DOJ release more files', url: 'https://www.newsweek.com/epstein-update-106-lawmakers-sign-petition-to-make-doj-release-more-files-12406192' },
];

const EpsteinFiles = () => {
  const canonical = 'https://trump-legacy-insights-chronicle.lovable.app/epstein-files';

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Trump Signed the Epstein Files Law. His Own Party Is Now Blocking Its Enforcement.',
    description:
      'Trump signed the Epstein Files Transparency Act on November 19, 2025. Nearly a year later the Justice Department has published a fraction of the file, and Republican leadership in both chambers has blocked every attempt to enforce the law.',
    author: { '@type': 'Organization', name: 'Trump Legacy Insights Chronicle' },
    publisher: { '@type': 'Organization', name: 'Trump Legacy Insights Chronicle' },
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    mainEntityOfPage: canonical,
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: sections.slice(0, 10).map((s) => ({
      '@type': 'Question',
      name: s.question,
      acceptedAnswer: { '@type': 'Answer', text: s.answer },
    })),
  };

  return (
    <div className="flex flex-col min-h-screen bg-trump-gray">
      <SEO
        title="Trump Signed the Epstein Files Law — Now His Own Party Is Blocking It"
        description="Trump signed the Epstein Files Transparency Act 427–1 into law in November 2025. A year on, DOJ has withheld millions of pages and GOP leadership has blocked every enforcement attempt. Full sourced timeline."
        path="/epstein-files"
        type="article"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <article>
          <header className="text-center mb-10">
            <Badge className="mb-4 bg-trump-red">Epstein Files Transparency Act</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-trump-blue mb-4">
              Trump Signed the Epstein Files Law. His Own Party Is Now Blocking It.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A law that passed the House 427–1 and cleared the Senate without a single objection is
              being enforced, ten months later, by one journalist, one district judge, and a
              discharge petition two Republican signatures short.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Published September 9, 2026 · Last reviewed September 9, 2026
            </p>
          </header>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>The short version</CardTitle>
              <CardDescription>
                What the law required, what was delivered, and who stopped the enforcement.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <p>
                On November 19, 2025, President Trump signed the Epstein Files Transparency Act
                after months of opposing it, giving the Attorney General 30 days to publish the
                Justice Department's entire unclassified Epstein file. The deadline passed on
                December 19, 2025 with under one percent of the material online.
              </p>
              <p>
                The department declared itself finished on January 30, 2026 at roughly 3.5 million
                pages, against holdings House Oversight Democrats put near six million. Since then,
                Senate Republican leadership has blocked a resolution authorizing the chamber to
                sue, House leadership has kept an enforcement bill off the floor and shortened the
                September calendar, and the department has appealed the one court order compelling
                it to unredact specific records.
              </p>
            </CardContent>
          </Card>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-trump-blue mb-4">
              How wide is the gap between what the law required and what was released?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {keyFigures.map((f) => (
                <Card key={f.label}>
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-trump-red">{f.value}</div>
                    <div className="text-sm text-gray-600 mt-2">{f.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {sections.map((s) => (
            <Card key={s.id} id={s.id} className="mb-6 scroll-mt-24">
              <CardHeader>
                <h2 className="text-2xl font-bold text-trump-blue">{s.question}</h2>
              </CardHeader>
              <CardContent className="text-gray-700 space-y-3">
                <p className="font-medium text-gray-900">{s.answer}</p>
                {s.details.map((d, i) => (
                  <p key={i}>{d}</p>
                ))}
                {s.related && (
                  <p className="text-sm pt-1">
                    <span className="text-muted-foreground">Related on this site: </span>
                    {s.related.map((r, i) => (
                      <React.Fragment key={r.to}>
                        {i > 0 && <span className="text-muted-foreground"> · </span>}
                        <Link to={r.to} className="text-trump-blue hover:underline">
                          {r.label}
                        </Link>
                      </React.Fragment>
                    ))}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}

          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-2xl font-bold text-trump-blue">
                  What is the full timeline of the Epstein files fight?
                </h2>
              <CardDescription>
                From the discharge petition that forced the vote to the petition now stalled two
                Republican signatures short.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-40">Date</TableHead>
                    <TableHead>Development</TableHead>
                    <TableHead className="w-44">Actor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {timeline.map((t) => (
                    <TableRow key={t.date + t.event}>
                      <TableCell className="font-medium whitespace-nowrap">{t.date}</TableCell>
                      <TableCell>{t.event}</TableCell>
                      <TableCell className="text-sm text-gray-600">{t.actor}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-4">
                Dates reflect filings, floor actions, and published reporting. Court dates come from
                the dockets in United States v. Maxwell (S.D.N.Y.) and Phang v. Blanche (D.D.C.).
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-2xl font-bold text-trump-blue">
                  Where can readers verify all of this?
                </h2>
              <CardDescription>
                Primary documents first: the statute, the court filings, and the department's own
                publications.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {sources.map((src) => (
                  <li key={src.url}>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-trump-blue hover:underline"
                    >
                      {src.label}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-2xl font-bold text-trump-blue">Keep reading on this site</h2>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link to="/" className="text-trump-blue hover:underline">
                    Second-term tracker
                  </Link>{' '}
                  — cabinet firings, market impact, and current events.
                </li>
                <li>
                  <Link to="/congressional-departures" className="text-trump-blue hover:underline">
                    Congressional departures, 2017–2021
                  </Link>{' '}
                  — the last time intra-party pressure drove members out.
                </li>
                <li>
                  <Link to="/first-presidency" className="text-trump-blue hover:underline">
                    The first presidency
                  </Link>{' '}
                  — 2017–2021 in review.
                </li>
                <li>
                  <Link to="/business-controversies" className="text-trump-blue hover:underline">
                    Business history and controversies
                  </Link>{' '}
                  — the pre-presidency legal record.
                </li>
                <li>
                  <Link to="/trump-insults" className="text-trump-blue hover:underline">
                    Documented public insults
                  </Link>{' '}
                  — including the Republicans who crossed him.
                </li>
              </ul>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground">
            This page is reviewed on a rolling basis as the appeal at the D.C. Circuit, the contempt
            question before Judge Sullivan, and the discharge petition develop. Figures reflect the
            public record as of September 9, 2026.
          </p>
        </article>
      </main>

      <Footer className="mt-12" />
    </div>
  );
};

export default EpsteinFiles;
