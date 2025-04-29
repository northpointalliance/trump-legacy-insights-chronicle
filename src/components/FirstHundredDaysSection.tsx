
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Briefcase, Globe2, LightbulbOff, Users, FileText, Shield, Building } from 'lucide-react';

const FirstHundredDaysSection = () => {
  return (
    <Card className="border-trump-blue shadow-md">
      <CardHeader className="bg-trump-blue text-white">
        <CardTitle className="text-2xl">First 100 Days: Trump's Second Term</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="policy" className="w-full">
          <TabsList className="grid grid-cols-4 md:grid-cols-8 w-full rounded-none bg-muted/80">
            <TabsTrigger value="policy"><FileText className="h-4 w-4 mr-2" />Policy</TabsTrigger>
            <TabsTrigger value="immigration"><Shield className="h-4 w-4 mr-2" />Immigration</TabsTrigger>
            <TabsTrigger value="economy"><Briefcase className="h-4 w-4 mr-2" />Economy</TabsTrigger>
            <TabsTrigger value="foreign"><Globe2 className="h-4 w-4 mr-2" />Foreign Policy</TabsTrigger>
            <TabsTrigger value="energy"><LightbulbOff className="h-4 w-4 mr-2" />Energy</TabsTrigger>
            <TabsTrigger value="health"><Calendar className="h-4 w-4 mr-2" />Health</TabsTrigger>
            <TabsTrigger value="approval"><Users className="h-4 w-4 mr-2" />Approval</TabsTrigger>
            <TabsTrigger value="cabinet"><Building className="h-4 w-4 mr-2" />Cabinet</TabsTrigger>
          </TabsList>
          
          <div className="p-4 md:p-6">
            <TabsContent value="policy" className="mt-0">
              <h3 className="text-xl font-bold mb-3">Executive Actions and Policy Shifts</h3>
              <p className="mb-4">Trump signed over 60 executive orders in his first 100 days, focusing on immigration, energy, and deregulation. His administration faced legal challenges with over 100 lawsuits filed against various orders.</p>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-start">
                  <div className="bg-trump-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</div>
                  <p>Courts halted several orders, prompting criticism of judges and calls for impeachments from Trump.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-trump-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</div>
                  <p>Legal scholars raised concerns about constitutional overreach and violations of checks and balances.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-trump-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</div>
                  <p>Trump's view of executive power was emboldened by the Supreme Court's 2024 ruling on presidential immunity.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="immigration" className="mt-0">
              <h3 className="text-xl font-bold mb-3">Border and Immigration</h3>
              <p className="mb-4">Trump launched Operation Aurora on Day One, deploying thousands of agents for mass deportations using private contractors. Immigrant-friendly localities saw federal funding cuts.</p>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-start">
                  <div className="bg-trump-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</div>
                  <p>Enhanced screening processes included ideological tests for immigrants from selected countries.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-trump-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</div>
                  <p>Multiple executive orders reinstated strict border policies and expanded wall construction.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-trump-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</div>
                  <p>Deportation measures prioritized undocumented immigrants with criminal records.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="economy" className="mt-0">
              <h3 className="text-xl font-bold mb-3">Economic Policy</h3>
              <p className="mb-4">Trump's "America First" economic agenda introduced sweeping tariffs on China (60%), EU (20%), Canada and Mexico (10-25%), raising concerns about global trade conflicts.</p>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-start">
                  <div className="bg-trump-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</div>
                  <p>Initiated new trade negotiations with China, announcing plans for increased tariffs on Chinese imports.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-trump-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</div>
                  <p>Tax Reform 2.0 was proposed, extending and expanding previous tax cuts for individuals and corporations.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-trump-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</div>
                  <p>Corporate tax rate was reduced from 21% to 15% and payroll tax was temporarily cut.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="foreign" className="mt-0">
              <h3 className="text-xl font-bold mb-3">Foreign Policy</h3>
              <p className="mb-4">Trump's foreign policy focused on bilateral relationships over multilateral institutions, demanding NATO allies increase defense spending to 3% of GDP.</p>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-start">
                  <div className="bg-trump-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</div>
                  <p>Proposed transforming Gaza into a resort and pushed for a Russia-Ukraine ceasefire.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-trump-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</div>
                  <p>Secretary of State Marco Rubio indicated no immediate Ukraine-Russia deal was imminent.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-trump-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</div>
                  <p>New sanctions on Iran and withdrawal from remaining nuclear-related agreements were announced.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="energy" className="mt-0">
              <h3 className="text-xl font-bold mb-3">Energy and Environment</h3>
              <p className="mb-4">Trump ended Biden's electric vehicle mandate, paused wind farm leasing, and reversed environmental regulations to boost oil and gas production.</p>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-start">
                  <div className="bg-trump-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</div>
                  <p>Withdrew from the Paris Agreement, prioritizing domestic energy production.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-trump-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</div>
                  <p>Reduced budgets for renewable energy research and development.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-trump-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</div>
                  <p>Weakened protections for wildlife and federal infrastructure projects.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="health" className="mt-0">
              <h3 className="text-xl font-bold mb-3">Public Health and Education</h3>
              <p className="mb-4">Health Secretary Robert F. Kennedy Jr. promoted unorthodox health policies, while measles outbreaks in unvaccinated populations raised public health concerns.</p>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-start">
                  <div className="bg-trump-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</div>
                  <p>Attempted to dismantle the Department of Education, facing legal challenges.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-trump-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</div>
                  <p>Cut funding for schools deemed "woke" and investigated Harvard for race-based discrimination.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-trump-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</div>
                  <p>Reduced federal health program funding while promoting alternative health approaches.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="approval" className="mt-0">
              <h3 className="text-xl font-bold mb-3">Public Sentiment and Approval</h3>
              <p className="mb-4">Polls showed mixed reception to Trump's second term start, with approval ratings fluctuating in the first months.</p>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-start">
                  <div className="bg-trump-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</div>
                  <p>Reuters/Ipsos poll on January 21 reported 47% approval and 41% disapproval.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-trump-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</div>
                  <p>Approval rating dropped to 45% by January 28, with his January 6 pardons broadly unpopular.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-trump-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</div>
                  <p>Trump overhauled the White House press pool, favoring "new media" outlets.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="cabinet" className="mt-0">
              <h3 className="text-xl font-bold mb-3">Cabinet and Administration</h3>
              <p className="mb-4">Trump nominated a wealthy, loyalist-heavy administration with controversial figures in key positions.</p>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-start">
                  <div className="bg-trump-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</div>
                  <p>Marco Rubio as Secretary of State emphasized an "America First" approach to diplomacy.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-trump-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</div>
                  <p>Robert F. Kennedy Jr. as Health Secretary implemented controversial health policies.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-trump-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</div>
                  <p>Elon Musk's Department of Government Efficiency (DOGE) role sparked conflict of interest concerns.</p>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
        <div className="p-4 bg-muted/30 border-t border-muted-foreground/20 text-sm text-center">
          <a href="/first-presidency" className="text-trump-blue hover:text-trump-red">
            View detailed timeline →
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default FirstHundredDaysSection;
