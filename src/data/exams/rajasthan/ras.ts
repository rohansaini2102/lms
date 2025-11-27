import { ExamData } from '../../types';

export const RAS_EXAM: ExamData = {
  id: 'ras',
  name: 'RAS',
  fullName: 'Rajasthan Administrative Service',
  fullNameHi: 'राजस्थान प्रशासनिक सेवा',
  category: 'state-psc',
  icon: 'Landmark',
  color: '#0891B2',
  description: 'Rajasthan\'s premier civil services examination',
  descriptionHi: 'राजस्थान की प्रमुख सिविल सेवा परीक्षा',
  subjects: [
    {
      id: 'raj-history',
      name: 'History of Rajasthan',
      nameHi: 'राजस्थान का इतिहास',
      icon: 'BookOpen',
      color: '#DC2626',
      topics: [
        {
          id: 'raj-dynasties',
          name: 'Major Dynasties of Rajasthan',
          nameHi: 'राजस्थान के प्रमुख राजवंश',
          chapters: [
            {
              id: 'mewar-dynasty',
              name: 'Guhila & Sisodia Dynasty of Mewar',
              nameHi: 'मेवाड़ के गुहिल एवं सिसोदिया वंश',
              difficulty: 'medium',
              questions: [
                {
                  id: 'mewar-1',
                  text: 'Who was the founder of the Mewar Kingdom (Guhila Dynasty)?',
                  textHi: 'मेवाड़ राज्य (गुहिल वंश) के संस्थापक कौन थे?',
                  options: ['Rana Sanga', 'Bappa Rawal', 'Maharana Pratap', 'Rana Kumbha'],
                  optionsHi: ['राणा सांगा', 'बप्पा रावल', 'महाराणा प्रताप', 'राणा कुंभा'],
                  correctAnswer: 1,
                  explanation: 'Bappa Rawal (Kalbor) is widely considered the real founder of the Mewar Kingdom and the Guhila dynasty in the 8th century AD, establishing the capital at Nagda.',
                  explanationHi: 'बप्पा रावल (कालभोज) को 8वीं शताब्दी ईस्वी में मेवाड़ राज्य और गुहिल वंश का वास्तविक संस्थापक माना जाता है, जिन्होंने नागदा में राजधानी स्थापित की।',
                  difficulty: 'easy',
                  year: 'RAS 2018'
                },
                {
                  id: 'mewar-2',
                  text: 'The Battle of Khanwa (1527) was fought between Babur and which Rajput ruler?',
                  textHi: 'खानवा का युद्ध (1527) बाबर और किस राजपूत शासक के बीच हुआ था?',
                  options: ['Rana Sanga', 'Rao Maldeo', 'Prithviraj Chauhan', 'Rana Kumbha'],
                  optionsHi: ['राणा सांगा', 'राव मालदेव', 'पृथ्वीराज चौहान', 'राणा कुंभा'],
                  correctAnswer: 0,
                  explanation: 'The Battle of Khanwa was fought near Bharatpur between Babur and Rana Sanga (Sangram Singh) of Mewar, marking a turning point in Mughal establishment in India.',
                  explanationHi: 'खानवा का युद्ध भरतपुर के पास बाबर और मेवाड़ के राणा सांगा (संग्राम सिंह) के बीच हुआ था, जो भारत में मुगल स्थापना में एक महत्वपूर्ण मोड़ था।',
                  difficulty: 'easy',
                  year: 'RAS 2019'
                },
                {
                  id: 'mewar-3',
                  text: 'Who built the "Vijay Stambh" (Tower of Victory) in Chittorgarh?',
                  textHi: 'चित्तौड़गढ़ में "विजय स्तंभ" किसने बनवाया था?',
                  options: ['Rana Sanga', 'Rana Lakha', 'Rana Kumbha', 'Rana Mokal'],
                  optionsHi: ['राणा सांगा', 'राणा लाखा', 'राणा कुंभा', 'राणा मोकल'],
                  correctAnswer: 2,
                  explanation: 'Rana Kumbha built the Vijay Stambh (1440-1448) to commemorate his victory over the combined armies of Malwa and Gujarat in the Battle of Sarangpur (1437).',
                  explanationHi: 'राणा कुंभा ने सारंगपुर के युद्ध (1437) में मालवा और गुजरात की संयुक्त सेनाओं पर अपनी जीत की याद में विजय स्तंभ (1440-1448) का निर्माण करवाया।',
                  difficulty: 'easy',
                  year: 'RAS 2017'
                },
                {
                  id: 'mewar-4',
                  text: 'Maharana Pratap was born in which fort?',
                  textHi: 'महाराणा प्रताप का जन्म किस दुर्ग में हुआ था?',
                  options: ['Chittorgarh Fort', 'Kumbhalgarh Fort', 'Mandalgarh Fort', 'Gogunda Fort'],
                  optionsHi: ['चित्तौड़गढ़ दुर्ग', 'कुंभलगढ़ दुर्ग', 'मांडलगढ़ दुर्ग', 'गोगुन्दा दुर्ग'],
                  correctAnswer: 1,
                  explanation: 'Maharana Pratap was born on May 9, 1540, in the Badal Mahal of Kumbhalgarh Fort. His mother was Maharani Jaiwanta Bai.',
                  explanationHi: 'महाराणा प्रताप का जन्म 9 मई, 1540 को कुंभलगढ़ दुर्ग के बादल महल में हुआ था। उनकी माता महारानी जयवंता बाई थीं।',
                  difficulty: 'easy',
                  year: 'RAS 2020'
                },
                {
                  id: 'mewar-5',
                  text: 'Which Mewar ruler signed the treaty with the British East India Company in 1818?',
                  textHi: '1818 में ब्रिटिश ईस्ट इंडिया कंपनी के साथ संधि किस मेवाड़ शासक ने की थी?',
                  options: ['Maharana Bhim Singh', 'Maharana Swaroop Singh', 'Maharana Fateh Singh', 'Maharana Shambhu Singh'],
                  optionsHi: ['महाराणा भीम सिंह', 'महाराणा स्वरूप सिंह', 'महाराणा फतेह सिंह', 'महाराणा शंभु सिंह'],
                  correctAnswer: 0,
                  explanation: 'Maharana Bhim Singh of Mewar signed the subordinate alliance treaty with the British East India Company on January 13, 1818.',
                  explanationHi: 'मेवाड़ के महाराणा भीम सिंह ने 13 जनवरी, 1818 को ब्रिटिश ईस्ट इंडिया कंपनी के साथ अधीनस्थ गठबंधन संधि पर हस्ताक्षर किए।',
                  difficulty: 'medium',
                  year: 'RAS 2016'
                },
                {
                  id: 'mewar-6',
                  text: 'The "Panna Dhai" sacrificed her son to save which future ruler of Mewar?',
                  textHi: '"पन्ना धाय" ने मेवाड़ के किस भावी शासक को बचाने के लिए अपने पुत्र का बलिदान दिया?',
                  options: ['Udai Singh II', 'Vikramaditya', 'Ratnasimha', 'Ari Singh'],
                  optionsHi: ['उदय सिंह द्वितीय', 'विक्रमादित्य', 'रत्नसिंह', 'अरि सिंह'],
                  correctAnswer: 0,
                  explanation: 'Panna Dhai sacrificed her own son Chandan to save the young Udai Singh II from the usurper Banvir. Udai Singh II later founded Udaipur.',
                  explanationHi: 'पन्ना धाय ने अपने पुत्र चंदन का बलिदान दिया ताकि छोटे उदय सिंह द्वितीय को हड़पने वाले बनवीर से बचाया जा सके। उदय सिंह द्वितीय ने बाद में उदयपुर की स्थापना की।',
                  difficulty: 'easy',
                  year: 'RAS 2019'
                },
                {
                  id: 'mewar-7',
                  text: 'Who is known as the "Bheeshma Pitamah" of Rajasthan?',
                  textHi: 'राजस्थान के "भीष्म पितामह" के नाम से किसे जाना जाता है?',
                  options: ['Rana Sanga', 'Rao Chunda', 'Rawal Jait Singh', 'Rana Hammir'],
                  optionsHi: ['राणा सांगा', 'राव चूंडा', 'रावल जैत सिंह', 'राणा हम्मीर'],
                  correctAnswer: 1,
                  explanation: 'Rao Chunda (son of Rana Lakha) is called the Bheeshma of Rajasthan because he renounced his claim to the throne for his step-brother Mokal.',
                  explanationHi: 'राव चूंडा (राणा लाखा के पुत्र) को राजस्थान का भीष्म कहा जाता है क्योंकि उन्होंने अपने सौतेले भाई मोकल के लिए सिंहासन पर अपना दावा त्याग दिया।',
                  difficulty: 'medium'
                },
                {
                  id: 'mewar-8',
                  text: 'Which inscription mentions the achievements of the Guhila rulers up to Samar Singh?',
                  textHi: 'कौन सा शिलालेख समर सिंह तक गुहिल शासकों की उपलब्धियों का उल्लेख करता है?',
                  options: ['Bijolia Inscription', 'Chirwa Inscription', 'Kumbhalgarh Inscription', 'Ghosundi Inscription'],
                  optionsHi: ['बिजोलिया शिलालेख', 'चीरवा शिलालेख', 'कुंभलगढ़ शिलालेख', 'घोसुंडी शिलालेख'],
                  correctAnswer: 1,
                  explanation: 'The Chirwa Inscription (1273 AD) provides information about the Guhila rulers of Mewar and the social conditions of that time.',
                  explanationHi: 'चीरवा शिलालेख (1273 ई.) मेवाड़ के गुहिल शासकों और उस समय की सामाजिक स्थितियों के बारे में जानकारी प्रदान करता है।',
                  difficulty: 'hard',
                  year: 'RAS 2015'
                },
                {
                  id: 'mewar-9',
                  text: 'The capital of Mewar was shifted from Chittor to Udaipur by whom?',
                  textHi: 'मेवाड़ की राजधानी चित्तौड़ से उदयपुर किसने स्थानांतरित की?',
                  options: ['Rana Sanga', 'Udai Singh II', 'Maharana Pratap', 'Amar Singh I'],
                  optionsHi: ['राणा सांगा', 'उदय सिंह द्वितीय', 'महाराणा प्रताप', 'अमर सिंह प्रथम'],
                  correctAnswer: 1,
                  explanation: 'Udai Singh II founded the city of Udaipur in 1559 and subsequently shifted the capital there for better strategic defense after the fall of Chittorgarh.',
                  explanationHi: 'उदय सिंह द्वितीय ने 1559 में उदयपुर शहर की स्थापना की और चित्तौड़गढ़ के पतन के बाद बेहतर रणनीतिक रक्षा के लिए राजधानी वहां स्थानांतरित कर दी।',
                  difficulty: 'easy'
                },
                {
                  id: 'mewar-10',
                  text: 'Who was the commander of the Rajput forces in the Battle of Haldighati alongside Maharana Pratap?',
                  textHi: 'हल्दीघाटी के युद्ध में महाराणा प्रताप के साथ राजपूत सेना का सेनापति कौन था?',
                  options: ['Hakim Khan Sur', 'Bhamashah', 'Man Singh', 'Asaf Khan'],
                  optionsHi: ['हकीम खान सूर', 'भामाशाह', 'मान सिंह', 'आसफ खान'],
                  correctAnswer: 0,
                  explanation: 'Hakim Khan Sur was a Pathan commander who led the vanguard of Maharana Pratap\'s army and fought loyally against the Mughals in the Battle of Haldighati (1576).',
                  explanationHi: 'हकीम खान सूर एक पठान सेनापति थे जिन्होंने महाराणा प्रताप की सेना का अग्रिम दल का नेतृत्व किया और हल्दीघाटी के युद्ध (1576) में मुगलों के खिलाफ वफादारी से लड़े।',
                  difficulty: 'medium',
                  year: 'RAS 2018'
                },
                {
                  id: 'mewar-11',
                  text: 'The famous "Chetak" was the horse of which Mewar ruler?',
                  textHi: 'प्रसिद्ध "चेतक" किस मेवाड़ शासक का घोड़ा था?',
                  options: ['Rana Sanga', 'Rana Kumbha', 'Maharana Pratap', 'Udai Singh II'],
                  optionsHi: ['राणा सांगा', 'राणा कुंभा', 'महाराणा प्रताप', 'उदय सिंह द्वितीय'],
                  correctAnswer: 2,
                  explanation: 'Chetak was the legendary blue horse of Maharana Pratap who carried him through the Battle of Haldighati. A memorial (Chhatri) stands at Haldighati where Chetak died.',
                  explanationHi: 'चेतक महाराणा प्रताप का पौराणिक नीला घोड़ा था जिसने उन्हें हल्दीघाटी के युद्ध में ले गया। हल्दीघाटी में एक स्मारक (छतरी) है जहां चेतक की मृत्यु हुई थी।',
                  difficulty: 'easy'
                },
                {
                  id: 'mewar-12',
                  text: 'Which Mewar ruler is known as the "Hindu Suratran" (Hindu Sultan)?',
                  textHi: 'किस मेवाड़ शासक को "हिंदू सुरतराण" (हिंदू सुल्तान) के नाम से जाना जाता है?',
                  options: ['Rana Hammir', 'Rana Sanga', 'Rana Kumbha', 'Maharana Pratap'],
                  optionsHi: ['राणा हम्मीर', 'राणा सांगा', 'राणा कुंभा', 'महाराणा प्रताप'],
                  correctAnswer: 1,
                  explanation: 'Rana Sanga (Sangram Singh) was called "Hindu Suratran" due to his leadership of the Rajput confederacy against the Mughals and his extensive victories.',
                  explanationHi: 'राणा सांगा (संग्राम सिंह) को मुगलों के खिलाफ राजपूत संघ के नेतृत्व और उनकी व्यापक विजयों के कारण "हिंदू सुरतराण" कहा जाता था।',
                  difficulty: 'medium',
                  year: 'RAS 2017'
                },
                {
                  id: 'mewar-13',
                  text: 'Who wrote "Ekling Mahatmya" which provides genealogy of Mewar rulers?',
                  textHi: '"एकलिंग महात्म्य" किसने लिखा जो मेवाड़ शासकों की वंशावली प्रदान करता है?',
                  options: ['Rana Kumbha', 'Mahesh Bhatt', 'Kanhad Dev', 'Jayasimha Suri'],
                  optionsHi: ['राणा कुंभा', 'महेश भट्ट', 'कान्हड़ देव', 'जयसिंह सूरि'],
                  correctAnswer: 0,
                  explanation: 'Rana Kumbha himself was a scholar and wrote Ekling Mahatmya. He also wrote commentaries on Gita Govinda and Sangeet Ratnakar.',
                  explanationHi: 'राणा कुंभा स्वयं एक विद्वान थे और उन्होंने एकलिंग महात्म्य लिखा। उन्होंने गीत गोविंद और संगीत रत्नाकर पर टीकाएं भी लिखीं।',
                  difficulty: 'hard'
                },
                {
                  id: 'mewar-14',
                  text: 'In which year did the third siege of Chittorgarh take place under Akbar?',
                  textHi: 'अकबर के अधीन चित्तौड़गढ़ का तीसरा घेरा किस वर्ष हुआ?',
                  options: ['1567', '1568', '1576', '1580'],
                  optionsHi: ['1567', '1568', '1576', '1580'],
                  correctAnswer: 1,
                  explanation: 'The third siege of Chittorgarh by Akbar took place in 1567-68. The fort fell in February 1568 leading to a major Jauhar led by Patta and Jaimal\'s sacrifice.',
                  explanationHi: 'अकबर द्वारा चित्तौड़गढ़ का तीसरा घेरा 1567-68 में हुआ। किला फरवरी 1568 में गिर गया जिससे पत्ता और जयमल के बलिदान के साथ एक बड़ा जौहर हुआ।',
                  difficulty: 'medium',
                  year: 'RAS 2016'
                },
                {
                  id: 'mewar-15',
                  text: 'Which temple is known as the "Family Deity Temple" of Mewar rulers?',
                  textHi: 'कौन सा मंदिर मेवाड़ शासकों के "कुलदेवता मंदिर" के रूप में जाना जाता है?',
                  options: ['Ranakpur Temple', 'Eklingji Temple', 'Nathdwara Temple', 'Dilwara Temple'],
                  optionsHi: ['रणकपुर मंदिर', 'एकलिंगजी मंदिर', 'नाथद्वारा मंदिर', 'दिलवाड़ा मंदिर'],
                  correctAnswer: 1,
                  explanation: 'Eklingji Temple near Udaipur is the family deity (Kul Devta) temple of the Mewar rulers. Lord Shiva is worshipped here as Eklingji.',
                  explanationHi: 'उदयपुर के पास एकलिंगजी मंदिर मेवाड़ शासकों का कुलदेवता मंदिर है। यहां भगवान शिव की एकलिंगजी के रूप में पूजा की जाती है।',
                  difficulty: 'easy'
                },
                {
                  id: 'mewar-16',
                  text: 'Who among the following Mewar rulers had 83 wounds on his body from various battles?',
                  textHi: 'निम्नलिखित में से किस मेवाड़ शासक के शरीर पर विभिन्न युद्धों से 83 घाव थे?',
                  options: ['Rana Hammir', 'Rana Sanga', 'Rana Kumbha', 'Maharana Pratap'],
                  optionsHi: ['राणा हम्मीर', 'राणा सांगा', 'राणा कुंभा', 'महाराणा प्रताप'],
                  correctAnswer: 1,
                  explanation: 'Rana Sanga bore 83 wounds on his body from fighting 100 battles. He had lost one arm and one eye, and was lame in one leg.',
                  explanationHi: 'राणा सांगा के शरीर पर 100 युद्धों से 83 घाव थे। उन्होंने एक हाथ और एक आंख खो दी थी, और एक पैर से लंगड़े थे।',
                  difficulty: 'medium',
                  year: 'RAS 2019'
                }
              ]
            },
            {
              id: 'marwar-dynasty',
              name: 'Rathore Dynasty of Marwar',
              nameHi: 'मारवाड़ का राठौड़ वंश',
              difficulty: 'medium',
              questions: [
                {
                  id: 'marwar-1',
                  text: 'Who was the founder of the Rathore dynasty in Marwar?',
                  textHi: 'मारवाड़ में राठौड़ वंश के संस्थापक कौन थे?',
                  options: ['Rao Jodha', 'Rao Siyaji', 'Rao Chunda', 'Rao Maldeo'],
                  optionsHi: ['राव जोधा', 'राव सियाजी', 'राव चूंडा', 'राव मालदेव'],
                  correctAnswer: 1,
                  explanation: 'Rao Siyaji (Siha) is considered the founder of the Rathore dynasty in Marwar. He came from Kannauj around 1240 AD.',
                  explanationHi: 'राव सियाजी (सीहा) को मारवाड़ में राठौड़ वंश का संस्थापक माना जाता है। वे लगभग 1240 ई. में कन्नौज से आए थे।',
                  difficulty: 'medium'
                },
                {
                  id: 'marwar-2',
                  text: 'Who founded the city of Jodhpur?',
                  textHi: 'जोधपुर शहर की स्थापना किसने की?',
                  options: ['Rao Jodha', 'Rao Maldeo', 'Rao Ganga', 'Rao Ranmal'],
                  optionsHi: ['राव जोधा', 'राव मालदेव', 'राव गंगा', 'राव रणमल'],
                  correctAnswer: 0,
                  explanation: 'Rao Jodha founded Jodhpur city in 1459 AD and built the famous Mehrangarh Fort on a rocky hill called Bhaurcheeria.',
                  explanationHi: 'राव जोधा ने 1459 ई. में जोधपुर शहर की स्थापना की और भाऊरचीरिया नामक चट्टानी पहाड़ी पर प्रसिद्ध मेहरानगढ़ किला बनाया।',
                  difficulty: 'easy',
                  year: 'RAS 2018'
                },
                {
                  id: 'marwar-3',
                  text: 'Which Marwar ruler was known as "Hindu Padshah"?',
                  textHi: 'किस मारवाड़ शासक को "हिंदू पादशाह" के नाम से जाना जाता था?',
                  options: ['Rao Jodha', 'Rao Maldeo', 'Jaswant Singh', 'Ajit Singh'],
                  optionsHi: ['राव जोधा', 'राव मालदेव', 'जसवंत सिंह', 'अजीत सिंह'],
                  correctAnswer: 1,
                  explanation: 'Rao Maldeo (1532-1562) was known as "Hindu Padshah" and was considered the most powerful ruler of his time in North India after Sher Shah Suri.',
                  explanationHi: 'राव मालदेव (1532-1562) को "हिंदू पादशाह" के नाम से जाना जाता था और शेर शाह सूरी के बाद उत्तर भारत में अपने समय के सबसे शक्तिशाली शासक माने जाते थे।',
                  difficulty: 'medium',
                  year: 'RAS 2017'
                },
                {
                  id: 'marwar-4',
                  text: 'The Battle of Sammel (1544) was fought between Sher Shah Suri and which Rajput ruler?',
                  textHi: 'सम्मेल का युद्ध (1544) शेर शाह सूरी और किस राजपूत शासक के बीच हुआ था?',
                  options: ['Rana Sanga', 'Rao Maldeo', 'Rao Jodha', 'Prithviraj Chauhan'],
                  optionsHi: ['राणा सांगा', 'राव मालदेव', 'राव जोधा', 'पृथ्वीराज चौहान'],
                  correctAnswer: 1,
                  explanation: 'The Battle of Sammel (also called Battle of Giri-Sumel) was fought in 1544 between Sher Shah Suri and Rao Maldeo of Marwar.',
                  explanationHi: 'सम्मेल का युद्ध (जिसे गिरि-सुमेल का युद्ध भी कहा जाता है) 1544 में शेर शाह सूरी और मारवाड़ के राव मालदेव के बीच हुआ था।',
                  difficulty: 'medium',
                  year: 'RAS 2016'
                },
                {
                  id: 'marwar-5',
                  text: 'Veer Durgadas Rathore protected which infant prince of Marwar?',
                  textHi: 'वीर दुर्गादास राठौड़ ने मारवाड़ के किस शिशु राजकुमार की रक्षा की?',
                  options: ['Jaswant Singh', 'Ajit Singh', 'Man Singh', 'Bakht Singh'],
                  optionsHi: ['जसवंत सिंह', 'अजीत सिंह', 'मान सिंह', 'बख्त सिंह'],
                  correctAnswer: 1,
                  explanation: 'Veer Durgadas Rathore protected the infant prince Ajit Singh from Aurangzeb and eventually helped him ascend the throne of Marwar.',
                  explanationHi: 'वीर दुर्गादास राठौड़ ने शिशु राजकुमार अजीत सिंह को औरंगजेब से बचाया और अंततः उन्हें मारवाड़ की गद्दी पर बैठने में मदद की।',
                  difficulty: 'easy',
                  year: 'RAS 2019'
                },
                {
                  id: 'marwar-6',
                  text: 'Which Marwar ruler wrote "Bhasha Bhushan" - a treatise on Hindi poetry?',
                  textHi: 'किस मारवाड़ शासक ने हिंदी काव्य पर ग्रंथ "भाषा भूषण" लिखा?',
                  options: ['Rao Maldeo', 'Jaswant Singh', 'Man Singh', 'Gaj Singh'],
                  optionsHi: ['राव मालदेव', 'जसवंत सिंह', 'मान सिंह', 'गज सिंह'],
                  correctAnswer: 1,
                  explanation: 'Maharaja Jaswant Singh I of Marwar was a scholar and wrote "Bhasha Bhushan" on Hindi poetry. He also wrote other works on philosophy.',
                  explanationHi: 'मारवाड़ के महाराजा जसवंत सिंह प्रथम एक विद्वान थे और उन्होंने हिंदी काव्य पर "भाषा भूषण" लिखा। उन्होंने दर्शन पर अन्य ग्रंथ भी लिखे।',
                  difficulty: 'hard'
                },
                {
                  id: 'marwar-7',
                  text: 'Mehrangarh Fort is also known as?',
                  textHi: 'मेहरानगढ़ किला किस नाम से भी जाना जाता है?',
                  options: ['Mayurdhwaj', 'Chitrakoot', 'Sonar Kila', 'Kangra'],
                  optionsHi: ['मयूरध्वज', 'चित्रकूट', 'सोनार किला', 'कांगड़ा'],
                  correctAnswer: 0,
                  explanation: 'Mehrangarh Fort is also called Mayurdhwaj (Peacock Flag) and is one of the largest forts in India, spread over 5 km.',
                  explanationHi: 'मेहरानगढ़ किला मयूरध्वज (मोर ध्वज) भी कहलाता है और 5 किमी में फैला भारत के सबसे बड़े किलों में से एक है।',
                  difficulty: 'medium'
                },
                {
                  id: 'marwar-8',
                  text: 'Which Battle is known as "Battle of Raj Mahal" where Jaita and Kumpa sacrificed their lives?',
                  textHi: 'कौन सा युद्ध "राजमहल का युद्ध" के नाम से जाना जाता है जहां जेता और कूंपा ने अपने प्राणों का बलिदान दिया?',
                  options: ['Battle of Haldighati', 'Battle of Sammel', 'Battle of Khanwa', 'Battle of Tarain'],
                  optionsHi: ['हल्दीघाटी का युद्ध', 'सम्मेल का युद्ध', 'खानवा का युद्ध', 'तराइन का युद्ध'],
                  correctAnswer: 1,
                  explanation: 'In the Battle of Sammel (1544), Jaita and Kumpa were the two brave Rathore commanders who sacrificed their lives fighting against Sher Shah Suri.',
                  explanationHi: 'सम्मेल के युद्ध (1544) में, जेता और कूंपा दो बहादुर राठौड़ सेनापति थे जिन्होंने शेर शाह सूरी के खिलाफ लड़ते हुए अपने प्राणों का बलिदान दिया।',
                  difficulty: 'hard',
                  year: 'RAS 2015'
                },
                {
                  id: 'marwar-9',
                  text: 'Who among the following rulers built the Umaid Bhawan Palace in Jodhpur?',
                  textHi: 'निम्नलिखित में से किस शासक ने जोधपुर में उम्मेद भवन महल बनवाया?',
                  options: ['Maharaja Umaid Singh', 'Maharaja Jaswant Singh II', 'Maharaja Gaj Singh', 'Maharaja Hanwant Singh'],
                  optionsHi: ['महाराजा उम्मेद सिंह', 'महाराजा जसवंत सिंह द्वितीय', 'महाराजा गज सिंह', 'महाराजा हनवंत सिंह'],
                  correctAnswer: 0,
                  explanation: 'Umaid Bhawan Palace was built by Maharaja Umaid Singh between 1929-1943. It is one of the world\'s largest private residences.',
                  explanationHi: 'उम्मेद भवन महल का निर्माण महाराजा उम्मेद सिंह ने 1929-1943 के बीच करवाया था। यह दुनिया के सबसे बड़े निजी आवासों में से एक है।',
                  difficulty: 'easy'
                },
                {
                  id: 'marwar-10',
                  text: 'Which Marwar ruler established the Thar Heritage Museum?',
                  textHi: 'किस मारवाड़ शासक ने थार हेरिटेज म्यूजियम की स्थापना की?',
                  options: ['Gaj Singh II', 'Hanwant Singh', 'Umaid Singh', 'Jaswant Singh II'],
                  optionsHi: ['गज सिंह द्वितीय', 'हनवंत सिंह', 'उम्मेद सिंह', 'जसवंत सिंह द्वितीय'],
                  correctAnswer: 0,
                  explanation: 'Maharaja Gaj Singh II has been instrumental in establishing museums and cultural preservation in Jodhpur.',
                  explanationHi: 'महाराजा गज सिंह द्वितीय जोधपुर में संग्रहालयों और सांस्कृतिक संरक्षण की स्थापना में महत्वपूर्ण भूमिका निभाई है।',
                  difficulty: 'hard'
                }
              ]
            },
            {
              id: 'kachwaha-dynasty',
              name: 'Kachwaha Dynasty of Amber/Jaipur',
              nameHi: 'आमेर/जयपुर का कछवाहा वंश',
              difficulty: 'medium',
              questions: [
                {
                  id: 'kachwaha-1',
                  text: 'Who founded the Kachwaha dynasty of Amber?',
                  textHi: 'आमेर के कछवाहा वंश की स्थापना किसने की?',
                  options: ['Dulha Rai', 'Man Singh I', 'Bharmal', 'Sawai Jai Singh'],
                  optionsHi: ['दूल्हा राय', 'मान सिंह प्रथम', 'भारमल', 'सवाई जय सिंह'],
                  correctAnswer: 0,
                  explanation: 'Dulha Rai (Tejkaran) founded the Kachwaha dynasty of Amber in 1137 AD after defeating the Minas and establishing his capital at Dausa, later at Amber.',
                  explanationHi: 'दूल्हा राय (तेजकरण) ने मीणाओं को हराकर 1137 ई. में आमेर के कछवाहा वंश की स्थापना की और दौसा में अपनी राजधानी स्थापित की, बाद में आमेर में।',
                  difficulty: 'medium',
                  year: 'RAS 2018'
                },
                {
                  id: 'kachwaha-2',
                  text: 'Who founded the city of Jaipur?',
                  textHi: 'जयपुर शहर की स्थापना किसने की?',
                  options: ['Man Singh I', 'Bharmal', 'Sawai Jai Singh II', 'Mirza Raja Jai Singh'],
                  optionsHi: ['मान सिंह प्रथम', 'भारमल', 'सवाई जय सिंह द्वितीय', 'मिर्जा राजा जय सिंह'],
                  correctAnswer: 2,
                  explanation: 'Sawai Jai Singh II founded Jaipur in 1727 AD. The city was designed by Vidyadhar Bhattacharya based on Vastu Shastra and Shilpa Shastra.',
                  explanationHi: 'सवाई जय सिंह द्वितीय ने 1727 ई. में जयपुर की स्थापना की। शहर की रचना विद्याधर भट्टाचार्य ने वास्तु शास्त्र और शिल्प शास्त्र के आधार पर की थी।',
                  difficulty: 'easy',
                  year: 'RAS 2017'
                },
                {
                  id: 'kachwaha-3',
                  text: 'Which Kachwaha ruler married his daughter Jodha Bai to Mughal Emperor Akbar?',
                  textHi: 'किस कछवाहा शासक ने अपनी पुत्री जोधाबाई का विवाह मुगल सम्राट अकबर से किया?',
                  options: ['Man Singh I', 'Raja Bharmal', 'Bhagwan Das', 'Mirza Raja Jai Singh'],
                  optionsHi: ['मान सिंह प्रथम', 'राजा भारमल', 'भगवान दास', 'मिर्जा राजा जय सिंह'],
                  correctAnswer: 1,
                  explanation: 'Raja Bharmal of Amber married his daughter Harkha Bai (Jodha Bai) to Akbar in 1562 AD at Sambhar. This was the first Rajput-Mughal matrimonial alliance.',
                  explanationHi: 'आमेर के राजा भारमल ने 1562 ई. में सांभर में अपनी पुत्री हरखा बाई (जोधा बाई) का विवाह अकबर से किया। यह पहला राजपूत-मुगल वैवाहिक गठबंधन था।',
                  difficulty: 'easy',
                  year: 'RAS 2019'
                },
                {
                  id: 'kachwaha-4',
                  text: 'Man Singh I served as a general under which Mughal Emperor?',
                  textHi: 'मान सिंह प्रथम किस मुगल सम्राट के अधीन सेनापति के रूप में कार्य करते थे?',
                  options: ['Babur', 'Humayun', 'Akbar', 'Jahangir'],
                  optionsHi: ['बाबर', 'हुमायूं', 'अकबर', 'जहांगीर'],
                  correctAnswer: 2,
                  explanation: 'Man Singh I was one of the nine gems (Navratnas) of Akbar\'s court and served as his trusted general in many campaigns including Bengal and Bihar.',
                  explanationHi: 'मान सिंह प्रथम अकबर के दरबार के नौ रत्नों (नवरत्नों) में से एक थे और बंगाल और बिहार सहित कई अभियानों में उनके विश्वसनीय सेनापति के रूप में कार्य करते थे।',
                  difficulty: 'easy'
                },
                {
                  id: 'kachwaha-5',
                  text: 'Sawai Jai Singh II built observatories called Jantar Mantar. How many Jantar Mantars did he build?',
                  textHi: 'सवाई जय सिंह द्वितीय ने जंतर मंतर नामक वेधशालाएं बनवाईं। उन्होंने कितनी जंतर मंतर बनवाईं?',
                  options: ['3', '4', '5', '6'],
                  optionsHi: ['3', '4', '5', '6'],
                  correctAnswer: 2,
                  explanation: 'Sawai Jai Singh II built 5 Jantar Mantars in Delhi, Jaipur, Ujjain, Varanasi, and Mathura for astronomical observations.',
                  explanationHi: 'सवाई जय सिंह द्वितीय ने खगोलीय अवलोकनों के लिए दिल्ली, जयपुर, उज्जैन, वाराणसी और मथुरा में 5 जंतर मंतर बनवाए।',
                  difficulty: 'medium',
                  year: 'RAS 2016'
                },
                {
                  id: 'kachwaha-6',
                  text: 'Which astronomical table was compiled by Sawai Jai Singh II?',
                  textHi: 'सवाई जय सिंह द्वितीय द्वारा कौन सी खगोलीय तालिका संकलित की गई थी?',
                  options: ['Zij Muhammad Shahi', 'Tuzuk-i-Jahangiri', 'Akbarnama', 'Padmavat'],
                  optionsHi: ['जीज मुहम्मद शाही', 'तुजुक-ए-जहांगीरी', 'अकबरनामा', 'पद्मावत'],
                  correctAnswer: 0,
                  explanation: 'Sawai Jai Singh II compiled "Zij Muhammad Shahi" which contains astronomical tables and observations. It was dedicated to Muhammad Shah.',
                  explanationHi: 'सवाई जय सिंह द्वितीय ने "जीज मुहम्मद शाही" संकलित की जिसमें खगोलीय तालिकाएं और अवलोकन शामिल हैं। यह मुहम्मद शाह को समर्पित थी।',
                  difficulty: 'hard'
                },
                {
                  id: 'kachwaha-7',
                  text: 'Amber Fort was built by which Kachwaha ruler?',
                  textHi: 'आमेर किला किस कछवाहा शासक द्वारा बनवाया गया था?',
                  options: ['Dulha Rai', 'Man Singh I', 'Bharmal', 'Sawai Jai Singh II'],
                  optionsHi: ['दूल्हा राय', 'मान सिंह प्रथम', 'भारमल', 'सवाई जय सिंह द्वितीय'],
                  correctAnswer: 1,
                  explanation: 'Man Singh I started the construction of Amber Fort in 1592 AD. It was completed by his successors and is known for its blend of Hindu and Mughal architecture.',
                  explanationHi: 'मान सिंह प्रथम ने 1592 ई. में आमेर किले का निर्माण शुरू किया। इसे उनके उत्तराधिकारियों ने पूरा किया और यह हिंदू और मुगल वास्तुकला के मिश्रण के लिए जाना जाता है।',
                  difficulty: 'medium',
                  year: 'RAS 2018'
                },
                {
                  id: 'kachwaha-8',
                  text: 'Why is Jaipur called the "Pink City"?',
                  textHi: 'जयपुर को "गुलाबी शहर" क्यों कहा जाता है?',
                  options: ['Buildings are made of pink stone', 'Painted pink for Prince of Wales visit', 'Pink flowers everywhere', 'Royal family liked pink'],
                  optionsHi: ['इमारतें गुलाबी पत्थर से बनी हैं', 'प्रिंस ऑफ वेल्स की यात्रा के लिए गुलाबी रंग से रंगा', 'हर जगह गुलाबी फूल', 'शाही परिवार को गुलाबी पसंद था'],
                  correctAnswer: 1,
                  explanation: 'In 1876, Maharaja Ram Singh had the entire city painted pink (terracotta color) to welcome the Prince of Wales (later King Edward VII).',
                  explanationHi: '1876 में, महाराजा राम सिंह ने प्रिंस ऑफ वेल्स (बाद में किंग एडवर्ड VII) के स्वागत के लिए पूरे शहर को गुलाबी (टेराकोटा रंग) से रंगवाया।',
                  difficulty: 'easy'
                },
                {
                  id: 'kachwaha-9',
                  text: 'Which famous palace in Jaipur is also known as "Palace of Winds"?',
                  textHi: 'जयपुर में कौन सा प्रसिद्ध महल "हवाओं का महल" के नाम से भी जाना जाता है?',
                  options: ['City Palace', 'Hawa Mahal', 'Nahargarh Palace', 'Jal Mahal'],
                  optionsHi: ['सिटी पैलेस', 'हवा महल', 'नाहरगढ़ महल', 'जल महल'],
                  correctAnswer: 1,
                  explanation: 'Hawa Mahal (Palace of Winds) was built by Maharaja Sawai Pratap Singh in 1799. It has 953 small windows (jharokhas) for ventilation.',
                  explanationHi: 'हवा महल (हवाओं का महल) का निर्माण महाराजा सवाई प्रताप सिंह ने 1799 में करवाया था। इसमें हवा के लिए 953 छोटी खिड़कियां (झरोखे) हैं।',
                  difficulty: 'easy'
                },
                {
                  id: 'kachwaha-10',
                  text: 'Which Kachwaha ruler was given the title "Mirza Raja" by Mughal Emperor Shah Jahan?',
                  textHi: 'किस कछवाहा शासक को मुगल सम्राट शाहजहां ने "मिर्जा राजा" की उपाधि दी?',
                  options: ['Man Singh I', 'Bhagwan Das', 'Jai Singh I', 'Sawai Jai Singh II'],
                  optionsHi: ['मान सिंह प्रथम', 'भगवान दास', 'जय सिंह प्रथम', 'सवाई जय सिंह द्वितीय'],
                  correctAnswer: 2,
                  explanation: 'Jai Singh I (1611-1667) was given the title "Mirza Raja" by Shah Jahan for his military services. He commanded Mughal forces in the Deccan.',
                  explanationHi: 'जय सिंह प्रथम (1611-1667) को शाहजहां ने उनकी सैन्य सेवाओं के लिए "मिर्जा राजा" की उपाधि दी। उन्होंने दक्कन में मुगल सेनाओं की कमान संभाली।',
                  difficulty: 'hard',
                  year: 'RAS 2017'
                }
              ]
            }
          ]
        },
        {
          id: 'raj-modern-history',
          name: 'Modern History & Integration',
          nameHi: 'आधुनिक इतिहास एवं एकीकरण',
          chapters: [
            {
              id: 'revolt-1857',
              name: 'Revolt of 1857 in Rajasthan',
              nameHi: 'राजस्थान में 1857 का विद्रोह',
              difficulty: 'medium',
              questions: [
                {
                  id: '1857-1',
                  text: 'Where did the revolt of 1857 first start in Rajasthan?',
                  textHi: 'राजस्थान में 1857 का विद्रोह सबसे पहले कहां शुरू हुआ?',
                  options: ['Nasirabad', 'Neemuch', 'Erinpura', 'Kota'],
                  optionsHi: ['नसीराबाद', 'नीमच', 'एरिनपुरा', 'कोटा'],
                  correctAnswer: 0,
                  explanation: 'The revolt of 1857 in Rajasthan first started at Nasirabad on May 28, 1857, where the 15th Bengal Native Infantry mutinied.',
                  explanationHi: '1857 का विद्रोह राजस्थान में सबसे पहले 28 मई, 1857 को नसीराबाद में शुरू हुआ, जहां 15वीं बंगाल नेटिव इन्फैंट्री ने विद्रोह किया।',
                  difficulty: 'easy',
                  year: 'RAS 2019'
                },
                {
                  id: '1857-2',
                  text: 'Who led the revolt at Kota during 1857?',
                  textHi: '1857 के दौरान कोटा में विद्रोह का नेतृत्व किसने किया?',
                  options: ['Laxman Singh', 'Jaidayal', 'Mehrab Khan', 'Tantya Tope'],
                  optionsHi: ['लक्ष्मण सिंह', 'जयदयाल', 'मेहराब खान', 'तांत्या टोपे'],
                  correctAnswer: 1,
                  explanation: 'Jaidayal and Mehrab Khan jointly led the revolt at Kota. They killed the Political Agent Major Burton and his sons.',
                  explanationHi: 'जयदयाल और मेहराब खान ने संयुक्त रूप से कोटा में विद्रोह का नेतृत्व किया। उन्होंने पॉलिटिकल एजेंट मेजर बर्टन और उनके बेटों को मार डाला।',
                  difficulty: 'medium',
                  year: 'RAS 2018'
                },
                {
                  id: '1857-3',
                  text: 'Which female revolutionary of 1857 is known as the "Jhansi Ki Rani of Rajasthan"?',
                  textHi: '1857 की कौन सी महिला क्रांतिकारी "राजस्थान की झांसी की रानी" के नाम से जानी जाती हैं?',
                  options: ['Rani Avanti Bai', 'Rani Bhawani Kunwar', 'Thakurani Harki', 'Rani Laxmi Bai'],
                  optionsHi: ['रानी अवंती बाई', 'रानी भवानी कुंवर', 'ठकुरानी हरकी', 'रानी लक्ष्मी बाई'],
                  correctAnswer: 1,
                  explanation: 'Rani Bhawani Kunwar of Salumber is known as the "Jhansi Ki Rani of Rajasthan" for her brave resistance against the British.',
                  explanationHi: 'सलूम्बर की रानी भवानी कुंवर अंग्रेजों के खिलाफ अपने बहादुरी भरे प्रतिरोध के लिए "राजस्थान की झांसी की रानी" के नाम से जानी जाती हैं।',
                  difficulty: 'medium'
                },
                {
                  id: '1857-4',
                  text: 'At which place in Rajasthan was Tatya Tope captured?',
                  textHi: 'राजस्थान में किस स्थान पर तांत्या टोपे को पकड़ा गया?',
                  options: ['Sikar', 'Siron (Paron)', 'Chittorgarh', 'Bundi'],
                  optionsHi: ['सीकर', 'सिरोन (पारोन)', 'चित्तौड़गढ़', 'बूंदी'],
                  correctAnswer: 1,
                  explanation: 'Tatya Tope was captured from the forest of Paron (Siron) near Bundi in April 1859 due to the treachery of his friend Man Singh.',
                  explanationHi: 'तांत्या टोपे को अप्रैल 1859 में उनके मित्र मान सिंह की गद्दारी के कारण बूंदी के पास पारोन (सिरोन) के जंगल से पकड़ा गया।',
                  difficulty: 'hard',
                  year: 'RAS 2016'
                },
                {
                  id: '1857-5',
                  text: 'Which ruler of Bharatpur refused to help the British during the 1857 revolt?',
                  textHi: '1857 के विद्रोह के दौरान भरतपुर के किस शासक ने अंग्रेजों की मदद करने से इनकार कर दिया?',
                  options: ['Jaswant Singh', 'Raja Jawahar Singh', 'Raja Suraj Mal', 'Raja Badan Singh'],
                  optionsHi: ['जसवंत सिंह', 'राजा जवाहर सिंह', 'राजा सूरज मल', 'राजा बदन सिंह'],
                  correctAnswer: 0,
                  explanation: 'Jaswant Singh of Bharatpur initially refused to help the British during 1857, showing sympathy towards the rebels.',
                  explanationHi: 'भरतपुर के जसवंत सिंह ने शुरू में 1857 के दौरान अंग्रेजों की मदद करने से इनकार कर दिया, विद्रोहियों के प्रति सहानुभूति दिखाई।',
                  difficulty: 'hard'
                },
                {
                  id: '1857-6',
                  text: 'Who was the Political Agent at Jodhpur during 1857 who was killed by rebels?',
                  textHi: '1857 के दौरान जोधपुर में पॉलिटिकल एजेंट कौन था जिसे विद्रोहियों ने मार डाला?',
                  options: ['Major Burton', 'George Lawrence', 'Captain Mason', 'Colonel Dixon'],
                  optionsHi: ['मेजर बर्टन', 'जॉर्ज लॉरेंस', 'कैप्टन मेसन', 'कर्नल डिक्सन'],
                  correctAnswer: 2,
                  explanation: 'Captain Mason was killed by rebels at Jodhpur during the 1857 uprising.',
                  explanationHi: '1857 के विद्रोह के दौरान जोधपुर में कैप्टन मेसन को विद्रोहियों ने मार डाला।',
                  difficulty: 'hard'
                },
                {
                  id: '1857-7',
                  text: 'Which cantonment in Rajasthan witnessed revolt on 21st August 1857?',
                  textHi: 'राजस्थान के किस छावनी में 21 अगस्त 1857 को विद्रोह हुआ?',
                  options: ['Nasirabad', 'Neemuch', 'Erinpura', 'Deoli'],
                  optionsHi: ['नसीराबाद', 'नीमच', 'एरिनपुरा', 'देओली'],
                  correctAnswer: 2,
                  explanation: 'Erinpura cantonment witnessed the revolt on August 21, 1857. The Jodhpur Legion stationed there mutinied and marched towards Delhi.',
                  explanationHi: 'एरिनपुरा छावनी में 21 अगस्त, 1857 को विद्रोह हुआ। वहां तैनात जोधपुर लीजन ने विद्रोह किया और दिल्ली की ओर कूच किया।',
                  difficulty: 'medium',
                  year: 'RAS 2017'
                },
                {
                  id: '1857-8',
                  text: 'The battle of Chelawas was fought in 1857 between rebels and forces of?',
                  textHi: '1857 में चेलावास का युद्ध विद्रोहियों और किसकी सेना के बीच हुआ?',
                  options: ['Jodhpur', 'Jaipur', 'Udaipur', 'Bikaner'],
                  optionsHi: ['जोधपुर', 'जयपुर', 'उदयपुर', 'बीकानेर'],
                  correctAnswer: 0,
                  explanation: 'The battle of Chelawas was fought between the rebels and the forces of Jodhpur state. The rebels were defeated.',
                  explanationHi: 'चेलावास का युद्ध विद्रोहियों और जोधपुर राज्य की सेनाओं के बीच हुआ। विद्रोही पराजित हुए।',
                  difficulty: 'hard'
                }
              ]
            },
            {
              id: 'prajamandal',
              name: 'Prajamandal Movements',
              nameHi: 'प्रजामंडल आंदोलन',
              difficulty: 'medium',
              questions: [
                {
                  id: 'praja-1',
                  text: 'Where was the first Prajamandal established in Rajasthan?',
                  textHi: 'राजस्थान में प्रथम प्रजामंडल की स्थापना कहां हुई?',
                  options: ['Jodhpur', 'Jaipur', 'Udaipur', 'Bikaner'],
                  optionsHi: ['जोधपुर', 'जयपुर', 'उदयपुर', 'बीकानेर'],
                  correctAnswer: 1,
                  explanation: 'The first Prajamandal in Rajasthan was established in Jaipur in 1931 by Kapoor Chand Patni. It was called Jaipur Praja Mandal.',
                  explanationHi: 'राजस्थान में प्रथम प्रजामंडल की स्थापना 1931 में जयपुर में कपूर चंद पाटनी द्वारा की गई। इसे जयपुर प्रजामंडल कहा गया।',
                  difficulty: 'easy',
                  year: 'RAS 2019'
                },
                {
                  id: 'praja-2',
                  text: 'Who founded the Mewar Prajamandal?',
                  textHi: 'मेवाड़ प्रजामंडल की स्थापना किसने की?',
                  options: ['Balwant Singh Mehta', 'Manikya Lal Verma', 'Jai Narayan Vyas', 'Hiralal Shastri'],
                  optionsHi: ['बलवंत सिंह मेहता', 'माणिक्य लाल वर्मा', 'जय नारायण व्यास', 'हीरालाल शास्त्री'],
                  correctAnswer: 1,
                  explanation: 'Manikya Lal Verma founded the Mewar Prajamandal in 1938. He is also known as the "Gandhi of Mewar".',
                  explanationHi: 'माणिक्य लाल वर्मा ने 1938 में मेवाड़ प्रजामंडल की स्थापना की। उन्हें "मेवाड़ के गांधी" के नाम से भी जाना जाता है।',
                  difficulty: 'medium',
                  year: 'RAS 2018'
                },
                {
                  id: 'praja-3',
                  text: 'Who is known as "Gandhi of Marwar"?',
                  textHi: '"मारवाड़ के गांधी" के रूप में किसे जाना जाता है?',
                  options: ['Jai Narayan Vyas', 'Balwant Singh Mehta', 'Gokulbhai Bhatt', 'Sagarmal Gopa'],
                  optionsHi: ['जय नारायण व्यास', 'बलवंत सिंह मेहता', 'गोकुलभाई भट्ट', 'सागरमल गोपा'],
                  correctAnswer: 0,
                  explanation: 'Jai Narayan Vyas is known as the "Gandhi of Marwar" for his role in the freedom movement and Prajamandal activities in Jodhpur.',
                  explanationHi: 'जय नारायण व्यास को जोधपुर में स्वतंत्रता आंदोलन और प्रजामंडल गतिविधियों में उनकी भूमिका के लिए "मारवाड़ के गांधी" के रूप में जाना जाता है।',
                  difficulty: 'easy',
                  year: 'RAS 2017'
                },
                {
                  id: 'praja-4',
                  text: 'Who was the first President of the All India States Peoples Conference held at Udaipur?',
                  textHi: 'उदयपुर में आयोजित अखिल भारतीय राज्य लोक परिषद के प्रथम अध्यक्ष कौन थे?',
                  options: ['Jawaharlal Nehru', 'Vallabhbhai Patel', 'Manikya Lal Verma', 'Hiralal Shastri'],
                  optionsHi: ['जवाहरलाल नेहरू', 'वल्लभभाई पटेल', 'माणिक्य लाल वर्मा', 'हीरालाल शास्त्री'],
                  correctAnswer: 0,
                  explanation: 'Jawaharlal Nehru was the President of the All India States Peoples Conference held at Udaipur in 1945.',
                  explanationHi: '1945 में उदयपुर में आयोजित अखिल भारतीय राज्य लोक परिषद के अध्यक्ष जवाहरलाल नेहरू थे।',
                  difficulty: 'medium'
                },
                {
                  id: 'praja-5',
                  text: 'Who sacrificed his life in Jaisalmer Prajamandal movement?',
                  textHi: 'जैसलमेर प्रजामंडल आंदोलन में किसने अपना बलिदान दिया?',
                  options: ['Sagarmal Gopa', 'Balwant Singh', 'Jai Narayan Vyas', 'Gokulbhai Bhatt'],
                  optionsHi: ['सागरमल गोपा', 'बलवंत सिंह', 'जय नारायण व्यास', 'गोकुलभाई भट्ट'],
                  correctAnswer: 0,
                  explanation: 'Sagarmal Gopa was a freedom fighter who was tortured to death in Jaisalmer jail in 1946 for his role in the Prajamandal movement.',
                  explanationHi: 'सागरमल गोपा एक स्वतंत्रता सेनानी थे जिन्हें प्रजामंडल आंदोलन में उनकी भूमिका के लिए 1946 में जैसलमेर जेल में यातनाएं देकर मार डाला गया।',
                  difficulty: 'easy',
                  year: 'RAS 2016'
                },
                {
                  id: 'praja-6',
                  text: 'The "Bijolia Movement" was led by?',
                  textHi: '"बिजोलिया आंदोलन" का नेतृत्व किसने किया?',
                  options: ['Vijay Singh Pathik', 'Manikya Lal Verma', 'Motilal Tejawat', 'Sagarmal Gopa'],
                  optionsHi: ['विजय सिंह पथिक', 'माणिक्य लाल वर्मा', 'मोतीलाल तेजावत', 'सागरमल गोपा'],
                  correctAnswer: 0,
                  explanation: 'Vijay Singh Pathik led the Bijolia Peasant Movement (1897-1941) which was the longest peasant movement in Rajasthan.',
                  explanationHi: 'विजय सिंह पथिक ने बिजोलिया किसान आंदोलन (1897-1941) का नेतृत्व किया जो राजस्थान में सबसे लंबा किसान आंदोलन था।',
                  difficulty: 'easy',
                  year: 'RAS 2018'
                },
                {
                  id: 'praja-7',
                  text: 'Who was the founder of "Vidya Pracharini Sabha" in Jaipur?',
                  textHi: 'जयपुर में "विद्या प्रचारिणी सभा" के संस्थापक कौन थे?',
                  options: ['Arjun Lal Sethi', 'Kapoor Chand Patni', 'Hiralal Shastri', 'Ram Narayan Chaudhary'],
                  optionsHi: ['अर्जुन लाल सेठी', 'कपूर चंद पाटनी', 'हीरालाल शास्त्री', 'राम नारायण चौधरी'],
                  correctAnswer: 0,
                  explanation: 'Arjun Lal Sethi founded the Vidya Pracharini Sabha in Jaipur in 1907 as a revolutionary organization.',
                  explanationHi: 'अर्जुन लाल सेठी ने 1907 में जयपुर में एक क्रांतिकारी संगठन के रूप में विद्या प्रचारिणी सभा की स्थापना की।',
                  difficulty: 'medium'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'raj-geography',
      name: 'Geography of Rajasthan',
      nameHi: 'राजस्थान का भूगोल',
      icon: 'Globe',
      color: '#059669',
      topics: [
        {
          id: 'physiography',
          name: 'Physiographic Divisions',
          nameHi: 'भौगोलिक विभाजन',
          chapters: [
            {
              id: 'western-desert',
              name: 'Western Desert Region',
              nameHi: 'पश्चिमी मरुस्थलीय प्रदेश',
              difficulty: 'medium',
              questions: [
                {
                  id: 'geo-1',
                  text: 'What percentage of Rajasthan is covered by the Thar Desert?',
                  textHi: 'राजस्थान का कितना प्रतिशत भाग थार मरुस्थल से आच्छादित है?',
                  options: ['40%', '50%', '60%', '70%'],
                  optionsHi: ['40%', '50%', '60%', '70%'],
                  correctAnswer: 2,
                  explanation: 'About 60% of Rajasthan is covered by the Thar Desert, making it the largest desert in India.',
                  explanationHi: 'राजस्थान का लगभग 60% भाग थार मरुस्थल से आच्छादित है, जो इसे भारत का सबसे बड़ा मरुस्थल बनाता है।',
                  difficulty: 'easy',
                  year: 'RAS 2019'
                },
                {
                  id: 'geo-2',
                  text: 'The "Thar Desert" is also known as?',
                  textHi: '"थार मरुस्थल" को और किस नाम से जाना जाता है?',
                  options: ['Marusthali', 'Great Indian Desert', 'Both of the above', 'None of the above'],
                  optionsHi: ['मरुस्थली', 'महान भारतीय मरुस्थल', 'उपरोक्त दोनों', 'उपरोक्त में से कोई नहीं'],
                  correctAnswer: 2,
                  explanation: 'The Thar Desert is known by multiple names including Marusthali (Land of Death) and Great Indian Desert.',
                  explanationHi: 'थार मरुस्थल को कई नामों से जाना जाता है जिसमें मरुस्थली (मृत्यु की भूमि) और महान भारतीय मरुस्थल शामिल हैं।',
                  difficulty: 'easy'
                },
                {
                  id: 'geo-3',
                  text: 'Which district of Rajasthan has the maximum area under the Thar Desert?',
                  textHi: 'राजस्थान के किस जिले में थार मरुस्थल का सबसे अधिक क्षेत्र है?',
                  options: ['Barmer', 'Jaisalmer', 'Bikaner', 'Jodhpur'],
                  optionsHi: ['बाड़मेर', 'जैसलमेर', 'बीकानेर', 'जोधपुर'],
                  correctAnswer: 1,
                  explanation: 'Jaisalmer district has the maximum area under the Thar Desert. It is the largest district of Rajasthan by area.',
                  explanationHi: 'जैसलमेर जिले में थार मरुस्थल का सबसे अधिक क्षेत्र है। यह क्षेत्रफल की दृष्टि से राजस्थान का सबसे बड़ा जिला है।',
                  difficulty: 'easy',
                  year: 'RAS 2018'
                },
                {
                  id: 'geo-4',
                  text: 'What is "Dhora" in Rajasthan\'s geography?',
                  textHi: 'राजस्थान के भूगोल में "धोरा" क्या है?',
                  options: ['A type of lake', 'Sand dunes', 'A river', 'A mountain'],
                  optionsHi: ['एक प्रकार की झील', 'रेत के टीले', 'एक नदी', 'एक पहाड़'],
                  correctAnswer: 1,
                  explanation: 'Dhora refers to sand dunes in the Thar Desert. They can be crescent-shaped (Barchans) or longitudinal.',
                  explanationHi: 'धोरा थार मरुस्थल में रेत के टीलों को संदर्भित करता है। वे अर्धचंद्राकार (बरखान) या अनुदैर्ध्य हो सकते हैं।',
                  difficulty: 'medium'
                },
                {
                  id: 'geo-5',
                  text: 'The "Indira Gandhi Canal" originates from which place?',
                  textHi: '"इंदिरा गांधी नहर" किस स्थान से निकलती है?',
                  options: ['Bhakra Dam', 'Harike Barrage', 'Pong Dam', 'Satluj River'],
                  optionsHi: ['भाखड़ा बांध', 'हरिके बैराज', 'पोंग बांध', 'सतलज नदी'],
                  correctAnswer: 1,
                  explanation: 'The Indira Gandhi Canal originates from Harike Barrage in Punjab. It is the longest canal in India (649 km in Rajasthan).',
                  explanationHi: 'इंदिरा गांधी नहर पंजाब में हरिके बैराज से निकलती है। यह भारत की सबसे लंबी नहर है (राजस्थान में 649 किमी)।',
                  difficulty: 'easy',
                  year: 'RAS 2017'
                },
                {
                  id: 'geo-6',
                  text: 'Which is the driest place in Rajasthan?',
                  textHi: 'राजस्थान का सबसे शुष्क स्थान कौन सा है?',
                  options: ['Jaisalmer', 'Sam (near Jaisalmer)', 'Phalodi', 'Bikaner'],
                  optionsHi: ['जैसलमेर', 'सम (जैसलमेर के पास)', 'फलौदी', 'बीकानेर'],
                  correctAnswer: 2,
                  explanation: 'Phalodi in Jodhpur district is the driest place in Rajasthan with an average rainfall of about 100mm.',
                  explanationHi: 'जोधपुर जिले में फलौदी राजस्थान का सबसे शुष्क स्थान है जहां औसत वर्षा लगभग 100 मिमी है।',
                  difficulty: 'medium',
                  year: 'RAS 2016'
                },
                {
                  id: 'geo-7',
                  text: 'Which line divides Rajasthan into two parts with different rainfall patterns?',
                  textHi: 'कौन सी रेखा राजस्थान को विभिन्न वर्षा पैटर्न वाले दो भागों में विभाजित करती है?',
                  options: ['25 cm isohyet', '50 cm isohyet', '75 cm isohyet', '100 cm isohyet'],
                  optionsHi: ['25 सेमी समवर्षा रेखा', '50 सेमी समवर्षा रेखा', '75 सेमी समवर्षा रेखा', '100 सेमी समवर्षा रेखा'],
                  correctAnswer: 1,
                  explanation: 'The 50 cm isohyet line roughly divides Rajasthan into the arid western region and the semi-arid eastern region.',
                  explanationHi: '50 सेमी समवर्षा रेखा मोटे तौर पर राजस्थान को शुष्क पश्चिमी क्षेत्र और अर्ध-शुष्क पूर्वी क्षेत्र में विभाजित करती है।',
                  difficulty: 'hard'
                },
                {
                  id: 'geo-8',
                  text: 'The hottest recorded temperature in India (51°C) was recorded at?',
                  textHi: 'भारत में दर्ज सबसे अधिक तापमान (51°C) किस स्थान पर दर्ज किया गया?',
                  options: ['Ganganagar', 'Phalodi', 'Churu', 'Barmer'],
                  optionsHi: ['गंगानगर', 'फलौदी', 'चूरू', 'बाड़मेर'],
                  correctAnswer: 1,
                  explanation: 'The highest temperature in India (51°C or 123.8°F) was recorded at Phalodi, Rajasthan on May 19, 2016.',
                  explanationHi: 'भारत का सबसे अधिक तापमान (51°C या 123.8°F) 19 मई, 2016 को फलौदी, राजस्थान में दर्ज किया गया।',
                  difficulty: 'easy',
                  year: 'RAS 2017'
                }
              ]
            },
            {
              id: 'aravalli',
              name: 'Aravalli Mountain Range',
              nameHi: 'अरावली पर्वत श्रृंखला',
              difficulty: 'easy',
              questions: [
                {
                  id: 'ara-1',
                  text: 'The highest peak of Aravalli is?',
                  textHi: 'अरावली की सबसे ऊंची चोटी कौन सी है?',
                  options: ['Mount Abu', 'Guru Shikhar', 'Ser', 'Jarga'],
                  optionsHi: ['माउंट आबू', 'गुरु शिखर', 'सेर', 'जरगा'],
                  correctAnswer: 1,
                  explanation: 'Guru Shikhar (1722 m) in Mount Abu is the highest peak of Aravalli Range and Rajasthan.',
                  explanationHi: 'माउंट आबू में गुरु शिखर (1722 मी.) अरावली श्रृंखला और राजस्थान की सबसे ऊंची चोटी है।',
                  difficulty: 'easy',
                  year: 'RAS 2019'
                },
                {
                  id: 'ara-2',
                  text: 'Aravalli range extends from which state to which state?',
                  textHi: 'अरावली श्रृंखला किस राज्य से किस राज्य तक फैली हुई है?',
                  options: ['Gujarat to Delhi', 'Maharashtra to Punjab', 'Gujarat to Haryana', 'MP to UP'],
                  optionsHi: ['गुजरात से दिल्ली', 'महाराष्ट्र से पंजाब', 'गुजरात से हरियाणा', 'मध्य प्रदेश से उत्तर प्रदेश'],
                  correctAnswer: 0,
                  explanation: 'Aravalli Range extends from Gujarat (Palanpur) to Delhi (Raisina Hills), covering about 692 km.',
                  explanationHi: 'अरावली श्रृंखला गुजरात (पालनपुर) से दिल्ली (रायसीना हिल्स) तक फैली हुई है, जो लगभग 692 किमी को कवर करती है।',
                  difficulty: 'easy',
                  year: 'RAS 2018'
                },
                {
                  id: 'ara-3',
                  text: 'Which is the only hill station in Rajasthan?',
                  textHi: 'राजस्थान का एकमात्र हिल स्टेशन कौन सा है?',
                  options: ['Kumbhalgarh', 'Mount Abu', 'Udaipur', 'Ranakpur'],
                  optionsHi: ['कुंभलगढ़', 'माउंट आबू', 'उदयपुर', 'रणकपुर'],
                  correctAnswer: 1,
                  explanation: 'Mount Abu in Sirohi district is the only hill station in Rajasthan, located in the Aravalli Range.',
                  explanationHi: 'सिरोही जिले में माउंट आबू राजस्थान का एकमात्र हिल स्टेशन है, जो अरावली श्रृंखला में स्थित है।',
                  difficulty: 'easy'
                },
                {
                  id: 'ara-4',
                  text: 'The Aravalli Range is one of the oldest mountain ranges in the world. Its approximate age is?',
                  textHi: 'अरावली श्रृंखला दुनिया की सबसे पुरानी पर्वत श्रृंखलाओं में से एक है। इसकी अनुमानित आयु है?',
                  options: ['500 million years', '1000 million years', '1500 million years', '2000 million years'],
                  optionsHi: ['500 मिलियन वर्ष', '1000 मिलियन वर्ष', '1500 मिलियन वर्ष', '2000 मिलियन वर्ष'],
                  correctAnswer: 2,
                  explanation: 'The Aravalli Range is approximately 1500 million (1.5 billion) years old, making it one of the oldest fold mountains in the world.',
                  explanationHi: 'अरावली श्रृंखला लगभग 1500 मिलियन (1.5 बिलियन) वर्ष पुरानी है, जो इसे दुनिया के सबसे पुराने वलित पर्वतों में से एक बनाती है।',
                  difficulty: 'medium',
                  year: 'RAS 2017'
                },
                {
                  id: 'ara-5',
                  text: 'Which pass connects Jodhpur and Udaipur through Aravalli?',
                  textHi: 'अरावली के माध्यम से जोधपुर और उदयपुर को कौन सा दर्रा जोड़ता है?',
                  options: ['Desuri Nal', 'Hatundi Nal', 'Sita Mata', 'Bar Pass'],
                  optionsHi: ['देसूरी नाल', 'हाटुंडी नाल', 'सीता माता', 'बर दर्रा'],
                  correctAnswer: 0,
                  explanation: 'Desuri Nal (also called Khamblai Ghat) connects Jodhpur-Udaipur and is an important pass through the Aravalli.',
                  explanationHi: 'देसूरी नाल (जिसे खंबलाई घाट भी कहा जाता है) जोधपुर-उदयपुर को जोड़ता है और अरावली से होकर एक महत्वपूर्ण दर्रा है।',
                  difficulty: 'hard'
                },
                {
                  id: 'ara-6',
                  text: 'Which mineral is abundantly found in the Aravalli region?',
                  textHi: 'अरावली क्षेत्र में कौन सा खनिज प्रचुर मात्रा में पाया जाता है?',
                  options: ['Coal', 'Lead-Zinc', 'Gold', 'Diamond'],
                  optionsHi: ['कोयला', 'सीसा-जस्ता', 'सोना', 'हीरा'],
                  correctAnswer: 1,
                  explanation: 'The Aravalli region is rich in Lead-Zinc deposits. Zawar mines near Udaipur have the oldest zinc smelting facilities in the world.',
                  explanationHi: 'अरावली क्षेत्र सीसा-जस्ता भंडारों से समृद्ध है। उदयपुर के पास जावर खदानों में दुनिया की सबसे पुरानी जस्ता गलाने की सुविधाएं हैं।',
                  difficulty: 'medium',
                  year: 'RAS 2016'
                },
                {
                  id: 'ara-7',
                  text: 'The famous Dilwara Jain Temples are located at?',
                  textHi: 'प्रसिद्ध दिलवाड़ा जैन मंदिर किस स्थान पर स्थित हैं?',
                  options: ['Ranakpur', 'Mount Abu', 'Udaipur', 'Jaisalmer'],
                  optionsHi: ['रणकपुर', 'माउंट आबू', 'उदयपुर', 'जैसलमेर'],
                  correctAnswer: 1,
                  explanation: 'The Dilwara Temples are located in Mount Abu, known for their extraordinary marble carvings. They were built between 11th-13th century.',
                  explanationHi: 'दिलवाड़ा मंदिर माउंट आबू में स्थित हैं, जो अपनी असाधारण संगमरमर की नक्काशी के लिए प्रसिद्ध हैं। इनका निर्माण 11वीं-13वीं शताब्दी के बीच हुआ था।',
                  difficulty: 'easy'
                },
                {
                  id: 'ara-8',
                  text: 'Nakki Lake, a popular tourist destination, is located in?',
                  textHi: 'नक्की झील, एक लोकप्रिय पर्यटन स्थल, कहां स्थित है?',
                  options: ['Udaipur', 'Mount Abu', 'Pushkar', 'Jaipur'],
                  optionsHi: ['उदयपुर', 'माउंट आबू', 'पुष्कर', 'जयपुर'],
                  correctAnswer: 1,
                  explanation: 'Nakki Lake is located in Mount Abu. According to legend, it was dug by gods using their nails (Nakh), hence the name Nakki.',
                  explanationHi: 'नक्की झील माउंट आबू में स्थित है। किंवदंती के अनुसार, इसे देवताओं ने अपने नाखूनों (नख) से खोदा था, इसलिए इसका नाम नक्की पड़ा।',
                  difficulty: 'easy'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'raj-polity',
      name: 'Polity & Governance',
      nameHi: 'राजनीति एवं शासन',
      icon: 'Building',
      color: '#4F46E5',
      topics: [
        {
          id: 'state-legislature',
          name: 'State Legislature',
          nameHi: 'राज्य विधायिका',
          chapters: [
            {
              id: 'vidhan-sabha',
              name: 'Rajasthan Vidhan Sabha',
              nameHi: 'राजस्थान विधान सभा',
              difficulty: 'medium',
              questions: [
                {
                  id: 'pol-1',
                  text: 'How many seats are there in the Rajasthan Vidhan Sabha?',
                  textHi: 'राजस्थान विधान सभा में कितनी सीटें हैं?',
                  options: ['180', '200', '230', '250'],
                  optionsHi: ['180', '200', '230', '250'],
                  correctAnswer: 1,
                  explanation: 'Rajasthan Vidhan Sabha has 200 seats. 25 seats are reserved for SC and 34 for ST candidates.',
                  explanationHi: 'राजस्थान विधान सभा में 200 सीटें हैं। 25 सीटें अनुसूचित जाति और 34 सीटें अनुसूचित जनजाति के उम्मीदवारों के लिए आरक्षित हैं।',
                  difficulty: 'easy',
                  year: 'RAS 2019'
                },
                {
                  id: 'pol-2',
                  text: 'Who was the first Speaker of Rajasthan Vidhan Sabha?',
                  textHi: 'राजस्थान विधान सभा के प्रथम अध्यक्ष कौन थे?',
                  options: ['Narottam Lal Joshi', 'Hari Shankar Bhabhra', 'Ram Niwas Mirdha', 'Tikaram Paliwal'],
                  optionsHi: ['नरोत्तम लाल जोशी', 'हरि शंकर भाभड़ा', 'राम निवास मिर्धा', 'टीकाराम पालीवाल'],
                  correctAnswer: 0,
                  explanation: 'Narottam Lal Joshi was the first Speaker of the Rajasthan Vidhan Sabha (1952-1957).',
                  explanationHi: 'नरोत्तम लाल जोशी राजस्थान विधान सभा के प्रथम अध्यक्ष थे (1952-1957)।',
                  difficulty: 'medium',
                  year: 'RAS 2018'
                },
                {
                  id: 'pol-3',
                  text: 'Who was the first Chief Minister of Rajasthan?',
                  textHi: 'राजस्थान के प्रथम मुख्यमंत्री कौन थे?',
                  options: ['Jai Narayan Vyas', 'Hiralal Shastri', 'Mohan Lal Sukhadia', 'Tikaram Paliwal'],
                  optionsHi: ['जय नारायण व्यास', 'हीरालाल शास्त्री', 'मोहन लाल सुखाड़िया', 'टीकाराम पालीवाल'],
                  correctAnswer: 1,
                  explanation: 'Hiralal Shastri was the first Chief Minister of Rajasthan (1949-1951). He was also known as "Rajasthan Kesari".',
                  explanationHi: 'हीरालाल शास्त्री राजस्थान के प्रथम मुख्यमंत्री थे (1949-1951)। उन्हें "राजस्थान केसरी" के नाम से भी जाना जाता था।',
                  difficulty: 'easy',
                  year: 'RAS 2017'
                },
                {
                  id: 'pol-4',
                  text: 'Who served as Chief Minister of Rajasthan for the longest period?',
                  textHi: 'राजस्थान के मुख्यमंत्री के रूप में सबसे लंबे समय तक किसने कार्य किया?',
                  options: ['Ashok Gehlot', 'Mohan Lal Sukhadia', 'Bhairon Singh Shekhawat', 'Vasundhara Raje'],
                  optionsHi: ['अशोक गहलोत', 'मोहन लाल सुखाड़िया', 'भैरों सिंह शेखावत', 'वसुंधरा राजे'],
                  correctAnswer: 1,
                  explanation: 'Mohan Lal Sukhadia served as CM for about 17 years (1954-1971), the longest tenure in Rajasthan\'s history.',
                  explanationHi: 'मोहन लाल सुखाड़िया ने लगभग 17 वर्षों (1954-1971) तक मुख्यमंत्री के रूप में कार्य किया, जो राजस्थान के इतिहास में सबसे लंबा कार्यकाल है।',
                  difficulty: 'easy',
                  year: 'RAS 2016'
                },
                {
                  id: 'pol-5',
                  text: 'Who was the first Governor of Rajasthan?',
                  textHi: 'राजस्थान के प्रथम राज्यपाल कौन थे?',
                  options: ['Gurmukh Nihal Singh', 'Sardar Singh', 'Sampurnanand', 'Sawai Man Singh II'],
                  optionsHi: ['गुरुमुख निहाल सिंह', 'सरदार सिंह', 'संपूर्णानंद', 'सवाई मान सिंह द्वितीय'],
                  correctAnswer: 0,
                  explanation: 'Gurmukh Nihal Singh was the first Governor of Rajasthan (1 November 1956). Before that, the state had Rajpramukhs.',
                  explanationHi: 'गुरुमुख निहाल सिंह राजस्थान के प्रथम राज्यपाल थे (1 नवंबर 1956)। इससे पहले, राज्य में राजप्रमुख होते थे।',
                  difficulty: 'medium'
                },
                {
                  id: 'pol-6',
                  text: 'When was the first Vidhan Sabha election held in Rajasthan?',
                  textHi: 'राजस्थान में पहला विधान सभा चुनाव कब हुआ था?',
                  options: ['1949', '1951', '1952', '1955'],
                  optionsHi: ['1949', '1951', '1952', '1955'],
                  correctAnswer: 2,
                  explanation: 'The first Vidhan Sabha election in Rajasthan was held in 1952 along with the first general elections of independent India.',
                  explanationHi: 'राजस्थान में पहला विधान सभा चुनाव 1952 में स्वतंत्र भारत के पहले आम चुनावों के साथ हुआ था।',
                  difficulty: 'medium',
                  year: 'RAS 2018'
                },
                {
                  id: 'pol-7',
                  text: 'The minimum age to become a member of Rajasthan Legislative Assembly is?',
                  textHi: 'राजस्थान विधान सभा का सदस्य बनने की न्यूनतम आयु क्या है?',
                  options: ['21 years', '25 years', '30 years', '35 years'],
                  optionsHi: ['21 वर्ष', '25 वर्ष', '30 वर्ष', '35 वर्ष'],
                  correctAnswer: 1,
                  explanation: 'The minimum age to become an MLA in Rajasthan (or any state in India) is 25 years as per Article 173 of the Constitution.',
                  explanationHi: 'संविधान के अनुच्छेद 173 के अनुसार राजस्थान (या भारत के किसी भी राज्य) में विधायक बनने की न्यूनतम आयु 25 वर्ष है।',
                  difficulty: 'easy'
                },
                {
                  id: 'pol-8',
                  text: 'Who was the first woman Chief Minister of Rajasthan?',
                  textHi: 'राजस्थान की प्रथम महिला मुख्यमंत्री कौन थीं?',
                  options: ['Sumitra Singh', 'Vasundhara Raje', 'Kamla Beniwal', 'Pratibha Patil'],
                  optionsHi: ['सुमित्रा सिंह', 'वसुंधरा राजे', 'कमला बेनीवाल', 'प्रतिभा पाटिल'],
                  correctAnswer: 1,
                  explanation: 'Vasundhara Raje became the first woman Chief Minister of Rajasthan in 2003.',
                  explanationHi: 'वसुंधरा राजे 2003 में राजस्थान की प्रथम महिला मुख्यमंत्री बनीं।',
                  difficulty: 'easy',
                  year: 'RAS 2019'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
