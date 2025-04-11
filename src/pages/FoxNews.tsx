
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tv, Users } from 'lucide-react';

const FoxNews = () => {
  return (
    <div className="flex flex-col min-h-screen bg-trump-gray">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="mb-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-trump-blue mb-4">
              Fox News and Campaign Rallies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Analyzing the unique relationship between media coverage and political campaigns
            </p>
          </div>
        </section>
        
        <div className="space-y-8">
          <section id="fox-news-role" className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-trump-blue mb-4 flex items-center">
              <Tv className="mr-2 h-6 w-6" />
              The Role of Fox News in Campaigns
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                Fox News, founded in 1996 by Rupert Murdoch and Roger Ailes, has played a significant role in shaping conservative political discourse in the U.S. It has been described as an expanded part of the Republican Party, particularly during Donald Trump's presidency. Fox News provided extensive coverage of Trump's rallies and policies, often described as "fawning" by critics.
              </p>
              
              <p className="text-gray-700">
                During Trump's presidency, Fox News amplified his messages while minimizing coverage of scandals involving his administration. Trump frequently appeared on Fox News for interviews, granting far more access to Fox than other networks.
              </p>
              
              <p className="text-gray-700">
                Fox News personalities such as Sean Hannity and Tucker Carlson were prominent supporters of Trump and occasionally appeared at campaign rallies or events, creating a dynamic that some critics likened to "state media". This level of media involvement in political campaigns is unprecedented in modern U.S. history.
              </p>
            </div>
          </section>
          
          <section id="campaign-rallies" className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-trump-blue mb-4 flex items-center">
              <Users className="mr-2 h-6 w-6" />
              Evolution of Campaign Rallies
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                Campaign rallies have historically been a tool for direct voter engagement. However, populist leaders like Donald Trump have uniquely leveraged rallies to gain media attention and energize their base. Research shows that Trump's rallies produced short-term increases in voter support, turnout intentions, and campaign contributions.
              </p>
              
              <p className="text-gray-700">
                Unlike other recent candidates such as Barack Obama or Hillary Clinton, Trump's rallies had a distinct impact on political preferences due to the extensive media coverage they attracted. This suggests that populist leaders use rallies not just for voter engagement but also to dominate news cycles.
              </p>
            </div>
          </section>
          
          <section id="historical-context" className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-trump-blue mb-4">
              Historical Context of Media Involvement in Presidential Campaigns
            </h2>
            
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>
                <strong>Ronald Reagan (1980s):</strong> Reagan's campaigns benefited from favorable coverage due to his background as an actor and his ability to communicate effectively via television.
              </li>
              <li>
                <strong>Bill Clinton (1990s):</strong> Clinton faced disproportionate negative coverage from conservative outlets like Fox News after its launch in 1996.
              </li>
              <li>
                <strong>Barack Obama (2008–2016):</strong> Fox News amplified opposition movements like the Tea Party during Obama's presidency.
              </li>
              <li>
                <strong>Donald Trump (2016–2020):</strong> Trump's relationship with Fox News was uniquely close compared to previous presidents, with Fox personalities actively supporting his campaigns.
              </li>
              <li>
                <strong>Joe Biden (2020–Present):</strong> Biden's campaign faced criticism from conservative outlets like Fox News but did not have comparable media allies at campaign events.
              </li>
            </ul>
            
            <p className="mt-4 text-gray-700">
              The level of direct involvement by media figures at campaign rallies remains unique to Trump's era, raising concerns about the blurring lines between journalism and political advocacy.
            </p>
          </section>
        </div>
      </main>
      
      <Footer className="mt-12" />
    </div>
  );
};

export default FoxNews;
