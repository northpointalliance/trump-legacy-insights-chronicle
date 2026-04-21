import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { UserMinus, ExternalLink } from 'lucide-react';

interface CabinetDeparture {
  name: string;
  position: string;
  date: string;
  reason: 'Fired' | 'Resigned' | 'Withdrawn' | 'Reassigned';
  context: string;
  sourceTitle: string;
  sourceUrl: string;
}

// Notable departures/firings from the second Trump administration
const recentDepartures: CabinetDeparture[] = [
  {
    name: 'Michael Waltz',
    position: 'National Security Advisor',
    date: '2025-05-01',
    reason: 'Reassigned',
    context:
      'Removed as NSA following the "Signalgate" scandal, in which a journalist was inadvertently added to a Signal chat discussing strikes on Yemen. Nominated as UN Ambassador instead.',
    sourceTitle: 'Reuters: Trump removes Waltz as National Security Adviser',
    sourceUrl:
      'https://www.reuters.com/world/us/trump-removes-mike-waltz-national-security-adviser-2025-05-01/',
  },
  {
    name: 'Alex Wong',
    position: 'Deputy National Security Advisor',
    date: '2025-05-01',
    reason: 'Fired',
    context:
      'Pushed out alongside Waltz amid the fallout from the Signal chat leak about U.S. military operations in Yemen.',
    sourceTitle: 'AP News: Trump ousts national security adviser Mike Waltz',
    sourceUrl: 'https://apnews.com/article/trump-waltz-national-security-adviser-signal-chat',
  },
  {
    name: 'Matt Gaetz',
    position: 'Attorney General (nominee)',
    date: '2024-11-21',
    reason: 'Withdrawn',
    context:
      'Withdrew his nomination amid an ongoing House Ethics investigation into allegations of sexual misconduct and drug use, after it became clear he lacked Senate votes.',
    sourceTitle: 'BBC: Matt Gaetz withdraws as attorney general pick',
    sourceUrl: 'https://www.bbc.com/news/articles/cgr5n4l4dlzo',
  },
  {
    name: 'Pete Hegseth',
    position: 'Secretary of Defense',
    date: '2025-04-22',
    reason: 'Reassigned',
    context:
      'Faced bipartisan calls to resign after reports he shared classified Yemen strike details in a second Signal chat including his wife and brother. Remains in office as of latest reporting.',
    sourceTitle: 'NYT: Hegseth Shared Attack Details in Second Signal Chat',
    sourceUrl: 'https://www.nytimes.com/2025/04/20/us/politics/hegseth-signal-chat-yemen.html',
  },
  {
    name: 'Gen. Timothy Haugh',
    position: 'Director of NSA / Head of U.S. Cyber Command',
    date: '2025-04-03',
    reason: 'Fired',
    context:
      'Dismissed alongside his deputy after far-right activist Laura Loomer reportedly urged Trump to remove officials she deemed disloyal.',
    sourceTitle: 'Washington Post: Trump fires NSA director Gen. Haugh',
    sourceUrl:
      'https://www.washingtonpost.com/national-security/2025/04/04/nsa-director-haugh-fired-trump/',
  },
];

const reasonColor: Record<CabinetDeparture['reason'], string> = {
  Fired: 'bg-trump-red text-white',
  Resigned: 'bg-yellow-500 text-white',
  Withdrawn: 'bg-orange-500 text-white',
  Reassigned: 'bg-blue-500 text-white',
};

const RecentCabinetFirings: React.FC = () => {
  return (
    <Card id="recent-firings">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <UserMinus className="h-6 w-6 text-trump-red" />
          Recent Cabinet Firings & Departures
        </CardTitle>
        <CardDescription>
          Notable removals, resignations, and withdrawn nominations from the second Trump
          administration (2025–).
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentDepartures.map((d) => (
            <div
              key={`${d.name}-${d.date}`}
              className="border-l-4 border-trump-red bg-white rounded-r-lg p-4 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-lg font-bold text-trump-blue">{d.name}</h3>
                  <p className="text-sm font-medium text-gray-700">{d.position}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={reasonColor[d.reason]}>{d.reason}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {new Date(d.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-2">{d.context}</p>
              <a
                href={d.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-trump-blue hover:text-trump-red underline"
              >
                {d.sourceTitle}
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentCabinetFirings;
