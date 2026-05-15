
import React from 'react';
import Header from '@/components/Header';
import SEO from '@/components/SEO';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TrumpInsults = () => {
  return (
    <div className="flex flex-col min-h-screen bg-trump-gray">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="mb-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-trump-blue mb-4">
              Trump's Public Insults
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Documented insults directed at politicians, celebrities, journalists, and other public figures
            </p>
          </div>
        </section>
        
        <Tabs defaultValue="politicians" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="politicians">Politicians</TabsTrigger>
            <TabsTrigger value="journalists">Journalists</TabsTrigger>
            <TabsTrigger value="celebrities">Celebrities</TabsTrigger>
            <TabsTrigger value="others">Others</TabsTrigger>
          </TabsList>
          
          <TabsContent value="politicians" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-trump-red" />
                  Political Opponents
                </CardTitle>
                <CardDescription>
                  Insults directed at political rivals and other political figures
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-3">
                    <h3 className="font-bold">Hillary Clinton</h3>
                    <ul className="list-disc ml-6 mt-2">
                      <li>"Crooked Hillary"</li>
                      <li>"Such a nasty woman"</li>
                      <li>"The worst secretary of state in the history of the United States"</li>
                    </ul>
                  </div>
                  
                  <div className="border-b pb-3">
                    <h3 className="font-bold">Joe Biden</h3>
                    <ul className="list-disc ml-6 mt-2">
                      <li>"Sleepy Joe"</li>
                      <li>"1% Joe" (referring to previous presidential campaigns)</li>
                      <li>"Quid pro Joe"</li>
                    </ul>
                  </div>
                  
                  <div className="border-b pb-3">
                    <h3 className="font-bold">Ted Cruz</h3>
                    <ul className="list-disc ml-6 mt-2">
                      <li>"Lyin' Ted"</li>
                      <li>"The single biggest liar I've ever come across"</li>
                    </ul>
                  </div>
                  
                  <div className="border-b pb-3">
                    <h3 className="font-bold">Marco Rubio</h3>
                    <ul className="list-disc ml-6 mt-2">
                      <li>"Little Marco"</li>
                      <li>"Lightweight choker"</li>
                    </ul>
                  </div>
                  
                  <div className="border-b pb-3">
                    <h3 className="font-bold">Elizabeth Warren</h3>
                    <ul className="list-disc ml-6 mt-2">
                      <li>"Pocahontas"</li>
                      <li>"Goofy Elizabeth Warren"</li>
                    </ul>
                  </div>
                  
                  <div className="border-b pb-3">
                    <h3 className="font-bold">Nancy Pelosi</h3>
                    <ul className="list-disc ml-6 mt-2">
                      <li>"Crazy Nancy"</li>
                      <li>"Nervous Nancy"</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-bold">Adam Schiff</h3>
                    <ul className="list-disc ml-6 mt-2">
                      <li>"Liddle' Adam Schiff"</li>
                      <li>"Shifty Schiff"</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="journalists" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-trump-red" />
                  Media Figures
                </CardTitle>
                <CardDescription>
                  Insults directed at journalists, news anchors, and media organizations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-3">
                    <h3 className="font-bold">Megyn Kelly</h3>
                    <ul className="list-disc ml-6 mt-2">
                      <li>"Crazy Megyn"</li>
                      <li>"Highly overrated"</li>
                    </ul>
                  </div>
                  
                  <div className="border-b pb-3">
                    <h3 className="font-bold">Jim Acosta (CNN)</h3>
                    <ul className="list-disc ml-6 mt-2">
                      <li>"Very unprofessional"</li>
                      <li>"Terrible"</li>
                    </ul>
                  </div>
                  
                  <div className="border-b pb-3">
                    <h3 className="font-bold">Morning Joe (Scarborough & Brzezinski)</h3>
                    <ul className="list-disc ml-6 mt-2">
                      <li>"Psycho Joe"</li>
                      <li>"Low I.Q. Crazy Mika"</li>
                    </ul>
                  </div>
                  
                  <div className="border-b pb-3">
                    <h3 className="font-bold">Chuck Todd</h3>
                    <ul className="list-disc ml-6 mt-2">
                      <li>"Sleepy Eyes"</li>
                      <li>"Totally dishonest"</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-bold">Media Organizations</h3>
                    <ul className="list-disc ml-6 mt-2">
                      <li>CNN: "Fake News" and "Very dishonest"</li>
                      <li>New York Times: "Failing New York Times"</li>
                      <li>Washington Post: "Amazon Washington Post"</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="celebrities" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-trump-red" />
                  Celebrities & Entertainment Figures
                </CardTitle>
                <CardDescription>
                  Insults directed at celebrities and figures from entertainment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-3">
                    <h3 className="font-bold">Rosie O'Donnell</h3>
                    <ul className="list-disc ml-6 mt-2">
                      <li>"Fat pig"</li>
                      <li>"Slob"</li>
                      <li>"Real loser"</li>
                    </ul>
                  </div>
                  
                  <div className="border-b pb-3">
                    <h3 className="font-bold">Meryl Streep</h3>
                    <ul className="list-disc ml-6 mt-2">
                      <li>"One of the most over-rated actresses in Hollywood"</li>
                      <li>"Hillary flunky"</li>
                    </ul>
                  </div>
                  
                  <div className="border-b pb-3">
                    <h3 className="font-bold">Robert De Niro</h3>
                    <ul className="list-disc ml-6 mt-2">
                      <li>"Very Low IQ individual"</li>
                      <li>"Punch-drunk"</li>
                    </ul>
                  </div>
                  
                  <div className="border-b pb-3">
                    <h3 className="font-bold">Arnold Schwarzenegger</h3>
                    <ul className="list-disc ml-6 mt-2">
                      <li>"Really bad job as Governor of California"</li>
                      <li>"Ratings challenged" (regarding The Apprentice)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-bold">Lady Gaga</h3>
                    <ul className="list-disc ml-6 mt-2">
                      <li>"Not talented"</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="others" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-trump-red" />
                  Other Public Figures
                </CardTitle>
                <CardDescription>
                  Insults directed at business leaders, foreign officials, and other notable people
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-3">
                    <h3 className="font-bold">Jeff Bezos</h3>
                    <ul className="list-disc ml-6 mt-2">
                      <li>"Jeff Bozo"</li>
                    </ul>
                  </div>
                  
                  <div className="border-b pb-3">
                    <h3 className="font-bold">Mark Zuckerberg</h3>
                    <ul className="list-disc ml-6 mt-2">
                      <li>"Actually is not a very smart person"</li>
                    </ul>
                  </div>
                  
                  <div className="border-b pb-3">
                    <h3 className="font-bold">Angela Merkel</h3>
                    <ul className="list-disc ml-6 mt-2">
                      <li>"Ruining Germany"</li>
                    </ul>
                  </div>
                  
                  <div className="border-b pb-3">
                    <h3 className="font-bold">Kim Jong Un</h3>
                    <ul className="list-disc ml-6 mt-2">
                      <li>"Rocket Man"</li>
                      <li>"Little Rocket Man"</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-bold">Dr. Anthony Fauci</h3>
                    <ul className="list-disc ml-6 mt-2">
                      <li>"Disaster"</li>
                      <li>"Idiots"</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="mt-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-trump-blue mb-4">About Trump's Insult Style</h2>
          <div className="space-y-4">
            <p>
              Donald Trump's use of insulting nicknames and personal attacks became a signature of his political style during both his 2016 campaign and presidency. Political analysts have noted that this approach helped him stand out in a crowded Republican primary field and created memorable media moments that dominated news cycles.
            </p>
            <p>
              The New York Times documented that Trump insulted nearly 600 people, places, and things on Twitter alone during his first term as president. His tendency to assign derogatory nicknames to opponents became a recognizable rhetorical device, with terms like "Crooked Hillary," "Sleepy Joe," and "Lyin' Ted" becoming part of the political lexicon.
            </p>
            <p>
              Critics have argued that this style of communication lowered the tone of political discourse in America, while supporters viewed it as refreshing directness and authenticity that broke from traditional political speech.
            </p>
          </div>
        </div>
      </main>
      
      <Footer className="mt-12" />
    </div>
  );
};

export default TrumpInsults;
