
import React from 'react';
import Header from '@/components/Header';
import SEO from '@/components/SEO';
import Footer from '@/components/Footer';
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import { MessageSquareX, AlertTriangle, Calendar } from 'lucide-react';

const TrumpXPosts = () => {
  const xPosts = [
    { 
      date: "December 19, 2020", 
      content: "Big protest in D.C. on January 6th. Be there, will be wild!" 
    },
    { 
      date: "November 4, 2020", 
      content: "We are up BIG, but they are trying to STEAL the Election. We will never let them do it. Votes cannot be cast after the Polls are closed!" 
    },
    { 
      date: "November 15, 2020", 
      content: "He only won in the eyes of the FAKE NEWS MEDIA. I concede NOTHING! We have a long way to go. This was a RIGGED ELECTION!" 
    },
    { 
      date: "December 12, 2020", 
      content: "I WON THE ELECTION IN A LANDSLIDE, but remember, I only think in terms of legal votes, not all of the fake voters and fraud that miraculously floated in from everywhere! What a disgrace!" 
    },
    { 
      date: "December 22, 2020", 
      content: "THE DEMOCRATS DUMPED HUNDREDS OF THOUSANDS OF BALLOTS IN THE SWING STATES LATE IN THE EVENING. IT WAS A RIGGED ELECTION!!!" 
    },
    { 
      date: "January 5, 2021", 
      content: "Washington is being inundated with people who don't want to see an election victory stolen by emboldened Radical Left Democrats." 
    },
    { 
      date: "January 6, 2021 (8:17 AM)", 
      content: "States want to correct their votes, which they now know were based on irregularities and fraud, plus corrupt process never received legislative approval. All Mike Pence has to do is send them back to the States, AND WE WIN. Do it Mike, this is a time for extreme courage!" 
    },
    { 
      date: "January 6, 2021 (9:00 AM)", 
      content: "They just happened to find 50,000 ballots late last night. The USA is embarrassed by fools. Our Election Process is worse than that of third world countries!" 
    },
    { 
      date: "January 6, 2021 (9:15 AM)", 
      content: "The States want to redo their votes. They found out they voted on a FRAUD. Legislatures never approved. Let them do it. BE STRONG!" 
    },
    { 
      date: "January 6, 2021 (2:24 PM)", 
      content: "Mike Pence didn't have the courage to do what should have been done to protect our Country and our Constitution, giving States a chance to certify a corrected set of facts, not the fraudulent or inaccurate ones which they were asked to previously certify. USA demands the truth!" 
    },
    { 
      date: "January 6, 2021 (2:38 PM)", 
      content: "Please support our Capitol Police and Law Enforcement. They are truly on the side of our Country. Stay peaceful!" 
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-trump-gray">
      <SEO
        title="Notable Trump X / Twitter Posts | Trump Legacy Insights"
        description="A documented record of notable and controversial posts from Donald Trump on X (formerly Twitter) with dates and context."
        path="/trump-x-posts"
      />
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="mb-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-trump-blue mb-4">
              Trump's X Posts Before January 6th
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key posts about election fraud and calls to the Capitol prior to January 6, 2021
            </p>
          </div>
        </section>
        
        <div className="space-y-8">
          <section id="overview" className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-trump-blue mb-4 flex items-center">
              <MessageSquareX className="mr-2 h-6 w-6" />
              Overview of X Posts
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                Research suggests there were many X posts by then-President Trump about election fraud and calls to the Capitol before January 6, 2021, but accessing a complete list is challenging due to account suspension and data limitations.
              </p>
              
              <p className="text-gray-700">
                It seems likely that key posts, like the December 19, 2020, call for a "big protest" on January 6, influenced events, but the exact number and full content are not fully accessible.
              </p>
              
              <p className="text-gray-700">
                The evidence leans toward significant posts being documented in reports, such as the January 6th Committee report, but only a subset is publicly listed.
              </p>
            </div>
          </section>
          
          <section id="detailed-list" className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-trump-blue mb-4 flex items-center">
              <Calendar className="mr-2 h-6 w-6" />
              Detailed List of Key X Posts
            </h2>
            
            <p className="text-gray-700 mb-6">
              Below is a table of key X posts identified, focusing on those mentioning election fraud and calls to the Capitol. Note that this is not exhaustive, and many more posts existed from November 2020 to January 2021.
            </p>
            
            <div className="overflow-x-auto">
              <Table>
                <TableCaption>Key X posts by Donald Trump before January 6th, 2021</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[180px] bg-trump-blue text-white">Date</TableHead>
                    <TableHead className="bg-trump-blue text-white">X Post Content</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {xPosts.map((post, index) => (
                    <TableRow key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                      <TableCell className="font-medium">{post.date}</TableCell>
                      <TableCell>{post.content}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>
          
          <section id="implications" className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-trump-blue mb-4 flex items-center">
              <AlertTriangle className="mr-2 h-6 w-6" />
              Historical Context and Implications
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                The level of direct involvement by media figures at campaign rallies remains unique to Trump's era, raising concerns about the blurring lines between journalism and political advocacy.
              </p>
              
              <p className="text-gray-700">
                Donald Trump's X account (@realDonaldTrump) was permanently suspended on January 8, 2021, two days after the Capitol riot, making comprehensive research on his posts challenging.
              </p>
              
              <p className="text-gray-700">
                According to The New York Times, Trump amplified voting falsehoods in over 300 tweets since election night, but not all contained calls related to the Capitol.
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer className="mt-12" />
    </div>
  );
};

export default TrumpXPosts;
