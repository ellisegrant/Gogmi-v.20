import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Calendar, Users, Globe, Shield } from 'lucide-react';

const SHADE = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plenaries = [
    { number: '1st', date: '14th July 2021', location: 'Virtual' },
    { number: '2nd', date: '14th September 2021', location: 'Virtual' },
    { number: '3rd', date: '16th November 2021', location: 'Virtual' },
    { number: '4th', date: '19th January 2022', location: 'Virtual' },
    { number: '5th', date: '10th and 11th May 2022', location: 'Abuja, Nigeria' }
  ];

  const guestSpeakers = [
    'Mr Kitack Lim, Secretary-General, International Maritime Organization',
    'Vice Admiral Awwal Zubairu Gambo – Chief of Naval Staff, Nigeria',
    'Rear Admiral Narciso Fastudo – Executive Director, ICC Yaoundé',
    'Dr Bashir Jamoh, Director General/CEO NIMASA, Nigeria',
    'Mr Guy Platten, Secretary General, International Chamber of Shipping'
  ];

  const workingGroups = [
    {
      title: 'Air De-confliction',
      objectives: [
        'Share unclassified air and intelligence, surveillance and reconnaissance (ISR) coordination issues',
        'Review and discuss the revision of the SHADE Air Coordination Plan',
        'Communicate technical information to air incident responses'
      ],
      color: '#4A90E2'
    },
    {
      title: 'Cooperation at Sea',
      objectives: [
        'Foster effective coordination of threat response activities',
        'Work with other Working Groups to ensure effective sharing of information',
        'Review and update draft Standard Operating Procedures (SOPs) for use by regional and international stakeholders'
      ],
      color: '#27AE60'
    },
    {
      title: 'Reporting and Information Sharing',
      objectives: [
        'Promote effective sharing of information between the regional and international navies and the shipping industry',
        'Facilitate timely incident reporting through MDAT-GoG'
      ],
      color: '#E67E22'
    }
  ];

  const benefits = [
    'Facilitation of operational dialogue across the clean-cut thematic areas of the WPs (Air De-confliction, Cooperation at Sea and Information Sharing) resulting in more targeted dialogues across groups with shared maritime security priorities',
    'Catalysation of active external stakeholder initiation of effective maritime regulation and enforcement operations, intended to complement other efforts across the region',
    'Establishment of operable best practices and mechanisms for reporting incidents across regional navies, such as a replication of the Mercury communication platform used within the Indian Ocean through SOLARTA'
  ];

  const targetAudience = [
    { title: 'GoG Countries Navies and Maritime Administrations', color: '#132552' },
    { title: 'GoG Maritime Stakeholder', color: '#E74C3C' },
    { title: 'International Partners', color: '#3498DB' },
    { title: 'International Shipping Industry', color: '#F39C12' }
  ];

  return (
    <div className="w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* Hero Section - Banner Image Only */}
      <section className="relative w-full pt-20">
        <img 
          src="/Banner.webp"
          alt="GoG-MCF SHADE Banner"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Shared Awareness Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          

          <div className="space-y-6 text-lg leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
            
            

          </div>
        </div>
      </section>

      {/* Modus Operandi Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Modus Operandi
            </h2>
            <div className="w-20 h-1.5 rounded-full mb-8" style={{ backgroundColor: '#8E3400' }}></div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed font-semibold mb-12" style={{ color: '#4B5563' }}>
            <p>
              The GoG-MCF/SHADE functions primarily through plenary sessions, each intended to generate dialogue and result in 
              tangible action steps necessary to foster operational coordination between regional navies and stakeholders within 
              the Gulf of Guinea's maritime industry.
            </p>

            <p>
              The initiative's three (3) Working Groups (WG) were formed during the first plenary session across the following 
              thematic areas: Cooperation at Sea (operations), Reporting and Information Sharing and Air De-confliction.
            </p>

            <p>
              The primary purpose of the WG is to identify viable areas for the enhancement of cooperation and de-confliction and 
              to make salient recommendations for each plenary to adopt. To facilitate this, each Working Group includes a subject-matter 
              expert and is chaired by a regional representative. The chart below highlights the major objectives of each of 
              the Working Groups.
            </p>
          </div>

          {/* Working Groups */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {workingGroups.map((wg, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center" style={{ backgroundColor: wg.color }}>
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4" style={{ color: '#132552', fontWeight: 900 }}>
                  {wg.title}
                </h3>
                <ul className="space-y-3">
                  {wg.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: wg.color }}></span>
                      <span className="text-base font-semibold" style={{ color: '#4B5563' }}>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quote Box */}
          <div className="text-white p-8 rounded-xl mb-8" style={{ backgroundColor: '#1E3A5F' }}>
            <p className="text-xl font-bold leading-relaxed italic mb-4">
              "The SHADE Model has already demonstrated its ability to support the exchange of information between regional and non-regional 
              military forces in countering Somali piracy in the Horn of Africa."
            </p>
            <p className="text-right font-semibold">— Giulio Nicolosi, Critical Maritime Routes Programme</p>
          </div>
        </div>
      </section>

      {/* Complementarities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Complementarities
            </h2>
            <div className="w-20 h-1.5 rounded-full mb-8" style={{ backgroundColor: '#8E3400' }}></div>
          </div>

          <p className="text-lg leading-relaxed font-semibold mb-12" style={{ color: '#4B5563' }}>
            The GoG-MCF/SHADE model was designed to work complementarily with existing information sharing architectures 
            and initiatives in the Gulf of Guinea region, such as the YCOC, BMP-WA and G7++ Friends of the Gulf of Guinea (FoGG).
          </p>

          {/* Past Plenaries */}
          <div className="mb-16">
            <h3 className="text-3xl font-black mb-8" style={{ color: '#132552', fontWeight: 900 }}>
              Past Plenaries
            </h3>
            <p className="text-lg leading-relaxed font-semibold mb-8" style={{ color: '#4B5563' }}>
              Since its establishment, the GoG-MCF/SHADE has held five plenary sessions, each complemented by technical 
              Working Group meetings, Working Group chair coordination meetings and plenary session reports. The first four 
              plenaries were held on a bi-monthly cycle; however, a decision has been made to host the plenaries on a tri-monthly 
              cycle going forward.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead style={{ backgroundColor: '#132552' }}>
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-bold">Plenary</th>
                    <th className="px-6 py-4 text-left text-white font-bold">Date</th>
                    <th className="px-6 py-4 text-left text-white font-bold">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {plenaries.map((plenary, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-6 py-4 font-bold" style={{ color: '#132552' }}>{plenary.number} Plenary</td>
                      <td className="px-6 py-4 font-semibold" style={{ color: '#4B5563' }}>{plenary.date}</td>
                      <td className="px-6 py-4 font-semibold" style={{ color: '#4B5563' }}>{plenary.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Plenary Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              The Fifth Plenary: A Closer Look
            </h2>
            <div className="w-20 h-1.5 rounded-full mb-8" style={{ backgroundColor: '#8E3400' }}></div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed font-semibold mb-12" style={{ color: '#4B5563' }}>
            <p>
              The fifth plenary presented the first opportunity for the GoG-MCF/SHADE Forum to be convened in-person, 
              facilitating a more active engagement amongst the stakeholders present. The plenary had the theme Sustainability of 
              Maritime Security in the Gulf of Guinea and provided an opportunity for maritime stakeholders to advocate the need 
              for effective collaboration in the battle against maritime criminality in the region. In attendance were ninety (90) 
              representatives from the sub-region and beyond, making it one of the largest platforms for galvanizing the efforts of 
              stakeholders in operational responses to piracy and armed robbery at sea in the Gulf of Guinea.
            </p>
          </div>

          {/* Venn Diagram - Stakeholder Groups */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-black mb-8 text-center" style={{ color: '#132552', fontWeight: 900 }}>
              Range of Participants: 5th Plenary Session
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="text-center">
                <div className="w-48 h-48 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#4A90E2', color: 'white' }}>
                  <div className="font-bold">
                    <div className="text-sm">Regional &</div>
                    <div className="text-sm">International</div>
                    <div className="text-sm">Navies</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#27AE60', color: 'white' }}>
                  <div className="font-bold text-sm px-4">
                    Information Architecture Reps: YCOC, Maritime Domain Awareness for Trade - Gulf of Guinea, West Africa, International Maritime Bureau
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#3498DB', color: 'white' }}>
                  <div className="font-bold text-sm">Shipping Industry</div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#95A5A6', color: 'white' }}>
                  <div className="font-bold text-sm px-4">
                    Regional & International NGOs, Organisations and Frameworks: UNODC, G7++FoGG
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Recommendations */}
          <div className="space-y-6 text-lg leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
            <p className="font-bold" style={{ color: '#132552' }}>
              The plenary highlighted, amongst other things, the crucial support of the International Maritime Organisation (IMO) and 
              the G7++FoGG in advancing the objectives of the forum and facilitating positive interactions.
            </p>

            <p>
              The shipping industry also called for more effective information sharing and interaction between navies operating in 
              the Gulf of Guinea to enhance visibility in the region's piracy hotspots. The need for such information sharing has to be 
              carefully juxtaposed against a delineation of the roles and responsibilities of different national agencies, while 
              recognising complementarities to avoid a duplication of efforts.
            </p>

            <p className="font-bold" style={{ color: '#132552' }}>
              Some of the key recommendations resulting from the plenary are indicated below:
            </p>

            <ul className="space-y-4 ml-6">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#8E3400' }}></span>
                <span>
                  There is the need for national stakeholders to review and upgrade Maritime Domain Awareness (MDA) 
                  infrastructure and systems to improve MDA in the Gulf of Guinea. Other relevant stakeholders must also consider 
                  the integration of national air assets in enhancing MDA and regional counter-piracy responses.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#8E3400' }}></span>
                <span>
                  The forum must develop a regular threat assessment for the Gulf of Guinea to facilitate regional naval awareness 
                  and industry risk assessment.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#8E3400' }}></span>
                <span>
                  The GoG-MCF/SHADE should be effectively used to facilitate the joint strategic communications needed to 
                  demonstrate regional progress in effectively addressing piracy and armed robbery at sea.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#8E3400' }}></span>
                <span>
                  Actors at the national level must continue to improve national legislations to ensure a legal finish to piracy 
                  prosecutions.
                </span>
              </li>
            </ul>
          </div>

          {/* IMO Quote Box */}
          <div className="text-white p-8 rounded-xl mt-12 mb-8" style={{ backgroundColor: '#1E3A5F' }}>
            <p className="text-xl font-bold leading-relaxed italic mb-4">
              "The key challenge in the Gulf of Guinea is to effectively integrate all initiatives to address piracy, armed robbery and 
              all maritime criminality into a focused and coordinated effort through the Yaoundé Code of Conduct framework."
            </p>
            <p className="font-semibold mb-4">
              IMO will continue to play a significant role in facilitating this integration, by maintaining our unwavering support for 
              the Yaoundé Code of Conduct architecture and strengthening capacity and capability.
            </p>
            <p className="text-right font-semibold">
              — Secretary-General Kitack Lim, International Maritime Organisation - 14th July, 2021
            </p>
          </div>
        </div>
      </section>

      {/* Towards Effective Counter-piracy Responses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Towards Effective Counter-piracy Responses
            </h2>
            <div className="w-20 h-1.5 rounded-full mb-8" style={{ backgroundColor: '#8E3400' }}></div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed font-semibold mb-12" style={{ color: '#4B5563' }}>
            <p>
              The Gulf of Guinea is characterised by a complex set of maritime security interventions and initiatives, each aimed at 
              addressing pertinent maritime criminalities such as piracy and armed robbery at sea. The GoG-MCF/SHADE presents 
              a practical opportunity to coordinate efforts by the broad range of stakeholders in the region towards the shared goal 
              of enhancing maritime security. More specifically the SHADE forum has led to the following notable benefits:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#132552' }}>
                <div className="text-6xl font-black mb-4" style={{ color: '#8E3400' }}>
                  {idx + 1}
                </div>
                <p className="text-base leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          <p className="text-lg leading-relaxed font-semibold mb-8" style={{ color: '#4B5563' }}>
            Of course, the model can only be successful with the full and active participation of regional and international navies, 
            as well as other relevant stakeholders within the Gulf of Guinea in particular, and across the globe at large. As more 
            plenaries are held, it is imperative that action items are effectively implemented and assessed against intended goals, 
            so that lessons learnt can continually feed into a more effective functioning of GoG-MCF/SHADE.
          </p>

          {/* Testimonial Boxes */}
          <div className="space-y-6">
            <div className="text-white p-8 rounded-xl" style={{ backgroundColor: '#1E3A5F' }}>
              <p className="text-xl font-bold leading-relaxed italic mb-4">
                "SOLARTA has gone online, is being used and has proved to be effective in preventing attacks becoming hostage 
                situations. And that is a big accomplishment in the space of six months."
              </p>
              <p className="text-right font-semibold">— Simon Church, Special Adviser to Forum Co-chairs - 7th February, 2022</p>
            </div>

            <div className="text-white p-8 rounded-xl" style={{ backgroundColor: '#1E3A5F' }}>
              <p className="text-xl font-bold leading-relaxed italic mb-4">
                "The establishment of SHADE has enabled working-level stakeholders from the GoG region and outside, to 
                connect and discuss how best to tackle piracy in the area, this has been a catalyst for non-regional stakeholders to 
                step up and initiate effective maritime law enforcement operations."
              </p>
              <p className="text-right font-semibold">
                — Dr Bashir Jamoh, Director-General, Nigerian Maritime Administration and Safety Agency - 5th May, 2022
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Photos Gallery */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center" style={{ color: '#132552', fontWeight: 900 }}>
            Event Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <div key={num} className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
                <img 
                  src={`https://images.unsplash.com/photo-${1540575467063 + num}?w=600&fit=crop`}
                  alt={`SHADE Event ${num}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inaugural Meeting Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#1E3A5F] to-[#2C5282] rounded-xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-96">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&fit=crop"
                  alt="GoG-MCF SHADE Event"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/80 to-transparent"></div>
              </div>
              <div className="p-12 text-white">
                <h3 className="text-4xl font-black mb-6" style={{ fontWeight: 900 }}>
                  GOG - MCF / SHADE
                </h3>
                <p className="text-xl font-bold mb-4 uppercase tracking-wide" style={{ color: '#F39C12' }}>
                  VIRTUAL EVENT
                </p>
                <div className="mb-6">
                  <p className="text-lg font-bold mb-2">EVENT OVERVIEW</p>
                  <p className="text-lg">14 JULY 2021</p>
                  <p className="text-base opacity-90">FIRST SESSION: 1000HRS - 1203HRS GMT</p>
                  <p className="text-base opacity-90">SECOND SESSION: 1300HRS - 1530HRS GMT</p>
                </div>
                <p className="text-sm italic opacity-80">
                  STRICTLY BY INVITATION!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg leading-relaxed font-semibold mb-8" style={{ color: '#4B5563' }}>
              On 26th April 2021, the ICC Yaoundé and Nigeria announced the formation of an International Framework 
              to provide shared awareness and deconfliction for activities in the Gulf of Guinea. This event is the 
              inaugural meeting of this framework referred to as the Gulf of Guinea Maritime Collaboration Forum – 
              SHADE (GOG MCF/SHADE). This online meeting hosted by the Gulf of Guinea Maritime Institute (GoGMI) 
              is by invitation of the SHADE Co-Chairs from the ICC and the Nigerian Navy.
            </p>
          </div>
        </div>
      </section>

      {/* Guest Speakers */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-12" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
            Guest Speakers
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {guestSpeakers.map((speaker, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#132552' }}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg font-semibold" style={{ color: '#4B5563' }}>
                  {speaker}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center" style={{ color: '#132552', fontWeight: 900 }}>
            Event Features
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-black mb-6" style={{ color: '#132552', fontWeight: 900 }}>
                SESSION I
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center bg-white p-6 rounded-xl shadow-md">
                  <div className="text-4xl mb-2">💬</div>
                  <p className="font-bold text-sm" style={{ color: '#4B5563' }}>Plenary Session</p>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-md">
                  <div className="text-4xl mb-2">🎯</div>
                  <p className="font-bold text-sm" style={{ color: '#4B5563' }}>Remarks</p>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-md">
                  <div className="text-4xl mb-2">👁️</div>
                  <p className="font-bold text-sm" style={{ color: '#4B5563' }}>Vision</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-black mb-6" style={{ color: '#132552', fontWeight: 900 }}>
                SESSION II
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-white p-6 rounded-xl shadow-md">
                  <div className="text-4xl mb-2">📋</div>
                  <p className="font-bold text-sm" style={{ color: '#4B5563' }}>Plan</p>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-md">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="font-bold text-sm" style={{ color: '#4B5563' }}>Presentations</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed font-semibold text-center max-w-4xl mx-auto" style={{ color: '#4B5563' }}>
            The meeting will be divided into 2 sessions. The morning session will formally open the historic forum and include 
            welcome remarks by both regional and international diplomats. The Plenary Co-Chairs will lead the second session 
            by setting the vision and plan for what the GoG-MCF SHADE will seek to accomplish. Three dedicated Working Group 
            Chairs, representing Cooperation at Sea (Operations), Reporting, and Information Sharing and Air De-confliction will 
            present their plan for achieving the objectives set.
          </p>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center" style={{ color: '#132552', fontWeight: 900 }}>
            Target Audience
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {targetAudience.map((audience, idx) => (
              <div key={idx} className="text-center">
                <div 
                  className="w-56 h-56 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl"
                  style={{ backgroundColor: audience.color }}
                >
                  <p className="text-white font-bold text-lg px-6">{audience.title}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-lg leading-relaxed font-semibold text-center max-w-4xl mx-auto mt-12" style={{ color: '#4B5563' }}>
            The GoG-MCF/SHADE is a working meeting with the aim of producing meaningful actions and measures that 
            translate to a significant increase in the cooperation at sea between regional and international navies, the international 
            shipping industry, and the key frameworks for the region. The opportunity will be for all indicated maritime 
            stakeholders to consider where their contribution can add value.
          </p>
        </div>
      </section>

      {/* Article Section with Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Article Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#6B7280', fontWeight: 700 }}>
            Strengthening Counter-Piracy Responses: The Gulf of Guinea Maritime Collaboration Forum
          </h2>

          {/* Subtitle */}
          <p className="text-center text-lg mb-8" style={{ color: '#6B7280', fontWeight: 400 }}>
            An article by the Gulf of Guinea Maritime Institute
          </p>

          {/* Shared Awareness Section Title */}
          <h3 className="text-3xl font-bold text-center mb-8" style={{ color: '#334E68', fontWeight: 700 }}>
            Shared Awareness – A Starting Point
          </h3>

          {/* Article Preview Text */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-base leading-relaxed mb-6" style={{ color: '#4B5563', fontWeight: 400 }}>
              In the past decade, the world has witnessed an evolution of the Gulf of Guinea's maritime security threat trajectory – 
              an evolution that rendered the region the most dangerous for seafarers. In 2020, all fifty-seven (57) incidents of 
              kidnapping-for-ransom worldwide occurred in the Gulf; and in the first quarter of 2021, the region accounted for nearly 
              half of all reported piracy incidents worldwide, leaving it as the world's piracy hotspot, <a href="https://iccwbo.org/news-publications/news/gulf-of-guinea-remains-worlds-piracy-hotspot-in-2021-according-to-imbs-latest-figures/" className="hover:underline" style={{ color: '#2563EB' }}>according to the International Maritime Bureau (IMB).</a>
            </p>
          </div>

          {/* Download Button */}
          <div className="text-center mb-16">
            <a
              href="/STRENGTHENING COUNTER-PIRACY RESPONSES (1).pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white text-lg font-bold transition-all shadow-lg hover:scale-105"
              style={{ backgroundColor: '#2563EB', fontWeight: 700 }}
            >
              <span>To Read More Download Here</span>
              <Download className="w-5 h-5" />
            </a>
          </div>

          {/* Contact Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4" style={{ color: '#F59E0B', fontWeight: 700 }}>
              CONTACT
            </h3>
            <p className="text-lg" style={{ color: '#6B7280', fontWeight: 400 }}>
              For more information, contact us via <a href="mailto:info@shade.org" className="hover:underline" style={{ color: '#2563EB' }}>info@shade.org</a>
            </p>
          </div>

          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="text-center">
              <img src="/ICC Logo (1).png" alt="ICC Logo" className="h-24 w-auto object-contain mx-auto mb-2" 
                   onError={(e) => { e.target.src = '/icc-logo.png'; }} />
              <p className="text-sm font-semibold" style={{ color: '#334E68' }}>
                CENTRE INTERREGIONAL DE COORDINATION (CIC)<br />
                INTER REGIONAL COORDINATION CENTRE (ICC)
              </p>
            </div>
            <div className="text-center">
              <img src="/nigeriamaritime.webp" alt="NIMASA Logo" className="h-24 w-auto object-contain mx-auto mb-2"
                   onError={(e) => { e.target.style.display = 'none'; }} />
              
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SHADE;